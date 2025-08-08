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
          <div className="col-12">
            
            
  <footer
  style={{
    padding: "1.5rem",
    textAlign: "center",
    backgroundColor: isDark ? "#000" : "#eee",
    color: isDark ? "#aaa" : "#333",
  }}
>
  Made with ❤️ by{" "}
  <a
    href="https://www.linkedin.com/in/samridh-pandey"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: isDark ? "#ff4d4d" : "#b30000",
      textDecoration: "none",
      fontWeight: "bold",
      margin: "0 5px",
    }}
    onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
    onMouseOut={(e) => (e.target.style.textDecoration = "none")}
  >
    Samridh Pandey
  </a>
  ,{" "}
  <a
    href="https://www.linkedin.com/in/name2"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: isDark ? "#ff4d4d" : "#b30000",
      textDecoration: "none",
      fontWeight: "bold",
      margin: "0 5px",
    }}
    onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
    onMouseOut={(e) => (e.target.style.textDecoration = "none")}
  >
    Name2
  </a>
  ,{" "}
  <a
    href="https://www.linkedin.com/in/name3"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: isDark ? "#ff4d4d" : "#b30000",
      textDecoration: "none",
      fontWeight: "bold",
      margin: "0 5px",
    }}
    onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
    onMouseOut={(e) => (e.target.style.textDecoration = "none")}
  >
    Name3
  </a>
  ,{" "}
  <a
    href="https://www.linkedin.com/in/name4"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: isDark ? "#ff4d4d" : "#b30000",
      textDecoration: "none",
      fontWeight: "bold",
      margin: "0 5px",
    }}
    onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
    onMouseOut={(e) => (e.target.style.textDecoration = "none")}
  >
    Name4
  </a>{" "}
  and{" "}
  <a
    href="https://www.linkedin.com/in/name5"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: isDark ? "#ff4d4d" : "#b30000",
      textDecoration: "none",
      fontWeight: "bold",
      margin: "0 5px",
    }}
    onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
    onMouseOut={(e) => (e.target.style.textDecoration = "none")}
  >
    Name5
  </a>{" "}
  — Students of Osmosis Computer, Jodhpur.
</footer>



          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer