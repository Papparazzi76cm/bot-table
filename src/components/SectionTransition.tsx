interface SectionTransitionProps {
  from?: 'primary' | 'background' | 'muted' | 'card';
  to?: 'primary' | 'background' | 'muted' | 'card';
  height?: 'sm' | 'md' | 'lg';
  flip?: boolean;
}

const SectionTransition = ({ 
  from = 'background', 
  to = 'muted', 
  height = 'md',
  flip = false 
}: SectionTransitionProps) => {
  const heightClasses = {
    sm: 'h-16',
    md: 'h-24',
    lg: 'h-32'
  };

  const colorMap = {
    primary: 'hsl(var(--primary))',
    background: 'hsl(var(--background))',
    muted: 'hsl(var(--muted))',
    card: 'hsl(var(--card))'
  };

  const gradientStyle = {
    background: `linear-gradient(to bottom, ${colorMap[from]}, ${colorMap[to]})`
  };

  return (
    <div 
      className={`w-full ${heightClasses[height]} ${flip ? 'rotate-180' : ''}`}
      style={gradientStyle}
      aria-hidden="true"
    />
  );
};

export default SectionTransition;
