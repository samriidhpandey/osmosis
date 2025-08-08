import React from 'react'

function Cssmaths() {
  return (
    <>
    <div className="container py-5">
      <h2 className="text-primary fw-bold text-center mb-5">CSS Math Functions Examples</h2>

      {/* calc() Example */}
      <div className="mb-5">
        <h4 className="mb-3">1. <code>calc()</code></h4>
        <pre className="bg-light p-3 rounded">
{`width: calc(100% - 50px);`}
        </pre>
        <div style={{ width: 'calc(100% - 50px)', backgroundColor: '#cce5ff', padding: '10px' }}>
          This box uses <code>calc(100% - 50px)</code> for its width.
        </div>
      </div>

      {/* min() Example */}
      <div className="mb-5">
        <h4 className="mb-3">2. <code>min()</code></h4>
        <pre className="bg-light p-3 rounded">
{`width: min(300px, 80%);`}
        </pre>
        <div style={{ width: 'min(300px, 80%)', backgroundColor: '#d4edda', padding: '10px' }}>
          This box will take the smaller of 300px or 80% width.
        </div>
      </div>

      {/* max() Example */}
      <div className="mb-5">
        <h4 className="mb-3">3. <code>max()</code></h4>
        <pre className="bg-light p-3 rounded">
{`width: max(250px, 50%);`}
        </pre>
        <div style={{ width: 'max(250px, 50%)', backgroundColor: '#fff3cd', padding: '10px' }}>
          This box will take the larger of 250px or 50% width.
        </div>
      </div>

      {/* clamp() Example */}
      <div className="mb-5">
        <h4 className="mb-3">4. <code>clamp()</code></h4>
        <pre className="bg-light p-3 rounded">
{`font-size: clamp(1rem, 2.5vw, 2rem);`}
        </pre>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)', backgroundColor: '#f8d7da', padding: '10px' }}>
          Resize the screen to see how this text adjusts using <code>clamp()</code>.
        </p>
      </div>
    </div>
    </>
  )
}

export default Cssmaths