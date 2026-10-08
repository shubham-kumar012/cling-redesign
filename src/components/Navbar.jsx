import { useState, useEffect } from 'react';
import { navLinks } from '../data/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['#home', '#services', '#work', '#about', '#technology', '#contact']
      .map((id) => document.querySelector(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(href);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-header--scrolled' : ''}`}>
      <div className="container navbar-container">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="navbar-brand"
          aria-label="Cling Info Tech Home"
        >
          <img
            src="/logo-2.png"
            alt="Cling Info Tech"
            className="navbar-logo-img"
            width="135"
            height="57"
          />
        </a>

        {/* Desktop links */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="navbar-nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`navbar-nav-link ${isActive ? 'navbar-nav-link--active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="navbar-actions">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="btn-primary navbar-cta-btn"
          >
            <span>Let's Talk</span>
            <span className="arrow-hover" aria-hidden="true">→</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-top-open' : ''}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-mid-open' : ''}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? 'bar-bot-open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="navbar-mobile-menu"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="navbar-mobile-header">
              <img
                src="/logo-2.png"
                alt="Cling Info Tech"
                className="navbar-logo-img"
                width="120"
                height="50"
              />
              <button
                type="button"
                className="navbar-mobile-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <nav className="navbar-mobile-nav">
              <ul>
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className={`navbar-mobile-link ${isActive ? 'navbar-mobile-link--active' : ''}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="navbar-mobile-footer">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="btn-primary navbar-mobile-cta"
              >
                <span>Let's Talk</span>
                <span aria-hidden="true">→</span>
              </a>
              <p className="navbar-mobile-meta">info@clinginfotech.com</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
