import React from 'react'

function Csscolor() {
  return (
    <>
    <div className="p-4">
      <h2 className="text-center mb-4">CSS Colors</h2>
      <p>
        CSS <code>color</code> property is used to define the text color of elements.
        Below are examples showing different ways to apply colors.
      </p>

      <h4 className="mt-4">Color Names</h4>
      <p style={{ color: 'purple' }}>This is purple text.</p>
      <p style={{ color: 'green' }}>This is green text.</p>

      <h4 className="mt-4">Hexadecimal Notation</h4>
      <p style={{ color: '#FF0000' }}>#FF0000 - Red Text</p>
      <p style={{ color: '#00FF00' }}>#00FF00 - Green Text</p>
      <p style={{ color: '#0000FF' }}>#0000FF - Blue Text</p>
      <p style={{ color: '#b700ff' }}>#b700ff - Custom Purple Text</p>

      <h4 className="mt-4">RGB Colors</h4>
      <p style={{ color: 'rgb(0, 0, 0)' }}>rgb(0, 0, 0) - Black Text</p>
      <p style={{ color: 'rgb(255, 255, 255)', backgroundColor: '#000' }}>
        rgb(255, 255, 255) - White Text (on dark bg)
      </p>
      <p style={{ color: 'rgb(30, 150, 220)' }}>rgb(30, 150, 220) - Light Blue</p>

      <h4 className="mt-4">RGBA Colors</h4>
      <p style={{ color: 'rgba(0, 0, 0, 0.8)' }}>rgba(0,0,0,0.8) - 80% black</p>
      <p style={{ color: 'rgba(255, 255, 255, 0.6)', backgroundColor: '#222' }}>
        rgba(255,255,255,0.6) - Semi-white on dark
      </p>
      <p style={{ color: 'rgba(30, 150, 220, 0.6)' }}>
        rgba(30,150,220,0.6) - Semi-transparent blue
      </p>

      <h4 className="mt-4">HSL Colors</h4>
      <p style={{ color: 'hsl(235, 100%, 50%)' }}>hsl(235, 100%, 50%) - Vivid Blue</p>
      <p style={{ color: 'hsl(0, 0%, 0%)' }}>hsl(0, 0%, 0%) - Black</p>

      <h4 className="mt-4">HSLA Colors</h4>
      <p style={{ color: 'hsla(235, 100%, 50%, 0.7)' }}>
        hsla(235,100%,50%,0.7) - Transparent Blue
      </p>
      <p style={{ color: 'hsla(0, 0%, 0%, 0.4)' }}>
        hsla(0,0%,0%,0.4) - 40% black
      </p>
    </div>
    </>
  )
}

export default Csscolor