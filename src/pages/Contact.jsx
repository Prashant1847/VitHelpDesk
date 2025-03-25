import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <section className="contact-info">
          <h1>Contact Us</h1>
          <p>Have questions? We'd love to hear from you. Get in touch with us through any of the following channels.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <h3>Address</h3>
              <p>VIT University</p>
              <p>Vellore, Tamil Nadu 632014</p>
              <p>India</p>
            </div>

            <div className="contact-item">
              <h3>Email</h3>
              <p>support@vitquery.edu</p>
              <p>admissions@vitquery.edu</p>
            </div>

            <div className="contact-item">
              <h3>Phone</h3>
              <p>+91 (416) 220-3000</p>
              <p>+91 (416) 220-3001</p>
            </div>

            <div className="contact-item">
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </section>

        <section className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5796957893825!2d79.15259731482193!3d12.969429090855802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1648005761713!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VIT Location"
          />
        </section>
      </div>
    </div>
  );
};

export default Contact; 