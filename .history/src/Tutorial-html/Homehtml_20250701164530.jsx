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
            <div className="side-list border-end bg-light" id='sidelist'>
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
          </Link>{""}
        </li>
        <li className="mt-2">
          <Link to="Working" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Working
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Install" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Installation
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Execution" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Execution
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Structure" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Page Structure
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Tags" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Tags
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Elements" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Elements
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Attri" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Attributes
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Comment" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Comments
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="id" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML ID and Classes
          </Link>{""}
        </li>
      </ul>
    </div>
  </div>
</div>








<div className="accordion accordion-flush mt-2" id="accordionFlushExample1">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingtwo">
      <button
        className="accordion-button collapsed custom-accordion-btn-1 sidebar-link active"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapsetwo"
        aria-expanded="false"
        aria-controls="flush-collapsetwo"
      >
        HTML BASIC TAGS
      </button>
    </h2>
    <div
      id="flush-collapsetwo"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingtwo"
      data-bs-parent="#accordionFlushExample1"
    >
      <ul className="list-unstyled m-0 px-2 pb-2">
        <li className="mt-2">
          <Link to="intro1" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Skeletal Tags
          </Link>{""}
        </li>
        <li className="mt-2">
          <Link to="Working" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Heading Tags
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Install" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Parsgraph Tag
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Execution" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Horizontal Line Tag
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Structure" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Line Break Tag
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Tags" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Anchor Tag
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Elements" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Image Tag
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Attri" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Pre Tag
          </Link>{""}
        </li>
        
      </ul>
    </div>
  </div>
</div>














<div className="accordion accordion-flush mt-2" id="accordionFlushExample1">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingthree">
      <button
        className="accordion-button collapsed custom-accordion-btn-1 sidebar-link active"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapsethree"
        aria-expanded="false"
        aria-controls="flush-collapsethree"
      >
        HTML BASIC TAGS
      </button>
    </h2>
    <div
      id="flush-collapsetwo"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingthree"
      data-bs-parent="#accordionFlushExample1"
    >
      <ul className="list-unstyled m-0 px-2 pb-2">
        <li className="mt-2">
          <Link to="intro1" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Skeletal Tags
          </Link>{""}
        </li>
        <li className="mt-2">
          <Link to="Working" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Heading Tags
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Install" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Parsgraph Tag
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Execution" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Horizontal Line Tag
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Structure" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Line Break Tag
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Tags" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Anchor Tag
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Elements" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Image Tag
          </Link>{""}
        </li>
        <li className='mt-2'>
          <Link to="Attri" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Pre Tag
          </Link>{""}
        </li>
        
      </ul>
    </div>
  </div>
</div>



   
                    
    


      




                </div>
              </div>




            </div>


            <div className="maintextpage bg-white" id='maintextpage'>
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