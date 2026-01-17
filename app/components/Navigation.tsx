'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('nav');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Logo Section - 100px height on desktop, smaller on mobile */}
      <div className="h-[70px] sm:h-[80px] md:h-[100px] flex items-center justify-center bg-white px-1 sm:px-2 md:px-4 relative">
        <Image
          src="/assets/markus_logo.png"
          alt="Markus Logo"
          width={200}
          height={100}
          className="h-[50px] sm:h-[60px] md:h-full w-auto object-contain"
          priority
        />
        <div className="absolute right-1 sm:right-2 md:right-4">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Banner Section - 60px height on desktop, scrollable on mobile */}
      <div className="h-[44px] sm:h-[50px] md:h-[60px] bg-brand flex items-center justify-center gap-1 sm:gap-2 md:gap-8 px-1 sm:px-2 md:px-4 overflow-x-auto">
        <button
          onClick={() => scrollToSection('home')}
          className="text-white hover:opacity-80 transition-colors font-medium text-xs sm:text-sm md:text-base whitespace-nowrap px-0.5 sm:px-1 md:px-2"
        >
          {t('home')}
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="text-white hover:opacity-80 transition-colors font-medium text-xs sm:text-sm md:text-base whitespace-nowrap px-0.5 sm:px-1 md:px-2"
        >
          {t('about')}
        </button>
        <button
          onClick={() => scrollToSection('products')}
          className="text-white hover:opacity-80 transition-colors font-medium text-xs sm:text-sm md:text-base whitespace-nowrap px-0.5 sm:px-1 md:px-2"
        >
          {t('products')}
        </button>
        <button
          onClick={() => scrollToSection('collaboration')}
          className="text-white hover:opacity-80 transition-colors font-medium text-xs sm:text-sm md:text-base whitespace-nowrap px-0.5 sm:px-1 md:px-2"
        >
          {t('collaboration')}
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-white hover:opacity-80 transition-colors font-medium text-xs sm:text-sm md:text-base whitespace-nowrap px-0.5 sm:px-1 md:px-2"
        >
          {t('contact')}
        </button>
      </div>
    </nav>
  );
}
