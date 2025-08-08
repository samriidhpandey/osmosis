import React, { useState } from 'react';
import pic from '../image/sun2.jpg'

const Contactt = ({isDark}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const Contact = {
    backgroundColor: isDark ? '#0E121B' : 'white',
    color: isDark ? 'white' : 'black',
  };
  const cont = {
    backgroundColor: isDark ? 'white' : 'darkred',
    color: isDark ? 'black' : 'white',
  };

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
    <>
      <div className="container-fluid">
              <div className="row pt-5 pb-5 border-top" style={Contact}>
                <div className="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-9 m-auto">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
      
                      <div className="row">
                        <div className="col-10 col-sm-8 col-md-8 col-lg-9 col-xl-8 col-xxl-8 mt-5 mb-5 founder">
                          <h2 className='fw-bolder'>Contact Us</h2>
                          <p className='mt-3'>We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!</p>
                          <p className='mt-3'>You can also contact us at Computerosmosis@gmail.com for any queries.</p>
                          <div className="row p-0">
                            <div className="col-12 mt-3">
                                <img src={pic} className='img-fluid rounded' alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" >
                      <div className="container mt-5 mb-5">
                        <div className="card p-4 shadow-sm" style={cont}>
                          <form onSubmit={handleSubmit} method='post'>

        <div className="mb-3">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder='Enter your name' required />
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder='Enter your email' required />
        </div>

        <div className="mb-3">
          <label>Phone:</label>
          <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} placeholder='Enter your phone' required />
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
        {status && <p className="mt-3">{status}</p>}
      </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

    </>
  );
};

export default Contactt;
