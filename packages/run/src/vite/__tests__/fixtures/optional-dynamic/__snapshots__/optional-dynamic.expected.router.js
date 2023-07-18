// @marko/run/router
import { NotHandled, NotMatched, createContext } from 'virtual:marko-run/internal';
import { get1 } from 'virtual:marko-run/__marko-run__route.$foo.js';
import { get2 } from 'virtual:marko-run/__marko-run__route.$foo.$bar.js';
import { get3 } from 'virtual:marko-run/__marko-run__route.$foo.$$rest.js';
import { get4 } from 'virtual:marko-run/__marko-run__route.$$rest.js';

globalThis.__marko_run__ = { match, fetch, invoke };
    
export function match(method, pathname) {
	if (!pathname) {
    pathname = '/';
  } else if (pathname.charAt(0) !== '/') {
    pathname = '/' + pathname;
  }
	switch (method.toLowerCase()) {
		case 'get': {
			const len = pathname.length;
			if (len > 1) {
				const i1 = pathname.indexOf('/', 1) + 1;
				if (!i1 || i1 === len) {
					const s1 = decodeURIComponent(pathname.slice(1, i1 ? -1 : len));
					if (s1) return { handler: get1, params: { foo: s1 }, meta: {}, path: '/:foo' }; // /$foo
				} else {
					const s1 = decodeURIComponent(pathname.slice(1, i1 - 1));
					if (s1) {
						const i2 = pathname.indexOf('/', i1) + 1;
						if (!i2 || i2 === len) {
							const s2 = decodeURIComponent(pathname.slice(i1, i2 ? -1 : len));
							if (s2) return { handler: get2, params: { foo: s1, bar: s2 }, meta: {}, path: '/:foo/:bar' }; // /$foo/$bar
						}
						return { handler: get3, params: { foo: s1, rest: pathname.slice(i1) }, meta: {}, path: '/:foo/:rest*' }; // /$foo/$$rest
					}
				}
			}
			return { handler: get4, params: { rest: pathname.slice(1) }, meta: {}, path: '/:rest*' }; // /$$rest
		}
	}
	return null;
}

export async function invoke(route, request, platform, url) {
  const [context, buildInput] = createContext(route, request, platform, url);
	try {
		if (route) {
      try {
				const response = await route.handler(context, buildInput);
				if (response) return response;
			} catch (error) {
				if (error === NotHandled) {
					return;
				} else if (error !== NotMatched) {
					throw error;
				}
			}
		}
	} catch (error) {
		throw error;
	}
}

export async function fetch(request, platform) {
  try {
    const url = new URL(request.url);
    let { pathname } = url;
    if (pathname !== '/' && pathname.endsWith('/')) {
      url.pathname = pathname.slice(0, -1);
      return Response.redirect(url);
    }   

    const route = match(request.method, pathname);
    return await invoke(route, request, platform, url);
  } catch (error) {
    const body = import.meta.env.DEV
      ? error.stack || error.message || "Internal Server Error"
      : null;
    return new Response(body, {
      status: 500
    });
  }
}