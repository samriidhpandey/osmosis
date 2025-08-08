import React, { useState } from 'react';

const Contactt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus(`Error: ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus('Error sending message');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Phone:</label>
          <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Subject:</label>
          <input type="text" className="form-control" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Message:</label>
          <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Send</button>
      </form>

      {status && <p className="mt-3">{status}</p>}
    </div>
  );
};

export default Contactt;
