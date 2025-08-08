import React from 'react'

function Cssbutton() {
  return (
    <>
    <div className="container py-5 text-center">
      <h2 className="text-primary fw-bold mb-5">CSS Buttons Examples</h2>

      {/* Basic Styled Button */}
      <div className="mb-4">
        <h4 className="mb-3">1. Basic Button</h4>
        <button className="btn btn-primary">Osmosis Button</button>
      </div>

      {/* Hover Effect Button */}
      <div className="mb-4">
        <h4 className="mb-3">2. Hover Effect Button</h4>
        <button className="btn btn-success">Hover Me</button>
      </div>

      {/* Animated Button */}
      <div className="mb-4">
        <h4 className="mb-3">3. Animated Button</h4>
        <button className="btn btn-warning shadow-sm">Click Me</button>
      </div>

      {/* Disabled Button */}
      <div className="mb-4">
        <h4 className="mb-3">4. Disabled Button</h4>
        <button className="btn btn-secondary" disabled>Disabled</button>
      </div>

      {/* Gradient Button */}
      <div className="mb-4">
        <h4 className="mb-3">5. Gradient Button</h4>
        <button className="btn text-white" style={{ background: 'linear-gradient(135deg, #6366f1, #3b82f6)' }}>Explore Now</button>
      </div>

      {/* Icon Button */}
      <div className="mb-4">
        <h4 className="mb-3">6. Button with Icon</h4>
        <button className="btn btn-danger fw-bold">
          🚀 Launch Project
        </button>
      </div>
    </div>
    </>
  )
}

export default Cssbutton