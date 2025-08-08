import React from 'react'

function Cssoverflow() {
  return (
    <>
    <div className="container py-5 text-center">
      <h2 className="text-primary fw-bold mb-5">CSS Buttons Examples</h2>

      {/* Basic Styled Button */}
      <div className="mb-5">
        <h4 className="mb-3">1. Basic Button</h4>
        <button className="btn btn-primary mt-2">Osmosis Button</button>
      </div>

      {/* Hover Effect Button */}
      <div className="mb-5">
        <h4 className="mb-3">2. Hover Effect Button</h4>
        <button className="btn btn-success mt-2">Hover Me</button>
      </div>

      {/* Animated Button */}
      <div className="mb-5">
        <h4 className="mb-3">3. Animated Button</h4>
        <button className="btn btn-warning shadow-sm mt-2">Click Me</button>
      </div>

      {/* Disabled Button */}
      <div className="mb-5">
        <h4 className="mb-3">4. Disabled Button</h4>
        <button className="btn btn-secondary mt-2" disabled>Disabled</button>
      </div>

      {/* Gradient Button */}
      <div className="mb-5">
        <h4 className="mb-3">5. Gradient Button</h4>
        <button className="btn text-white mt-2" style={{ background: 'linear-gradient(135deg, #6366f1, #3b82f6)' }}>Explore Now</button>
      </div>

      {/* Icon Button */}
      <div className="mb-5">
        <h4 className="mb-3">6. Button with Icon</h4>
        <button className="btn btn-danger fw-bold mt-2">
          🚀 Launch Project
        </button>
      </div>

      {/* Overflow Button (CSS Overflow Example) */}
      <div className="mb-5">
        <h4 className="mb-3">7. Overflow Scroll Example</h4>
        <div className="border border-primary rounded p-3 mx-auto" style={{ width: '250px', height: '100px', overflow: 'auto' }}>
          <p>
            Osmosis is a great platform to learn web development. This paragraph is intentionally long so you can see how overflow works in a Bootstrap styled box. Keep scrolling to see the full content. 📜
          </p>
        </div>
      </div>

    </div>
    </>
  )
}

export default Cssoverflow