import React from 'react'

function Csszindex() {
  return (
    <>
    <div className="container py-5 text-center">
      <h2 className="text-primary fw-bold mb-5">CSS Z-Index Example</h2>

      {/* Explanation */}
      <p className="mb-4">
        The <code className="text-white bg-dark p-2">z-index</code> property in CSS controls the vertical stacking order of elements. Elements with a higher z-index appear in front of those with a lower one. This only works on positioned elements (relative, absolute, fixed, or sticky).
      </p>

      {/* Code Example */}
      <pre className="text-start bg-dark rounded mb-4">
        <code className="p-3 d-block text-white h-100">
{`#box1 {
  position: absolute;
  left: 40px;
  top: 40px;
  z-index: 1;
}

#box2 {
  position: absolute;
  left: 70px;
  top: 70px;
  z-index: 2;
}`}        </code>
      </pre>

      {/* Visual Example */}
      <div className="position-relative" style={{ height: '200px' }}>
        <div
          id="box1"
          className="position-absolute bg-warning text-dark d-flex align-items-center justify-content-center"
          style={{ width: '120px', height: '120px', top: '40px', left: '40px', zIndex: 1 }}
        >
          Box 1
        </div>
        <div
          id="box2"
          className="position-absolute bg-danger text-white d-flex align-items-center justify-content-center"
          style={{ width: '120px', height: '120px', top: '70px', left: '70px', zIndex: 2 }}
        >
          Box 2
        </div>
      </div>

      <p className="mt-4">
        In this example, <strong>Box 2</strong> appears above <strong>Box 1</strong> because it has a higher <code className="text-white bg-dark p-2">z-index</code> value.
      </p>
    </div>
    </>
  )
}

export default Csszindex