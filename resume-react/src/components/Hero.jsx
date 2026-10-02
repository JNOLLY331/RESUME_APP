import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const canvasRef = useRef(null);

  // ── Typed.js ──
  useEffect(() => {
    const el = document.querySelector('.typed');
    if (!el) return;

    const items = el.getAttribute('data-typed-items').split(',');
    const typed = new Typed('.typed', {
      strings: items,
      loop: true,
      typeSpeed: 90,
      backSpeed: 45,
      backDelay: 1800
    });

    return () => typed.destroy();
  }, []);

  // ── Space canvas ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H, stars = [], shooters = [], frame = 0;
    let animationId;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      buildStars();
    }

    function buildStars() {
      stars = [];
      const n = Math.floor(W * H / 2400);
      for (let i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.5,
          ba: .25 + Math.random() * .75,
          a: 0,
          ts: .004 + Math.random() * .018,
          to: Math.random() * Math.PI * 2,
          col: starColor(),
          glow: Math.random() > .92
        });
      }
    }

    function starColor() {
      const r = Math.random();
      if (r < .55) return '#ffffff';
      if (r < .75) return '#c8c2ff';
      return '#22c55e';
    }

    function spawnShooter() {
      shooters.push({
        x: Math.random() * W,
        y: Math.random() * H * .4,
        vx: 10,
        vy: 4,
        col: '#22c55e',
        alpha: 1,
        tail: [],
        life: 0,
        maxLife: 40
      });
    }

    function drawStars() {
      stars.forEach(s => {
        s.a = s.ba * (.5 + .5 * Math.sin(frame * s.ts + s.to));
        ctx.globalAlpha = s.a;
        ctx.fillStyle = s.col;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    function drawShooters() {
      shooters.forEach(s => {
        s.tail.push({ x: s.x, y: s.y });
        if (s.tail.length > 20) s.tail.shift();

        s.x += s.vx;
        s.y += s.vy;
        s.life++;

        ctx.strokeStyle = s.col;
        ctx.beginPath();
        s.tail.forEach((p, i) => {
          i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();
      });
      shooters = shooters.filter(s => s.life < s.maxLife);
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);
      drawStars();
      drawShooters();

      if (Math.random() < 0.01) spawnShooter();
      frame++;
      animationId = requestAnimationFrame(loop);
    }

    window.addEventListener('resize', resize);
    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[700px] flex items-center justify-center overflow-hidden section-bg">
      <canvas ref={canvasRef} id="space-canvas"></canvas>
      
      {/* Radial glow */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,100,0,0.06) 0%, transparent 70%)' }}></div>

      <div className="hero-overlay absolute inset-0"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 pb-16">
        <div data-aos="fade-down" data-aos-duration="800">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold font-raleway tracking-widest uppercase mb-6 text-accent/90 border border-accent/30 bg-accent/5">
            Innovation· Technology & Creativity
          </span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black font-mulish mb-4 heading-text" data-aos="fade-up" data-aos-delay="100">
          Hi, I'm <span className="text-accent" style={{ textShadow: '0 0 30px #006400' }}>Japheth Anold</span> 
        </h2>
        <p className="text-xl sm:text-2xl mb-10 body-text" data-aos="fade-up" data-aos-delay="200">
          I'm a <span className="typed text-accent border-b-2 border-accent pb-0.5" data-typed-items="Web Developer,Mobile App Developer,System Designer,Problem Solver,Computer Science Student,Tech Enthusiast"></span><span className="typed-cursor text-accent" aria-hidden="true"></span>
        </p>
        <div className="flex justify-center gap-4 mb-10" data-aos="fade-up" data-aos-delay="300">
          <a href="#about" className="btn-primary-accent px-8 py-3 font-mulish text-sm">Explore Profile</a>
          <a href="#contact" className="btn-outline-accent px-8 py-3 font-mulish text-sm">Get In Touch</a>
        </div>
        {/* Social links */}
        <div className="flex justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
          <a href="https://github.com/JNOLLY331/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center text-lg body-text border border-white/10 hover:bg-accent hover:text-black hover:border-accent hover:-translate-y-1 transition-all duration-300"><i className="bi bi-github"></i></a>
          <a href="https://japhethanold.onrender.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center text-lg body-text border border-white/10 hover:bg-accent hover:text-black hover:border-accent hover:-translate-y-1 transition-all duration-300"><i className="bi bi-briefcase-fill"></i></a>
          <a href="https://wa.me/254704345035?text=Hello%20Japheth" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center text-lg body-text border border-white/10 hover:bg-accent hover:text-black hover:border-accent hover:-translate-y-1 transition-all duration-300"><i className="bi bi-whatsapp"></i></a>
          <a href="mailto:japhethanold2@gmail.com" className="w-12 h-12 rounded-full flex items-center justify-center text-lg body-text border border-white/10 hover:bg-accent hover:text-black hover:border-accent hover:-translate-y-1 transition-all duration-300"><i className="bi bi-envelope-fill"></i></a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-xs font-raleway muted-text text-accent/900 tracking-widest">SCROLL</span>
        <i className="bi bi-chevron-down text-accent"></i>
      </div>
    </section>
  );
}