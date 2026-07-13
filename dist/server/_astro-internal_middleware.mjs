import { d as defineMiddleware, s as sequence } from './chunks/render-context_BAAugYVY.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_eMWVASuG.mjs';
import 'cookie';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const response = await next();
  const url = new URL(context.request.url);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  if (context.request.method === "GET") {
    if (url.pathname.startsWith("/calculator/") || url.pathname.startsWith("/blog/")) {
      response.headers.set(
        "Cache-Control",
        "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400"
      );
    }
  }
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
