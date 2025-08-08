import React from 'react'

function Jswell() {
  return (
    <>
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center  text-white px-3">
      <div className="text-center">
        <h1 className="display-4 fw-bold mb-3 text-warning">Welcome to JavaScript Tutorial</h1>
        <p className="lead mb-4">
          Master JavaScript from basics to advanced with practical examples and hands-on coding.
        </p>
        <a href="#get-started" className="btn btn-warning btn-lg px-5 fw-bold">Get Started</a>
      </div>

      {/* Get Started Section */}
      <section id="get-started" className="mt-5 w-100">
        <div className="bg-light text-dark rounded p-4 shadow mx-auto" style={{ maxWidth: '800px' }}>
          <h2 className="fw-bold mb-3 text-center text-primary">Let’s Begin</h2>
          <p>JavaScript is the programming language of the web. It lets you add interactivity, logic, and dynamic behavior to your websites.</p>
          <ul>
            <li>💡 Create dynamic pages</li>
            <li>🧠 Understand variables, functions, loops</li>
            <li>📦 Work with arrays and objects</li>
            <li>🧩 DOM Manipulation</li>
            <li>⚙️ Build interactive web applications</li>
          </ul>
          <div className="text-center mt-4">
            <a href="/js/intro" className="btn btn-primary px-4">Start Learning JavaScript</a>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Jswell