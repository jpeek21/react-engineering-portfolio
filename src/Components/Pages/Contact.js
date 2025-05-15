import React from 'react';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mkgrqjao");

  return (
    <div className="contact-page">
      <div className="contact-form-section">
        <h2>Let's Talk</h2>

        {state.succeeded ? (
          <p className="success-message">✅ Message Sent!</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name *</label>
            <input id="name" type="text" name="name" placeholder="Enter your name" required />

            <label htmlFor="email">Email *</label>
            <input id="email" type="email" name="email" placeholder="Enter your email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" placeholder="Write your message here" rows="6" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting}>Send Message</button>
          </form>
        )}
      </div>

      <div className="contact-info-section">
        <h2>Contact Info</h2>
        <a
          href="https://linkedin.com/in/jonathan-peek-uci"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="linkedin-icon"
          />
        </a>
        <p>Email Me</p>
        <a href="mailto:peekj@uci.edu">peekj@uci.edu</a>
      </div>
    </div>
  );
}

export default Contact;