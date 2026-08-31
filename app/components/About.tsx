'use client';

import { useTranslations } from 'next-intl';
import CountUpText from './CountUpText';
import Reveal from './Reveal';
import { useInView } from './useInView';

export default function About() {
  const t = useTranslations('about');
  const rule = useInView(0.5);

  const stats = [
    { value: t('stats.year.value'), label: t('stats.year.label') },
    { value: t('stats.experience.value'), label: t('stats.experience.label') },
    { value: t('stats.home.value'), label: t('stats.home.label') },
  ];

  return (
    <section id="about" className="py-6 sm:py-8 md:py-16 px-[33px] sm:px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="up">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 text-center mb-2 sm:mb-3 md:mb-4">
            {t('title')}
          </h2>
        </Reveal>
        <div
          ref={rule.ref}
          className={`w-20 sm:w-24 h-1 bg-brand mx-auto mb-6 sm:mb-8 md:mb-10 rule-grow ${
            rule.inView ? 'is-visible' : ''
          }`}
        />

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center">
          <Reveal variant="up" delay={80} className="space-y-4 text-center md:text-left">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              {t('description')}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              {t('mission')}
            </p>
          </Reveal>

          <div className="grid grid-cols-3 md:grid-cols-1 gap-4 sm:gap-5">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} variant="flip" delay={160 + index * 140}>
                <div className="text-center md:text-left">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-brand">
                    <CountUpText value={stat.value} duration={index === 0 ? 1800 : 1400} />
                  </p>
                  <p className="mt-0.5 text-[11px] sm:text-xs md:text-sm text-gray-600">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
