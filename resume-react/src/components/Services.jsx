const SERVICES = [
  {
    icon: 'bi-code-slash',
    title: 'Web Development',
    body: 'Building responsive, modern websites and web applications using HTML, CSS, JavaScript, and React.',
  },
  {
    icon: 'bi-android',
    title: 'Mobile App Development',
    body: 'Building native Android applications with Kotlin and Java, covering UI/UX design, activity lifecycle, data persistence, and API integration.',
    tags: ['Kotlin', 'Java', 'Android', 'Android Studio', 'API Integration'],
    featured: true,
  },
  {
    icon: 'bi-database',
    title: 'SQL & NoSQL',
    body: 'Designing and managing relational and non-relational databases, including PostgreSQL schema design.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'REST API Design',
    body: 'Creating and consuming RESTful APIs, with JWT authentication and clean frontend routing.',
  },
  {
    icon: 'bi-phone',
    title: 'Responsive UI',
    body: 'Crafting mobile-first, responsive interfaces with a strong focus on UI/UX and accessible design.',
  },
  {
    icon: 'bi-hdd-network',
    title: 'Networking',
    body: 'Applying network protocols, IP addressing, and troubleshooting fundamentals from Cisco Networking Essentials.',
  },
  {
    icon: 'bi-git',
    title: 'Version Control',
    body: 'Managing codebases with Git and GitHub using collaborative branching and review workflows.',
  },
  {
    icon: 'bi-infinity',
    title: 'DevOps & CI/CD',
    body: 'Building automated build, test, and deployment pipelines that keep live projects shipping.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-alt py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase font-raleway subtitle-line mb-6">Services</span>
          <h2 className="text-4xl sm:text-5xl font-black font-mulish heading-text font-light">What I <span className="font-black">Offer</span></h2>
          <p className="mt-4 text-base max-w-xl mx-auto body-text">Technical skills rooted in practical Computer Science knowledge — from web and mobile development to networking and security.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="service-card card-surface rounded-2xl p-7 text-center relative overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={100 + (i % 4) * 100}
              style={service.featured ? { borderColor: 'rgba(31,157,77,0.45)' } : undefined}
            >
              {service.featured && <div className="featured-ribbon">Featured</div>}
              <div className={`w-16 h-16 mx-auto mb-5 rounded-xl flex items-center justify-center text-accent text-3xl ${service.featured ? 'bg-accent/15' : 'bg-accent/10'}`}>
                <i className={`bi ${service.icon}`}></i>
              </div>
              <h4 className="text-lg font-black font-mulish heading-text mb-3">{service.title}</h4>
              <p className="body-text text-sm leading-relaxed mb-5">{service.body}</p>
              {service.tags && (
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {service.tags.map(tag => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              )}
              <a href="#resume" className={`inline-flex items-center gap-1 text-sm font-bold font-raleway transition-colors ${service.featured ? 'text-accent' : 'heading-text hover:text-accent'}`}>
                Explore <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>

        {/* CTA box */}
        <div className="mt-14" data-aos="fade-up" data-aos-delay="200">
          <div className="cta-box p-10 sm:p-14">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black font-mulish text-accent mb-3">Let's Build Something Together</h3>
                <p className="body-text text-sm max-w-lg">Looking for a dedicated developer for your project, internship, or collaboration? I'm open to exciting opportunities.</p>
              </div>
              <a href="#contact" className="btn-primary-accent px-10 py-4 font-mulish text-sm whitespace-nowrap flex-shrink-0">Start a Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}