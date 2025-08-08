import React from 'react'

function Cssoverflow() {
  return (
    <>
    <div className="container py-5 text-center">
      <h2 className="text-primary fw-bold mb-5">CSS Buttons & Overflow Examples</h2>

      {/* Basic Styled Button */}
      <div className="mb-5">
        <h4 className="mb-3">1. Basic Button</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<button class="btn btn-primary">Osmosis Button</button>`}
        </pre>
        <button className="btn btn-primary mt-2">Osmosis Button</button>
      </div>

      {/* Hover Effect Button */}
      <div className="mb-5">
        <h4 className="mb-3">2. Hover Effect Button</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<button class="btn btn-success">Hover Me</button>`}
        </pre>
        <button className="btn btn-success mt-2">Hover Me</button>
      </div>

      {/* Animated Button */}
      <div className="mb-5">
        <h4 className="mb-3">3. Animated Button</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<button class="btn btn-warning shadow-sm">Click Me</button>`}
        </pre>
        <button className="btn btn-warning shadow-sm mt-2">Click Me</button>
      </div>

      {/* Disabled Button */}
      <div className="mb-5">
        <h4 className="mb-3">4. Disabled Button</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<button class="btn btn-secondary" disabled>Disabled</button>`}
        </pre>
        <button className="btn btn-secondary mt-2" disabled>Disabled</button>
      </div>

      {/* Gradient Button */}
      <div className="mb-5">
        <h4 className="mb-3">5. Gradient Button</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<button class="btn text-white" style="background: linear-gradient(135deg, #6366f1, #3b82f6)">Explore Now</button>`}
        </pre>
        <button className="btn text-white mt-2" style={{ background: 'linear-gradient(135deg, #6366f1, #3b82f6)' }}>Explore Now</button>
      </div>

      {/* Icon Button */}
      <div className="mb-5">
        <h4 className="mb-3">6. Button with Icon</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<button class="btn btn-danger fw-bold">🚀 Launch Project</button>`}
        </pre>
        <button className="btn btn-danger fw-bold mt-2">
          🚀 Launch Project
        </button>
      </div>

      {/* Overflow Visible Example */}
      <div className="mb-5">
        <h4 className="mb-3">7. Overflow Visible Example</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<div style="overflow: visible; width: 250px; height: 100px">...</div>`}
        </pre>
        <div className="border border-success rounded p-3 mx-auto" style={{ width: '250px', height: '100px', overflow: 'visible' }}>
          <p>Osmosis tutorial - this content may overflow outside the box if it's too long, but still shown fully!</p>
        </div>
      </div>

      {/* Overflow Hidden Example */}
      <div className="mb-5">
        <h4 className="mb-3">8. Overflow Hidden Example</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<div style="overflow: hidden; width: 250px; height: 100px">...</div>`}
        </pre>
        <div className="border border-danger rounded p-3 mx-auto" style={{ width: '250px', height: '100px', overflow: 'hidden' }}>
          <p>This content is too long and will be hidden outside the container using overflow: hidden.</p>
        </div>
      </div>

      {/* Overflow Scroll Example */}
      <div className="mb-5">
        <h4 className="mb-3">9. Overflow Scroll Example</h4>
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
        <h4 className="mb-3">10. Overflow Auto Example</h4>
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