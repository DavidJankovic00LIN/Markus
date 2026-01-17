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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left side - Product Image */}
          <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-50">
            <div className="relative w-full max-w-sm aspect-square">
              <Image
                src={image}
                alt={t('title')}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side - Product Information */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('title')}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('description')}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-6">
              {productKey === 'babyFit' && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">☀️</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.daily')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🪶</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.soft')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👶</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.baby')}</span>
                  </div>
                </>
              )}
              {productKey === 'perfecto' && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🧹</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.easy')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.shine')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.universal')}</span>
                  </div>
                </>
              )}
              {productKey === 'universal' && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.family')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.universal')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📅</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.daily')}</span>
                  </div>
                </>
              )}
              {productKey === 'disinfect' && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🦠</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.antibacterial')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.multipurpose')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👛</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.pocket')}</span>
                  </div>
                </>
              )}
              {productKey === 'wet' && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📅</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.daily')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.multipurpose')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👛</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.pocket')}</span>
                  </div>
                </>
              )}
              {productKey === 'eko' && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌿</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.natural')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👶</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.baby')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🪶</span>
                    </div>
                    <span className="text-sm text-gray-700">{t('features.soft')}</span>
                  </div>
                </>
              )}
            </div>

            {/* Packaging */}
            <p className="text-gray-600 mb-6">{t('packaging')}</p>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-full bg-brand text-white py-3 rounded-lg hover:opacity-90 transition-colors font-medium"
            >
              {tProducts('close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
