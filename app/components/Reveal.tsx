'use client';

import { useInView } from './useInView';

type Variant = 'up' | 'flip' | 'scale';

export default function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
}) {
  const { ref, inView } = useInView(0.18);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
