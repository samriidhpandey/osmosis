import React from 'react'

function Section5({isDark}) {
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
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5">
                <div className="col-11 m-auto p-4" style={student}>
                  <div className="row">
                    <div className="col-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" block text-gray-400 mb-4 dark:text-zinc-500" viewBox="0 0 975.036 975.036"><path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path></svg>
                    </div>
                  </div>
                  

                  <p>I don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it.</p>

                  <h5>Mohit Kumar</h5>
                  <p>Web Developer</p>
                </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5">
                <div className="col-11 m-auto p-4" style={student}>
                  <div className="row">
                    <div className="col-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" block text-gray-400 mb-4 dark:text-zinc-500" viewBox="0 0 975.036 975.036"><path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path></svg>
                    </div>
                  </div>
                  

                  <p>I don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it.</p>

                  <h5>Mohit Kumar</h5>
                  <p>Web Developer</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={Section6}>
        <div className="col-12 text-center pt-5 pb-5">
          <h1 className='mt-3'>Start Your Coding Journey</h1>
          <h5 className='mt-5'>Learn step-by-step with Jodhpur's most loved programming mentor.</h5>
          <button className='btn-light mt-5 rounded ps-4 pt-2 pe-4 fs-5 pb-2 border-0'>Start Now</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Section5