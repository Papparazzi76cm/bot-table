import { memo } from "react";

interface WaveTransitionProps {
  from?: 'primary' | 'background' | 'muted' | 'card';
  to?: 'primary' | 'background' | 'muted' | 'card';
  variant?: 'wave' | 'curve' | 'slope';
  flip?: boolean;
}

const WaveTransition = memo(({ 
  from = 'background', 
  to = 'muted',
  variant = 'wave',
  flip = false
}: WaveTransitionProps) => {
  const colorMap = {
    primary: 'hsl(var(--primary))',
    background: 'hsl(var(--background))',
    muted: 'hsl(var(--muted))',
    card: 'hsl(var(--card))'
  };

  const paths = {
    wave: "M0,64 C320,128 640,0 960,64 C1280,128 1440,32 1440,32 L1440,160 L0,160 Z",
    curve: "M0,128 Q720,0 1440,128 L1440,160 L0,160 Z",
    slope: "M0,160 L0,64 Q360,128 720,96 T1440,64 L1440,160 Z"
  };

  return (
    <div 
      className={`relative w-full overflow-hidden ${flip ? 'rotate-180' : ''}`}
      style={{ 
        backgroundColor: colorMap[from],
        marginTop: '-1px',
        marginBottom: '-1px'
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24 lg:h-32 block"
        style={{ display: 'block' }}
      >
        <path
          d={paths[variant]}
          fill={colorMap[to]}
        />
      </svg>
    </div>
  );
});

WaveTransition.displayName = "WaveTransition";

export default WaveTransition;
