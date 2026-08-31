'use client';

import { useEffect, useMemo, useState } from 'react';
import { useInView } from './useInView';

function parseNumeric(value: string) {
  const match = value.match(/^(.*?)(\d+)(.*)$/);
  if (!match) return null;
  return { prefix: match[1], end: Number(match[2]), suffix: match[3] };
}

export default function CountUpText({
  value,
  className = '',
  duration = 1500,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const parsed = useMemo(() => parseNumeric(value), [value]);
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!parsed || !inView) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setCount(parsed.end);
      return;
    }

    const target = parsed.end;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, parsed, duration]);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {inView ? count : 0}
      {parsed.suffix}
    </span>
  );
}
