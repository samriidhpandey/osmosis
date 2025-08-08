import React from 'react'

function Csspadding() {
  return (
    <>
   <div className="p-4">
      <h2 className="text-center mb-4">CSS Text Styling</h2>

      <section className="mb-5">
        <h4>Text Decoration</h4>
        <p style={{ textDecoration: 'overline' }}>Text with overline</p>
        <p style={{ textDecoration: 'underline' }}>Text with underline</p>
        <p style={{ textDecoration: 'line-through' }}>Text with line-through</p>
        <p style={{ textDecoration: 'overline underline' }}>Text with overline and underline</p>
      </section>

      <section className="mb-5">
        <h4>Text Alignment</h4>
        <p style={{ textAlign: 'left' }}>This text is left aligned.</p>
        <p style={{ textAlign: 'center' }}>This text is center aligned.</p>
        <p style={{ textAlign: 'right' }}>This text is right aligned.</p>
        <p style={{ textAlign: 'justify' }}>
          This text is justified. It will evenly spread across the width of the container, which makes paragraphs look cleaner and aligned.
        </p>
      </section>

      <section className="mb-5">
        <h4>Text Transformation</h4>
        <p style={{ textTransform: 'uppercase' }}>uppercase transformation</p>
        <p style={{ textTransform: 'lowercase' }}>LOWERCASE TRANSFORMATION</p>
        <p style={{ textTransform: 'capitalize' }}>capitalize each word of this sentence</p>
        <p style={{ textTransform: 'none' }}>This is default (none)</p>
      </section>

      <section className="mb-5">
        <h4>Letter Spacing</h4>
        <p style={{ letterSpacing: '5px' }}>This text has 5px letter spacing</p>
      </section>

      <section className="mb-5">
        <h4>Line Height</h4>
        <div style={{ lineHeight: 3.5 }}>
          <p>Line height of 3.5</p>
          <p>Spacing between these lines is controlled by line-height</p>
        </div>
      </section>

      <section className="mb-5">
        <h4>Text Shadow</h4>
        <h3 style={{ textShadow: '2px 3px 4px red' }}>This text has a red shadow</h3>
      </section>

      <section className="mb-5">
        <h4>Text Overflow</h4>
        <div style={{ width: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', border: '1px solid #ccc' }}>
          This is a very long text that will be truncated with an ellipsis if it overflows its container.
        </div>
      </section>
    </div>
    </>
  )
}

export default Csspadding