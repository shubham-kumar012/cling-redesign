import { servicesData } from '../data/siteData';

export default function Services() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-wrapper services-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <div className="section-eyebrow">Capabilities &amp; Services</div>
          <h2 className="section-heading">Technology built around your business.</h2>
          <p className="section-subheading">
            From digital products to enterprise systems, we combine design, engineering and
            technology to solve real business problems.
          </p>
        </div>

        {/* Services list */}
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div
              key={service.number}
              className={`service-row reveal-on-scroll service-stagger-${index + 1}`}
              tabIndex={0}
            >
              <div className="service-number-col">
                <span className="service-number">{service.number}</span>
                <span className="service-accent-line" aria-hidden="true"></span>
              </div>

              <div className="service-main-col">
                <div className="service-title-wrap">
                  {service.icon && (
                    <img
                      src={service.icon}
                      alt=""
                      className="service-icon-img"
                      width="24"
                      height="24"
                      aria-hidden="true"
                    />
                  )}
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                
                {/* Deliverable pills */}
                <div className="service-deliverables">
                  {service.deliverables.map((item) => (
                    <span key={item} className="service-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="service-action-col">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="service-link-trigger"
                  aria-label={`Discuss ${service.title}`}
                >
                  <span className="service-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
