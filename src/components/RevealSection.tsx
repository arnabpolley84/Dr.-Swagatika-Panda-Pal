import React, { useEffect, useRef, useState } from 'react';
import { SectionRevealContext, useReducedMotion } from './TypeText';

interface RevealSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  ariaLabelledBy?: string;
  immediate?: boolean;
  as?: 'section' | 'header' | 'footer' | 'div';
}

export const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  id,
  className = '',
  ariaLabelledBy,
  immediate = false,
  as = 'section',
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState<boolean>(() => immediate || reducedMotion);

  useEffect(() => {
    if (immediate || reducedMotion || visible) {
      if (!visible) setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const checkRect = () => {
      const rect = node.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight || 900;
      if (rect.top <= viewportH + 100 && rect.bottom >= -100) {
        setVisible(true);
        return true;
      }
      return false;
    };

    // Immediate synchronous check in case element is already in or near viewport
    if (checkRect()) return;

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight + 100) {
              setVisible(true);
              observer?.disconnect();
              break;
            }
          }
        },
        {
          threshold: 0,
          rootMargin: '120px 0px 120px 0px',
        }
      );
      observer.observe(node);
    }

    const onScroll = () => {
      if (checkRect()) {
        window.removeEventListener('scroll', onScroll);
        observer?.disconnect();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [immediate, reducedMotion, visible]);

  const Component = as as React.ElementType;

  return (
    <SectionRevealContext.Provider value={visible}>
      <Component
        ref={ref}
        id={id}
        aria-labelledby={ariaLabelledBy}
        className={`${className} ${visible ? 'is-visible' : ''}`}
      >
        {children}
      </Component>
    </SectionRevealContext.Provider>
  );
};
