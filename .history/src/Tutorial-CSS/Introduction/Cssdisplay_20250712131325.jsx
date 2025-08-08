import React from 'react'

function Cssdisplay() {
  return (
    <>
    <div className="container py-5 text-center">
      <h2 className="text-primary fw-bold mb-5">CSS Display Property Examples</h2>

      {/* Block Example */}
      <div className="mb-5">
        <h4 className="mb-3">1. display: block</h4>
        <pre className="text-start bg-dark rounded">
          <code className="p-2 d-block text-white h-100">
{`div {
  display: block;
}`}          </code>
        </pre>
        <p>Block elements take up the full width available.</p>
        <div className="bg-info text-white p-3 mb-2">Block Element 1</div>
        <div className="bg-info text-white p-3">Block Element 2</div>
      </div>

      {/* Inline Example */}
      <div className="mb-5">
        <h4 className="mb-3">2. display: inline</h4>
        <pre className="text-start bg-dark rounded">
          <code className="p-2 d-block text-white h-100">
{`span {
  display: inline;
}`}          </code>
        </pre>
        <p>Inline elements do not start on a new line and only take up as much width as necessary.</p>
        <span className="bg-success text-white p-2 me-2">Inline 1</span>
        <span className="bg-success text-white p-2">Inline 2</span>
      </div>

      {/* Inline-Block Example */}
      <div className="mb-5">
        <h4 className="mb-3">3. display: inline-block</h4>
        <pre className="text-start bg-dark rounded">
          <code className="p-2 d-block text-white h-100">
{`span {
  display: inline-block;
  width: 100px;
  height: 50px;
}`}          </code>
        </pre>
        <p>Behaves like inline in layout but allows setting width and height.</p>
        <span className="bg-warning text-dark p-2 me-2 d-inline-block" style={{ width: '100px', height: '50px' }}>Box 1</span>
        <span className="bg-warning text-dark p-2 d-inline-block" style={{ width: '100px', height: '50px' }}>Box 2</span>
      </div>

      {/* None Example */}
      <div className="mb-5">
        <h4 className="mb-3">4. display: none</h4>
        <pre className="text-start bg-dark rounded">
          <code className="p-2 d-block text-white h-100">
{`div {
  display: none;
}`}          </code>
        </pre>
        <p>The element is removed from the layout and not visible at all.</p>
        <div className="bg-danger text-white p-2">This is visible</div>
        {/* <div style={{ display: 'none' }}>This is hidden</div> */}
        <p className="text-muted">(Hidden element is commented out)</p>
      </div>
    </div>
    </>
  )
}

export default Cssdisplay