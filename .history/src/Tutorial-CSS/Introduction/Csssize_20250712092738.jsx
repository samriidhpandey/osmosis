import React from 'react'

function Csssize() {
  return (
    <>
    <div className="container py-5 shadow-lg border-3 text-center">
      <h2 className="text-primary fw-bold mb-5">CSS Size Units Examples</h2>

      {/* px unit */}
      <div className="mb-5">
        <h4 className="mb-3">1. Pixels (px)</h4>
        <pre className="text-start bg-light rounded">
          <code className="p-2 d-block h-100 text-white">
{`div {
  width: 200px;
  height: 100px;
}`}          </code>
        </pre>
        <div className="bg-warning p-4 mx-auto text-dark" style={{ width: '200px', height: '100px' }}>
          This box is sized using <code>px</code> units.
        </div>
      </div>

      {/* em unit */}
      <div className="mb-5">
        <h4 className="mb-3">2. em</h4>
        <pre className="text-start bg-light rounded">
          <code className="p-2 d-block h-100 text-white">
{`p {
  font-size: 2em;
}`}          </code>
        </pre>
        <p className="bg-info p-4 text-white" style={{ fontSize: '2em' }}>
          This paragraph uses <code>2em</code> font size.
        </p>
      </div>

      {/* rem unit */}
      <div className="mb-5">
        <h4 className="mb-3">3. rem</h4>
        <pre className="text-start bg-light rounded">
          <code className="p-2 d-block h-100 text-white">
{`p {
  font-size: 1.5rem;
}`}          </code>
        </pre>
        <p className="bg-success p-4 text-white" style={{ fontSize: '1.5rem' }}>
          This paragraph uses <code>1.5rem</code> font size.
        </p>
      </div>

      {/* % unit */}
      <div className="mb-5">
        <h4 className="mb-3">4. Percentage (%)</h4>
        <pre className="text-start bg-light rounded">
          <code className="p-2 d-block h-100 text-white">
{`div {
  width: 80%;
}`}          </code>
        </pre>
        <div className="bg-secondary p-4 text-white" style={{ width: '80%', margin: 'auto' }}>
          This box takes up <code>80%</code> of its parent's width.
        </div>
      </div>

      {/* vw/vh unit */}
      <div className="mb-5">
        <h4 className="mb-3">5. Viewport Width/Height (vw / vh)</h4>
        <pre className="text-start bg-light rounded">
          <code className="p-2 d-block h-100 text-white">
{`div {
  width: 50vw;
  height: 20vh;
}`}          </code>
        </pre>
        <div className="bg-danger p-4 text-white" style={{ width: '50vw', height: '20vh', margin: 'auto' }}>
          This box uses <code>vw</code> and <code>vh</code> units.
        </div>
      </div>
    </div>
    </>
  )
}

export default Csssize