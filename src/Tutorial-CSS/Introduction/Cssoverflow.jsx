import React from 'react'

function Cssoverflow() {
  return (
    <>
    <div className="container py-5 text-center">
      <h2 className="text-primary fw-bold mb-5">CSS Overflow Examples</h2>

      {/* Overflow Visible Example */}
      <div className="mb-5">
        <h4 className="mb-3">1. Overflow Visible Example</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<div style="overflow: visible; width: 250px; height: 100px">...</div>`}
        </pre>
        <div className="border border-success rounded p-3 mx-auto" style={{ width: '250px', height: '100px', overflow: 'visible' }}>
          <p>Osmosis tutorial - this content may overflow outside the box if it's too long, but still shown fully!</p>
        </div>
      </div>

      {/* Overflow Hidden Example */}
      <div className="mb-5">
        <h4 className="mb-3">2. Overflow Hidden Example</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<div style="overflow: hidden; width: 250px; height: 100px">...</div>`}
        </pre>
        <div className="border border-danger rounded p-3 mx-auto" style={{ width: '250px', height: '100px', overflow: 'hidden' }}>
          <p>This content is too long and will be hidden outside the container using overflow: hidden.</p>
        </div>
      </div>

      {/* Overflow Scroll Example */}
      <div className="mb-5">
        <h4 className="mb-3">3. Overflow Scroll Example</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<div style="overflow: scroll; width: 250px; height: 100px">...</div>`}
        </pre>
        <div className="border border-primary rounded p-3 mx-auto" style={{ width: '250px', height: '100px', overflow: 'scroll' }}>
          <p>
            Osmosis platform helps you master frontend & backend skills. This paragraph is long so the scrollbar appears for scrolling without affecting the layout.
          </p>
        </div>
      </div>

      {/* Overflow Auto Example */}
      <div className="mb-5">
        <h4 className="mb-3">4. Overflow Auto Example</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<div style="overflow: auto; width: 250px; height: 100px">...</div>`}
        </pre>
        <div className="border border-dark rounded p-3 mx-auto" style={{ width: '250px', height: '100px', overflow: 'auto' }}>
          <p>If content fits, no scroll bar. Otherwise, scroll appears automatically. Try resizing this to check.</p>
        </div>
      </div>

    </div>
    </>
  )
}

export default Cssoverflow