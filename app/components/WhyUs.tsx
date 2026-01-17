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
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
