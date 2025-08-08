import React from 'react'
import icon1 from './image/com1.svg'
import icon2 from './image/com2.svg'
import icon3 from './image/com3.png'
import icon4 from './image/com4.png'
import icon5 from './image/com5.webp'
import icon6 from './image/com6.png'
import icon7 from './image/icon7.png'
import icon8 from './image/icon8.png'
import icon9 from './image/icon9.png'
import icon10 from './image/icon10.png'
import icon11 from './image/icon11.png'
import icon12 from './image/icon12.png'

function Section3({isDark}) {
   const section3 = {
    backgroundColor: isDark ? 'black' : '#FAFAFA',
    color: isDark ? 'white' : 'darkred',
  };
  return (
    <>
    <div className="container-fluid p-0">
      <div className="row section3 pb-3" style={section3}>
        <h2 className='mt-5 mb-4 text-center'>Helped students achieve their dream job at</h2>
        <div className="col-11 col-sm-11 col-md-10 col-lg-10 col-xl-9 col-xxl-10 mt-5 m-auto">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-3">
                <div className="row p-1 ">
                  <div className="col-11 icon m-auto">
                    <img src={icon1} className='img-fluid m-2' style={{height:"70px"}} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-3">
                <div className="row p-1 ">
                  <div className="col-11 icon m-auto">
                    <img src={icon2} className='img-fluid m-2 ' style={{height:"70px"}} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <div className="row p-1 ">
                  <div className="col-11 icon m-auto">
                    <img src={icon3} className='img-fluid  m-2' style={{height:"70px" }} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <div className="row p-1 ">
                  <div className="col-11 icon m-auto">
                    <img src={icon4} className='img-fluid m-2' style={{height:"70px"}} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <div className="row p-1 ">
                  <div className="col-11 icon m-auto">
                    <img src={icon5} className='img-fluid m-2' style={{height:"70px"}} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <div className="row p-1 ">
                  <div className="col-11 icon m-auto">
                    <img src={icon6} className='img-fluid m-2' style={{height:"70px"}} alt="" />
                  </div>
                </div>
              </div>

               
               

              

              
            </div>
        </div>


        <p className='text-center mt-5'>+ many more companies</p>
      </div>
    </div>
    </>
  )
}

export default Section3