import React from 'react'
import { motion } from "framer-motion";
import InfiniteReviewScroll from './InfiniteReviewScroll';

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
  
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row" style={Section5}>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-11 col-xxl-10 m-auto pb-5">
            <h2 className='text-center fw-bolder mt-5'>Testimonials</h2>
            <div className="row mt-5">



            <InfiniteReviewScroll/>



            </div>
          </div>
        </div>

        <div className="row" style={Section6}>
          <div className="col-12 text-center d-flex pt-5 pb-5">
            <div className='m-auto' style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
  <h1 className='text-center' style={{ fontSize: "2rem", fontWeight: "bold" }}>
    Start Your Journey
  </h1>
  <img
    src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
    alt="coding"
    style={{
      width: "60px",
      height: "60px",
      borderRadius: "8px",
      objectFit: "cover",
    }}
  />
</div>

    <div className="row">
      
    </div>
            <h5 className='mt-5'>Learn step-by-step with Jodhpur's most loved programming mentor.</h5>
            <button className='btn-light mt-5 rounded ps-4 pt-2 pe-4 fs-5 pb-2 border-0'>Start Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section5