const CONTACT_CARDS = [
  {
    icon: 'bi-geo-alt',
    label: 'Location',
    value: 'Eldoret, Kenya',
    href: null,
  },
  {
    icon: 'bi-telephone',
    label: 'Phone',
    value: '+254 704 345035',
    href: 'tel:+254704345035',
  },
  {
    icon: 'bi-envelope',
    label: 'Email',
    value: 'japhethanold2@gmail.com',
    href: 'mailto:japhethanold2@gmail.com',
  },
  {
    icon: 'bi-whatsapp',
    label: 'WhatsApp',
    value: '+254 704 345035',
    href: 'https://wa.me/254704345035?text=Hello%20Japheth',
  },
];

const REFEREES = [
  {
    name: 'Dr. Austine Owino',
    role: 'Lecturer, Moi University',
    email: 'Austineowino@gmail.com',
    phone: '0722323828',
  },
  {
    name: 'Dr. Nyamwala',
    role: 'Lecturer, Moi University',
    email: 'nyamwala@gmail.com',
    phone: '0768709383',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase font-raleway subtitle-line mb-6">Contact</span>
          <h2 className="text-4xl sm:text-5xl font-black font-mulish heading-text font-light">Get In <span className="font-black">Touch</span></h2>
          <p className="mt-4 text-base max-w-xl mx-auto body-text">Have a project idea or want to collaborate? I'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-5" data-aos="fade-right" data-aos-delay="100">
            {CONTACT_CARDS.map(card => (
              <div key={card.label} className="card-surface detail-card rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <i className={`bi ${card.icon} text-accent text-xl`}></i>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold font-mulish heading-text">{card.label}</h3>
                  {card.href ? (
                    <a href={card.href} target="_blank" rel="noreferrer" className="text-sm body-text hover:text-accent transition-colors break-all">
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm body-text">{card.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3" data-aos="fade-left" data-aos-delay="100">
            <div className="card-surface rounded-2xl p-8">
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="text" className="form-input" placeholder="Your Name" required />
                  <input type="email" className="form-input" placeholder="Your Email" required />
                </div>
                <input type="text" className="form-input" placeholder="Subject" required />
                <textarea className="form-input" rows="5" placeholder="Write your message here..." required></textarea>
                <div className="text-center">
                  <button type="submit" className="btn-primary-accent px-12 py-3 font-mulish text-sm">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Referees */}
        <div className="mt-20" data-aos="fade-up" data-aos-delay="200">
          <div className="text-center mb-12">
            <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase font-raleway subtitle-line mb-6">Referees</span>
            <h3 className="text-2xl sm:text-3xl font-black font-mulish heading-text">Professional <span className="text-accent">Referees</span></h3>
            <p className="mt-4 text-base max-w-xl mx-auto body-text">Academic referees available on request.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {REFEREES.map(referee => (
              <div key={referee.name} className="exp-card card-surface rounded-2xl p-6 border border-white/7 flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-dim flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-person-fill text-black text-2xl"></i>
                </div>
                <div className="min-w-0">
                  <h4 className="text-lg font-black font-mulish heading-text mb-1">{referee.name}</h4>
                  <p className="text-accent text-sm font-semibold mb-3">{referee.role}</p>
                  <ul className="space-y-1">
                    <li>
                      <a href={`mailto:${referee.email}`} className="inline-flex items-center gap-2 text-sm body-text hover:text-accent transition-colors break-all">
                        <i className="bi bi-envelope text-accent"></i> {referee.email}
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${referee.phone}`} className="inline-flex items-center gap-2 text-sm body-text hover:text-accent transition-colors">
                        <i className="bi bi-telephone text-accent"></i> {referee.phone}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs muted-text mt-10">
            I consent to the processing of my personal data for recruitment purposes.
          </p>
        </div>
      </div>
    </section>
  );
}