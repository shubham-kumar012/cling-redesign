import { testimonialsData } from '../data/siteData';

export default function Testimonials() {
  return (
    <section className="section-wrapper section-wrapper--secondary testimonials-section" aria-label="Testimonials">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <div className="section-eyebrow">Client Validation</div>
          <h2 className="section-heading">Enduring partnerships, proven results.</h2>
          <p className="section-subheading">
            Feedback from founders and enterprise leaders who trust Cling with their core product
            engineering.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((item, index) => (
            <div
              key={item.name}
              className={`testimonial-card reveal-on-scroll testimonial-stagger-${index + 1}`}
            >
              <div className="testimonial-quote-mark" aria-hidden="true">
                “
              </div>
              <blockquote className="testimonial-quote-text">
                {item.quote}
              </blockquote>

              <div className="testimonial-author-row">
                <div className="testimonial-avatar-wrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="testimonial-avatar-img"
                    loading="lazy"
                  />
                </div>
                <div className="testimonial-author-info">
                  <div className="testimonial-author-name">{item.name}</div>
                  <div className="testimonial-author-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
