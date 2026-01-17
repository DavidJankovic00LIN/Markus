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
      {/* Logo Section - 100px height */}
      <div className="h-[100px] flex items-center justify-center bg-white px-4">
        <Image
          src="/assets/markus_logo.png"
          alt="Markus Logo"
          width={200}
          height={100}
          className="h-full w-auto object-contain"
          priority
        />
        <div className="absolute right-4">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Banner Section - 60px height */}
      <div className="h-[60px] bg-brand flex items-center justify-center gap-8 px-4">
        <button
          onClick={() => scrollToSection('home')}
          className="text-white hover:opacity-80 transition-colors font-medium"
        >
          {t('home')}
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="text-white hover:opacity-80 transition-colors font-medium"
        >
          {t('about')}
        </button>
        <button
          onClick={() => scrollToSection('products')}
          className="text-white hover:opacity-80 transition-colors font-medium"
        >
          {t('products')}
        </button>
        <button
          onClick={() => scrollToSection('collaboration')}
          className="text-white hover:opacity-80 transition-colors font-medium"
        >
          {t('collaboration')}
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-white hover:opacity-80 transition-colors font-medium"
        >
          {t('contact')}
        </button>
      </div>
    </nav>
  );
}
