import React from 'react'
import card1 from './image/sun2.jpg'
import card2 from './image/sub3.jpg'
import card3 from './image/sub1.jpg'

function Section2({isDark}) {
  const Section2 = {
    backgroundColor: isDark ? '#0E121B' : 'darkred',
    color: isDark ? 'white' : 'white',
  };
  const cards = {
    backgroundColor: isDark ? '#27272A' : 'white',
    color: isDark ? 'white' : 'darkred',
  };
  return (
    <>
    <div className="container-fluid p-0 ">
      <div className="row">
        <div className="col-12 Section2 pt-2" style={Section2}>
          <h2 className='text-center mt-5 bolder'>Our Skilled & Supportive Faculty</h2>

          <div className="row">
            <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7 m-auto">
              <h5 className='text-center mt-4'>At Osmosis, our trainers bring over 6+ years of industry experience to the classroom. They are dedicated to teaching every course from zero level, ensuring that even beginners build a strong foundation. With a practical and student-friendly approach, they make complex concepts easy to understand and apply.</h5>
            </div>
          </div>

          <div className="row mt-5 mb-5">

            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-3" >
              <div className="row">
                <div className="col-11 m-auto cards" style={cards}>
                  <div className="row">
                    <div className="col-12 p-0">
                      <img src={card1} className='img-fluid cards-img' alt="" />
                    </div>
                    <div className="col-12">
                      <h4 className='bolder mt-3'>Raghuveer Sain (Director)</h4>
                      <p>RS-CIT || Tally(RS-CFA)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-3" >
              <div className="row">
                <div className="col-11 m-auto cards" style={cards}>
                  <div className="row">
                    <div className="col-12 p-0">
                      <img src={card2} className='img-fluid cards-img' alt="" />
                    </div>
                    <div className="col-12">
                      <h4 className='bolder mt-3'>Er. Deepankar Pal</h4>
                      <p>Web Development || Digital Marketing || Programing Lan...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3" >
              <div className="row">
                <div className="col-11 m-auto cards" style={cards}>
                  <div className="row">
                    <div className="col-12 p-0">
                      <img src={card3} className='img-fluid cards-img' alt="" />
                    </div>
                    <div className="col-12">
                      <h4 className='bolder mt-3'>Mayank Bhambhani</h4>
                      <p>Graphics Designing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div className="row">
            <div className="col-12">
              <h2 className='text-center bolder mt-5 mb-5'>Empowering Aspiring Developers to Build Their Future in Tech!</h2>
              <div className="row mt-4 mb-5">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center mt-5">
                  <p>Students land their first developer job in</p>
                  <h1>6 months</h1>
                  <h5>on average</h5>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center mt-5">
                  <p>Over</p>
                  <h1>15,000+</h1>
                  <h5>students trained</h5>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center mt-5">
                  <p>Total YouTube Views</p>
                  <h1>500K+</h1>
                  <h5>views and counting</h5>
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

export default Section2