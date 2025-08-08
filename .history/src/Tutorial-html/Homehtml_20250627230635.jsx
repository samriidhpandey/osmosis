import React from 'react'
// import { Link, Outlet } from 'react-router-dom';
import HTMLIntroduction from './Introduction/HTMLIntroduction';

function Homehtml() {


  const sidelist1 = () => {
    const sidelist = document.getElementById("sidelist");
    if (sidelist.style.display === "none") {
      sidelist.style.display = "block";
    } else {
      sidelist.style.display = "none";
    }
  };


  return (
    <>


    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <aside style={{ width: "250px", background: "#f1f1f1", padding: "15px" }}>
        <h3>HTML Tutorial</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li><Link to="intro">HTML Introduction</Link></li>
          
        </ul>
      </aside>

      
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>






      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-12 border-top bg-dark d-flex p-0">
            <div className="side-list border-end" id='sidelist'>
               <div className="row">
                <div className="col-12">
                  <h4 className='text-center mt-2'>Hello</h4>

                  
                  <Link to="/partt1"><button>part1</button></Link>{""}
                  <button>part2</button>
                </div>
               </div>




            </div>


            <div className="maintextpage bg-dark" id='maintextpage'>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 m-0 p-2 border-bottom">
                    <button onClick={sidelist1}>b</button>
                  </div>

                </div>
                <div className="row">
                  <div className="col-12">
                    <Routes>
                      <Route path='/partt1' element={<HTMLIntroduction/>}/>
                    </Routes>
                  </div>
                </div>
              </div>

            </div>





          </div>
        </div>
      </div> */}
    </>
  )
}

export default Homehtml