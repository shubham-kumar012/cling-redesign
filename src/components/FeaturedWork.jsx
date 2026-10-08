import { featuredProjects } from '../data/siteData';

export default function FeaturedWork() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="section-wrapper section-wrapper--secondary featured-work-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <div className="section-eyebrow">Case Studies &amp; Deployments</div>
          <h2 className="section-heading">Selected work.</h2>
          <p className="section-subheading">
            Enterprise platforms, computer vision engines, and consumer digital products built
            for high reliability and scale.
          </p>
        </div>

        {/* Selected project case studies */}
        <div className="projects-list">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={project.number}
                className={`project-block reveal-on-scroll ${isReversed ? 'project-block--reversed' : ''}`}
              >
                {/* Media preview */}
                <div className="project-media-col">
                  <div className="project-media-frame">
                    {project.mediaType === 'video' ? (
                      <div className="project-video-wrapper">
                        <video
                          src={project.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="project-video-element"
                          aria-label={project.title}
                        />
                        <div className="project-video-tag">Live Computer Vision Stream</div>
                      </div>
                    ) : project.number === '01' ? (
                      <div className="project-erp-wrapper">
                        <div className="project-erp-showcase">
                          <div className="project-erp-disc">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="project-erp-image"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="project-media-tag">Industrial ERP Core</div>
                        <div className="project-erp-client-badge">
                          <span>{project.client}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="project-image-wrapper">
                        <div className="project-health-card">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="project-image-element"
                            loading="lazy"
                          />
                        </div>
                        <div className="project-media-tag">Connected Health Platform</div>
                        {project.client && (
                          <div className="project-client-pill">
                            <span>{project.client}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Project details */}
                <div className="project-content-col">
                  <div className="project-meta-top">
                    <span className="project-number">{project.number}</span>
                    <span className="project-category">{project.category}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-meta-bottom">
                    <div className="project-impact-note">
                      <span className="impact-indicator"></span>
                      <span className="impact-text">{project.impact}</span>
                    </div>

                    <a
                      href="#contact"
                      onClick={scrollToContact}
                      className="project-cta-link"
                    >
                      <span>Discuss similar solution</span>
                      <span className="arrow-hover" aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
