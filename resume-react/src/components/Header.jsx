import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    if (saved === 'light') document.documentElement.classList.remove('dark');
    else document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const toggleScrolled = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', toggleScrolled);
    toggleScrolled();
    return () => window.removeEventListener('scroll', toggleScrolled);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') document.documentElement.classList.remove('dark');
    else document.documentElement.classList.add('dark');
  };

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header id="header" className={`nav-bg fixed top-0 left-0 right-0 z-50 py-4 ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="sitename text-2xl font-black font-mulish tracking-tight">JNOLLY</a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-8 nav-font">
          <a href="#hero" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#resume" className="nav-link">Education</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Right: theme toggle + CTA + mobile hamburger */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <div className="theme-toggle" id="themeToggle" title="Toggle theme" onClick={toggleTheme}>
            <div className="theme-toggle-thumb"></div>
          </div>

          {/* CTA (desktop) */}
          <a href="#about" className="hidden xl:inline-block btn-primary-accent px-6 py-2 text-sm font-raleway">
            Get Started
          </a>

          {/* Hamburger (mobile) */}
          <button id="mobileToggle" className="xl:hidden text-2xl heading-text" aria-label="Menu" onClick={toggleMobile}>
            <i className={mobileOpen ? 'bi bi-x' : 'bi bi-list'} id="menuIcon"></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`xl:hidden absolute top-full left-0 right-0 rounded-b-2xl mx-4 p-4 shadow-xl ${mobileOpen ? 'open' : ''}`}>
        <nav className="flex flex-col gap-2 nav-font">
          <a href="#hero" className="nav-link py-2 border-b border-white/5" onClick={closeMobile}>Home</a>
          <a href="#about" className="nav-link py-2 border-b border-white/5" onClick={closeMobile}>About</a>
          <a href="#services" className="nav-link py-2 border-b border-white/5" onClick={closeMobile}>Services</a>
          <a href="#resume" className="nav-link py-2 border-b border-white/5" onClick={closeMobile}>Education</a>
          <a href="#contact" className="nav-link py-2" onClick={closeMobile}>Contact</a>
        </nav>
      </div>
    </header>
  );
}