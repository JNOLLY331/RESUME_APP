import { useEffect } from 'react';

const PROJECTS = [
  {
    icon: 'bi-shield-lock-fill',
    iconSolid: true,
    badge: 'Featured',
    title: 'Full Stack React & Django Web Application',
    meta: 'Full Stack Project',
    period: 'Aug 2024 — Present',
    body: 'Built a complete full stack application with a React frontend and Django backend. Designed and consumed RESTful APIs, managed a PostgreSQL database, implemented JWT authentication, and wired up frontend routing for protected views.',
    tags: ['React', 'Django', 'REST APIs', 'PostgreSQL', 'JWT Auth'],
  },
  {
    icon: 'bi-window-split',
    iconSolid: false,
    title: 'Personal Portfolio Website',
    meta: 'Frontend Project',
    period: '2024 — Present',
    body: 'Designed and built a responsive portfolio site featuring a dark and light mode toggle, smooth scroll animations, an animated space canvas hero, a project showcase, and a functional contact form. Deployed live on Render.',
    tags: ['Responsive Design', 'Animations', 'Dark/Light Mode', 'Deployment'],
    link: 'https://japhethanold.onrender.com',
  },
  {
    icon: 'bi-hdd-network',
    iconSolid: false,
    title: 'Networking & CI/CD Pipelines',
    meta: 'DevOps & Infrastructure',
    period: 'Current',
    body: 'Applied networking fundamentals including network protocols, IP addressing, and troubleshooting, then wired them into continuous integration and deployment pipelines so that live projects are built, tested, and hosted automatically.',
    tags: ['Cisco Networking', 'CI/CD', 'DevOps', 'Hosting'],
  },
];

const EDUCATION = [
  {
    icon: 'bi-book',
    iconSolid: false,
    period: 'Jan 2019 — Dec 2022',
    label: 'Secondary School',
    title: 'KCSE Certificate',
    place: 'Kisii High School',
    body: 'Completed Kenya Certificate of Secondary Education with an overall grade of A- (Minus), building a strong science and mathematics foundation for computer science studies.',
    footer: null,
  },
  {
    icon: 'bi-mortarboard-fill',
    iconSolid: true,
    period: 'Sep 2023 — Present',
    label: "Bachelor's Degree",
    title: 'BSc. Computer Science',
    place: 'Moi University, Eldoret',
    body: 'Focus on the Software Development Life Cycle, data structures, and algorithms, with hands-on web technologies spanning HTML, CSS, Django, React, and REST APIs, plus networking principles and key concepts.',
    footer: 'Core: SDLC · Data Structures · Algorithms · Web Tech · Networking',
  },
  {
    icon: 'bi-building',
    iconSolid: true,
    period: '3 Months',
    label: 'Industrial Attachment',
    title: 'ICT Department Attachment',
    place: 'Kenya Revenue Authority',
    body: 'Undertook a three-month industrial attachment with the ICT department, contributing to live operations across three core areas: network configuration and troubleshooting, project management, and IT service delivery.',
    footer: 'Network Configuration & Troubleshooting · Project Management · IT Service Delivery',
  },
  {
    icon: 'bi-patch-check-fill',
    iconSolid: false,
    period: 'Current',
    label: 'Certifications',
    title: 'Cisco Networking & Security',
    place: 'Cisco',
    body: 'Holds Cisco certifications spanning networking fundamentals, network defense, and ethical hacking — reinforcing hands-on security and infrastructure skills.',
    footer: 'Ethical Hacking · Networking Defense · Networking Essentials',
  },
];

export default function Resume() {
  useEffect(() => {
    // Skill bars animation
    const bars = document.querySelectorAll('.skill-bar-fill');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const w = bar.getAttribute('data-width') || bar.getAttribute('aria-valuenow');
          if (w) bar.style.width = w + '%';
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });
    bars.forEach(bar => observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" className="section-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase font-raleway subtitle-line mb-6">Resume</span>
          <h2 className="text-4xl sm:text-5xl font-black font-mulish heading-text font-light">Experience & <span className="font-black">Education</span></h2>
          <p className="mt-4 text-base max-w-xl mx-auto body-text">An overview of my academic background, personal projects, and the technical skills I've developed along the way.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Projects */}
          <div data-aos="fade-right" data-aos-delay="100">
            <div className="mb-8">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-bold text-black bg-accent font-raleway uppercase tracking-wider mb-3">Projects</span>
              <h2 className="text-2xl font-black font-mulish heading-text">Technical Journey</h2>
              <p className="body-text text-sm mt-2">Real-world projects and applied coursework that define my growth as a developer.</p>
            </div>

            <div className="space-y-5">
              {PROJECTS.map((project, i) => (
                <div
                  key={project.title}
                  className="exp-card card-surface rounded-2xl p-6 border border-white/7 relative overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay={200 + i * 60}
                  style={project.badge ? { borderColor: 'rgba(31,157,77,0.35)' } : undefined}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${project.iconSolid ? 'bg-gradient-to-br from-accent to-accent-dim' : 'bg-accent/10 border border-accent/20'}`}>
                      <i className={`bi ${project.icon} ${project.iconSolid ? 'text-black' : 'text-accent'} text-xl`}></i>
                    </div>
                    {project.badge && (
                      <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">{project.badge}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-black font-mulish heading-text mb-1">{project.title}</h3>
                  <p className="text-accent text-sm font-semibold mb-2">{project.meta}</p>
                  <span className="text-xs text-black bg-accent/80 px-3 py-0.5 rounded-full font-bold inline-block mb-3">{project.period}</span>
                  <p className="body-text text-sm leading-relaxed mb-4">{project.body}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-accent font-raleway hover:underline mb-4">
                      <i className="bi bi-box-arrow-up-right"></i> View live project
                    </a>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education */}
          <div data-aos="fade-left" data-aos-delay="100">
            <div className="mb-8">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-bold text-black bg-accent font-raleway uppercase tracking-wider mb-3">Education</span>
              <h2 className="text-2xl font-black font-mulish heading-text">Academic Background</h2>
              <p className="body-text text-sm mt-2">A strong educational path built on technology, sciences, and critical thinking.</p>
            </div>

            <div className="relative pl-14" data-aos="fade-up" data-aos-delay="200">
              <div className="timeline-line"></div>

              {EDUCATION.map((entry, i) => (
                <div key={entry.title} className={`relative ${i < EDUCATION.length - 1 ? 'mb-10' : ''}`}>
                  <div
                    className={`absolute -left-14 top-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      entry.iconSolid
                        ? 'bg-gradient-to-br from-accent to-accent-dim border-4 shadow-green-glow'
                        : 'bg-accent/10 border-2 border-accent/40'
                    }`}
                    style={entry.iconSolid ? { borderColor: '#0d0d0d' } : undefined}
                  >
                    <i className={`bi ${entry.icon} ${entry.iconSolid ? 'text-black' : 'text-accent'} text-lg`}></i>
                  </div>
                  <div className="card-surface rounded-2xl p-6 hover:border-accent/40 hover:translate-x-1 transition-all duration-300 border border-white/5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">{entry.period}</span>
                      <span className="text-xs muted-text uppercase tracking-wider font-raleway">{entry.label}</span>
                    </div>
                    <h4 className="text-lg font-black font-mulish heading-text mb-1">{entry.title}</h4>
                    <p className="text-accent text-sm font-semibold mb-3">{entry.place}</p>
                    <p className="body-text text-sm leading-relaxed">{entry.body}</p>
                    {entry.footer && (
                      <div className="mt-4 flex items-center gap-2 bg-accent/5 border border-accent/15 rounded-lg px-4 py-2">
                        <i className="bi bi-cpu text-accent text-sm"></i>
                        <span className="text-xs font-bold text-accent">{entry.footer}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}