import React from 'react'

function Cssborder() {
  return (
    <>
    <div className="p-4">
      <h2 className="text-center mb-4">CSS Borders</h2>
      <p>CSS borders define the visual edges of HTML elements like text, div, p, h1, etc.</p>

      <h4 className="mt-4">Border Style Examples</h4>
      <div className="mb-3 space-y-2">
        <p style={{ borderStyle: 'none' }}>None</p>
        <p style={{ borderStyle: 'hidden' }}>Hidden</p>
        <p style={{ borderStyle: 'dotted' }}>Dotted</p>
        <p style={{ borderStyle: 'dashed' }}>Dashed</p>
        <p style={{ borderStyle: 'solid' }}>Solid</p>
        <p style={{ borderStyle: 'double' }}>Double</p>
        <p style={{ borderStyle: 'groove' }}>Groove</p>
        <p style={{ borderStyle: 'ridge' }}>Ridge</p>
        <p style={{ borderStyle: 'inset' }}>Inset</p>
        <p style={{ borderStyle: 'outset' }}>Outset</p>
      </div>

      <h4 className="mt-4">Border Color Examples</h4>
      <div className="mb-3 space-y-2">
        <p style={{ border: '2px dotted purple' }}>Dotted (purple)</p>
        <p style={{ border: '2px dashed #FF0000' }}>Dashed (hex)</p>
        <p style={{ border: '2px solid rgb(100, 233, 12)' }}>Solid (rgb)</p>
        <p style={{ border: '2px double hsl(10, 50%, 30%)' }}>Double (hsl)</p>
      </div>

      <h4 className="mt-4">Border Width</h4>
      <div className="mb-3 space-y-2">
        <p style={{ borderWidth: '5px', borderStyle: 'solid', borderColor: 'red' }}>
          Solid Border Width: 5px
        </p>
        <p style={{ borderWidth: 'thin', borderStyle: 'solid', borderColor: '#FF0000' }}>
          Solid Border Width: thin
        </p>
      </div>

      <h4 className="mt-4">Border Radius</h4>
      <div className="mb-3 space-y-2">
        <p style={{ borderRadius: '20px', border: '2px solid red' }}>Rounded border (20px)</p>
        <p style={{ borderRadius: '25%', border: '2px solid #FF0000' }}>Rounded border (25%)</p>
        <p
          style={{
            border: '2px solid teal',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '35px',
          }}
        >
          Different Radius on Corners
        </p>
      </div>

      <h4 className="mt-4">Border Collapse and Spacing (Tables)</h4>
      <div className="overflow-x-auto">
        <table className="table-auto border m-2">
          <caption className="mb-2 font-semibold">Border-Collapse: collapse</caption>
          <tbody style={{ borderCollapse: 'collapse' }}>
            <tr>
              <td className="border p-2">Cell 1</td>
              <td className="border p-2">Cell 2</td>
            </tr>
          </tbody>
        </table>

        <table className="table-auto border m-2">
          <caption className="mb-2 font-semibold">Border-Collapse: separate with spacing</caption>
          <tbody style={{ borderCollapse: 'separate', borderSpacing: '10px' }}>
            <tr>
              <td className="border p-2">Cell 1</td>
              <td className="border p-2">Cell 2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="mt-4">Border Shorthand</h4>
      <div className="mb-3">
        <p style={{ border: '2px solid red' }}>Hello world, I'm Osmosis</p>
      </div>
    </div>
    </>
  )
}

export default Cssborder