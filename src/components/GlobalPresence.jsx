import { countriesData } from '../data/siteData';

export default function GlobalPresence() {
  return (
    <section className="section-wrapper global-presence-section" aria-label="Global Presence">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <div className="section-eyebrow">International Footprint</div>
          <h2 className="section-heading">Working across borders.</h2>
          <p className="section-subheading">
            Engineering robust digital infrastructure and software systems for organizations
            across 12+ countries and key global markets.
          </p>
        </div>

        <div className="countries-grid reveal-on-scroll">
          {countriesData.map((country) => (
            <div key={country.name} className="country-card">
              <div className="country-flag-wrap">
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="country-flag-img"
                  width="28"
                  height="18"
                  loading="lazy"
                />
              </div>
              <div className="country-info">
                <span className="country-name">{country.name}</span>
                <span className="country-code">{country.code}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
