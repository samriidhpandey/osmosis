import React from 'react'

function Signup() {
  return (
    <>
    <div className="container-fluid">

      <div className="row mt-5 mb-5 ">
        <div className="col-10 col-sm-9 col-md-10 col-lg-8 col-xl-7 col-xxl-6 m-auto mt-3 mb-5">

       
      
      <div className="row shadow rounded-3 overflow-hidden" >
        
        {/* Left Form Section */}
        <div className="col-md-6 col-11  p-4 bg-white">
          <h3 className="fw-bold text-center">Welcome !</h3>
          <p className="text-center text-muted mb-4">Let's create your Account</p>

          <div className="mb-3">
            <label className="form-label">Enter your Email</label>
            <input type="email" className="form-control" placeholder="email@example.com" />
          </div>

          <div className="mb-3">
            <div className="border p-4 rounded d-flex align-items-center justify-content-between">
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
           
          </div>

          <button className="btn btn-secondary w-100 mb-3" disabled>
            Continue
          </button>

          <div className="text-center text-muted mb-2">Or continue with</div>

          <div className="d-flex justify-content-between gap-2 mb-3">
            <button className="btn btn-outline-dark w-100">
              <i className="bi bi-github me-2"></i> Github
            </button>
            <button className="btn btn-outline-dark w-100">
              <i className="bi bi-google me-2"></i> Google
            </button>
          </div>

          <p className="text-center">
            Already have an account? <a href="#">Login</a>
          </p>
        </div>

        {/* Right Image Section (Hidden on mobile/tablet) */}
        <div className="col-md-6 d-none d-md-block p-0">
          <div className="w-100 h-100 signup" style={{ backgroundColor: "#ccc" }}>
           
          </div>
        </div>
      </div>

       </div>
       <div className="col-12 text-center"><p>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p></div>
      </div>
    </div>
    </>
  )
}

export default Signup