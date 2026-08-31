'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import { useInView } from './useInView';

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function Collaboration() {
  const t = useTranslations('collaboration');
  const rule = useInView(0.5);

  const points = [
    { title: t('points.brand.title'), text: t('points.brand.text') },
    { title: t('points.packaging.title'), text: t('points.packaging.text') },
    { title: t('points.partnership.title'), text: t('points.partnership.text') },
  ];

  return (
    <section
      id="collaboration"
      className="py-6 sm:py-8 md:py-16 px-[33px] sm:px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/pozadina-1.png')" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <Reveal variant="up">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
            {t('title')}
          </h2>
        </Reveal>
        <div
          ref={rule.ref}
          className={`w-20 sm:w-24 h-1 bg-brand mx-auto mb-4 sm:mb-6 md:mb-8 rule-grow ${
            rule.inView ? 'is-visible' : ''
          }`}
        />
        <Reveal variant="up" delay={80}>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </Reveal>

        <div className="mt-6 sm:mt-8 md:mt-10 grid sm:grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {points.map((point, index) => (
            <Reveal key={point.title} variant="flip" delay={index * 140} className="h-full">
              <div className="bg-white/90 p-4 sm:p-5 md:p-6 rounded-lg shadow-md text-left hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1.5 sm:mb-2">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="scale" delay={280}>
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-6 sm:mt-8 md:mt-10 px-6 py-2.5 md:px-8 md:py-3 bg-brand text-white text-sm sm:text-base font-medium rounded-md hover:opacity-90 hover:-translate-y-0.5 transition-all"
          >
            {t('cta')}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
