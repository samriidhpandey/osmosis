import React from 'react'

function Pagecss() {
  return (
    <>
    <div className="container-fluid min-vh-100 bg-light">
      <div className="row">
        {/* Sidebar */}
        

        {/* Content Area */}
        <div className="col-md-12 p-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="mb-3">CSS Tutorial</h2>
              <p>
                <strong>CSS</strong> stands for <strong>Cascading Style Sheets</strong>. It describes how HTML elements are to be displayed on screen, paper, or in other media.
              </p>

              <hr />

              <h4>Get Started</h4>
              <p>
                Welcome to the <strong>CSS Tutorial</strong> tutorial series! To begin learning:
              </p>
              <ul>
                <li>Select a lesson from the sidebar on the left</li>
                <li>Work through the lessons in order for the best learning experience</li>
                <li>Each lesson contains detailed explanations and examples</li>
              </ul>

              <button className="btn btn-primary mt-3">Start Learning</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Pagecss