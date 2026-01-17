'use client';

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-6 sm:py-8 md:py-16 px-2 sm:px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
          {t('title')}
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-brand mx-auto mb-3 sm:mb-4 md:mb-6"></div>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-6 sm:mb-8 md:mb-12 px-2">
          {t('description')}
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Address */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">{t('address')}</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">{t('email')}</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">{t('phone')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
