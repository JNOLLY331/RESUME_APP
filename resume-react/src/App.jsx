import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Preloader from './components/Preloader';

function App() {
  // ── AOS ──
  useEffect(() => {
    AOS.init({ duration: 650, easing: 'ease-in-out', once: true });
  }, []);

  // ── Scrollspy ──
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    const scrollSpy = () => {
      const pos = window.scrollY + 200;

      sections.forEach(sec => {
        const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
        if (!link) return;

        if (pos >= sec.offsetTop && pos <= sec.offsetTop + sec.offsetHeight) {
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', scrollSpy);
    return () => window.removeEventListener('scroll', scrollSpy);
  }, []);

  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <About />
        <Resume />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;