'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ProductModal from './ProductModal';
import Reveal from './Reveal';
import { useInView } from './useInView';

export default function Products() {
  const t = useTranslations('products');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const rule = useInView(0.5);

  const products = [
    {
      key: 'babyFit',
      image: '/assets/baby fit.jpg',
      category: 'baby',
    },
    {
      key: 'perfecto',
      image: '/assets/perfecto fit.jpg',
      category: 'cleaning',
    },
    {
      key: 'universal',
      image: '/assets/universal.jpg',
      category: 'hygiene',
    },
    {
      key: 'disinfect',
      image: '/assets/Disinfect.jpg',
      category: 'hygiene',
    },
    {
      key: 'wet',
      image: '/assets/wet.jpg',
      category: 'hygiene',
    },
    {
      key: 'eko',
      image: '/assets/eko.jpg',
      category: 'baby',
    },
  ];

  return (
    <section id="products" className="py-6 sm:py-8 md:py-16 px-[33px] sm:px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="up">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 text-center mb-2 sm:mb-3 md:mb-4">
            {t('title')}
          </h2>
        </Reveal>
        <div
          ref={rule.ref}
          className={`w-20 sm:w-24 h-1 bg-brand mx-auto mb-4 sm:mb-6 md:mb-8 rule-grow ${
            rule.inView ? 'is-visible' : ''
          }`}
        />
        <Reveal variant="up" delay={80}>
          <p className="text-center text-xs sm:text-sm md:text-base text-gray-700 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto px-2">
            {t('description')}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
          {products.map((product, index) => (
            <Reveal key={product.key} variant="up" delay={index * 90} className="h-full">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                <div className="relative h-40 sm:h-48 md:h-64 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={t(`${product.key}.title`)}
                    fill
                    className="object-contain p-2 sm:p-4"
                  />
                </div>
                <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow">
                  <span className="self-start mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-medium tracking-wide uppercase text-brand border border-brand/40 rounded-full px-2 py-0.5">
                    {t(`categories.${product.category}`)}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                    {t(`${product.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-xs md:text-sm line-clamp-3 mb-3 sm:mb-4 flex-grow">
                    {t(`${product.key}.description`)}
                  </p>
                  <button
                    onClick={() => setSelectedProduct(product.key)}
                    className="mt-auto text-xs sm:text-sm md:text-base text-brand font-medium hover:underline transition-colors text-left"
                  >
                    {t('readMore')}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {products.map((product) => (
          <ProductModal
            key={product.key}
            productKey={product.key}
            isOpen={selectedProduct === product.key}
            onClose={() => setSelectedProduct(null)}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}
