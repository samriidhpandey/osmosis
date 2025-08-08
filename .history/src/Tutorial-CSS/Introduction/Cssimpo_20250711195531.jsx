import React from 'react'

function Cssimpo() {
  return (
    <>
    <div className="container py-5 text-center">
      <h2 className="text-primary fw-bold mb-5">CSS <span>!important</span></h2>

      {/* Important in Inline Style */}
      <div className="mb-5">
        <h4 className="mb-3">1. Overriding CSS with <code>!important</code></h4>
        <pre className="text-start bg-light p-3 rounded">
{`<style>
  .highlight {
    color: red !important;
  }
</style>
<p class="highlight" style="color: blue">Osmosis Paragraph</p>`}
        </pre>
        <p className="highlight bg-warning p-2" style={{ color: 'blue' }}>
          This text should appear <strong style={{ color: 'red' }}>red</strong> due to <code>!important</code> overriding inline blue.
        </p>
      </div>

      {/* Cascading Order Ignored with Important */}
      <div className="mb-5">
        <h4 className="mb-3">2. Cascading Order Ignored</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<style>
  p {
    color: green;
  }
  .force {
    color: orange !important;
  }
</style>
<p class="force">Text example</p>`}
        </pre>
        <p className="force bg-light p-2" style={{ color: 'green' }}>
          This paragraph will be orange due to <code>!important</code> ignoring the cascade from below.
        </p>
      </div>

      {/* Example: Without Important */}
      <div className="mb-5">
        <h4 className="mb-3">3. Without <code>!important</code> (Normal CSS)</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<style>
  .normal {
    color: purple;
  }
</style>
<p class="normal">Styled normally</p>`}
        </pre>
        <p className="normal bg-light p-2" style={{ color: 'purple' }}>
          This paragraph is styled normally without any <code>!important</code> usage.
        </p>
      </div>

      {/* Warning Note */}
      <div className="alert alert-danger mt-5 text-start" role="alert">
        <strong>Note:</strong> Avoid overusing <code>!important</code>. It can make debugging and maintenance harder.
      </div>
    </div>
    </>
  )
}

export default Cssimpo