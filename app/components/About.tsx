'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('title')}</h2>
        <div className="w-24 h-1 bg-brand mx-auto mb-8"></div>
        <p className="text-lg text-gray-700 leading-relaxed">{t('description')}</p>
      </div>
    </section>
  );
}
