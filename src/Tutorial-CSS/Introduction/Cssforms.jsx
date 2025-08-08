import React from 'react'

function Cssforms() {
  return (
    <>
    <div className="container py-5">
      <h2 className="text-center text-primary fw-bold mb-5">CSS Form Styling Example</h2>

      <pre className="text-start bg-dark rounded mb-4">
        <code className="p-2 text-white h-100 d-block">
{`form {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

input[type="text"], input[type="email"], textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

input[type="submit"] {
  background-color: #0d6efd;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

input[type="submit"]:hover {
  background-color: #0b5ed7;
}`}
        </code>
      </pre>

      <form className="bg-light p-4 rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
        </div>

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
    </>
  )
}

export default Cssforms