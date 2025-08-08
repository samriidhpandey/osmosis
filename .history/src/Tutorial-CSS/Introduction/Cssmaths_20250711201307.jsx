import React from 'react'

function Cssmaths() {
  return (
    <>
    <div className="container py-5 text-center">
      <h2 className="text-success fw-bold mb-5">CSS Math Functions Examples</h2>

      {/* calc() Function Example */}
      <div className="mb-5">
        <h4 className="mb-3">1. calc()</h4>
        <pre className="text-start bg-light rounded"><code className="p-2 d-block h-100 text-light">
{`div {
  width: calc(100% - 100px);
}`}
        </code></pre>
        <div className="bg-warning p-4 my-3 text-dark" style={{ width: 'calc(100% - 100px)', margin: 'auto' }}>
          This box uses <code className='p-2'>calc()</code> to subtract 100px from 100% width.
        </div>
      </div>

      {/* min() Function Example */}
      <div className="mb-5">
        <h4 className="mb-3">2. min()</h4>
        <pre className="text-start bg-light rounded"><code className="p-2 d-block h-100 text-white">
{`div {
  width: min(300px, 80%);
}`}
        </code></pre>
        <div className="bg-info p-4 my-3 text-white" style={{ width: 'min(300px, 80%)', margin: 'auto' }}>
          This box takes the minimum of 300px and 80% width.
        </div>
      </div>

      {/* max() Function Example */}
      <div className="mb-5">
        <h4 className="mb-3">3. max()</h4>
        <pre className="text-start bg-light rounded"><code className="p-2 d-block h-100 t">
{`div {
  width: max(300px, 50%);
}`}
        </code></pre>
        <div className="bg-success p-4 my-3 text-white" style={{ width: 'max(300px, 50%)', margin: 'auto' }}>
          This box uses the <code>max()</code> function for width.
        </div>
      </div>

      {/* clamp() Function Example */}
      <div className="mb-5">
        <h4 className="mb-3">4. clamp()</h4>
        <pre className="text-start bg-light rounded"><code className="p-2 d-block">
{`div {
  font-size: clamp(1rem, 2.5vw, 2rem);
}`}
        </code></pre>
        <div className="bg-secondary p-4 my-3 text-white" style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}>
          This text uses <code>clamp()</code> to scale responsively.
        </div>
      </div>
    </div>
    </>
  )
}

export default Cssmaths