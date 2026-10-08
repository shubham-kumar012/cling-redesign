import { timelineData } from '../data/siteData';

export default function About() {
  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* Story overview */}
        <div className="about-intro-grid reveal-on-scroll">
          <div className="about-intro-left">
            <div className="section-eyebrow">About Cling</div>
            <h2 className="section-heading">Built on ideas. Driven by technology.</h2>
          </div>
          <div className="about-intro-right">
            <p className="about-lead-text">
              Cling Info Tech was founded with a straightforward conviction: software should be a
              direct engine for measurable business advancement. We combine senior architectural
              rigor with human-centered product craft to build software that organizations rely upon
              daily.
            </p>
            <p className="about-support-text">
              From our headquarters in Noida to client teams across four continents, we partner with
              fast-growing businesses, government bodies, and international brands to replace
              operational friction with high-performance digital tools.
            </p>
          </div>
        </div>

        {/* Company milestones */}
        <div className="about-timeline-container reveal-on-scroll">
          <div className="timeline-header-label">Company Milestones</div>
          <div className="timeline-grid">
            {timelineData.map((item, index) => (
              <div key={item.year} className={`timeline-node timeline-stagger-${index + 1}`}>
                <div className="timeline-node-top">
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-marker" aria-hidden="true"></span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
                {index < timelineData.length - 1 && (
                  <div className="timeline-line-connector" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
