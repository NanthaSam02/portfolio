import "./Contact.css";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const whatsappMessage = `
Name: ${name}
Email: ${email}
Message: ${message}
    `;

    const whatsappURL = `https://wa.me/919626757495?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

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

          <div className="info-item">
            📧 <span>nanthakumaran081@gmail.com</span>
          </div>

          <div className="info-item">
            📞 <span>+91 9626757495</span>
          </div>

          <div className="info-item">
            📍 <span>Chennai, TamilNadu</span>
          </div>
        </div>

        {/* Right */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Footer */}
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