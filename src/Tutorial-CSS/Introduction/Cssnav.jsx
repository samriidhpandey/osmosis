import React from 'react'

function Cssnav() {
  return (
    <>
    <div className="container py-5">
      <h2 className="text-center text-primary fw-bold mb-4">CSS Navigation Bar Example</h2>

      {/* Navbar Display */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Osmosis</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Code Example */}
      <div className="mt-5">
        <h4 className="text-secondary mb-3">CSS Code:</h4>
        <pre className="text-start bg-dark rounded"><code className="p-3 d-block text-white h-100">
{`nav {
  background-color: #333;
  overflow: hidden;
}

nav a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

nav a:hover {
  background-color: #ddd;
  color: black;
}`}
        </code></pre>
      </div>
    </div>
    </>
  )
}

export default Cssnav