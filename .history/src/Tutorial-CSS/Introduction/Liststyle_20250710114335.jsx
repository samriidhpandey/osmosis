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
      <ul style={{ listStyleType: 'disc' }} className="mb-3">
        <li>Default Disc</li>
        <li>This is list-style: disc</li>
      </ul>
      <ul style={{ listStyleType: 'circle' }} className="mb-3">
        <li>Circle Marker</li>
        <li>This is list-style: circle</li>
      </ul>
      <ul style={{ listStyleType: 'square' }} className="mb-3">
        <li>Square Marker</li>
        <li>This is list-style: square</li>
      </ul>
      <ul style={{ listStyleType: 'none' }} className="mb-3">
        <li>No Marker</li>
        <li>This is list-style: none</li>
      </ul>

      <h4 className="mt-4">Ordered List Styling</h4>
      <ol style={{ listStyleType: 'decimal' }} className="mb-3">
        <li>Default Decimal</li>
        <li>This is decimal</li>
      </ol>
      <ol style={{ listStyleType: 'decimal-leading-zero' }} className="mb-3">
        <li>Leading Zeros</li>
        <li>This is decimal-leading-zero</li>
      </ol>
      <ol style={{ listStyleType: 'lower-roman' }} className="mb-3">
        <li>Lower Roman</li>
        <li>This is lower-roman</li>
      </ol>
      <ol style={{ listStyleType: 'upper-roman' }} className="mb-3">
        <li>Upper Roman</li>
        <li>This is upper-roman</li>
      </ol>
      <ol style={{ listStyleType: 'lower-alpha' }} className="mb-3">
        <li>Lower Alpha</li>
        <li>This is lower-alpha</li>
      </ol>
      <ol style={{ listStyleType: 'upper-alpha' }} className="mb-3">
        <li>Upper Alpha</li>
        <li>This is upper-alpha</li>
      </ol>

      <h4 className="mt-4">List Style Position</h4>
      <ul style={{ listStylePosition: 'inside' }} className="mb-3">
        <li>Inside Marker</li>
        <li>list-style-position: inside</li>
      </ul>
      <ul style={{ listStylePosition: 'outside' }} className="mb-3">
        <li>Outside Marker</li>
        <li>list-style-position: outside</li>
      </ul>

      <h4 className="mt-4">Removing Default List Styles</h4>
      <ul style={{ listStyle: 'circle' }} className="mb-3">
        <li>Circle Style</li>
        <li>This has bullets</li>
      </ul>
      <ul style={{ listStyle: 'none' }} className="mb-3">
        <li>No List Style</li>
        <li>list-style: none</li>
      </ul>

      <h4 className="mt-4">Custom List Style</h4>
      <ul className="mb-3">
        <li style={{ listStyleType: '"😍"' }}>Osmosis</li>
        <li style={{ listStyleType: '"😍"' }}>Developer</li>
      </ul>
    </div>
    </>
  )
}

export default Liststyle