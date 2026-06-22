const PORTAL_URL = 'https://redriver-kohl.vercel.app'

const SERVICES = [
  { icon: '🖨️', title: 'Large Format Printing', desc: 'Vinyl banners, fabric displays, wallpaper, and UV DTF — priced per square metre.' },
  { icon: '🪧', title: 'Signage & Boards', desc: 'Foam board, Correx, ACM, ABS, and Plexiglass with vinyl or print applied.' },
  { icon: '👕', title: 'Branded Merch', desc: 'Business cards, flyers, branded clothing, and promotional items.' },
  { icon: '🚚', title: 'Delivery & Installation', desc: 'Fleet delivery across Johannesburg with professional on-site installation.' },
  { icon: '🎨', title: 'Artwork Support', desc: 'Print-ready file checks and spec confirmation before we hit print.' },
  { icon: '📄', title: 'Sage-Ready Invoicing', desc: 'Full quote-to-invoice workflow with VAT-compliant documents.' },
]

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">Jozi <span>Graphix</span></div>
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
        <div className="hero-badge">Graphix straight out of Jozi!!</div>
        <h1 className="hero-title">
          Print Bold.<br />
          <span className="red">Stand Out.</span>
        </h1>
        <p className="hero-sub">
          Johannesburg's premier printing partner. From business cards to large-format banners — we bring your brand to life with precision and quality.
        </p>
        <div className="hero-btns">
          <a href={PORTAL_URL} className="btn-primary">Start Your Order</a>
          <a href="#services" className="btn-secondary">View Services</a>
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
            {SERVICES.map(s => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
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

      {/* FOOTER */}
      <footer id="contact">
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
