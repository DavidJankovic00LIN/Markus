'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function WhyUs() {
  const t = useTranslations('whyUs');

  const reasons = [
    {
      icon: '/assets/m_ic_1.png',
      title: t('tradition.title'),
      description: t('tradition.description'),
    },
    {
      icon: '/assets/m_ic_2.png',
      title: t('certified.title'),
      description: t('certified.description'),
    },
    {
      icon: '/assets/ikonica_3.png',
      title: t('dedication.title'),
      description: t('dedication.description'),
    },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-16 px-[33px] sm:px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8 md:mb-12">
          {t('title')}
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-3 sm:p-4 md:p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 md:mb-6 relative">
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
