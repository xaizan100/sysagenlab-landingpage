
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  const colors = {
    top: '#111111',    // Deep Charcoal
    right: '#333333',  // Dark Grey
    left: '#666666',   // Mid Grey
    line: '#FFFFFF'    // White definition line
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
          height="75" 
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
        <div className="flex items-baseline font-black tracking-[0.3em] text-xl md:text-2xl text-brand-black uppercase">
          <span>SYSAGEN</span>
          <span className="text-brand-grey">LAB</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
