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
            <section style={{ padding: "3rem 1rem", backgroundColor: isDark ? "#111" : "#740808ff" }}>
  <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", color: isDark ? "#fff" : "#333" }}>
    Meet the Creators
  </h2>
  <p style={{ textAlign: "center", margin: "1rem 0", color: isDark ? "#ccc" : "#555" }}>
    We are a team of 5 passionate developers from <strong>Osmosis Computer, Jodhpur</strong>, who built this website together as a collaborative project to grow our skills and showcase what we've learned.
  </p>
  <div className="row" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem", marginTop: "2rem" }}>
    {["Samridh Pandey", "Name2", "Name3", "Name4", "Name5"].map((name, index) => (
      <div key={index} className="col-12 col-md-2" style={{ textAlign: "center", padding: "1rem", backgroundColor: isDark ? "#1e1e1e" : "#fff", borderRadius: "1rem", boxShadow: isDark ? "0 0 10px #222" : "0 0 10px #ccc" }}>
        <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`} alt={name} style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
        <p style={{ marginTop: "0.5rem", fontWeight: "600", color: isDark ? "#fff" : "#333" }}>{name}</p>
      </div>
    ))}
  </div>
</section>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer