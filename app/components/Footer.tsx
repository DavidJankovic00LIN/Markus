'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '../../i18n/routing';

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tContact = useTranslations('contact');
  const email = tContact('email');
  const phone = tContact('phone');
  const phoneHref = `tel:${phone.replace(/\s/g, '')}`;

  const navItems = [
    { id: 'about', label: tNav('about') },
    { id: 'products', label: tNav('products') },
    { id: 'collaboration', label: tNav('collaboration') },
    { id: 'contact', label: tNav('contact') },
  ];

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 shadow-[0_-1px_0_rgba(0,0,0,0.04)] px-[41px] sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="relative h-12 w-28 sm:h-14 sm:w-32 md:h-16 md:w-40">
              <Image
                src="/assets/markus_logo.png"
                alt="Markus Co logo"
                fill
                sizes="160px"
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base max-w-xs text-gray-700">
              {t('tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-600">
              {t('navTitle')}
            </span>
            <ul className="mt-2 sm:mt-3 flex flex-col gap-1.5 sm:gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-xs sm:text-sm md:text-base text-gray-900 hover:text-brand transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-600">
              {t('contactTitle')}
            </span>
            <ul className="mt-2 sm:mt-3 flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-900">
              <li>{tContact('address')}</li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-brand transition-colors"
                >
                  {email}
                </a>
              </li>
              <li>
                <a href={phoneHref} className="hover:text-brand transition-colors">
                  {phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-200 pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()} Markus Co. {t('rights')}
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/privacy"
              className="text-[10px] sm:text-xs md:text-sm text-gray-900 hover:text-brand transition-colors"
            >
              {t('privacy')}
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/terms"
              className="text-[10px] sm:text-xs md:text-sm text-gray-900 hover:text-brand transition-colors"
            >
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
