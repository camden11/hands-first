'use client';

import { PointerEvent, MouseEvent, useRef } from 'react';

interface NavItemProps {
  href: string;
  index: number;
  children: React.ReactNode;
  onHover: (index: number) => void;
}

export default function NavItem({ href, index, children, onHover }: NavItemProps) {
  const lastPointerType = useRef<string>('mouse');

  const handlePointerEnter = (e: PointerEvent) => {
    lastPointerType.current = e.pointerType;
    if (e.pointerType === 'mouse') {
      onHover(index);
    }
  };

  const handleClick = (e: MouseEvent) => {
    if (lastPointerType.current === 'touch') {
      e.preventDefault();
      onHover(index);
      setTimeout(() => {
        window.location.href = href;
      }, 100);
    }
  };

  return (
    <li>
      <a href={href} onPointerEnter={handlePointerEnter} onClick={handleClick}>
        {children}
      </a>
    </li>
  );
}
