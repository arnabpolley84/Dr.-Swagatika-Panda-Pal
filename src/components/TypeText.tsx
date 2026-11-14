import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

export const SectionRevealContext = createContext<boolean>(true);

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

export interface TypeTextProps {
  text: string;
  delay?: number;
  speedMs?: number;
  active?: boolean;
  showCaret?: boolean;
  className?: string;
}

export const TypeText: React.FC<TypeTextProps> = ({
  text,
  delay = 0,
  speedMs,
  active,
  showCaret = false,
  className = '',
}) => {
  const sectionVisible = useContext(SectionRevealContext);
  const shouldStart = active !== undefined ? active : sectionVisible;
  const reducedMotion = useReducedMotion();

  const [count, setCount] = useState<number>(() => (reducedMotion ? text.length : 0));
  const hasCompletedRef = useRef<boolean>(false);
  const prevTextRef = useRef<string>(text);

  useEffect(() => {
    if (prevTextRef.current !== text) {
      prevTextRef.current = text;
      hasCompletedRef.current = false;
      setCount(reducedMotion ? text.length : 0);
    }
  }, [text, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      setCount(text.length);
      hasCompletedRef.current = true;
      return;
    }

    if (!shouldStart || hasCompletedRef.current) return;

    // Scale interval naturally so headings have crisp cadence and paragraphs finish comfortably
    const len = text.length;
    const interval =
      speedMs ??
      (len <= 24 ? 22 : len <= 70 ? 14 : Math.max(6, Math.min(12, Math.round(1350 / len))));

    let rafId = 0;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime - delay;

      if (elapsed <= 0) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      const nextCount = Math.min(len, Math.floor(elapsed / interval) + 1);
      setCount(nextCount);

      if (nextCount < len) {
        rafId = requestAnimationFrame(tick);
      } else {
        hasCompletedRef.current = true;
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [shouldStart, text, delay, speedMs, reducedMotion]);

  const visiblePart = text.slice(0, count);
  const hiddenPart = text.slice(count);
  const isTyping = shouldStart && count > 0 && count < text.length && !reducedMotion;

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{visiblePart}</span>
      {showCaret && isTyping ? <span aria-hidden="true" className="type-caret" /> : null}
      {hiddenPart ? (
        <span aria-hidden="true" className="opacity-0 select-none pointer-events-none">
          {hiddenPart}
        </span>
      ) : null}
    </span>
  );
};
