import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

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
      alert('All fields are required!');
    } else if (!emailError) {
      alert('Message sent successfully!');
      setEmail('');
      setName('');
      setMessage('');
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} onBlur={(e) => !e.target.value && alert('This field is required')} />
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={(e) => validateEmail(e.target.value)} />
        {emailError && <div className="notification">{emailError}</div>}
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} onBlur={(e) => !e.target.value && alert('This field is required')}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
