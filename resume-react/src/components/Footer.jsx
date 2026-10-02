export default function Footer() {
  return (
    <footer className="footer-bg pt-14 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="sitename text-2xl font-black font-mulish mb-4">JNOLLY</div>
            <p className="body-text text-sm leading-relaxed mb-6 max-w-sm">
              Computer Science student at Moi University passionate about building secure, elegant systems and contributing to meaningful technology projects.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/JNOLLY331/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 body-text hover:bg-accent hover:text-black transition-all duration-300"><i className="bi bi-github"></i></a>
              <a href="https://japhethanold.onrender.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 body-text hover:bg-accent hover:text-black transition-all duration-300"><i className="bi bi-briefcase-fill"></i></a>
              <a href="mailto:japhethanold2@gmail.com" className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 body-text hover:bg-accent hover:text-black transition-all duration-300"><i className="bi bi-envelope-fill"></i></a>
              <a href="https://wa.me/254704345035?text=Hello%20Japheth" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 body-text hover:bg-accent hover:text-black transition-all duration-300">
                <i className="bi bi-whatsapp"></i> 
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-black font-mulish heading-text mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-sm body-text hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm body-text hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="text-sm body-text hover:text-accent transition-colors">Services</a></li>
              <li><a href="#resume" className="text-sm body-text hover:text-accent transition-colors">Education</a></li>
              <li><a href="#contact" className="text-sm body-text hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-black font-mulish heading-text mb-5 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-sm body-text">Eldoret, Kenya</li>
              <li className="text-sm body-text">+254 704 345035</li>
              <li className="text-sm body-text break-all">japhethanold2@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 text-center">
          <p className="text-sm body-text">© <span className="text-accent font-semibold">Japheth Anold Dindi</span> · All Rights Reserved</p>
          <p className="text-xs muted-text mt-1">BSc. Computer Science · Moi University</p>
        </div>
      </div>
    </footer>
  );
}