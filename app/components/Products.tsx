'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ProductModal from './ProductModal';

export default function Products() {
  const t = useTranslations('products');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      key: 'babyFit',
      image: '/assets/baby fit.jpg',
    },
    {
      key: 'perfecto',
      image: '/assets/perfecto fit.jpg',
    },
    {
      key: 'universal',
      image: '/assets/universal.jpg',
    },
    {
      key: 'disinfect',
      image: '/assets/Disinfect.jpg',
    },
    {
      key: 'wet',
      image: '/assets/wet.jpg',
    },
    {
      key: 'eko',
      image: '/assets/eko.jpg',
    },
  ];

  return (
    <section id="products" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
          {t('title')}
        </h2>
        <div className="w-24 h-1 bg-brand mx-auto mb-8"></div>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          {t('description')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.key}
              onClick={() => setSelectedProduct(product.key)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow transform hover:-translate-y-1"
            >
              <div className="relative h-64 bg-gray-100">
                <Image
                  src={product.image}
                  alt={t(`${product.key}.title`)}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t(`${product.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {t(`${product.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Render modals */}
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
