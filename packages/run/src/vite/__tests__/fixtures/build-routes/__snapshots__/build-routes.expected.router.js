// @marko/run/router
import { NotHandled, NotMatched, createContext } from 'virtual:marko-run/internal';
import { get1 } from 'virtual:marko-run/__marko-run__route._protected._home.js';
import { get2, post2, meta2 } from 'virtual:marko-run/__marko-run__route._protected._home.new.js';
import { get3, put3, post3, delete3 } from 'virtual:marko-run/__marko-run__route._protected._home.notes.$id.js';
import { put4, post4, delete4, meta4 } from 'virtual:marko-run/__marko-run__route._protected._home.notes.$id.comments.js';
import { get5 } from 'virtual:marko-run/__marko-run__route.callback.oauth2.js';
import { get6 } from 'virtual:marko-run/__marko-run__route.my.js';
import { get7 } from 'virtual:marko-run/__marko-run__route.$$match.js';
import page404 from 'virtual:marko-run/__marko-run__special.404.marko?marko-server-entry';
import page500 from 'virtual:marko-run/__marko-run__special.500.marko?marko-server-entry';

const page404ResponseInit = {
  status: 404,
  headers: { "content-type": "text/html;charset=UTF-8" },
};

const page500ResponseInit = {
  status: 500,
  headers: { "content-type": "text/html;charset=UTF-8" },
};

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
			if (len === 1) return { handler: get1, params: {}, meta: {}, path: '/' }; // /
			const i1 = pathname.indexOf('/', 1) + 1;
			if (!i1 || i1 === len) {
				switch (decodeURIComponent(pathname.slice(1, i1 ? -1 : len)).toLowerCase()) {
					case 'new': return { handler: get2, params: {}, meta: meta2, path: '/new' }; // /new
					case 'my': return { handler: get6, params: {}, meta: {}, path: '/my' }; // /my
				}
			} else {
				switch (decodeURIComponent(pathname.slice(1, i1 - 1)).toLowerCase()) {
					case 'notes': {
						const i2 = pathname.indexOf('/', 7) + 1;
						if (!i2 || i2 === len) {
							const s2 = decodeURIComponent(pathname.slice(7, i2 ? -1 : len));
							if (s2) return { handler: get3, params: { id: s2 }, meta: {}, path: '/notes/:id' }; // /notes/$id
						}
					} break;
					case 'callback': {
						const i2 = pathname.indexOf('/', 10) + 1;
						if (!i2 || i2 === len) {
							if (decodeURIComponent(pathname.slice(10, i2 ? -1 : len)).toLowerCase() === 'oauth2') return { handler: get5, params: {}, meta: {}, path: '/callback/oauth2' }; // /callback/oauth2
						}
					} break;
				}
			}
			return { handler: get7, params: { match: pathname.slice(1) }, meta: {}, path: '/:match*' }; // /$$match
		}
		case 'post': {
			const len = pathname.length;
			if (len > 1) {
				const i1 = pathname.indexOf('/', 1) + 1;
				if (!i1 || i1 === len) {
					if (decodeURIComponent(pathname.slice(1, i1 ? -1 : len)).toLowerCase() === 'new') return { handler: post2, params: {}, meta: meta2, path: '/new' }; // /new
				} else {
					if (decodeURIComponent(pathname.slice(1, i1 - 1)).toLowerCase() === 'notes') {
						const i2 = pathname.indexOf('/', 7) + 1;
						if (!i2 || i2 === len) {
							const s2 = decodeURIComponent(pathname.slice(7, i2 ? -1 : len));
							if (s2) return { handler: post3, params: { id: s2 }, meta: {}, path: '/notes/:id' }; // /notes/$id
						} else {
							const s2 = decodeURIComponent(pathname.slice(7, i2 - 1));
							if (s2) {
								const i3 = pathname.indexOf('/', i2) + 1;
								if (!i3 || i3 === len) {
									if (decodeURIComponent(pathname.slice(i2, i3 ? -1 : len)).toLowerCase() === 'comments') return { handler: post4, params: { id: s2 }, meta: meta4, path: '/notes/:id/comments' }; // /notes/$id/comments
								}
							}
						}
					}
				}
			}
			return null;
		}
		case 'put': {
			const len = pathname.length;
			if (len > 1) {
				const i1 = pathname.indexOf('/', 1) + 1;
				if (i1 && i1 !== len) {
					if (decodeURIComponent(pathname.slice(1, i1 - 1)).toLowerCase() === 'notes') {
						const i2 = pathname.indexOf('/', 7) + 1;
						if (!i2 || i2 === len) {
							const s2 = decodeURIComponent(pathname.slice(7, i2 ? -1 : len));
							if (s2) return { handler: put3, params: { id: s2 }, meta: {}, path: '/notes/:id' }; // /notes/$id
						} else {
							const s2 = decodeURIComponent(pathname.slice(7, i2 - 1));
							if (s2) {
								const i3 = pathname.indexOf('/', i2) + 1;
								if (!i3 || i3 === len) {
									if (decodeURIComponent(pathname.slice(i2, i3 ? -1 : len)).toLowerCase() === 'comments') return { handler: put4, params: { id: s2 }, meta: meta4, path: '/notes/:id/comments' }; // /notes/$id/comments
								}
							}
						}
					}
				}
			}
			return null;
		}
		case 'delete': {
			const len = pathname.length;
			if (len > 1) {
				const i1 = pathname.indexOf('/', 1) + 1;
				if (i1 && i1 !== len) {
					if (decodeURIComponent(pathname.slice(1, i1 - 1)).toLowerCase() === 'notes') {
						const i2 = pathname.indexOf('/', 7) + 1;
						if (!i2 || i2 === len) {
							const s2 = decodeURIComponent(pathname.slice(7, i2 ? -1 : len));
							if (s2) return { handler: delete3, params: { id: s2 }, meta: {}, path: '/notes/:id' }; // /notes/$id
						} else {
							const s2 = decodeURIComponent(pathname.slice(7, i2 - 1));
							if (s2) {
								const i3 = pathname.indexOf('/', i2) + 1;
								if (!i3 || i3 === len) {
									if (decodeURIComponent(pathname.slice(i2, i3 ? -1 : len)).toLowerCase() === 'comments') return { handler: delete4, params: { id: s2 }, meta: meta4, path: '/notes/:id/comments' }; // /notes/$id/comments
								}
							}
						}
					}
				}
			}
			return null;
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
    } else {
    }
    if (context.request.headers.get('Accept')?.includes('text/html')) {
      return new Response(page404.stream(buildInput()), page404ResponseInit);
    }
	} catch (error) {
		if (context.request.headers.get('Accept')?.includes('text/html')) {
			return new Response(page500.stream(buildInput({ error })), page500ResponseInit);
		}
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