import React from 'react'

import { Link, Outlet } from 'react-router-dom';
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

   const items = document.querySelectorAll(".sidebar-item");

  items.forEach(item => {
    item.addEventListener("click", () => {
      document.querySelector(".sidebar-item.active")?.classList.remove("active");
      item.classList.add("active");
    });
  });


  return (
    <>


      






      <div className="container-fluid">
        <div className="row">
          <div className="col-12 border-top d-flex p-0">
            <div className="side-list border-end" id='sidelist'>
              <div className="row">
                <div className="col-12">
                  <h4 className='text-center mt-2'>Hello</h4>

                    <div className="accordion accordion-flush border-0" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOn">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOn"
        aria-expanded="false"
        aria-controls="flush-collapseOn"
      >
        Introduction 
      </button>
    </h2>
    <div
      id="flush-collapseOn"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingOn"
      data-bs-parent="#accordionFlushExample"
    >
      <ul className="list-unstyled px-3 py-2 m-0">
        <li className="sidebar-item mb-2">
          <Link to="intro1" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link active">
            HTML Introduction
          </Link>
        </li>
        <li className="sidebar-item mb-2">
          <Link to="Working" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Working
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="Install" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Installation
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div>



   
                    
    


      




                </div>
              </div>




            </div>


            <div className="maintextpage" id='maintextpage'>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 m-0 p-2 border-bottom">
                    <button onClick={sidelist1}>b</button>
                  </div>

                </div>
                <div className="row">
                  <div className="col-12">
                    <main style={{ flex: 1, padding: "20px" }}>
                      <Outlet />
                    </main>
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

export default Homehtml