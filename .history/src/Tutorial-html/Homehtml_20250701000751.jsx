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

                    const SidebarAccordion = () => {
  const [activeItem, setActiveItem] = useState("intro1"); // default active

  const handleItemClick = (key) => {
    setActiveItem(key);
  };




   
                    
    


      




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