import React from 'react'

function Section4({isDark}) {
  const Section4 = {
    backgroundColor: isDark ? '#1E1E21' : 'darkred',
    color: isDark ? 'white' : 'white',
  };
  const Courses = {
    backgroundColor: isDark ? '#4B4B4D' : 'white',
    color: isDark ? 'white' : 'black',
    height:'290px',
  };
  const logo = {
    backgroundColor: isDark ? '#1E1E21' : 'darkred',
    color: isDark ? 'white' : 'white',
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row pb-5"style={Section4} >
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-11 col-xxl-10 m-auto">
            <h4 className='mt-5'>Courses</h4>
            <h2 className='fw-bolder mt-3'>Master Coding with Our Core Offerings</h2>

            <div className="row mt-5 pt-3">
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-4">
                <div className="row">
                  <div className="col-11 Courses m-auto" style={Courses}>
                    <div className="row">
                      <div className="col-12">
                        <div className="circle m-auto text-center aling-items-center mt-3 p-3" style={logo}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-rocket size-4 md:size-6"><path d="M4.5 17.5L9 15l3 3-2.5 4.5M4 4h.01M16 6l-3 3"></path><path d="M4.5 17.5a8 8 0 0 1 12-12L16 6"></path><path d="m9 15 6-6"></path></svg>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <h3 className='mt-5'>Start Learning From Zero</h3>
                        <p>At Osmosis, we believe every student deserves a strong start that’s why we teach from zero, for everyone.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-4">
                <div className="row">
                  <div className="col-11 Courses m-auto" style={Courses}>
                    <div className="row">
                      <div className="col-12">
                        <div className="circle m-auto text-center aling-items-center mt-3 p-3" style={logo}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-layers size-4 md:size-6"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> 
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <h3 className='mt-5'>Individual Support System</h3>
                        <p>our Support System ensures personalized guidance, doubt clearance, and dedicated mentorship at every step.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-4">
                <div className="row">
                  <div className="col-11 Courses m-auto" style={Courses}>
                    <div className="row">
                      <div className="col-12">
                        <div className="circle m-auto text-center aling-items-center mt-3 p-3" style={logo}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code size-4 md:size-6"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <h3 className='mt-5'>Live Project Training</h3>
                        <p>our live project training puts you in real-world situations where you solve problems, build complete solutions,</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-4">
                <div className="row">
                  <div className="col-11 Courses m-auto" style={Courses}>
                    <div className="row">
                      <div className="col-12">
                        <div className="circle m-auto text-center aling-items-center mt-3 p-3"style={logo}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dollar-sign size-4 md:size-6"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> 
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <h3 className='mt-5'>Flexible Payment Plans</h3>
                        <p>Our Easy EMI plans make education affordable and stress-free — so you can focus on your goals, not your wallet.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-4">
                <div className="row">
                  <div className="col-11 Courses m-auto" style={Courses}>
                    <div className="row">
                      <div className="col-12">
                        <div className="circle m-auto text-center aling-items-center mt-3 p-3"style={logo}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-open size-4 md:size-6"><path d="M4 4h16v16H4z"></path><path d="M4 8h16"></path></svg> 
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <h3 className='mt-5'>Advanced Skills Concepts</h3>
                        <p>learn advanced concepts that power real applications, enhance performance, and prepare you for professional-level development.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-4">
                <div className="row">
                  <div className="col-11 Courses m-auto" style={Courses} >
                    <div className="row">
                      <div className="col-12">
                        <div className="circle m-auto text-center aling-items-center mt-3 p-3"style={logo} >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bar-chart-2 size-4 md:size-6"><path d="M4 18V4h16v14"></path><path d="M9 18V9"></path><path d="M14 18V6"></path></svg>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <h4 className='mt-5'>Top Courses at Unbeatable Prices</h4>
                        <p>We believe quality education Upgrade your skills with our most popular courses — learn from the best, at the best price.</p>
                      </div>
                    </div>
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

export default Section4