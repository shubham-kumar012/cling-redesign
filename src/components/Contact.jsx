import { useState } from 'react';
import { contactInfo } from '../data/siteData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulated form submission feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Office locations and direct details */}
          <div className="contact-info-col reveal-on-scroll">
            <div className="section-eyebrow">Initiate Contact</div>
            <h2 className="section-heading">Let's build something useful.</h2>
            <p className="section-subheading">
              Tell us what you're working on. We'll help you figure out the optimal architecture,
              timelines, and execution path.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-block">
                <div className="contact-detail-title">Direct Inquiries</div>
                <div className="contact-detail-value">
                  <a href={`mailto:${contactInfo.email}`} className="contact-link">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="contact-detail-value">
                  <a href={`tel:${contactInfo.phone}`} className="contact-link">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="contact-detail-block">
                <div className="contact-detail-title">{contactInfo.headOffice.title}</div>
                <p className="contact-detail-address">{contactInfo.headOffice.address}</p>
              </div>

              <div className="contact-detail-block">
                <div className="contact-detail-title">{contactInfo.branchOffice.title}</div>
                <p className="contact-detail-address">{contactInfo.branchOffice.address}</p>
              </div>
            </div>
          </div>

          {/* Project inquiry form */}
          <div className="contact-form-col reveal-on-scroll">
            <div className="contact-form-card">
              {submitted ? (
                <div className="contact-success-box" role="status">
                  <div className="success-icon-badge">✓</div>
                  <h3 className="success-title">Message Received</h3>
                  <p className="success-text">
                    Thank you, {formData.fullName || 'there'}. A senior technical advisor from our
                    team will review your inquiry and get back to you within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', company: '', message: '' });
                    }}
                    className="btn-secondary"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate={false}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Full Name <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Sharma"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Business Email <span className="required-star">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ramesh@company.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company or Organization"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Project Details &amp; Objectives <span className="required-star">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your requirements, timeline, or current challenge..."
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary form-submit-btn"
                  >
                    <span>{submitting ? 'Sending Request...' : 'Send Message'}</span>
                    <span className="arrow-hover" aria-hidden="true">→</span>
                  </button>

                  <p className="form-disclaimer">
                    We treat all shared technical requirements under strict mutual non-disclosure.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
