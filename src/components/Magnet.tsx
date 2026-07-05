import { useRef, type ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const elRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    if (!elRef.current) return;
    const rect = elRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < rect.width / 2 + padding) {
      elRef.current.style.transform = `translate3d(${distX / strength}px, ${distY / strength}px, 0)`;
      elRef.current.style.transition = activeTransition;
    }
  }

  function handleMouseLeave() {
    if (!elRef.current) return;
    elRef.current.style.transform = 'translate3d(0, 0, 0)';
    elRef.current.style.transition = inactiveTransition;
  }

  return (
    <div
      ref={elRef}
      className={className}
      style={{ willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
