import { useEffect, useRef, useState, useCallback } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  /** Enable bidirectional detection - elements animate out when leaving viewport */
  bidirectional?: boolean;
}

interface UseInViewReturn {
  ref: React.RefObject<HTMLElement | null>;
  isInView: boolean;
  hasAnimated: boolean;
  direction: 'up' | 'down' | null;
}

export function useInView({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = false,
  bidirectional = true,
}: UseInViewOptions = {}): UseInViewReturn {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const lastY = useRef<number | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const currentY = entry.boundingClientRect.y;
        
        // Determine scroll direction
        if (lastY.current !== null) {
          setDirection(currentY < lastY.current ? 'down' : 'up');
        }
        lastY.current = currentY;

        if (entry.isIntersecting) {
          setIsInView(true);
          setHasAnimated(true);
        } else if (bidirectional && !triggerOnce) {
          setIsInView(false);
        }
      });
    },
    [bidirectional, triggerOnce]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, handleIntersection]);

  return { ref, isInView, hasAnimated, direction };
}

// Staggered animation hook for lists
export function useStaggeredInView(
  _itemCount: number,
  options: UseInViewOptions = {}
): UseInViewReturn & { getDelay: (index: number) => number } {
  const result = useInView(options);
  
  const getDelay = useCallback((index: number) => {
    return index * 0.08; // 80ms stagger between items
  }, []);

  return { ...result, getDelay };
}
