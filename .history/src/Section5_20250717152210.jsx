import React from 'react'
import { motion } from "framer-motion";

function Section5({ isDark }) {
  const Section5 = {
    backgroundColor: isDark ? '#0E121B' : 'white',
    color: isDark ? 'white' : 'black',
  };
  const student = {
    backgroundColor: isDark ? '#27272A' : 'darkred',
    color: isDark ? 'white' : 'white',
  };
  const Section6 = {
    backgroundColor: isDark ? 'black' : 'darkred',
    color: isDark ? 'white' : 'white',
  };
  const reviews = [
    { name: "Anjali Sharma", rating: 5, message: "Amazing course structure!" },
    { name: "Rahul Meena", rating: 4, message: "Loved the practical examples." },
    { name: "Priya S.", rating: 5, message: "Great support from faculty." },
    { name: "Yash Gupta", rating: 4, message: "Perfect for beginners." },
    { name: "Rohit Jain", rating: 5, message: "Highly recommend Osmosis!" },
    { name: "Sneha Verma", rating: 4, message: "Trainers are very experienced." },
    { name: "Arjun Patel", rating: 5, message: "Best computer class in Jodhpur." },
    { name: "Divya Joshi", rating: 5, message: "Helped me get job-ready!" },
    { name: "Nikhil Raj", rating: 4, message: "Awesome explanation style." },
    { name: "Neha Kumari", rating: 5, message: "Super motivating teachers." },
  ];

  const repeatedReviews = [...reviews, ...reviews];
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row" style={Section5}>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-11 col-xxl-10 m-auto pb-5">
            <h2 className='text-center fw-bolder mt-5'>Testimonials</h2>
            <div className="row mt-5">



            



            </div>
          </div>
        </div>

        <div className="row" style={Section6}>
          <div className="col-12 text-center pt-5 pb-5">
            <h1 className='mt-3'>Start Your Journey</h1>
            <h5 className='mt-5'>Learn step-by-step with Jodhpur's most loved programming mentor.</h5>
            <button className='btn-light mt-5 rounded ps-4 pt-2 pe-4 fs-5 pb-2 border-0'>Start Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section5