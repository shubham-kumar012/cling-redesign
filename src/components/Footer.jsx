import { contactInfo } from '../data/siteData';

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="container">
        {/* Navigation & contact columns */}
        <div className="footer-grid">
          {/* Brand & summary */}
          <div className="footer-col footer-col--brand">
            <a
              href="#home"
              onClick={scrollToTop}
              className="footer-brand-link"
              aria-label="Back to Top"
            >
              <img
                src="/logo-2.png"
                alt="Cling Info Tech"
                className="footer-logo-img"
                width="135"
                height="57"
              />
            </a>
            <p className="footer-brand-desc">
              Cling Info Tech builds digital products, software systems and technology
              solutions for forward-looking businesses worldwide.
            </p>
            <div className="footer-cert-badge">
              <span className="cert-dot"></span>
              ISO Certified &amp; Enterprise Ready
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#about" onClick={(e) => scrollTo(e, '#about')}>
                  About Story
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, '#services')}>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#work" onClick={(e) => scrollTo(e, '#work')}>
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#technology" onClick={(e) => scrollTo(e, '#technology')}>
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Capabilities</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, '#services')}>
                  Web &amp; Product Engineering
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, '#services')}>
                  iOS &amp; Android Apps
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, '#services')}>
                  Enterprise ERP Systems
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, '#services')}>
                  Computer Vision &amp; AI
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollTo(e, '#services')}>
                  Cloud &amp; DevOps Advisory
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-col--contact">
            <h4 className="footer-col-title">Locations &amp; Contact</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Noida HQ</span>
              <p className="footer-contact-text">{contactInfo.headOffice.address}</p>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Pune Office</span>
              <p className="footer-contact-text">{contactInfo.branchOffice.address}</p>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Direct Line</span>
              <p className="footer-contact-text">
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </p>
              <p className="footer-contact-text">
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
            </div>
          </div>
        </div>

        {/* Legal & back to top */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 Cling Info Tech Works Private Limited. All rights reserved.
          </div>

          <div className="footer-bottom-links">
            <a href="#home" onClick={scrollToTop} className="footer-top-anchor">
              <span>Back to top</span>
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
