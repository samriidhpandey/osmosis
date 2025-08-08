import React from 'react'
// import React, { useState } from "react";
import pic from '../image/sun2.jpg'


function Contactt({isDark}) {
  const Contact = {
    backgroundColor: isDark ? '#0E121B' : 'white',
    color: isDark ? 'white' : 'black',
  };
  const cont = {
    backgroundColor: isDark ? 'white' : 'darkred',
    color: isDark ? 'black' : 'white',
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
                    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required onChange={handleChange} value={formData.name} />
      <input type="email" name="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
      <input type="text" name="phone" placeholder="Phone" required onChange={handleChange} value={formData.phone} />
      <input type="text" name="subject" placeholder="Subject" required onChange={handleChange} value={formData.subject} />
      <textarea name="message" placeholder="Message" required onChange={handleChange} value={formData.message}></textarea>
      <button type="submit">Send</button>
    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactt