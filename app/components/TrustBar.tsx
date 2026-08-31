'use client';

import { useTranslations } from 'next-intl';
import CountUpText from './CountUpText';
import Reveal from './Reveal';

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function TrustBar() {
  const t = useTranslations('trustBar');

  const items = [
    { value: t('since.value'), label: t('since.label') },
    { value: t('location.value'), label: t('location.label') },
    { value: t('brands.value'), label: t('brands.label') },
    { value: t('contract.value'), label: t('contract.label') },
  ];

  return (
    <section className="bg-cream px-[33px] sm:px-4 py-8 sm:py-10 md:py-12 border-y border-brand/25">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {items.map((item, index) => (
            <Reveal key={item.value} variant="flip" delay={index * 120}>
              <div className="text-center">
                <p className="text-sm sm:text-base md:text-lg font-bold text-[#5c4a2e]">
                  <CountUpText value={item.value} />
                </p>
                <p className="mt-1 text-[11px] sm:text-xs md:text-sm text-[#7a6e5c]">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={400} className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => scrollToSection('products')}
            className="w-full sm:w-auto px-6 py-2.5 md:px-8 md:py-3 bg-brand text-white text-sm sm:text-base font-medium rounded-md hover:opacity-90 hover:-translate-y-0.5 transition-all"
          >
            {t('ctaProducts')}
          </button>
          <button
            onClick={() => scrollToSection('collaboration')}
            className="w-full sm:w-auto px-6 py-2.5 md:px-8 md:py-3 bg-white text-[#5c4a2e] text-sm sm:text-base font-medium rounded-md border border-brand hover:bg-brand/15 hover:-translate-y-0.5 transition-all"
          >
            {t('ctaPartner')}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
