import React from 'react'
import get from './image/github.svg'
import get1 from './image/X.svg'
import get2 from './image/youtube.svg'
import { Link } from 'react-router-dom'
import get3 from './image/facebook.svg'


function Footer({isDark}) {
  const footer = {
    backgroundColor: isDark ? '#111827':'darkred',
    color: isDark ? 'white':'white',
  };
  return (
    <>
    <div className="container-fluid">
      <div className="row border-top" style={footer}>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-11 col-xxl-10 m-auto ">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-5 fot-menu">
              <h5>Main</h5>
              <Link to="/" className='text-white'><p>Home</p></Link>
              <Link to="/Contact" className='text-white'><p>Contact</p></Link>
              <Link to="/Blog" className='text-white'><p>Blogs</p></Link>
              <Link to="/Login" className='text-white'><p>Login</p></Link>
            </div>

            <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-5">
              <h5>Learn</h5>
              <Link to="/Courses" className='text-white'><p>Course</p></Link>
              <Link to="/Tutorial" className='text-white'><p>Tutorials</p></Link>
              <Link to="/Notes" className='text-white'><p>Notes</p></Link>
              
            </div>

            <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-5">
              <h5>Legal</h5>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Refund</p>
              
            </div>

            <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-5">
              <h5>Social</h5>
              <div className="social d-flex p-0 mt-3"> <img src={get} className='img-fluid me-2 bg-light rounded' alt="" /> <p>GitHub</p></div> 
              <div className="social d-flex p-0 mt-3"> <img src={get1} className='img-fluid me-2 bg-light rounded' alt="" /> <p>GitHub</p></div> 
              <div className="social d-flex p-0 mt-3"> <img src={get2} className='img-fluid me-2' alt="" /> <p>GitHub</p></div> 
              <div className="social d-flex p-0 mt-3"> <img src={get3} className='img-fluid me-2' alt="" /> <p>GitHub</p></div> 
              
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mb-3 mt-3">
            <p className='text-center'>MADE BY OSMOSIS TEAM </p>
            <div
  style={{
    // backgroundColor: '#111',
    color: 'white',
    padding: '30px 10px',
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  }}
>
  <span style={{ fontWeight: 'bold' }}>Aayush Meena</span>
  <span style={{ fontWeight: 'bold' }}>Bhanu Yadav</span>

  <span
    style={{
      fontWeight: 'bold',
      // transform: 'translateY(-10px)',
    }}
  >
    Samridh Pandey
  </span>

  <span style={{ fontWeight: 'bold' }}>Harsh Vyas</span>
  <span style={{ fontWeight: 'bold' }}>Deepak Joshi</span>
</div>


          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer