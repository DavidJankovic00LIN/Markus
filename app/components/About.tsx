'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-6 sm:py-8 md:py-16 px-2 sm:px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">{t('title')}</h2>
        <div className="w-20 sm:w-24 h-1 bg-brand mx-auto mb-4 sm:mb-6 md:mb-8"></div>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2">{t('description')}</p>
      </div>
    </section>
  );
}
