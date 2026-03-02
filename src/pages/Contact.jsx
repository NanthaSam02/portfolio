import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-wrapper">
        {/* Left */}
        <div className="contact-info">
          <p>
            Interested in working together or have any questions?
            Feel free to reach out.
          </p>

          <div className="info-item">📧 <span>nanthakumaran081@gmail.com</span></div>
          <div className="info-item">📞 <span>+91 9626757495</span></div>
          <div className="info-item">📍 <span>Chennai, TamilNadu</span></div>
        </div>

        {/* Right */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* ===== FOOTER INSIDE CONTACT ===== */}
      <div className="contact-footer">
        <div className="footer-line"></div>

        <div className="footer-logo">
          <span>N</span>
        </div>

        <div className="footer-line"></div>

        <p className="footer-text">
          Designed & Developed by{" "}
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noreferrer"
          >
            Nanthakumaran
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;