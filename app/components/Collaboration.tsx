'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Collaboration() {
  const t = useTranslations('collaboration');

  return (
    <section id="collaboration" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
          {t('title')}
        </h2>
        <div className="w-24 h-1 bg-brand mx-auto mb-12"></div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side - Text */}
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Right side - Icon */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 relative bg-gray-100 rounded-lg p-8">
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
