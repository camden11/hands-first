import { useEffect, useState, RefObject } from 'react';

const HEIGHT_PERCENTAGE = 0.7;

interface FeatureDimensions {
  height: string;
  containerWidth: number | null;
  isReady: boolean;
}

export function useFeatureDimensions(
  textWrapperRef: RefObject<HTMLDivElement | null>,
  containerRef: RefObject<HTMLDivElement | null>
): FeatureDimensions {
  const [height, setHeight] = useState('0px');
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (!textWrapperRef.current) return;

      const firstH1 = textWrapperRef.current.querySelector('h1') as HTMLElement;
      if (!firstH1) return;

      const lineHeight = firstH1.offsetHeight;
      const maxHeight = window.innerHeight * HEIGHT_PERCENTAGE;
      const completeLines = Math.floor(maxHeight / lineHeight);
      const calculatedHeight = completeLines * lineHeight;

      setHeight(`${calculatedHeight}px`);

      if (containerWidth === null && containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }

      setIsReady(true);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [textWrapperRef, containerRef, containerWidth]);

  return { height, containerWidth, isReady };
}
