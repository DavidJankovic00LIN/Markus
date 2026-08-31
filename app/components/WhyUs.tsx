'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Reveal from './Reveal';
import { useInView } from './useInView';

export default function WhyUs() {
  const t = useTranslations('whyUs');
  const rule = useInView(0.5);

  const reasons = [
    {
      icon: '/assets/ikonica_vreme.png',
      title: t('tradition.title'),
      description: t('tradition.description'),
      details: t('tradition.details'),
    },
    {
      icon: '/assets/ikonica_pouzdanost.png',
      title: t('certified.title'),
      description: t('certified.description'),
      details: t('certified.details'),
    },
    {
      icon: '/assets/ikonica_l.png',
      title: t('dedication.title'),
      description: t('dedication.description'),
      details: t('dedication.details'),
    },
  ];

  return (
    <section
      className="py-6 sm:py-8 md:py-16 px-[33px] sm:px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/pozadina-2.png')" }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal variant="up">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 text-center mb-2 sm:mb-3 md:mb-4">
            {t('title')}
          </h2>
        </Reveal>
        <div
          ref={rule.ref}
          className={`w-20 sm:w-24 h-1 bg-brand mx-auto mb-6 sm:mb-8 md:mb-12 rule-grow ${
            rule.inView ? 'is-visible' : ''
          }`}
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} variant="flip" delay={index * 150} className="h-full">
              <div className="bg-white p-3 sm:p-4 md:p-8 rounded-lg shadow-md text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
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
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3">
                  {reason.description}
                </p>
                <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 leading-relaxed">
                  {reason.details}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
