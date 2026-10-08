import { contactInfo } from '../data/siteData';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello Cling Info Tech, I would like to inquire about digital solutions and software development services.'
  )}`;

  return (
    <aside aria-label="Quick Communication">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating"
        aria-label="Chat with Cling Info Tech on WhatsApp"
        title="Chat on WhatsApp"
      >
        <img
          src="/whatsapp-icon.png"
          alt="WhatsApp chat"
          width="28"
          height="28"
          loading="lazy"
        />
      </a>
    </aside>
  );
}
