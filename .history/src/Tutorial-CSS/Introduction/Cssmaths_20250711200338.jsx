import React from 'react'

function Cssmaths() {
  return (
    <>
    <div className="container py-5 text-center">
      <h2 className="text-primary fw-bold mb-5">CSS Math Functions Examples</h2>

      {/* calc() Example */}
      <div className="mb-5">
        <h4 className="mb-3">1. <code>calc()</code> Example</h4>
        <pre className="text-start bg-light p-2 rounded">
{`width: calc(100% - 50px);`}
        </pre>
        <div className="bg-info text-white p-2 mx-auto" style={{ width: 'calc(100% - 50px)' }}>
          This box uses <code>calc(100% - 50px)</code> for its width.
        </div>
      </div>

      {/* min() Example */}
      <div className="mb-5">
        <h4 className="mb-3">2. <code>min()</code> Example</h4>
        <pre className="text-start bg-light p-2 rounded">
{`width: min(300px, 80%);`}
        </pre>
        <div className="bg-success text-white p-2 mx-auto" style={{ width: 'min(300px, 80%)' }}>
          This box uses <code>min(300px, 80%)</code> for responsive width.
        </div>
      </div>

      {/* max() Example */}
      <div className="mb-5">
        <h4 className="mb-3">3. <code>max()</code> Example</h4>
        <pre className="text-start bg-light p-2 rounded">
{`width: max(200px, 40%);`}
        </pre>
        <div className="bg-warning text-dark p-2 mx-auto" style={{ width: 'max(200px, 40%)' }}>
          This box uses <code>max(200px, 40%)</code> to maintain a minimum width.
        </div>
      </div>

      {/* clamp() Example */}
      <div className="mb-5">
        <h4 className="mb-3">4. <code>clamp()</code> Example</h4>
        <pre className="text-start bg-light p-2 rounded">
{`font-size: clamp(1rem, 2.5vw, 2rem);`}
        </pre>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }} className="bg-danger text-white p-2">
          This text uses <code>clamp()</code> for responsive font sizing.
        </p>
      </div>
    </div>
    </>
  )
}

export default Cssmaths