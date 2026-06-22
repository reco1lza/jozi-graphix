import Image from 'next/image'
import ContactForm from './ContactForm'

const PORTAL_URL = 'https://redriver-kohl.vercel.app'

const GALLERY = [
  { src: '/gallery/IMG_20250523_165538.jpg', label: 'Large format display' },
  { src: '/gallery/IMG_20250523_165845.jpg', label: 'Event activation' },
  { src: '/gallery/IMG_20250602_172725.jpg', label: 'Glass vinyl branding' },
  { src: '/gallery/IMG_20250701_164531.jpg', label: 'Board signage' },
  { src: '/gallery/IMG-20250503-WA0006.jpg', label: 'Custom board wrap' },
  { src: '/gallery/IMG_20250523_165608.jpg', label: 'Outdoor installation' },
  { src: '/gallery/IMG_20250523_165731.jpg', label: 'Event branding' },
  { src: '/gallery/IMG_20250523_165836.jpg', label: 'Branded signage' },
  { src: '/gallery/IMG_20250523_170022.jpg', label: 'Outdoor banner' },
  { src: '/gallery/IMG_20250523_170121.jpg', label: 'Installation in progress' },
  { src: '/gallery/IMG_20250225_155249.jpg', label: 'Experiential build' },
  { src: '/gallery/IMG_20250225_155304.jpg', label: 'Full venue branding' },
  { src: '/gallery/IMG_20250225_155341.jpg', label: 'Interior print' },
  { src: '/gallery/IMG_20250517_105457.jpg', label: 'Branded merchandise' },
  { src: '/gallery/IMG_20250711_183145.jpg', label: 'Cut-out signage' },
  { src: '/gallery/IMG_20250602_232444.jpg', label: 'Print production' },
  { src: '/gallery/IMG-20250503-WA0007.jpg', label: 'Signage boards' },
  { src: '/gallery/IMG-20250503-WA0017.jpg', label: 'Print & install' },
  { src: '/gallery/IMG_20250801_172234.jpg', label: 'Recent install' },
  { src: '/gallery/FB_IMG_1751611615898.jpg', label: 'Brand activation' },
]

const SERVICES = [
  { title: 'Large Format Printing', desc: 'Vinyl banners, fabric displays, wallpaper, and UV DTF, priced per square metre.' },
  { title: 'Signage & Boards', desc: 'Foam board, Correx, ACM, ABS, and Plexiglass with vinyl or print applied.' },
  { title: 'Branded Merch', desc: 'Business cards, flyers, branded clothing, and promotional items.' },
  { title: 'Delivery & Installation', desc: 'Fleet delivery across Johannesburg with professional on-site installation.' },
  { title: 'Artwork Support', desc: 'Print-ready file checks and spec confirmation before we hit print.' },
  { title: 'Sage-Ready Invoicing', desc: 'Full quote-to-invoice workflow with VAT-compliant documents.' },
]

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="#home" className="nav-logo">
          <Image src="/logo-white.png" alt="Jozi Graphix" width={160} height={50} style={{ height: 36, width: 'auto' }} priority />
        </a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href={PORTAL_URL} className="btn-order">Order Now</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <svg className="hero-slash" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="0,0 340,0 0,900" fill="#e00000" opacity="0.13"/>
          <polygon points="1440,900 1100,900 1440,0" fill="#e00000" opacity="0.13"/>
          <line x1="0" y1="900" x2="1440" y2="0" stroke="#e00000" strokeWidth="1.5" opacity="0.12"/>
        </svg>
        <div className="hero-badge">Graphix straight out of Jozi!!</div>
        <h1 className="hero-title">
          Print Bold.<br />
          <span className="red">Stand Out.</span>
        </h1>
        <p className="hero-sub">
          Johannesburg's premier printing partner. From business cards to large-format banners, we bring your brand to life with precision and quality.
        </p>
        <div className="hero-btns">
          <a href={PORTAL_URL} className="btn-primary">Start Your Quote</a>
          <a href="#services" className="btn-secondary">View Services</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><span className="stat-num">49+</span><span className="stat-label">Products</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><span className="stat-num">48h</span><span className="stat-label">Turnaround</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><span className="stat-num">5</span><span className="stat-label">Vehicle fleet</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><span className="stat-num">100%</span><span className="stat-label">Sage-ready</span></div>
        </div>

        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* SERVICES */}
      <div id="services">
        <div className="section">
          <p className="section-label">What we do</p>
          <h2 className="section-title">Everything print.<br />Nothing less.</h2>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="service-card">
                <span className="service-num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      {/* TODO before deploy: get client to review and approve this copy */}
      <div id="about" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="section about-section">
          <div className="about-left">
            <p className="section-label">Who we are</p>
            <h2 className="section-title">Graphix straight<br />out of Jozi.</h2>
            <a href={PORTAL_URL} className="btn-primary" style={{ display: 'inline-block', marginTop: 8 }}>Start your order →</a>
          </div>
          <div className="about-right">
            <p className="about-lead">We are a Johannesburg-based print and signage studio built for brands that refuse to go unnoticed.</p>
            <p className="about-body">From our workshop in the heart of Jozi, we produce large-format prints, custom signage, event activations, and branded installations for some of South Africa's most recognised names. Every job, big or small, gets the same obsessive attention to colour, finish, and deadline.</p>
            <p className="about-body">We handle everything in-house: artwork checks, production, delivery, and on-site installation. Our fleet covers Johannesburg and beyond, and our Sage-ready invoicing means your finance team stays happy too.</p>
            <div className="about-tags">
              <span className="about-tag">Large format</span>
              <span className="about-tag">Signage & boards</span>
              <span className="about-tag">Event activations</span>
              <span className="about-tag">Vinyl & glass</span>
              <span className="about-tag">Delivery & install</span>
              <span className="about-tag">Branded merch</span>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div id="gallery" style={{ background: '#0d0d0d', padding: '100px 0' }}>
        <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <p className="section-label">Our work</p>
          <h2 className="section-title">Built. Printed. Installed.</h2>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((img, i) => (
            <div key={i} className={`gallery-item ${i === 0 || i === 10 ? 'gallery-item--wide' : ''}`}>
              <Image src={img.src} alt={img.label} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="gallery-label">{img.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section" id="about">
        <h2>Ready to place your first order?</h2>
        <p>Configure your specs, upload your artwork, and get a live price instantly.</p>
        <div className="hero-btns">
          <a href={PORTAL_URL} className="btn-primary">Start your order →</a>
          <a href="mailto:info@jozigraphix.co.za" className="btn-secondary">Talk to the team</a>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact-form" style={{ padding: '100px 48px', maxWidth: 800, margin: '0 auto' }}>
        <p className="section-label">Get in touch</p>
        <h2 className="section-title">Let's make something.<br />Together.</h2>
        <ContactForm />
      </div>

      {/* FOOTER */}
      <footer id="contact">
        <Image src="/logo-white.png" alt="Jozi Graphix" width={120} height={40} style={{ height: 28, width: 'auto', opacity: 0.5 }} />
        <span>© {new Date().getFullYear()} Jozi Graphix. Johannesburg, South Africa.</span>
        <span>
          <a href="mailto:info@jozigraphix.co.za" style={{ color: 'inherit' }}>info@jozigraphix.co.za</a>
          {' · '}
          <a href="tel:+27727200125" style={{ color: 'inherit' }}>072 720 0125</a>
        </span>
      </footer>
    </>
  )
}
