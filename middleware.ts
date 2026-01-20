import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing, {
  // Isključi automatsko biranje jezika po browseru –
  // koristimo uvek defaultLocale ('sr') osim kada je eksplicitno /en
  localeDetection: false
});

export const config = {
  matcher: ['/', '/(sr|en)/:path*']
};
