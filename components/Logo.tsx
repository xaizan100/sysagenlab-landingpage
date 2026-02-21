
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  const colors = {
    top: '#E5E5E5',    // Light grey
    right: '#404040',  // Dark grey
    left: '#737373',   // Medium grey
    line: '#111111'    // Black definition line
  };

  const Cube = ({ x, y, opacity = 1 }: { x: number; y: number; opacity?: number }) => (
    <g transform={`translate(${x}, ${y})`} opacity={opacity}>
      <path d="M0 0L15 -8L30 0L15 8L0 0Z" fill={colors.top} />
      <path d="M0 0V16L15 24V8L0 0Z" fill={colors.left} />
      <path d="M15 8V24L30 16V0L15 8Z" fill={colors.right} />
      <path d="M0 0L15 8L30 0M15 8V24" stroke={colors.line} strokeWidth="0.5" />
    </g>
  );

  return (
    <div className={`flex items-center gap-4 select-none ${className}`}>
      <div className="relative">
        <svg 
          width="60" 
          height="70" 
          viewBox="0 0 100 110" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative z-10"
        >
          <Cube x={50} y={15} />
          <Cube x={35} y={23} />
          <Cube x={35} y={39} />
          <Cube x={50} y={47} />
          <Cube x={50} y={63} />
          <Cube x={35} y={71} />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex items-baseline font-bold tracking-tighter text-3xl md:text-4xl text-brand-black">
          <span>SYSAGENLAB</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
