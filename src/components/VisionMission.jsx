export default function VisionMission() {
  return (
    <section className="vision-mission-section" aria-label="Vision and Mission">
      <div className="container">
        <div className="vision-mission-wrapper reveal-on-scroll">
          <div className="vision-mission-col">
            <div className="vm-label">Our Vision</div>
            <blockquote className="vm-statement">
              "Building technology that creates meaningful business impact."
            </blockquote>
            <p className="vm-detail">
              We envision digital ecosystems where software is not just an operational necessity,
              but an enduring competitive differentiator for every client we serve.
            </p>
          </div>

          <div className="vm-divider" aria-hidden="true"></div>

          <div className="vision-mission-col">
            <div className="vm-label">Our Mission</div>
            <blockquote className="vm-statement">
              "Combining technology, design and practical problem solving to help businesses grow."
            </blockquote>
            <p className="vm-detail">
              We deploy disciplined software engineering, dependable system architectures, and
              meticulous product craft to turn complex business hurdles into automated clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
