import React from 'react'
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import TypingText from './TypingText';
// import Hyperspeed from '../Reactbit/Hyperspeed'
import {  Link } from "react-router-dom"
import AnimatedName from './AnimatedName';
import Hyperspeed from '../Reactbit/Hyperspeed/Hyperspeed';

function Hero({ isDark }) {
  const overlayStyle = {
    paddingTop: '10%',
    paddingBottom: '10%',
    background: isDark
      ? 'linear-gradient(rgba(255,255,255,0.5), rgba(0,0,0,0.5), rgba(0,0,0,0.5))'
      : 'linear-gradient(rgba(255,255,255,0.5), rgba(255,0,0,0.5), rgba(255,0,0,0.5))',

  };
  return (
    <>
        
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            </Hyperspeed>
            <div className="row ">
              <div className="col-12 overlay m-auto aling-item-center " style={overlayStyle} >
                <div className="row align-items-center h-100  m-auto">
                  <div className="col-12 text-box text-center p-0">
                    <i className='text-learn  w-25 m-auto p-2'>Learn from zero level</i>

                    <AnimatedName/>
                    
                      
                    <h3 className='text-light mt-3'>
                      <TypingText />
                    </h3>

                    <div className="row">
                      <div className="col-12 col-sm-11 col-md-11 col-lg-10 col-xl-9 col-xxl-8 m-auto">
                        <p className='text-center m-auto text-white fs-5 mt-4'>Confused about which computer course to join?
                          At <span className='fw-bolder fs-4'> Osmosis Computer</span> Classes, Jodhpur, we teach from zero level with individual attention to each student.
                          It’s the ideal place for beginners and backbenchers who need extra support.
                          Explore our free and paid courses and start your learning journey today!

                        </p>
                      </div>
                    </div>


                    <p className='mt-5'>
                      <Link to='/Tutorial'><button className='btn-dark border-0 pt-2 ps-4 pe-4 pb-2 rounded-3 m-2'>Explore Courses</button></Link>{""}
                      <Link to='/Blog'><button className='btn-light border-0 pt-2 ps-4 pe-4 pb-2 rounded-3 m-2'>Read Articles</button></Link>{""}
                    </p>

                    <div className="row">
                      <div className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-4 col-xxl-3 num bg-light d-flex m-auto mt-5 pt-3">
                        <div className="num1 m-auto"><h2>10+</h2><p>Courses</p></div>
                        <div className="num1 m-auto"><h2>15K+</h2><p>Students</p></div>
                        <div className="num1 m-auto"><h2>4.9</h2><p>Rating</p></div>

                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
        <Section2 isDark={isDark} />
        <Section3 isDark={isDark} />
        <Section4 isDark={isDark} />
        <Section5 isDark={isDark} />

      </div>
    </>
  )
}

export default Hero