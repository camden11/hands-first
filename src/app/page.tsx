'use client';

import { useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import styles from './home.module.css';
import NavItem from '../components/NavItem';
import { generateNavText, calculateLetterSpacing } from '../utils/text';
import { useFeatureDimensions } from '../hooks/useFeatureDimensions';

const TITLE_TEXT_A = "HANDS FIRST HANDS FIRST HANDS FIRST HANDS FIRST HANDS FIRST HANDS";
const TITLE_TEXT_B = "FIRST HANDS FIRST HANDS FIRST HANDS FIRST HANDS FIRST HANDS FIRST";
const REPETITIONS = 20;

const NAV_ITEMS = ['Music', 'Shows', 'About'];
const NAV_IMAGES = ['/mask.png', '/carousel.png', '/mask.png'];

export default function Home() {
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNavIndex, setActiveNavIndex] = useState(-1);

  const { height, containerWidth, isReady } = useFeatureDimensions(textWrapperRef, containerRef);

  const navItemText = activeNavIndex >= 0 ? generateNavText(NAV_ITEMS[activeNavIndex]) : null;

  const navLetterSpacing = useMemo(() => {
    if (!navItemText || !containerWidth) return null;
    return calculateLetterSpacing(navItemText, containerWidth);
  }, [navItemText, containerWidth]);

  return (
    <div className={styles.pageContainer}>
      <div
        ref={containerRef}
        className={styles.featureContainer}
        style={containerWidth ? { width: `${containerWidth}px` } : undefined}
      >
        {activeNavIndex >= 0 && (
          <div className={styles.imageOverlay}>
            <Image
              src={NAV_IMAGES[activeNavIndex]}
              alt={NAV_ITEMS[activeNavIndex]}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        )}
        <div
          ref={textWrapperRef}
          className={styles.featureTextWrapper}
          style={{ height, visibility: isReady ? 'visible' : 'hidden' }}
        >
          {Array.from({ length: REPETITIONS }).map((_, index) => {
            if (navItemText && navLetterSpacing !== null) {
              return (
                <h1 key={index} style={{ letterSpacing: `${navLetterSpacing}em` }}>
                  {navItemText}
                </h1>
              );
            }
            const isBText = index % 2 === 1;
            return (
              <h1 key={index} className={isBText ? styles.bText : ''}>
                {isBText ? TITLE_TEXT_B : TITLE_TEXT_A}
              </h1>
            );
          })}
        </div>
      </div>
      <div className={styles.navContainer} onMouseLeave={() => setActiveNavIndex(-1)}>
        <ul>
          <NavItem href="/music" index={0} onHover={setActiveNavIndex}>
            Music
          </NavItem>
          <NavItem href="/shows" index={1} onHover={setActiveNavIndex}>
            Shows
          </NavItem>
          <NavItem href="/about" index={2} onHover={setActiveNavIndex}>
            About
          </NavItem>
        </ul>
      </div>
    </div>
  );
}
