'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '../../i18n/routing';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 shadow-[0_-1px_0_rgba(0,0,0,0.04)] px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
          {/* Brand / Logo */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative h-12 w-28 sm:h-14 sm:w-32 md:h-16 md:w-40">
              <Image
                src="/assets/markus_logo.png"
                alt="Markus Co logo"
                fill
                sizes="160px"
                className="object-contain"
                priority
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base max-w-xs text-gray-700">
              {t('tagline')}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 md:gap-8">
            <div className="flex flex-col gap-1 sm:gap-1.5">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-600">
                {t('legal')}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <Link
                  href="/privacy"
                  className="text-xs sm:text-sm md:text-base text-gray-900 hover:text-brand transition-colors"
                >
                  {t('privacy')}
                </Link>
                <span className="hidden sm:inline text-gray-400">/</span>
                <Link
                  href="/terms"
                  className="text-xs sm:text-sm md:text-base text-gray-900 hover:text-brand transition-colors"
                >
                  {t('terms')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-200 pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()} Markus Co. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
