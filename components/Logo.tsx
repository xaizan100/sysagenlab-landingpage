
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  // Purple shades matching "LAB" text for a cohesive brand identity
  const colors = {
    top: '#d8b4fe',    // Highlight face
    right: '#8b5cf6',  // Primary brand purple
    left: '#6d28d9',   // Deep shadow purple
    line: 'rgba(0,0,0,0.2)' // Subtle 3D definition line
  };

  /**
   * Isometric Cube Component
   * x, y: Top-center vertex of the cube
   */
  const Cube = ({ x, y, opacity = 1 }: { x: number; y: number; opacity?: number }) => (
    <g transform={`translate(${x}, ${y})`} opacity={opacity}>
      {/* Top Face */}
      <path d="M0 0L15 -8L30 0L15 8L0 0Z" fill={colors.top} />
      {/* Left Face */}
      <path d="M0 0V16L15 24V8L0 0Z" fill={colors.left} />
      {/* Right Face */}
      <path d="M15 8V24L30 16V0L15 8Z" fill={colors.right} />
      {/* Detailed 3D Strokes */}
      <path d="M0 0L15 8L30 0M15 8V24" stroke={colors.line} strokeWidth="0.5" />
    </g>
  );

  return (
    <div className={`flex items-center gap-6 transition-all duration-500 ${className}`}>
      {/* Compact 3D Isometric S-Mark */}
      <div className="relative group">
        {/* Focal point glow */}
        <div className="absolute inset-0 bg-purple-600/30 blur-[45px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        <svg 
          width="80" 
          height="100" 
          viewBox="0 0 100 110" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative z-10 drop-shadow-[0_12px_24px_rgba(139,92,246,0.5)] transition-transform duration-700 group-hover:scale-110"
        >
          {/* 
            Formation logic (Back-to-Front ordering for correct isometric layering):
            1. Top-Right Start
            2. Shift Left-Down (Top curve)
            3. Shift Down (Middle vertical)
            4. Shift Right-Down (Middle transition)
            5. Shift Down (Bottom vertical)
            6. Shift Left-Down (Bottom curve)
          */}
          
          {/* CUBE 1: TOP RIGHT */}
          <Cube x={50} y={15} />

          {/* CUBE 2: TOP LEFT (Connected to C1) */}
          <Cube x={35} y={23} />

          {/* CUBE 3: MID LEFT (Below C2) */}
          <Cube x={35} y={39} />

          {/* CUBE 4: MID RIGHT (Connected to C3) */}
          <Cube x={50} y={47} />

          {/* CUBE 5: BOT RIGHT (Below C4) */}
          <Cube x={50} y={63} />

          {/* CUBE 6: BOT LEFT (Connected to C5) */}
          <Cube x={35} y={71} />

          {/* Reference Shadow Line */}
          <path d="M30 85L10 95" stroke={colors.right} strokeWidth="4" strokeLinecap="round" opacity="0.4" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col md:flex-row md:items-baseline font-black tracking-tighter text-4xl md:text-6xl select-none">
          <span className="text-white" style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>SYSAGEN</span>
          <span className="text-[#8b5cf6] md:ml-4">LAB</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
