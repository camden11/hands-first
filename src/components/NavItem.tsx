'use client';

import { PointerEvent } from 'react';

interface NavItemProps {
  href: string;
  index: number;
  children: React.ReactNode;
  onHover: (index: number) => void;
}

export default function NavItem({ href, index, children, onHover }: NavItemProps) {
  const handlePointerEnter = (e: PointerEvent) => {
    if (e.pointerType === 'mouse') {
      onHover(index);
    }
  };

  return (
    <li>
      <a href={href} onPointerEnter={handlePointerEnter}>
        {children}
      </a>
    </li>
  );
}
