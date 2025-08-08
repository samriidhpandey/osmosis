import React from 'react'

function Liststyle() {
  return (
    <>
    <div className="p-4">
      <h2 className="text-center mb-4">CSS List Styles</h2>
      <p>
        CSS allows you to style lists to match your design and improve readability. Below are examples for both
        unordered and ordered lists, along with custom styling.
      </p>

      <h4 className="mt-4">Unordered List Styling</h4>
      <p className="text-muted">Use <code>list-style-type</code> to set the marker type:</p>
      <ul style={{ listStyleType: 'disc' }} className="mb-3">
        <li>Osmosis Tutorial</li>
        <li>Disc Bullet Example</li>
      </ul>
      <ul style={{ listStyleType: 'circle' }} className="mb-3">
        <li>Osmosis Guide</li>
        <li>Circle Bullet Example</li>
      </ul>
      <ul style={{ listStyleType: 'square' }} className="mb-3">
        <li>Osmosis Notes</li>
        <li>Square Bullet Example</li>
      </ul>
      <ul style={{ listStyleType: 'none' }} className="mb-3">
        <li>Osmosis Tips</li>
        <li>No Bullet Example</li>
      </ul>

      <h4 className="mt-4">Ordered List Styling</h4>
      <p className="text-muted">Use <code>list-style-type</code> to control the numbering style:</p>
      <ol style={{ listStyleType: 'decimal' }} className="mb-3">
        <li>Osmosis Steps</li>
        <li>Decimal Numbering</li>
      </ol>
      <ol style={{ listStyleType: 'decimal-leading-zero' }} className="mb-3">
        <li>Osmosis Lesson</li>
        <li>Leading Zero Example</li>
      </ol>
      <ol style={{ listStyleType: 'lower-roman' }} className="mb-3">
        <li>Osmosis Guide</li>
        <li>Lower Roman Example</li>
      </ol>
      <ol style={{ listStyleType: 'upper-roman' }} className="mb-3">
        <li>Osmosis Walkthrough</li>
        <li>Upper Roman Example</li>
      </ol>
      <ol style={{ listStyleType: 'lower-alpha' }} className="mb-3">
        <li>Osmosis Tips</li>
        <li>Lower Alpha Example</li>
      </ol>
      <ol style={{ listStyleType: 'upper-alpha' }} className="mb-3">
        <li>Osmosis Tricks</li>
        <li>Upper Alpha Example</li>
      </ol>

      <h4 className="mt-4">List Style Position</h4>
      <p className="text-muted">The <code>list-style-position</code> property defines the placement of the list marker:</p>
      <ul style={{ listStylePosition: 'inside' }} className="mb-3">
        <li>Inside Marker Style</li>
        <li>Position: inside</li>
      </ul>
      <ul style={{ listStylePosition: 'outside' }} className="mb-3">
        <li>Outside Marker Style</li>
        <li>Position: outside</li>
      </ul>

      <h4 className="mt-4">Removing Default List Styles</h4>
      <ul style={{ listStyle: 'circle' }} className="mb-3">
        <li>Osmosis Styled List</li>
        <li>Circle Style Example</li>
      </ul>
      <ul style={{ listStyle: 'none' }} className="mb-3">
        <li>No Marker List</li>
        <li>Style: none</li>
      </ul>

      <h4 className="mt-4">Custom List Style</h4>
      <p className="text-muted">You can even use emojis or images with <code>list-style-type</code>:</p>
      <ul className="mb-3">
        <li style={{ listStyleType: '"😍"' }}>Osmosis</li>
        <li style={{ listStyleType: '"😍"' }}>React Developer</li>
      </ul>
    </div>
    </>
  )
}

export default Liststyle