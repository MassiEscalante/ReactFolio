import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formError, setFormError] = useState('');

  const validateEmail = (email) => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setFormError('All fields are required!');
    } else if (!emailError) {
      setFormError('');
      alert('Message sent successfully!');
      setEmail('');
      setName('');
      setMessage('');
    }
  };

  return (
    <section className="contact-container">
      <h2>Contact Me</h2>

      {/* Updated Lottie Animation with a unique class for the Contact page */}
      <div className="contact-animation-container">
        <dotlottie-player
          src="https://lottie.host/f7da4991-81b1-41b1-8a36-a54df8ba53b9/S1fLnJ3cl7.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></dotlottie-player>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={(e) => !e.target.value && setFormError('Name is required')}
          className="form-control"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => validateEmail(e.target.value)}
          className="form-control"
        />
        {emailError && <div className="notification">{emailError}</div>}
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={(e) => !e.target.value && setFormError('Message is required')}
          className="form-control"
        />
        {formError && <div className="notification">{formError}</div>}
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
