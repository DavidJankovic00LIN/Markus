'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Collaboration() {
  const t = useTranslations('collaboration');

  return (
    <section id="collaboration" className="py-6 sm:py-8 md:py-16 px-2 sm:px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 text-center mb-2 sm:mb-3 md:mb-4">
          {t('title')}
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-brand mx-auto mb-6 sm:mb-8 md:mb-12"></div>

        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
          {/* Left side - Text */}
          <div className="md:w-1/2 order-2 md:order-1">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2">
              {t('description')}
            </p>
          </div>

          {/* Right side - Icon */}
          <div className="md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 relative bg-gray-100 rounded-lg p-3 sm:p-4 md:p-8">
              <Image
                src="/assets/rukovanje.png"
                alt="Handshake"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
