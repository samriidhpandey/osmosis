import React from 'react'

function Pagecss() {
  return (
    <>
    <div className="container d-flex align-items-center justify-content-center">
      <div className="text-center">

        <div className="mt-5">
          <img 
            src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png" 
            alt="CSS Illustration" 
            className="img-fluid rounded shadow-sm" 
            style={{ maxHeight: '400px' }}
          />
        </div>


        <h1 className="display-4 fw-bold text-primary">Welcome to CSS Tutorial</h1>
        <p className="lead mt-3 mb-4">
          Master the art of styling web pages with <strong>CSS</strong>.<br />
          Learn how to make your websites look beautiful and responsive.
        </p>
        

        
      </div>
    </div>
    </>
  )
}

export default Pagecss