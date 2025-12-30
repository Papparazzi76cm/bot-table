import { useEffect, useState, useRef, RefObject } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distance = elementCenter - viewportCenter;
      
      const multiplier = direction === "up" ? -1 : 1;
      setOffset(distance * speed * multiplier * 0.1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return { ref, offset };
};

export default useParallax;
