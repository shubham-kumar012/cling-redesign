import { clientLogos } from '../data/siteData';

export default function Clients() {
  return (
    <section className="section-wrapper section-wrapper--white clients-section" aria-label="Clients">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <div className="section-eyebrow">Enterprise &amp; Startup Partners</div>
          <h2 className="section-heading">Trusted by teams across industries.</h2>
          <p className="section-subheading">
            From regulated fintech networks to modern retail and manufacturing leaders, we partner
            with ambitious organizations to deliver critical digital systems.
          </p>
        </div>

        {/* Client partners grid */}
        <div className="clients-logo-grid reveal-on-scroll">
          {clientLogos.map((client) => (
            <div key={client.name} className="client-logo-cell" title={client.name}>
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="client-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="clients-footer-action reveal-on-scroll">
          <span className="clients-helper-text">Showing selected client partners</span>
          <button
            type="button"
            className="btn-view-more-clients"
            aria-label="View more client partners"
          >
            <span>View More Clients</span>
            <span className="arrow-hover" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
