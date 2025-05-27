import React, { useState } from 'react';


const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setAlert({ message: data.message || 'Message sent successfully!', type: 'success' });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setAlert({ message: data.message || 'Something went wrong.', type: 'error' });
      }
    } catch (err) {
      console.error('Error submitting the form:', err);
      setAlert({ message: 'Error submitting the form.', type: 'error' });
    }
  };

  return (
    <div className="container">
      
        <h1 className='contact-title'>Contact Me</h1>
      
      <main>
        {alert.message && (
          <div className={`alert ${alert.type}`}>
            {alert.message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} required></textarea>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
