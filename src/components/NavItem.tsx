'use client';

interface NavItemProps {
  href: string;
  index: number;
  children: React.ReactNode;
  onHover: (index: number) => void;
}

export default function NavItem({ href, index, children, onHover }: NavItemProps) {
  return (
    <li>
      <a href={href} onMouseEnter={() => onHover(index)}>
        {children}
      </a>
    </li>
  );
}
