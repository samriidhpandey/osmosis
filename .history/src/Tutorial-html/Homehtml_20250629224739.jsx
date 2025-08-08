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

  const items = document.querySelectorAll("#sidebar .list-group-item");

  items.forEach((item) => {
    item.addEventListener("click", function () {
      items.forEach((el) => el.classList.remove("active")); // remove from all
      this.classList.add("active"); // add to clicked
    });
  });


  return (
    <>


      






      <div className="container-fluid">
        <div className="row">
          <div className="col-12  border-top d-flex p-0">
            <div className="side-list border-end" id='sidelist'>
              <div className="row">
                <div className="col-12 ">
                  <h4 className='text-center mt-2'>Hello</h4>

                    <div class=" accordion-flush border-0" id="accordionFlushExample">
                    <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <ul style={{ listStyle: "none", paddingLeft: 15 }}>
                      <li><Link to="intro" className='list-group-item list-group-item-action active'>Introduction +</Link>{""}</li>

                    </ul>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <ul style={{ listStyle: "none", paddingLeft: 35 }}>
                      <li><Link to="intro1" className="list-group-item list-group-item-action">HTML Introduction</Link>{""}</li>

                    </ul>
                    <ul style={{ listStyle: "none", paddingLeft: 35 }}>
                      <li><Link to="Working">HTML Working</Link>{""}</li>

                    </ul>
                    <ul style={{ listStyle: "none", paddingLeft: 35 }}>
                      <li><Link to="intro">HTML Installation</Link>{""}</li>

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