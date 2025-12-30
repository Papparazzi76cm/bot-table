import { ReactNode, memo } from "react";
import { cn } from "@/lib/utils";
import { useParallax } from "@/hooks/use-parallax";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

const ParallaxSection = memo(({
  children,
  className,
  speed = 0.3,
  direction = "up",
}: ParallaxSectionProps) => {
  const { ref, offset } = useParallax<HTMLDivElement>({ speed, direction });

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      style={{
        transform: `translate3d(0, ${offset}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
});

ParallaxSection.displayName = "ParallaxSection";

export default ParallaxSection;
