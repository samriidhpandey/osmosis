import React from 'react'

function Cssmargin() {
  return (
    <>
    <div className="p-4">
      <h2 className="text-center mb-4">CSS Margin</h2>
      <p className="mb-3">
        Margin is the space outside the HTML element. It provides external spacing
        and visually separates elements.
      </p>

      <section className="mb-5">
        <h4 className="mb-3">Margin Method 1: Equal Margin</h4>
        <div className="border border-purple-600 mb-2">Osmosis (without margin)</div>
        <div style={{ margin: '12px', border: '2px solid red' }}>
          Osmosis (with margin: 12px)
        </div>
      </section>

      <section className="mb-5">
        <h4 className="mb-3">Margin Method 2: Vertical & Horizontal Margin</h4>
        <div
          style={{ margin: '20px 50px', border: '2px solid green' }}
        >
          Osmosis (with margin: 20px 50px)
        </div>
      </section>

      <section className="mb-5">
        <h4 className="mb-3">Margin Method 3: Individual Sides</h4>
        <div
          style={{ margin: '15px 30px 25px 50px', border: '2px solid blue' }}
        >
          Osmosis (top: 15px, right: 30px, bottom: 25px, left: 50px)
        </div>
      </section>

      <section>
        <h4 className="mb-3">Playaround Tip</h4>
        <p>
          Use browser inspect tools to view and manipulate margin values using the
          computed box model.
        </p>
      </section>
    </div>
    </>
  )
}

export default Cssmargin