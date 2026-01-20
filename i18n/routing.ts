import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['sr', 'en'],
  defaultLocale: 'sr',
  // Isključi automatsko biranje jezika po browseru –
  // koristimo uvek defaultLocale ('sr') osim kada je eksplicitno /en
  localeDetection: false
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
