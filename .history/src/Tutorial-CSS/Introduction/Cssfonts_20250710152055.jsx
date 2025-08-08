import React from 'react'

function Cssfonts() {
  return (
    <>
    <div className="p-4">
      <h2 className="text-center mb-4">CSS Fonts</h2>

      <section className="mb-5">
        <h4>Font Colors</h4>
        <p style={{ color: 'crimson' }}>This is a red colored text using <code>color: crimson;</code></p>
        <p style={{ color: '#009688' }}>This text uses HEX color <code>#009688</code></p>
        <p style={{ color: 'rgb(33, 150, 243)' }}>This text uses RGB color <code>rgb(33, 150, 243)</code></p>
      </section>

      <section className="mb-5">
        <h4>Font Sizes</h4>
        <p style={{ fontSize: 'small' }}>font-size: small</p>
        <p style={{ fontSize: 'medium' }}>font-size: medium</p>
        <p style={{ fontSize: 'large' }}>font-size: large</p>
        <p style={{ fontSize: '25px' }}>font-size: 25px</p>
        <p style={{ fontSize: '2em' }}>font-size: 2em</p>
        <p style={{ fontSize: '2rem' }}>font-size: 2rem</p>
        <p style={{ fontSize: '50%' }}>font-size: 50%</p>
      </section>

      <section className="mb-5">
        <h4>Font Styles</h4>
        <p style={{ fontStyle: 'italic' }}>This text is italic</p>
        <p style={{ fontStyle: 'normal' }}>This text is normal</p>
        <p style={{ fontStyle: 'oblique' }}>This text is oblique</p>
      </section>

      <section className="mb-5">
        <h4>Font Variant</h4>
        <p style={{ fontVariant: 'normal' }}>font-variant: normal</p>
        <p style={{ fontVariant: 'small-caps' }}>font-variant: small-caps</p>
      </section>

      <section className="mb-5">
        <h4>Font Weights</h4>
        <div className="d-flex flex-wrap gap-4">
          {[100, 200, 300, 400, 500, 600, 700, 800, 900].map(weight => (
            <div key={weight} style={{ fontWeight: weight }}>
              font-weight: {weight}
            </div>
          ))}
          <div style={{ fontWeight: 'lighter' }}>font-weight: lighter</div>
          <div style={{ fontWeight: 'bold' }}>font-weight: bold</div>
          <div style={{ fontWeight: 'bolder' }}>font-weight: bolder</div>
        </div>
      </section>

      <section className="mb-5">
        <h4>Font Families</h4>
        <p style={{ fontFamily: 'Courier New, Courier, monospace' }}>
          This text uses: Courier New, Courier, monospace
        </p>
        <p style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          This text uses: Times New Roman, Times, serif
        </p>
      </section>

      <section className="mb-5">
        <h4>Generic Font Families</h4>
        <div className="d-flex flex-column gap-2">
          <p style={{ fontFamily: 'serif' }}>Generic serif font</p>
          <p style={{ fontFamily: 'sans-serif' }}>Generic sans-serif font</p>
          <p style={{ fontFamily: 'monospace' }}>Generic monospace font</p>
          <p style={{ fontFamily: 'cursive' }}>Generic cursive font</p>
          <p style={{ fontFamily: 'fantasy' }}>Generic fantasy font</p>
        </div>
      </section>

      <section className="mb-5">
        <h4>Custom Google Fonts (Preview Only)</h4>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
          This is text with Poppins font (600 weight)
        </p>
        <p style={{ fontFamily: 'Roboto Mono, monospace' }}>
          This is text with Roboto Mono font
        </p>
        <p className="text-muted">
          You can import Google Fonts via <code>@import</code> in CSS or link tag in HTML.
        </p>
      </section>
    </div>
    </>
  )
}

export default Cssfonts