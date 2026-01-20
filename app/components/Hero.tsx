'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="home"
      className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat border-0"
      style={{
        backgroundImage: "url('/assets/paralax_1.jpg')",
        border: 'none',
        outline: 'none',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-[33px] sm:px-4 max-w-4xl mx-auto py-6 sm:py-8 md:py-0">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 font-cursive">
          {t('title')}
        </h1>
        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl px-2 font-cursive">
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
}
