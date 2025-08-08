import React from 'react'

function Cssposition() {
  return (
    <>
    <div className="container py-5 text-center">
      <h2 className="text-primary fw-bold mb-5">CSS Positioning Examples</h2>

      {/* Static Position */}
      <div className="mb-5">
        <h4 className="mb-3">1. position: static</h4>
        <pre className="text-start bg-light rounded">
          <code className="p-2 d-block">
{`div {
  position: static;
}`}          </code>
        </pre>
        <div className="bg-warning p-4 my-3 text-dark" style={{ position: 'static' }}>
          This box uses <code>position: static</code> (default).
        </div>
      </div>

      {/* Relative Position */}
      <div className="mb-5">
        <h4 className="mb-3">2. position: relative</h4>
        <pre className="text-start bg-light rounded">
          <code className="p-2 d-block">
{`div {
  position: relative;
  top: 20px;
  left: 30px;
}`}          </code>
        </pre>
        <div className="bg-info p-4 my-3 text-white" style={{ position: 'relative', top: '20px', left: '30px' }}>
          This box is <code>position: relative</code> with top & left.
        </div>
      </div>

      {/* Absolute Position */}
      <div className="mb-5 position-relative" style={{ height: '200px' }}>
        <h4 className="mb-3">3. position: absolute</h4>
        <pre className="text-start bg-light rounded">
          <code className="p-2 d-block">
{`div {
  position: absolute;
  top: 20px;
  right: 20px;
}`}          </code>
        </pre>
        <div className="bg-success p-4 text-white position-absolute" style={{ top: '20px', right: '20px' }}>
          Absolutely positioned inside parent.
        </div>
      </div>

      {/* Fixed Position */}
      <div className="mb-5">
        <h4 className="mb-3">4. position: fixed</h4>
        <pre className="text-start bg-light rounded">
          <code className="p-2 d-block">
{`div {
  position: fixed;
  bottom: 10px;
  right: 10px;
}`}          </code>
        </pre>
        <div className="bg-danger text-white p-2 position-fixed" style={{ bottom: '10px', right: '10px' }}>
          Fixed box (bottom-right corner)
        </div>
      </div>

      {/* Sticky Position */}
      <div className="mb-5" style={{ height: '300px', overflowY: 'scroll' }}>
        <h4 className="mb-3">5. position: sticky</h4>
        <pre className="text-start bg-light rounded">
          <code className="p-2 d-block">
{`div {
  position: sticky;
  top: 0;
}`}          </code>
        </pre>
        <div className="bg-secondary text-white p-2 position-sticky" style={{ top: 0 }}>
          Sticky header - scroll this section
        </div>
        <div style={{ height: '500px' }} className="bg-light">
          Scrollable content to demonstrate sticky behavior.
        </div>
      </div>
    </div>
    </>
  )
}

export default Cssposition