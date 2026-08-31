'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('nav');
  const tContact = useTranslations('contact');
  const phone = tContact('phone');
  const phoneHref = `tel:${phone.replace(/\s/g, '')}`;

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;

      // Ne reaguje na vrlo male pomeraje
      if (Math.abs(delta) < 5) return;

      // Lagani prag da header ostane vidljiv na samom vrhu
      if (currentY < 80) {
        setHidden(false);
        setLastScrollY(currentY);
        return;
      }

      if (delta > 0) {
        // Skrol na dole
        setHidden(true);
      } else {
        // Skrol na gore
        setHidden(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ease-out border-0 outline-none ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
    >
      {/* Logo Section - 100px height on desktop, smaller on mobile */}
      <div className="h-[70px] sm:h-[80px] md:h-[100px] flex items-center justify-center bg-white px-1 sm:px-2 md:px-4 relative border-0">
        <a
          href={phoneHref}
          className="hidden md:flex absolute left-4 items-center gap-2 text-sm text-gray-700 hover:text-brand transition-colors"
        >
          <svg
            className="w-4 h-4 text-brand"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          {phone}
        </a>
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
      <div className="h-[44px] sm:h-[50px] md:h-[60px] bg-brand flex items-center justify-center gap-1 sm:gap-2 md:gap-8 px-1 sm:px-2 md:px-4 overflow-x-auto border-0 border-b-0" style={{ borderBottom: 'none', boxShadow: 'none' }}>
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
