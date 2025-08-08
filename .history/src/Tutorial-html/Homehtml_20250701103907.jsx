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
    const [activeItem, setActiveItem] = useState("intro1"); // default active

  const handleItemClick = (key) => {
    setActiveItem(key);
  };
  };

   
  


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 border-top d-flex p-0">
            <div className="side-list border-end" id='sidelist'>
              <div className="row">
                <div className="col-12">
                  <h4 className='text-center mt-2'>Hello</h4>




                    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button
        className="accordion-button collapsed custom-accordion-btn sidebar-link active"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
        Introduction 
      </button>
    </h2>
    <div
      id="flush-collapseOne"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
    >
      <ul className="list-unstyled m-0 px-2 pb-2">
        <li className="mt-2">
          <Link to="intro1" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Introduction
          </Link>
        </li>
        <li className="mt-2">
          <Link to="Working" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Working
          </Link>
        </li>
        <li className='mt-2'>
          <Link to="Install" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Installation
          </Link>
        </li>
        <li className='mt-2'>
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