import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with the Lebanese Basketball community</p>
        </div>
      </section>

      <main className="container" style={{ padding: '3rem 0' }}>
        <div className="grid">
          <div>
            <div className="card">
              <h2>Get in Touch</h2>
              <div className="contact-info">
                <p><strong>📍 Location:</strong> Beirut, Lebanon</p>
                <p><strong>📞 Phone:</strong> +961 1 234 567</p>
                <p><strong>✉️ Email:</strong> info@lebanesebasketball.com</p>
                <p><strong>🕒 Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
              
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">YouTube</a>
              </div>
            </div>

            <div className="card">
              <h2>Office Locations</h2>
              <div className="contact-info">
                <p><strong>Main Office:</strong> Beirut Central District, Lebanon</p>
                <p><strong>North Branch:</strong> Tripoli, Lebanon</p>
                <p><strong>South Branch:</strong> Sidon, Lebanon</p>
                <p><strong>Bekaa Branch:</strong> Zahle, Lebanon</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid #ddd' }}
                ></textarea>
              </div>

              <button type="submit" className="btn">Send Message</button>
              
              {submitted && (
                <div className="success-message">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;