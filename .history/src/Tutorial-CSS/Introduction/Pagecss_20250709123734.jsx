import React from 'react'

function Pagecss() {
  return (
    <>
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="text-center">

        <div className="mt-5">
          <img 
            src="https://i.ytimg.com/vi/uOltiFI00rU/maxresdefault.jpg" 
            alt="CSS Illustration" 
            className="img-fluid rounded shadow-sm" 
            style={{ maxHeight: '300px' }}
          />
        </div>


        <h1 className="display-4 fw-bold text-primary">Welcome to CSS Tutorial</h1>
        <p className="lead mt-3 mb-4">
          Master the art of styling web pages with <strong>CSS</strong>.<br />
          Learn how to make your websites look beautiful and responsive.
        </p>
        

        <div className="mt-5">
          <img 
            src="https://i.ytimg.com/vi/uOltiFI00rU/maxresdefault.jpg" 
            alt="CSS Illustration" 
            className="img-fluid rounded shadow-sm" 
            style={{ maxHeight: '300px' }}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Pagecss