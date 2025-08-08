import React from 'react'
// import React, { useState } from "react";
import pic from '../image/sun2.jpg'


function Contact({isDark}) {
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
                    <p className='mt-3'>You can also contact us at contact@codewithharry.com for any payment or course access related queries.</p>
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
                    <form >
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Your Name" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" placeholder="Your 10-digit Indian Number" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input type="text" className="form-control" placeholder="Subject" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" placeholder="Type your message here." rows="2"></textarea>
                      </div>

                      <div className="border p-4 rounded d-flex align-items-center bg-light text-dark justify-content-between w-75">
              <div>
                <input type="checkbox" id="captcha" className="form-check-input me-2" />
                <label htmlFor="captcha">I'm not a robot</label>
              </div>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="captcha"
                style={{ width: "34px", height: "34px", }}
              />
            </div>

                      
                      

                      <button type="submit" className="btn btn-light w-100 mt-3">
                        Send Message
                      </button>
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

export default Contact