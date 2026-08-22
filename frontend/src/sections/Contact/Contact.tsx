// JohnnyPortfolio/frontend/src/sections/Contact/Contact.tsx

import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        <div className="contact__wordmark">
          <img src="/images/Paredez2.png" alt="Paredez" />
        </div>

        <div className="contact__info">
          <h2>Contact</h2>

          <div className="contact__links">
            <a href="mailto:johnny@jparedez.dev">
              email: johnny@jparedez.dev
            </a>

            <a href="tel:+14803098778">
              mobile: (480) 309-8778
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;