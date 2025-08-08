import React from 'react'

function Jswell() {
  return (
    <>
    <div className="bg-light text-dark py-5" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">JavaScript Tutorial</h1>
            <p className="lead mt-4">
              JavaScript is the programming language of the Web. It brings life to websites by making them interactive and dynamic. Whether it's a button click, form validation, or animated content — JavaScript powers it all.
            </p>
            <p className="mt-3">
              🌐 <strong>Language of the Web:</strong> Every modern website uses JavaScript to interact with users. It runs in your browser and works alongside HTML & CSS.
            </p>
            <p className="mt-2">
              ⚙️ <strong>Interactivity:</strong> JavaScript handles user actions like clicks, input, scroll, and even reacts to real-time data changes.
            </p>
            <p className="mt-2">
              🧠 <strong>Learn Step-by-Step:</strong> In this tutorial, you'll start from the basics — variables, data types, functions — and gradually move towards real-world applications like form validation and DOM manipulation.
            </p>
            <p className="mt-2">
              🚀 Let's begin your JavaScript journey with confidence and curiosity. This is going to be fun!
            </p>
            {/* <button className="btn btn-warning btn-lg mt-4">Get Started</button> */}
          </div>

          {/* Right Column */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="JavaScript Logo"
              className="img-fluid"
              style={{ maxHeight: "300px" }}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Jswell