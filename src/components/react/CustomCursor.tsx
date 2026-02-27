import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px) and (pointer: fine)');

    const update = () => setEnabled(mediaQuery.matches);
    update();

    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const cursor = document.getElementById('cursor');
    const dot = document.getElementById('cursorDot');
    if (!cursor || !dot) {
      return;
    }

    const moveCursor = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      cursor.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 180, fill: 'forwards' },
      );

      dot.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 80, fill: 'forwards' },
      );
    };

    const emitRipple = () => {
      const ripple = document.createElement('span');
      ripple.className = 'cursor-ripple';
      cursor.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 1000);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', emitRipple);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', emitRipple);
    };
  }, [enabled]);

  return (
    <div aria-hidden className={`custom-cursor-layer ${enabled ? '' : 'hidden'}`}>
      <div id="cursor" />
      <div id="cursorDot" />
    </div>
  );
}
