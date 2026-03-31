import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setIsVisible(true);
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;
      
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-4 h-4 rounded-full bg-[#b026ff] mix-blend-difference pointer-events-none z-[100] transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 ${isHovering ? 'scale-50' : 'scale-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`fixed top-0 left-0 w-10 h-10 rounded-full border border-[#00f0ff] mix-blend-difference pointer-events-none z-[99] transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${isHovering ? 'scale-150 bg-[#00f0ff]/20' : 'scale-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}
