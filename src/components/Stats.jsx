import { statsData } from '../data/siteData';

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Company Statistics">
      <div className="container">
        <div className="stats-strip reveal-on-scroll">
          {statsData.map((stat, idx) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-detail">{stat.detail}</div>
              {idx < statsData.length - 1 && (
                <div className="stat-divider" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
