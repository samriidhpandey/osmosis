import React, { useState } from 'react';
import pic from '../image/sun2.jpg';

function Contactt({ isDark }) {
  await fetch("http://localhost:5000/api/contact", 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = { name, email, phone, subject, message };

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        setName(""); setEmail(""); setPhone(""); setSubject(""); setMessage("");
      } else {
        alert("Failed: " + result.error);
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message");
    }
  };

  const Contact = {
    backgroundColor: isDark ? '#0E121B' : 'white',
    color: isDark ? 'white' : 'black',
  };

  const cont = {
    backgroundColor: isDark ? 'white' : 'darkred',
    color: isDark ? 'black' : 'white',
  };

  return (
    <div className="container-fluid">
      <div className="row pt-5 pb-5 border-top" style={Contact}>
        <div className="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-9 m-auto">
          <div className="row">
            {/* Left side */}
            <div className="col-12 col-md-6">
              <div className="mt-5 mb-5">
                <h2 className='fw-bolder'>Contact Us</h2>
                <p className='mt-3'>
                  We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!
                </p>
                <p className='mt-3'>You can also contact us at <b>Computerosmosis@gmail.com</b>.</p>
                <img src={pic} className='img-fluid rounded mt-3' alt="contact" />
              </div>
            </div>

            {/* Right side (form) */}
            <div className="col-12 col-md-6">
              <div className="container mt-5 mb-5">
                <div className="card shadow-sm p-3" style={cont}>
                  <form onSubmit={handleSubmit} method='post'>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required className="form-control my-2" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="form-control my-2" />
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required className="form-control my-2" />
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" required className="form-control my-2" />
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required className="form-control my-2" />
                    <button type="submit" className="btn btn-primary mt-2">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Contactt;
