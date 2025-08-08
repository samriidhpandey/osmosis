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


  return (
    <>


      






      <div className="container-fluid">
        <div className="row">
          <div className="col-12 border-top d-flex p-0">
            <div className="side-list border-end" id='sidelist'>
              <div className="row">
                <div className="col-12">
                  <h4 className='text-center mt-2'>Hello</h4>

                    <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <ul style={{ listStyle: "none", paddingLeft: 5 }}>
                      <li><Link to="intro">HTML Introduction</Link>{""}</li>

                    </ul>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
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