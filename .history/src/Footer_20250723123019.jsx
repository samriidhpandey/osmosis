import React from 'react'
import get from './image/github.svg'
import get1 from './image/X.svg'
import get2 from './image/youtube.svg'
import { Link } from 'react-router-dom'
import get3 from './image/facebook.svg'
import logo from './image/logo.png'


function Footer({isDark}) {
  const footer = {
    backgroundColor: isDark ? '#111827':'darkred',
    color: isDark ? 'white':'white',
  };
  return (
    <>
    <footer style={footer}>
            <div className="footer-container" >
              {/* <!-- //company-box  --> */}
              <div className="footer-company-box" >
                <a href="#" className="logo">
                  <img src={logo} className=' ' />
                </a>
                {/* <!-- //Details  --> */}
                <p>Stay curious, keep learning, believe in yourself, success always follows effort.</p>
                {/* <!-- .....socila.....  --> */}
                <div className="footer-social">
                  <a href="https://www.instagram.com/osmosis_computer?igsh=MWkyNGtib2s1NG10OQ%3D%3D&utm_source=qr "
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'white',
                      textDecoration: "none",
                      fontWeight: "bold",
                      // marginTop: "0px",
                      // marginBottom: "0px",
                    }}
                    onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                    onMouseOut={(e) => (e.target.style.textDecoration = "none")}> <i className="fa-brands fa-instagram"></i></a>
    
    
    
                  <a href="https://www.facebook.com/share/1LYuEtGZGp/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'white',
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                    onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                    onMouseOut={(e) => (e.target.style.textDecoration = "none")}> <i className="fa-brands fa-facebook-f"></i></a>
    
    
                  <a href="https://www.youtube.com/@OsmosisComputerJodhpur "
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'white',
                      textDecoration: "none",
                      fontWeight: "bold",
                      marginBottom: "0px",
                    }}
                    onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                    onMouseOut={(e) => (e.target.style.textDecoration = "none")}><i className="fa-brands fa-youtube"></i> </a>
    
                  <a href="https://www.linkedin.com/company/osmosiscomputer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'white',
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                    onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                    onMouseOut={(e) => (e.target.style.textDecoration = "none")}><i className="fa-brands fa-linkedin-in"></i> </a>
    
                </div>
              </div>
    
              {/* <!-- ....link-box..... --> */}
              <div className="footer-link-box">
                <strong>Main</strong>
                <Link to="/" className='text-white'><p>Home</p></Link>
                <Link to="/Contact" className='text-white'><p>Contact</p></Link>
                <Link to="/Blog" className='text-white'><p>Blogs</p></Link>
                <Link to="/Login" className='text-white'><p>Login</p></Link>
              </div>
    
    
              {/* <!-- ....link-box..... --> */}
              <div className="footer-link-box">
                <strong>Learn</strong>
                <Link to="/Courses" className='text-white'><p>Course</p></Link>
                <Link to="/Tutorial" className='text-white'><p>Tutorials</p></Link>
                <Link to="/Notes" className='text-white'><p>Notes</p></Link>
              </div>
    
              {/* <!-- ....link-box..... --> */}
              <div class="footer-link-box">
                <strong>Legal</strong>
                <Link to="/Terms" className='text-white'><p>Terms</p></Link>
                <Link to="/Privacy" className='text-white'><p>Privacy</p></Link>
              </div>
    
            </div>
    
            
            <div style={{alignItems:"center",justifyContent:"center",textAlign:"center"}}>
              
      <b>Devloped by :-</b>{" "}
      
      <a
        href="https://www.linkedin.com/in/samridh-pandey-771835317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color:'white',
          textDecoration: "none",
          margin: "0 5px",
        }}
        onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
        onMouseOut={(e) => (e.target.style.textDecoration = "none")}
      >
        Samridh Pandey
      </a>
      ,
        {" "}
      <a
        href="https://www.linkedin.com/in/girdhar-goyal-1376b5332?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9WR3byrCTMq%2FaVpFyt54vQ%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          margin: "0 5px",
          color:'white',
        }}
        onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
        onMouseOut={(e) => (e.target.style.textDecoration = "none")}
      >
        Girdhar Goyal
      </a>{" "},
      
      
      <a
        href="https://www.linkedin.com/in/sakshi-k-b046b4320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          margin: "0 5px",
          color:'white',
        }}
        onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
        onMouseOut={(e) => (e.target.style.textDecoration = "none")}
      >
        Sakshi Kumawat
      </a>{" "},
      {" "}
      <a
        href="https://www.linkedin.com/in/nikhil-burani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color:'white',
          textDecoration: "none",
          margin: "0 5px",
        }}
        onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
        onMouseOut={(e) => (e.target.style.textDecoration = "none")}
      >
        Nikhil Burani
      </a>
      ,{" "}
      <a
        href="https://www.linkedin.com/in/jasveer-borana-39878a373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color:'white',
          textDecoration: "none",
          margin: "0 5px",
        }}
        onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
        onMouseOut={(e) => (e.target.style.textDecoration = "none")}
      >
        Jasveer Borana
      </a> 
            </div> <br />
    
            {/* <!-- .......bootom....... --> */}
            <div class="footer-bootom">
              <span class="copyright">&#169; 2025 Osmosis Computer, Jodhpur All rights reserved.</span>
            </div>
          </footer>
    </>
  )
}

export default Footer