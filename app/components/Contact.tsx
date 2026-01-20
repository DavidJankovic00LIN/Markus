'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, inView };
}

export default function Contact() {
  const t = useTranslations('contact');

  const address = useInView();
  const email = useInView();
  const phone = useInView();

  return (
    <section id="contact" className="py-10 sm:py-12 md:py-20 px-[41px] sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
            {t('title')}
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-brand mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start">
          {/* Text column */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 max-w-xl">
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              {t('description')}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              {/* Dodatni opis po potrebi; ostavljamo jednostavan i čist tekst */}
              {/* Ovo se može kasnije lokalizovati ako bude potrebno */}
              Radujemo se saradnji i stojimo vam na raspolaganju za sva pitanja u vezi sa našim
              proizvodima i uslugama.
            </p>
          </div>

          {/* Icons column */}
          <div className="flex flex-col items-start gap-6 sm:gap-8">
            {/* Address */}
            <div
              ref={address.ref}
              className={`flex items-center gap-4 sm:gap-5 w-full transition-transform duration-700 ease-out transform-gpu ${
                address.inView
                  ? 'opacity-100 rotate-y-0'
                  : 'opacity-0 translate-y-4 rotate-y-90'
              }`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand rounded-full flex items-center justify-center shadow-md backface-hidden flex-shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[11px] sm:text-xs uppercase tracking-wide text-gray-500 mb-0.5">
                  Adresa
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-800 font-medium">
                  {t('address')}
                </p>
              </div>
            </div>

            {/* Email */}
            <div
              ref={email.ref}
              className={`flex items-center gap-4 sm:gap-5 w-full transition-transform duration-700 ease-out delay-100 transform-gpu ${
                email.inView
                  ? 'opacity-100 rotate-y-0'
                  : 'opacity-0 translate-y-4 rotate-y-90'
              }`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand rounded-full flex items-center justify-center shadow-md backface-hidden flex-shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[11px] sm:text-xs uppercase tracking-wide text-gray-500 mb-0.5">
                  Email
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-800 font-medium">
                  {t('email')}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              ref={phone.ref}
              className={`flex items-center gap-4 sm:gap-5 w-full transition-transform duration-700 ease-out delay-200 transform-gpu ${
                phone.inView
                  ? 'opacity-100 rotate-y-0'
                  : 'opacity-0 translate-y-4 rotate-y-90'
              }`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand rounded-full flex items-center justify-center shadow-md backface-hidden flex-shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[11px] sm:text-xs uppercase tracking-wide text-gray-500 mb-0.5">
                  Telefon
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-800 font-medium">
                  {t('phone')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
