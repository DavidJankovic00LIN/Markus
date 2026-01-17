'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../../i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-1 sm:gap-2 items-center">
      <button
        onClick={() => switchLanguage('sr')}
        className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded text-xs sm:text-sm transition-colors ${
          locale === 'sr'
            ? 'bg-brand text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        SR
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded text-xs sm:text-sm transition-colors ${
          locale === 'en'
            ? 'bg-brand text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        EN
      </button>
    </div>
  );
}
