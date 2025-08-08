import React from 'react'

import { Link, Outlet } from 'react-router-dom';
import HTMLIntroduction from './Introduction/HTMLIntroduction';

function Homehtml() {


  // const sidelist1 = () => {
  //   const sidelist = document.getElementById("sidelist");
  //   const isMobile = window.innerWidth <= 768;
  //   if (sidelist.style.display === "none") {
  //     sidelist.style.display = "block";
  //   } else {
  //     sidelist.style.display = "none";
  //   }

    
    

    
  // };
  
const sidelist1 = () => {
  const sidelist = document.getElementById("sidelist");
  const isMobile = window.innerWidth <= 768; // Check if it's a mobile screen

  if (isMobile) {
    // Agar mobile screen hai to sidelist ko none karo
    sidelist.style.display = "none!important";
  } else {
    // Toggle for desktop
    if (sidelist.style.display === "block") {
      sidelist.style.display = "none";
    } else{
      sidelist.style.display = "block";
    }
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
            <div className="side-list border-end bg-light" style={{ height: "100vh", overflowY: "auto",overflowX: "hidden"  }} id='sidelist'>
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









                                                      {/* 3 vala section (Inline and block Elements) */}







<div className="accordion accordion-flush mt-2" id="accordionFlushExample2">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingthree">
      <button
        className="accordion-button collapsed custom-accordion-btn-2 sidebar-link active"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapsethree"
        aria-expanded="false"
        aria-controls="flush-collapsethree"
      >
        INLINE & BLOCK ELEMENTS
      </button>
    </h2>
    <div
      id="flush-collapsethree"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingthree"
      data-bs-parent="#accordionFlushExample1"
    >
      <ul className="list-unstyled m-0 px-2 pb-2">
        <li className="mt-2">
          <Link to="Inline" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML INLINE ELEMENTS
          </Link>{""}
        </li>
        <li className="mt-2">
          <Link to="Block" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML BLOCK ELEMENTS
          </Link>{""}
        </li>
 
      </ul>
    </div>
  </div>
</div>









                                                    {/* 4 vala section (Inline and block Elements) */}







<div className="accordion accordion-flush mt-2" id="accordionFlushExample2">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingthree">
      <button
        className="accordion-button collapsed custom-accordion-btn-2 sidebar-link active"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapsefour"
        aria-expanded="false"
        aria-controls="flush-collapsefour"
      >
        HTML LIST
      </button>
    </h2>
    <div
      id="flush-collapsefour"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingfour"
      data-bs-parent="#accordionFlushExample1"
    >
      <ul className="list-unstyled m-0 px-2 pb-2">
        <li className="mt-2">
          <Link to="List" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Lists
          </Link>{""}
        </li>
        <li className="mt-2">
          <Link to="Unorder" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Unordered List
          </Link>{""}
        </li>
        <li className="mt-2">
          <Link to="Order" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Ordered List
          </Link>{""}
        </li>
        <li className="mt-2">
          <Link to="Defin" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Definition List
          </Link>{""}
        </li>
        
      </ul>
    </div>
  </div>
</div>














                                                    {/* 5 vala section (HTML Tables) */}










<div className="accordion accordion-flush mt-2" id="accordionFlushExample2">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingthree">
      <button
        className="accordion-button collapsed custom-accordion-btn-2 sidebar-link active"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapsefive"
        aria-expanded="false"
        aria-controls="flush-collapsefive"
      >
        HTML TABLES
      </button>
    </h2>
    <div
      id="flush-collapsefive"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingfive"
      data-bs-parent="#accordionFlushExample1"
    >
      <ul className="list-unstyled m-0 px-2 pb-2">
        <li className="mt-2">
          <Link to="Tables" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            HTML Tables
          </Link>{""}
        </li>
        <li className="mt-2">
          <Link to="Moretables" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            More on tables
          </Link>{""}
        </li>
        
      </ul>
    </div>
  </div>
</div>













                                                    {/* 6 vala section (HTML Forms) */}










<div className="accordion accordion-flush mt-2" id="accordionFlushExample2">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingthree">
      <button
        className="accordion-button collapsed custom-accordion-btn-2 sidebar-link active"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapsesix"
        aria-expanded="false"
        aria-controls="flush-collapsesix"
      >
        HTML TABLES
      </button>
    </h2>
    <div
      id="flush-collapsesix"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingsix"
      data-bs-parent="#accordionFlushExample1"
    >
      <ul className="list-unstyled m-0 px-2 pb-2">
        <li className="mt-2">
          <Link to="Tables" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            Information to HTML Forms
          </Link>{""}
        </li>
        <li className="mt-2">
          <Link to="Moretables" className="text-decoration-none d-block px-3 py-2 rounded sidebar-link">
            More on tables
          </Link>{""}
        </li>
        
      </ul>
    </div>
  </div>
</div>








   



    


      




                </div>
              </div>
            </div>










                                                            {/* click to show in sm and md screen only  */}


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>

            














            <div className="maintextpage bg-white" id='maintextpage'>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 m-0 p-2 border-bottom">
                    <button className='side-click' onClick={sidelist1}>b</button> <button class="side-click1 btn btn-white border" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" >b</button>
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