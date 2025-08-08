import React from 'react'

function Cssoverflow() {
  return (
    <>
    <div className="container py-5 text-center">
      <h2 className="text-primary fw-bold mb-5">CSS Overflow Examples</h2>

      {/* Overflow Visible */}
      <div className="mb-5">
        <h4 className="mb-3">1. Overflow Visible</h4>
        <div
          className="border border-success rounded p-2 mx-auto"
          style={{ width: '200px', height: '60px', overflow: 'visible', backgroundColor: 'lavender' }}
        >
          <p>
            Osmosis is a great platform to learn web development. This text overflows visibly outside the container.
          </p>
        </div>
      </div>

      {/* Overflow Hidden */}
      <div className="mb-5 ">
        <h4 className="mb-3">2. Overflow Hidden</h4>
        <div
          className="border border-danger rounded p-2 mx-auto"
          style={{ width: '200px', height: '60px', overflow: 'hidden', backgroundColor: '#f8d7da' }}
        >
          <p>
            Osmosis is a great platform to learn web development. This text is clipped and hidden beyond the box.
          </p>
        </div>
      </div>

      {/* Overflow Scroll */}
      <div className="mb-5">
        <h4 className="mb-3">3. Overflow Scroll</h4>
        <div
          className="border border-info rounded p-2 mx-auto"
          style={{ width: '200px', height: '60px', overflow: 'scroll', backgroundColor: '#d1ecf1' }}
        >
          <p>
            Osmosis is a great platform to learn web development. Scroll to see hidden text.
          </p>
        </div>
      </div>

      {/* Overflow Auto */}
      <div className="mb-5">
        <h4 className="mb-3">4. Overflow Auto</h4>
        <div
          className="border border-warning rounded p-2 mx-auto"
          style={{ width: '200px', height: '60px', overflow: 'auto', backgroundColor: '#fff3cd' }}
        >
          <p>
            Osmosis is a great platform to learn web development. This will only scroll if content overflows.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cssoverflow