import { ReactNode, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxBackgroundProps {
  children: ReactNode;
  className?: string;
  backgroundSpeed?: number;
  contentSpeed?: number;
}

const ParallaxBackground = ({
  children,
  className,
  backgroundSpeed = 0.2,
  contentSpeed = 0.4,
}: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [bgOffset, setBgOffset] = useState(0);
  const [contentOffset, setContentOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
      
      setBgOffset(scrollProgress * 100 * backgroundSpeed);
      setContentOffset(scrollProgress * 50 * contentSpeed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [backgroundSpeed, contentSpeed]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {/* Parallax background layer */}
      <div
        className="absolute inset-0 -z-10 will-change-transform"
        style={{
          transform: `translateY(${bgOffset}px) scale(1.1)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      
      {/* Content layer with subtle parallax */}
      <div
        className="relative z-10 will-change-transform"
        style={{
          transform: `translateY(${-contentOffset * 0.2}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
