export default function About() {
  return (
    <section id="about" className="section-alt py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #006400, transparent)', transform: 'translate(30%, -30%)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase font-raleway subtitle-line mb-6">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-black font-mulish heading-text font-light">About <span className="font-black">Me</span></h2>
          <p className="mt-4 text-base leading-relaxed max-w-2xl mx-auto body-text">
            Computer Science student at Moi University, passionate about building secure, well-engineered web systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Profile card (col 4) */}
          <div className="lg:col-span-4" data-aos="zoom-in" data-aos-delay="150">
            <div className="card-surface rounded-3xl p-8 sticky top-28">
              {/* Avatar */}
              <div className="text-center pb-8 border-b border-white/5">
                <div className="avatar-ring  mb-5 relative">
                  <img src="/images/image.png" alt="Japheth Anold" />
                </div>
                <h3 className="text-xl font-black font-mulish heading-text">Japheth Anold</h3>
                <span className="text-accent text-sm font-semibold font-raleway">Computer Science Student · Moi University</span>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <i className="bi bi-patch-check-fill text-accent text-sm"></i>
                  <span className="text-sm font-semibold body-text">KCSE Grade A- (Minus)</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-b border-white/5 text-center items-stretch">
                <div className="flex flex-col justify-between">
                  <div className="text-2xl font-black text-accent font-mulish">6+</div>
                  <div className="text-xs muted-text uppercase tracking-wider mt-2">Courses</div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="text-2xl font-black text-accent font-mulish">2023</div>
                  <div className="text-xs muted-text uppercase tracking-wider mt-2">Started</div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="text-base sm:text-lg font-black text-accent font-mulish leading-tight">Computer Science</div>
                  <div className="text-xs muted-text uppercase tracking-wider mt-2">Major</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 py-6 border-b border-white/5">
                <a href="#resume" className="btn-primary-accent flex items-center justify-center gap-2 py-3 text-sm">
                  <i className="bi bi-file-earmark-person"></i> View Resume
                </a>
                <a href="#contact" className="btn-outline-accent flex items-center justify-center gap-2 py-3 text-sm">
                  <i className="bi bi-envelope"></i> Contact Me
                </a>
              </div>

              {/* Social */}
              <div className="flex justify-center gap-3 pt-6">
                <a href="https://github.com/JNOLLY331/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 heading-text hover:bg-accent/40 hover:text-black transition-all duration-300"><i className="bi bi-github"></i></a>
                <a href="https://japhethanold.onrender.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 heading-text hover:bg-accent/40 hover:text-black transition-all duration-300"><i className="bi bi-briefcase-fill"></i></a>
                <a href="https://wa.me/254704345035?text=Hello%20Japheth" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 heading-text hover:bg-accent/40 hover:text-black transition-all duration-300"><i className="bi bi-whatsapp"></i></a>
              </div>
            </div>
          </div>

          {/* Content (col 8) */}
          <div className="lg:col-span-8">
            {/* Bio */}
            <div className="mb-12" data-aos="fade-left" data-aos-delay="200">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-bold text-accent bg-accent/10 font-raleway uppercase tracking-wider mb-4">Professional Bio</span>
              <h2 className="text-2xl sm:text-3xl font-black font-mulish heading-text mb-6">Building Secure, Elegant Digital Systems</h2>
              <p className="body-text leading-relaxed mb-4">
                I am a driven Computer Science student at Moi University, Eldoret, with a passion for system development, web technologies, and networking fundamentals. My academic focus covers the SDLC, data structures, algorithms, and hands-on web technologies including HTML, CSS, Django, React, and REST APIs.
              </p>
              <p className="body-text leading-relaxed">
                Beyond coursework, I have completed certified training in Python (Django), Full Stack React &amp; Django, SQL &amp; NoSQL, UI/UX Design, DevOps &amp; CI/CD, and Cisco Networking Essentials — building RESTful APIs, managing PostgreSQL databases, implementing JWT authentication, and hosting live projects online. I actively seek internships and roles where I can apply these skills to real-world problems.
              </p>
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="detail-card card-surface rounded-2xl p-5 flex items-center gap-4" data-aos="fade-up" data-aos-delay="250">
                <i className="bi bi-mortarboard text-accent text-3xl flex-shrink-0"></i>
                <div>
                  <span className="text-xs muted-text uppercase tracking-wider block">University</span>
                  <strong className="heading-text font-semibold text-sm">Moi University — BSc. Computer Science</strong>
                </div>
              </div>
              <div className="detail-card card-surface rounded-2xl p-5 flex items-center gap-4" data-aos="fade-up" data-aos-delay="280">
                <i className="bi bi-geo-alt text-accent text-3xl flex-shrink-0"></i>
                <div>
                  <span className="text-xs muted-text uppercase tracking-wider block">Based In</span>
                  <strong className="heading-text font-semibold text-sm">Eldoret, Kenya</strong>
                </div>
              </div>
              <div className="detail-card card-surface rounded-2xl p-5 flex items-center gap-4" data-aos="fade-up" data-aos-delay="310">
                <i className="bi bi-envelope text-accent text-3xl flex-shrink-0"></i>
                <div>
                  <span className="text-xs muted-text uppercase tracking-wider block">Email</span>
                  <strong className="heading-text font-semibold text-sm break-all">japhethanold2@gmail.com</strong>
                </div>
              </div>
              <div className="detail-card card-surface rounded-2xl p-5 flex items-center gap-4" data-aos="fade-up" data-aos-delay="340">
                <i className="bi bi-phone text-accent text-3xl flex-shrink-0"></i>
                <div>
                  <span className="text-xs muted-text uppercase tracking-wider block">Phone</span>
                  <strong className="heading-text font-semibold text-sm">+254 704 345035</strong>
                </div>
              </div>
              <div className="detail-card card-surface rounded-2xl p-5 flex items-center gap-4" data-aos="fade-up" data-aos-delay="370">
                <i className="bi bi-globe text-accent text-3xl flex-shrink-0"></i>
                <div>
                  <span className="text-xs muted-text uppercase tracking-wider block">Portfolio</span>
                  <strong className="heading-text font-semibold text-sm">japhethanold.onrender.com</strong>
                </div>
              </div>
              <div className="detail-card card-surface rounded-2xl p-5 flex items-center gap-4" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-github text-accent text-3xl flex-shrink-0"></i>
                <div>
                  <span className="text-xs muted-text uppercase tracking-wider block">GitHub</span>
                  <strong className="heading-text font-semibold text-sm">github.com/JNOLLY331</strong>
                </div>
              </div>
              <div className="detail-card card-surface rounded-2xl p-5 flex items-center gap-4" data-aos="fade-up" data-aos-delay="430">
                <i className="bi bi-translate text-accent text-3xl flex-shrink-0"></i>
                <div>
                  <span className="text-xs muted-text uppercase tracking-wider block">Languages</span>
                  <strong className="heading-text font-semibold text-sm">English &amp; Swahili — Fluent</strong>
                </div>
              </div>
              <div className="detail-card card-surface rounded-2xl p-5 flex items-center gap-4" data-aos="fade-up" data-aos-delay="460">
                <i className="bi bi-calendar-check text-accent text-3xl flex-shrink-0"></i>
                <div>
                  <span className="text-xs muted-text uppercase tracking-wider block">Availability</span>
                  <strong className="heading-text font-semibold text-sm">Open to Internships &amp; Roles</strong>
                </div>
              </div>
            </div>

            {/* Personal qualities */}
            <div className="mb-12" data-aos="fade-up" data-aos-delay="250">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-bold text-accent bg-accent/10 font-raleway uppercase tracking-wider mb-4">Personal Qualities</span>
              <div className="flex flex-wrap gap-3">
                <span className="skill-tag"><i className="bi bi-lightbulb me-2"></i>Problem Solving</span>
                <span className="skill-tag"><i className="bi bi-mic me-2"></i>Public Speaking</span>
                <span className="skill-tag"><i className="bi bi-people me-2"></i>Team Collaboration</span>
                <span className="skill-tag"><i className="bi bi-shuffle me-2"></i>Adaptability</span>
              </div>
            </div>

            {/* Skills */}
            <div className="skills-animation" data-aos="fade-up" data-aos-delay="250">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-bold text-accent bg-accent/10 font-raleway uppercase tracking-wider mb-4">Core Competencies</span>
              <h3 className="text-2xl font-black font-mulish heading-text mb-8">Technical Skillset</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold heading-text">Web Development (Python &amp; Django)</span>
                    <span className="text-sm font-bold text-accent">85%</span>
                  </div>
                  <div className="progress-track"><div className="skill-bar-fill" data-width="85"></div></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold heading-text">App Development (Kotlin &amp; Java)</span>
                    <span className="text-sm font-bold text-accent">80%</span>
                  </div>
                  <div className="progress-track"><div className="skill-bar-fill" data-width="80"></div></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold heading-text">Information System Security (Kali Linux)</span>
                    <span className="text-sm font-bold text-accent">78%</span>
                  </div>
                  <div className="progress-track"><div className="skill-bar-fill" data-width="78"></div></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold heading-text">Computer Networks (Cisco)</span>
                    <span className="text-sm font-bold text-accent">82%</span>
                  </div>
                  <div className="progress-track"><div className="skill-bar-fill" data-width="82"></div></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold heading-text">UI/UX Design</span>
                    <span className="text-sm font-bold text-accent">75%</span>
                  </div>
                  <div className="progress-track"><div className="skill-bar-fill" data-width="75"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}