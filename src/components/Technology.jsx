import { techStackData } from '../data/siteData';

export default function Technology() {
  return (
    <section id="technology" className="section-wrapper technology-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <div className="section-eyebrow">Engineering Standards</div>
          <h2 className="section-heading">The technology behind the work.</h2>
          <p className="section-subheading">
            We rely on proven, scalable, and battle-tested software foundations. Every tool in
            our stack is selected for long-term maintainability and high operational velocity.
          </p>
        </div>

        <div className="tech-categories-grid reveal-on-scroll">
          {techStackData.map((item, index) => (
            <div key={item.category} className="tech-category-card">
              <div className="tech-card-header">
                <span className="tech-index">0{index + 1}</span>
                <h3 className="tech-category-title">{item.category}</h3>
              </div>

              <ul className="tech-items-list">
                {item.techs.map((tech) => (
                  <li key={tech} className="tech-item-row">
                    <span className="tech-item-bullet" aria-hidden="true">—</span>
                    <span className="tech-item-name">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
