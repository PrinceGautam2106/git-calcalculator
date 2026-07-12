import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const url = new URL(context.request.url);

  // 1. Security Headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // 2. Cache-Control headers for Edge caching (24 hours at the CDN edge)
  // Only apply to GET requests for calculators and blog posts
  if (context.request.method === 'GET') {
    if (url.pathname.startsWith('/calculator/') || url.pathname.startsWith('/blog/')) {
      response.headers.set(
        'Cache-Control',
        'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400'
      );
    }
  }

  return response;
});
