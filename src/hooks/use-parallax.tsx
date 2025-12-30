import { useEffect, useState, useRef, RefObject, useCallback } from "react";

interface UseParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
}

export const useParallax = <T extends HTMLElement>(options: UseParallaxOptions = {}): {
  ref: RefObject<T>;
  offset: number;
} => {
  const { speed = 0.5, direction = "up" } = options;
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);
  const rafId = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafId.current) return;

    rafId.current = requestAnimationFrame(() => {
      if (!ref.current) {
        rafId.current = null;
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distance = elementCenter - viewportCenter;

      const multiplier = direction === "up" ? -1 : 1;
      setOffset(distance * speed * multiplier * 0.1);
      rafId.current = null;
    });
  }, [speed, direction]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  return { ref, offset };
};

export default useParallax;
