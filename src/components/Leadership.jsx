import { teamData } from '../data/siteData';

export default function Leadership() {
  return (
    <section className="section-wrapper leadership-section" aria-label="Leadership Team">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <div className="section-eyebrow">Team &amp; Guidance</div>
          <h2 className="section-heading">People behind Cling.</h2>
          <p className="section-subheading">
            Our leadership team blends technical engineering leadership with corporate governance
            and international client stewardship.
          </p>
        </div>

        <div className="leadership-grid">
          {teamData.map((member, index) => (
            <div
              key={member.name}
              className={`leader-card reveal-on-scroll leader-stagger-${index + 1}`}
            >
              <div className="leader-image-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="leader-portrait-img"
                  loading="lazy"
                />
              </div>

              <div className="leader-meta">
                <h3 className="leader-name">{member.name}</h3>
                <div className="leader-role">{member.role}</div>
                <p className="leader-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
