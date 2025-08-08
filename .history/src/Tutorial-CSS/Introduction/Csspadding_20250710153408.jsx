import React from 'react'

function Csspadding() {
  return (
    <>
   <div className="p-4">
      <h2 className="text-center mb-4">CSS Padding</h2>
      <p className="mb-3">Padding is the space between the HTML content and the border. It gives internal spacing and helps enhance the layout visually.</p>

      <section className="mb-5">
        <h4 className="mb-3">Padding Method 1: Equal Padding</h4>
        <div className="mb-2 p-2 border border-purple-700">Osmosis (without padding)</div>
        <div className="p-3 border border-red-500">Osmosis (with padding: 12px)</div>
      </section>

      <section className="mb-5">
        <h4 className="mb-3">Padding Method 2: Vertical & Horizontal Padding</h4>
        <div className="p-[20px_50px] border border-green-600">
          Osmosis (with padding: 20px 50px)
        </div>
      </section>

      <section className="mb-5">
        <h4 className="mb-3">Padding Method 3: Individual Sides</h4>
        <div
          className="border border-blue-600"
          style={{ padding: '15px 30px 25px 50px' }}
        >
          Osmosis (top: 15px, right: 30px, bottom: 25px, left: 50px)
        </div>
      </section>

      <section>
        <h4 className="mb-3">Playaround Tip</h4>
        <p>Use the inspect tool in browser dev tools to view and adjust padding visually using the computed styles panel.</p>
      </section>
    </div>
    </>
  )
}

export default Csspadding