import React from 'react'

function Cssbutton() {
  return (
    <>
    <div className="p-6 space-y-10 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-700">CSS Buttons Examples</h2>

      {/* Basic Styled Button */}
      <div>
        <h3 className="text-xl font-semibold mb-2">1. Basic Button</h3>
        <button className="btn-basic">Osmosis Button</button>
      </div>

      {/* Hover Effect Button */}
      <div>
        <h3 className="text-xl font-semibold mb-2">2. Hover Effect Button</h3>
        <button className="btn-hover">Hover Me</button>
      </div>

      {/* Animated Button */}
      <div>
        <h3 className="text-xl font-semibold mb-2">3. Animated Button</h3>
        <button className="btn-animated">Click Me</button>
      </div>

      {/* Disabled Button */}
      <div>
        <h3 className="text-xl font-semibold mb-2">4. Disabled Button</h3>
        <button className="btn-disabled" disabled>Disabled</button>
      </div>

      {/* Gradient Button */}
      <div>
        <h3 className="text-xl font-semibold mb-2">5. Gradient Button</h3>
        <button className="btn-gradient">Explore Now</button>
      </div>

      {/* Icon Button */}
      <div>
        <h3 className="text-xl font-semibold mb-2">6. Button with Icon</h3>
        <button className="btn-icon">
          🚀 Launch Project
        </button>
      </div>
    </div>
    </>
  )
}

export default Cssbutton