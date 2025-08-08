import React from 'react'
import ad1 from '../image/c1.jpg';
import ad2 from '../image/c2.jpg';
import ad3 from '../image/c3.jpg';
import ad4 from '../image/c4.jpg';
import ad5 from '../image/c5.jpg';
import { Link } from "react-router-dom";



function Courses({isDark}) {
  const Courses = {
    backgroundColor: isDark ? '#0E121B' : 'white',
    color: isDark ? 'white' : 'black',
  };
  const Courses1 = {
    backgroundColor: isDark ? 'black' : 'darkred',
    color: isDark ? 'white' : 'white',
  };
  

  const headingStyle = {
    // fontSize: "20px",
    fontWeight: "600",
    color: "white",
    marginBottom: "0px",
  };

  const itemStyle = {
    fontSize: "16px",
    color: "white",
    // lineHeight:'-100px',
    marginBottom: "-25px",
  };
  return (
    <>
    {/* <BrowserRouter> */}
    
    
    <div className="container-fluid">
      <div className="row"style={Courses}>
        <div className="col-12">
          <h1 className=' fw-bolder text-center mt-5 mb-4'>Premium Courses</h1>
          <div className="row mt-5 mb-5 pb-3">

           <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" >
            <Link to="/part1" className='part1'>
              <div className="row">
                <div className="col-11 border mb-4 pb-2 m-auto p-0 cour-card" style={Courses1}>
                    <div className="col-12 p-0 cour-img">
                <img src={ad1} className='img-fluid cour-img' alt="" />
              </div>
              <div className=" p-2">
            <h4 className=''>Certified for the Future RS-CIT Trained, Industry Ready</h4>
            <p className='mt-3'>Basic concept of computer</p>
            <p className='mt-4'>👨‍🏫 Raghuveer Sain (Director)</p>
            <h3 style={headingStyle}>Course Timeline</h3>
      <p style={itemStyle}><strong>Duration:</strong> 3 Months</p>
      <p style={itemStyle}><strong>Days:</strong> Monday to Saturday</p>
      <p style={itemStyle}><strong>Daily Class:</strong> 1 Hour</p>
      <p style={itemStyle}><strong>Mode:</strong> Offline </p>
            <h5 className='mt-5'>₹4200 <s>₹4499</s></h5>

            <button className='w-100 mt-3 border-0 pt-2 pb-2'>View Course</button>
          </div>
                </div>
              </div>
              
            </Link>{""}
          </div>


          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
            <Link to="/part2" className='part1'>
              <div className="row">
                <div className="col-11 border mb-4 pb-2 m-auto p-0 cour-card" style={Courses1}>
                    <div className="col-12 p-0 cour-img">
                <img src={ad2} className='img-fluid cour-img' alt="" />
              </div>
              <div className=" p-2">
            <h4 className=''>Powering the Future of Full-Stack Development</h4>
            <p className='mt-3'>MongoDB. Express. React. Node.</p>
            <p className='mt-4'>👨‍🏫 Er. Deepankar Pal</p>
            <h3 style={headingStyle}>Course Timeline</h3>
      <p style={itemStyle}><strong>Duration:</strong> 6 Months</p>
      <p style={itemStyle}><strong>Days:</strong> Monday to Saturday</p>
      <p style={itemStyle}><strong>Daily Class:</strong> 1 Hour</p>
      <p style={itemStyle}><strong>Mode:</strong> Offline </p>
            <h5 className='mt-5'>₹20,000 <s>₹20,499</s></h5>

            <button className='w-100 mt-3 border-0 pt-2 pb-2'>View Course</button>
          </div>
                </div>
              </div>
             </Link>{""} 
            
          </div>



          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
            <Link to="/part2" className='part1'>
              <div className="row">
                <div className="col-11 border mb-4 pb-2 m-auto p-0 cour-card" style={Courses1}>
                    <div className="col-12 p-0 cour-img">
                <img src={ad3} className='img-fluid cour-img' alt="" />
              </div>
              <div className=" p-2">
            <h4 className=''>Dominate the Digital Space with Smart Marketing Skills</h4>
            <p className='mt-3'>Build Brands. Boost Sales</p>
            <p className='mt-4'>👨‍🏫 Er. Deepankar Pal</p>
            <h3 style={headingStyle}>Course Timeline</h3>
      <p style={itemStyle}><strong>Duration:</strong> 6 Months</p>
      <p style={itemStyle}><strong>Days:</strong> Monday to Saturday</p>
      <p style={itemStyle}><strong>Daily Class:</strong> 1 Hour</p>
      <p style={itemStyle}><strong>Mode:</strong> Offline </p>
            <h5 className='mt-5'>₹25,000 <s>₹28,000</s></h5>

            <button className='w-100 mt-3 border-0 pt-2 pb-2'>View Course</button>
          </div>
                </div>
              </div>
             </Link>{""} 
            
          </div>




          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
            <Link to="/part2" className='part1'>
              <div className="row">
                <div className="col-11 border mb-4 pb-2 m-auto p-0 cour-card" style={Courses1}>
                    <div className="col-12 p-0 cour-img">
                <img src={ad4} className='img-fluid cour-img' alt="" />
              </div>
              <div className=" p-2">
            <h4 className=''>Manage, Record, and Grow – Tally Prime Makes It Easy</h4>
            <p className='mt-3'>Career in Accounting and Finance</p>
            <p className='mt-4'>👨‍🏫 CodeWithHarry</p>
            <p>⏱️ 17h 59m 📚 127 lessons</p>
            <h5 className='mt-5'>₹2899 <s>₹4499</s></h5>

            <button className='w-100 mt-3 border-0 pt-2 pb-2'>View Course</button>
          </div>
                </div>
              </div>
             </Link>{""} 
            
          </div>





          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
            <Link to="/part2" className='part1'>
              <div className="row">
                <div className="col-11 border mb-4 pb-2 m-auto p-0 cour-card" style={Courses1}>
                    <div className="col-12 p-0 cour-img">
                <img src={ad5} className='img-fluid cour-img' alt="" />
              </div>
              <div className=" p-2">
            <h4 className=''>The Ultimate Job Ready Data Science Course</h4>
            <p className='mt-3'>Ready to break into the world of Data Science? This all-in-one Job-Rea...</p>
            <p className='mt-4'>👨‍🏫 CodeWithHarry 🔍 Beginner</p>
            <p>⏱️ 17h 59m 📚 127 lessons</p>
            <h5 className='mt-5'>₹2899 <s>₹4499</s></h5>

            <button className='w-100 mt-3 border-0 pt-2 pb-2'>View Course</button>
          </div>
                </div>
              </div>
             </Link>{""} 
            
          </div>





          </div>
        </div>
      </div>

      
    </div>

   
    </>
  )
}

export default Courses