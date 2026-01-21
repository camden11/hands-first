'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';

interface MenuProps {
  onClose: () => void;
}

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Music', href: '/music' },
  { label: 'Shows', href: '/shows' },
  { label: 'About', href: '/about' },
  { label: 'Links', href: '/links' },
];

const REFERENCE_TEXT = 'HANDS FIRST HANDS FIRST HANDS FIRST HANDS FIRST HANDS FIRST HANDS';

function generateRepeatedText(word: string): string {
  return Array(10).fill(word).join(' ');
}

function calculateLetterSpacing(text: string, targetWidth: number, fontSize: number): number {
  const span = document.createElement('span');
  span.style.cssText = `
    position: absolute;
    visibility: hidden;
    white-space: nowrap;
    font-family: "stevie-sans", sans-serif;
    font-size: ${fontSize}px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  `;
  span.textContent = text;
  document.body.appendChild(span);
  const naturalWidth = span.offsetWidth;
  document.body.removeChild(span);

  const extraSpace = targetWidth - naturalWidth;
  const extraPerChar = extraSpace / text.length;
  const baseLetterSpacing = 0.1;
  const extraEm = extraPerChar / fontSize;

  return baseLetterSpacing + extraEm;
}

function calculateLinesPerItem(fontSize: number): number {
  const isTablet = window.innerWidth >= 768;
  const lineHeight = fontSize * 1.1;
  const headerHeight = isTablet ? 96 : 48;
  const paddingTop = isTablet ? 96 : 48;
  const reservedSpace = headerHeight + paddingTop + 32;
  const availableHeight = window.innerHeight - reservedSpace;
  const totalLines = Math.floor(availableHeight / lineHeight);
  const linesPerItem = Math.floor(totalLines / menuItems.length);
  return Math.max(2, linesPerItem);
}

export default function Menu({ onClose }: MenuProps) {
  const [referenceWidth, setReferenceWidth] = useState<number | null>(null);
  const [linesPerItem, setLinesPerItem] = useState(4);
  const [fontSize, setFontSize] = useState(40);

  useEffect(() => {
    const updateDimensions = () => {
      const currentFontSize = window.innerWidth >= 768 ? 40 : 32;
      setFontSize(currentFontSize);
      
      if (!referenceWidth) {
        const span = document.createElement('span');
        span.style.cssText = `
          position: absolute;
          visibility: hidden;
          white-space: nowrap;
          font-family: "stevie-sans", sans-serif;
          font-size: ${currentFontSize}px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        `;
        span.textContent = REFERENCE_TEXT;
        document.body.appendChild(span);
        setReferenceWidth(span.offsetWidth);
        document.body.removeChild(span);
      }
      
      setLinesPerItem(calculateLinesPerItem(currentFontSize));
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [referenceWidth]);

  return (
    <div className={styles.overlay}>
      <nav className={styles.nav}>
        {menuItems.map((item) => {
          const text = generateRepeatedText(item.label);
          const letterSpacing = referenceWidth ? calculateLetterSpacing(text, referenceWidth, fontSize) : 0.1;
          
          return (
            <Link key={item.href} href={item.href} className={styles.menuItem} onClick={onClose}>
              {Array.from({ length: linesPerItem }).map((_, index) => (
                <span 
                  key={index} 
                  className={styles.textLine}
                  style={{ letterSpacing: `${letterSpacing}em` }}
                >
                  {text}
                </span>
              ))}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
