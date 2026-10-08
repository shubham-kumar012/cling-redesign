export default function FinalCTA() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="final-cta-section" aria-label="Call to Action">
      <div className="container">
        <div className="final-cta-card reveal-on-scroll">
          <div className="final-cta-content">
            <span className="final-cta-eyebrow">Ready to Engineer</span>
            <h2 className="final-cta-heading">Have an idea worth building?</h2>
            <p className="final-cta-subheading">
              Tell us what you're working on. We'll help you figure out what comes next.
            </p>
          </div>

          <div className="final-cta-action">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="btn-primary final-cta-btn"
            >
              <span>Start a Conversation</span>
              <span className="arrow-hover" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
