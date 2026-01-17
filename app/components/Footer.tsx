'use client';

import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Markus Co. {t('rights')}
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t('privacy')}
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
