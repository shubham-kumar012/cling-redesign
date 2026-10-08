export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Intro text & call-to-actions */}
        <div className="hero-content">
          <div className="hero-eyebrow hero-animate-eyebrow">
            <span className="hero-eyebrow-dot"></span>
            CLING INFO TECH
          </div>

          <h1 className="hero-title hero-animate-title">
            Digital solutions built around your business.
          </h1>

          <p className="hero-description hero-animate-desc">
            We turn ambitious ideas into dependable websites, applications, enterprise
            systems and intelligent digital products.
          </p>

          <div className="hero-actions hero-animate-actions">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="btn-primary hero-btn-primary"
            >
              <span>Start a Project</span>
              <span className="arrow-hover" aria-hidden="true">→</span>
            </a>
            <a
              href="#work"
              onClick={(e) => scrollTo(e, '#work')}
              className="btn-secondary hero-btn-secondary"
            >
              Explore Our Work
            </a>
          </div>

          {/* Quick credibility metrics */}
          <div className="hero-credentials hero-animate-credentials">
            <div className="hero-credential-item">
              <span className="credential-metric">350+</span>
              <span className="credential-label">Deployments Completed</span>
            </div>
            <div className="hero-credential-divider"></div>
            <div className="hero-credential-item">
              <span className="credential-metric">99.4%</span>
              <span className="credential-label">Client Retention</span>
            </div>
            <div className="hero-credential-divider"></div>
            <div className="hero-credential-item">
              <span className="credential-metric">12+</span>
              <span className="credential-label">Countries Served</span>
            </div>
          </div>
        </div>

        {/* Visual team showcase & badges */}
        <div className="hero-visual hero-animate-visual">
          <div className="hero-frame">
            <div className="hero-media-wrapper">
              <img
                src="/Home-Section/homeimage.jpg"
                alt="Cling Info Tech consulting engineers and product leads architecting digital solutions"
                className="hero-image"
                width="640"
                height="586"
                loading="eager"
              />

              {/* Status pills overlaid on image */}
              <div className="hero-image-topbar">
                <div className="hero-squad-badge">
                  <span className="squad-pulse-dot" aria-hidden="true"></span>
                  <span className="squad-badge-text">Senior Engineering Squad</span>
                </div>
                <div className="hero-location-badge">
                  <span>Noida HQ · Global Delivery</span>
                </div>
              </div>

              {/* Projects count badge */}
              <div className="hero-floating-proof">
                <div className="proof-icon" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="proof-content">
                  <span className="proof-metric">390+ Projects Shipped</span>
                  <span className="proof-caption">Web · Mobile · Enterprise ERP</span>
                </div>
              </div>
            </div>

            <div className="hero-frame-footer">
              <div className="frame-footer-col">
                <span className="footer-col-label">Capabilities</span>
                <span className="footer-col-val">Full-Stack · Mobile · ERP · AI</span>
              </div>
              <div className="frame-footer-col">
                <span className="footer-col-label">Delivery Model</span>
                <span className="footer-col-val">Dedicated Agile Squads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
