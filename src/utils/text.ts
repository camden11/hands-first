const BASE_LETTER_SPACING = 0.1;
const NAV_TEXT_REPETITIONS = 10;

export function generateNavText(word: string): string {
  return Array(NAV_TEXT_REPETITIONS).fill(word).join(' ');
}

export function calculateLetterSpacing(
  text: string,
  targetWidth: number,
  fontSize: number = 40
): number {
  const span = document.createElement('span');
  span.style.cssText = `
    position: absolute;
    visibility: hidden;
    white-space: nowrap;
    font-family: "stevie-sans", sans-serif;
    font-size: ${fontSize}px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: ${BASE_LETTER_SPACING}em;
  `;
  span.textContent = text;
  document.body.appendChild(span);
  const naturalWidth = span.offsetWidth;
  document.body.removeChild(span);

  const extraSpace = targetWidth - naturalWidth;
  const extraPerChar = extraSpace / text.length;
  const extraEm = extraPerChar / fontSize;

  return BASE_LETTER_SPACING + extraEm;
}
