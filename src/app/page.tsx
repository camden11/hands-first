'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './home.module.css';

const TITLE_TEXT_A = "HANDS FIRST HANDS FIRST HANDS FIRST HANDS FIRST HANDS FIRST HANDS"
const TITLE_TEXT_B = "FIRST HANDS FIRST HANDS FIRST HANDS FIRST HANDS FIRST HANDS FIRST";
const REPETITIONS = 20;
const HEIGHT_PERCENTAGE = 0.7;

export default function Home() {
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      if (!textWrapperRef.current) return;

      const firstH1 = textWrapperRef.current.querySelector('h1') as HTMLElement;
      if (!firstH1) return;

      const lineHeight = firstH1.offsetHeight;
      const maxHeight = window.innerHeight * HEIGHT_PERCENTAGE;
      const completeLines = Math.floor(maxHeight / lineHeight);
      const calculatedHeight = completeLines * lineHeight;

      setHeight(`${calculatedHeight}px`);
      setIsReady(true);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.featureContainer}>
        <div className={styles.featureContent}>
          <div ref={textWrapperRef} className={styles.featureTextWrapper} style={{ height, visibility: isReady ? 'visible' : 'hidden' }}>
            {Array.from({ length: REPETITIONS }).map((_, index) => {
              const isBText = index % 2 === 1;
              return (
                <h1 key={index} className={isBText ? styles.bText : ""}>{isBText ? TITLE_TEXT_B : TITLE_TEXT_A}</h1>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.navContainer}>
        <ul>
          <li>
            <a href="/music">Music</a>
          </li>
          <li>
            <a href="/shows">Shows</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
