import { useEffect } from 'react';

export default function Preloader() {
  useEffect(() => {
    const hide = () => {
      const pre = document.getElementById('preloader');
      if (!pre) return;
      pre.style.opacity = '0';
      setTimeout(() => pre.remove(), 600);
    };

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
      // Safety net so the page is never stuck behind the loader
      const fallback = setTimeout(hide, 3000);
      return () => {
        window.removeEventListener('load', hide);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <div id="preloader">
      <div className="ring"></div>
    </div>
  );
}