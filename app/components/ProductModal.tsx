'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface ProductModalProps {
  productKey: string;
  isOpen: boolean;
  onClose: () => void;
  image: string;
}

export default function ProductModal({
  productKey,
  isOpen,
  onClose,
  image,
}: ProductModalProps) {
  const t = useTranslations(`products.${productKey}`);
  const tProducts = useTranslations('products');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-1 sm:p-2 md:p-4" onClick={onClose}>
      <div
        className="bg-white rounded-lg max-w-5xl w-full max-h-[98vh] sm:max-h-[95vh] md:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left side - Product Image */}
          <div className="md:w-1/2 p-3 sm:p-4 md:p-6 flex items-center justify-center bg-gray-50">
            <div className="relative w-full max-w-[240px] sm:max-w-xs md:max-w-sm aspect-square">
              <Image
                src={image}
                alt={t('title')}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side - Product Information */}
          <div className="md:w-1/2 p-3 sm:p-4 md:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
              {t('title')}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
              {t('description')}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-4 mb-3 sm:mb-4 md:mb-6">
              {productKey === 'babyFit' && (
                <>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/beba_3.png" alt={t('features.daily')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.daily')}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/pero.png" alt={t('features.soft')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.soft')}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/sunce.png" alt={t('features.baby')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.baby')}</span>
                  </div>
                </>
              )}
              {productKey === 'perfecto' && (
                <>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/lako_ciscenje.png" alt={t('features.easy')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.easy')}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/sjaj.png" alt={t('features.shine')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.shine')}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/univerzal.png" alt={t('features.universal')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.universal')}</span>
                  </div>
                </>
              )}
              {productKey === 'universal' && (
                <>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/family.png" alt={t('features.family')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.family')}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/univerzal.png" alt={t('features.universal')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.universal')}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/m_ic_1.png" alt={t('features.daily')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.daily')}</span>
                  </div>
                </>
              )}
              {productKey === 'disinfect' && (
                <>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/antibak.png" alt={t('features.antibacterial')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.antibacterial')}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/dzepne.png" alt={t('features.pocket')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.pocket')}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/univerzal.png" alt={t('features.multipurpose')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.multipurpose')}</span>
                  </div>
                </>
              )}
              {productKey === 'wet' && (
                <>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/family.png" alt={t('features.daily')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.daily')}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/univerzal.png" alt={t('features.multipurpose')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.multipurpose')}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/m_ic_1.png" alt={t('features.pocket')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.pocket')}</span>
                  </div>
                </>
              )}
              {productKey === 'eko' && (
                <>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/beba_3.png" alt={t('features.natural')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.natural')}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/pero.png" alt={t('features.baby')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.baby')}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center p-1 md:p-2">
                      <Image src="/assets/prirodno.png" alt={t('features.soft')} width={24} height={24} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{t('features.soft')}</span>
                  </div>
                </>
              )}
            </div>

            {/* Packaging */}
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6">{t('packaging')}</p>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-full bg-brand text-white py-1.5 sm:py-2 md:py-3 rounded-lg hover:opacity-90 transition-colors font-medium text-xs sm:text-sm md:text-base"
            >
              {tProducts('close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
