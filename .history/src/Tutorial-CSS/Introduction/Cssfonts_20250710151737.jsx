import React from 'react'

function Cssfonts() {
  return (
    <>
    <div className="p-4">
      <h2 className="text-center mb-4">CSS Fonts</h2>

      <h4 className="mt-4">Font Color</h4>
      <p style={{ color: 'red' }}>This text has red color using <code>color: red;</code></p>

      <h4 className="mt-4">Font Size Examples</h4>
      <div className="d-flex flex-column gap-1">
        <p style={{ fontSize: 'small' }}>font-size: small</p>
        <p style={{ fontSize: 'medium' }}>font-size: medium</p>
        <p style={{ fontSize: 'large' }}>font-size: large</p>
        <p style={{ fontSize: 'larger' }}>font-size: larger</p>
        <p style={{ fontSize: '25px' }}>font-size: 25px</p>
        <p style={{ fontSize: '2em' }}>font-size: 2em</p>
        <p style={{ fontSize: '2rem' }}>font-size: 2rem</p>
        <p style={{ fontSize: '50%' }}>font-size: 50%</p>
      </div>

      <h4 className="mt-4">Font Style</h4>
      <p style={{ fontStyle: 'italic' }}>font-style: italic</p>
      <p style={{ fontStyle: 'normal' }}>font-style: normal</p>
      <p style={{ fontStyle: 'oblique' }}>font-style: oblique</p>

      <h4 className="mt-4">Font Variant</h4>
      <p style={{ fontVariant: 'normal' }}>font-variant: normal</p>
      <p style={{ fontVariant: 'small-caps' }}>font-variant: small-caps</p>

      <h4 className="mt-4">Font Weight</h4>
      <div className="d-flex flex-column gap-1">
        {[100, 200, 300, 400, 500, 600, 700, 800, 900].map(weight => (
          <p key={weight} style={{ fontWeight: weight }}>font-weight: {weight}</p>
        ))}
        <p style={{ fontWeight: 'lighter' }}>font-weight: lighter</p>
        <p style={{ fontWeight: 'bold' }}>font-weight: bold</p>
        <p style={{ fontWeight: 'bolder' }}>font-weight: bolder</p>
      </div>

      <h4 className="mt-4">Font Family</h4>
      <p style={{ fontFamily: 'Courier New, Courier, monospace' }}>font-family: 'Courier New', Courier, monospace</p>
      <p style={{ fontFamily: 'Times New Roman, Times, serif' }}>font-family: 'Times New Roman', Times, serif</p>

      <h4 className="mt-4">Generic Font Families</h4>
      <div className="d-flex flex-column gap-1">
        <p style={{ fontFamily: 'serif' }}>This is serif font.</p>
        <p style={{ fontFamily: 'sans-serif' }}>This is sans-serif font.</p>
        <p style={{ fontFamily: 'monospace' }}>This is monospace font.</p>
        <p style={{ fontFamily: 'cursive' }}>This is cursive font.</p>
        <p style={{ fontFamily: 'fantasy' }}>This is fantasy font.</p>
      </div>

      <h4 className="mt-4">Custom Fonts (Google Fonts)</h4>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>
        font-family: 'Roboto', sans-serif; (Add Google Fonts link in index.html)
      </p>
    </div>
    </>
  )
}

export default Cssfonts