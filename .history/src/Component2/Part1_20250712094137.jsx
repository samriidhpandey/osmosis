import React from 'react'
import ad2 from '../image/ad2.png'

function Part1({ isDark }) {
  const part1 = {
    backgroundColor: isDark ? 'black' : 'darkred',
    color: isDark ? 'white' : 'white',
  };
  const details = {
    backgroundColor: isDark ? '#0E121B' : 'white',
    color: isDark ? 'white' : 'black',

  };
  return (
    <>
      <div className="container-fluid">
        <div className="row part1-page border-top" style={part1}>
          <div className="blur1"></div>
          <div className="blur2"></div>
          <div className="col-12 col-sm-12 col-md-11 col-lg-10 col-xl-11 col-xxl-12 ps-4 part1-tex m-auto">
            <p className='mt-5'>CodeWithHarry › Courses</p>
            <h1>The Ultimate Job Ready Data Science Course</h1>
            <p className='mt-4 fs-5 pe-5 '>Ready to break into the world of Data Science? This all-in-one Job-Ready  Data <br /> Science Course is designed for beginners and intermediate learners who want to <br /> master data science skills and become industry-ready with hands-on experience.</p>
            <button className='bg-warning border-0 ps-2 pe-2 pt-1 pb-1 mt-2 rounded'>Hot & New</button>
            <p className='mt-4'>Created by CodeWithHarry</p>
            <p className='mb-5'>Last updated 6/17/2025  Hindi</p>
          </div>


        </div>

        <div className="row revers" style={details} >
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-8 mb-5">
            <div className="row ps-3 pe-3">
              <div className="col-12 p-3 mt-5 mb-4 details-box ">
                <h3>What you'll learn</h3>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 flex-shrink-0 text-primary dark:text-primary"><path d="M20 6 9 17l-5-5"></path></svg> Master Python programming from a data science perspective</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 flex-shrink-0 text-primary dark:text-primary"><path d="M20 6 9 17l-5-5"></path></svg> Master Python programming from a data science perspective</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 flex-shrink-0 text-primary dark:text-primary"><path d="M20 6 9 17l-5-5"></path></svg> Master Python programming from a data science perspective</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 flex-shrink-0 text-primary dark:text-primary"><path d="M20 6 9 17l-5-5"></path></svg> Master Python programming from a data science perspective</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 flex-shrink-0 text-primary dark:text-primary"><path d="M20 6 9 17l-5-5"></path></svg> Master Python programming from a data science perspective</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 flex-shrink-0 text-primary dark:text-primary"><path d="M20 6 9 17l-5-5"></path></svg> Master Python programming from a data science perspective</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 flex-shrink-0 text-primary dark:text-primary"><path d="M20 6 9 17l-5-5"></path></svg> Master Python programming from a data science perspective</p>
                  </div>
                </div>

              </div>
            </div>


            <div className="row">
              <div className="col-12 p-3">
                <div className="row">
                  <div className="col-6"><h3>Course content</h3> <p className='text-gray mt-4'>15 sections • 127 lectures • 17hr 59min (so far)</p></div>
                  <div className="col-6 text-end"><u>Expand all sections</u></div>
                </div>
              </div>
            </div>


            <div className="row ps-3 pe-3">
              <div className="col-12 p-3 mb-5 details-box ">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-primary dark:text-primary flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg> Introduction to Data Science</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 text-end">
                    <p> 3 lectures • 27min</p>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-primary dark:text-primary flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg> Introduction to Data Science</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 text-end">
                    <p> 3 lectures • 27min</p>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-primary dark:text-primary flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg> Introduction to Data Science</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 text-end">
                    <p> 3 lectures • 27min</p>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-primary dark:text-primary flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg> Introduction to Data Science</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 text-end">
                    <p> 3 lectures • 27min</p>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-primary dark:text-primary flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg> Introduction to Data Science</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 text-end">
                    <p> 3 lectures • 27min</p>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-primary dark:text-primary flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg> Introduction to Data Science</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 text-end">
                    <p> 3 lectures • 27min</p>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-primary dark:text-primary flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg> Introduction to Data Science</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 text-end">
                    <p> 3 lectures • 27min</p>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-primary dark:text-primary flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg> Introduction to Data Science</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 text-end">
                    <p> 3 lectures • 27min</p>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-primary dark:text-primary flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg> Introduction to Data Science</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 text-end">
                    <p> 3 lectures • 27min</p>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-primary dark:text-primary flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg> Introduction to Data Science</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 text-end">
                    <p> 3 lectures • 27min</p>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-primary dark:text-primary flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg> Introduction to Data Science</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 text-end">
                    <p> 3 lectures • 27min</p>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-primary dark:text-primary flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg> Introduction to Data Science</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 text-end">
                    <p> 3 lectures • 27min</p>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-primary dark:text-primary flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg> Introduction to Data Science</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 text-end">
                    <p> 3 lectures • 27min</p>
                  </div>
                  
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 text-primary dark:text-primary flex-shrink-0"><path d="m6 9 6 6 6-6"></path></svg> Introduction to Data Science</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-2 text-end">
                    <p> 3 lectures • 27min</p>
                  </div>
                  
                </div>

              </div>
            </div>


            <div className="row ps-3 pe-3">
              <div className="col-12 p-3 mt-3 mb-4 details-box ">
                <h3>Requirements</h3>
                <ul className='mt-4'>
                  <li className='mt-3'>No prior experience in data science is needed</li>
                  <li className='mt-3'>Basic computer skills and internet access</li>
                  <li className='mt-3'>Willingness to learn and solve real-world problems</li>
                  <li className='mt-3'>Curiosity and consistency — that's all you really need!</li>
                  <li className='mt-3'>Stable internet connection for accessing course content</li>
                  <li className='mt-3'>Basic familiarity with using the terminal/command line (helpful but not required)</li>
                </ul>
              </div>
            </div>


            <div className="row ps-3">
              <div className="col-12 p-3 mt-3 mb-4 details-box ">
                <h3>Description</h3>
                <p>Ready to break into the world of Data Science? This all-in-one Job-Ready Data Science Course is designed for beginners and intermediate learners who want to master data science skills and become industry-ready with hands-on experience.</p>
              </div>
            </div>
              

          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-4">
             <div className="row ">
              <div className="col-11 m-auto p-3 mt-5 mb-4 details-box ">
                <div className="row">
                  <div className="col-12">
                    <img src={ad2} className='img-fluid' alt="" />
                  </div>
                  <div className="col-12 mt-4"><h3>₹2899 <s className='fs-5'>₹4499</s></h3></div>
                  <div className="col-12 mt-4"><button className='btn-dark w-100 pt-2 pb-2 rounded border-0 fs-5 fw-bolder'>Buy Now</button></div>
                  <div className="col-12 mt-4 text-center"><p>Purchase this course to get access</p></div>
                  <div className="col-12 mt-4">
                    <p className='fw-bolder'>This course includes:</p>
                    <p className='m-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 flex-shrink-0 text-primary dark:text-primary"><path d="M20 6 9 17l-5-5"></path></svg>127 lectures</p>
                    <p className='m-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 flex-shrink-0 text-primary dark:text-primary"><path d="M20 6 9 17l-5-5"></path></svg>17hr 59min (so far)</p>
                    <p className='m-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 flex-shrink-0 text-primary dark:text-primary"><path d="M20 6 9 17l-5-5"></path></svg>Access on mobile and desktop (2 Years)</p>
                    <p className='m-1 pb-2 border-bottom'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-5 w-5 flex-shrink-0 text-primary dark:text-primary"><path d="M20 6 9 17l-5-5"></path></svg>Certificate of completion</p>
                    
                    <button className='btn-dark border-0 fs-5 ps-3 pe-3 pt-1 pb-1 rounded mt-2'>Share</button>
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

export default Part1