import React from 'react'

function Csscoments() {
  return (
    <>
    <div className="container py-4">
      <h1 className="text-center fw-bold mb-4">CSS Comments</h1>

      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <p>
            Comments help with <strong>documentation</strong> and make code easier to understand for future readers.
            CSS comments are ignored by the browser and do not affect styling or layout.
          </p>
          <p className="fw-semibold mb-0">CSS comments are written using:</p>
          <pre className="bg-light p-2 rounded mt-2">
            <code>/* your comment here */</code>
          </pre>
        </div>
      </div>

      {/* Single-line Comment */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h4>1. Single-line Comments</h4>
          <p>Useful for short notes or annotations.</p>

          <p><strong>Syntax:</strong></p>
          <pre className="bg-light p-2 rounded">
            <code>
{`selector {
  /* property: value */
}`}
            </code>
          </pre>

          <p><strong>Example:</strong></p>
          <pre className="bg-light p-2 rounded">
            <code>
{`/* This is a single line comment */
p {
  /* color: red */
}`}
            </code>
          </pre>
        </div>
      </div>

      {/* Multi-line Comment */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h4>2. Multi-line Comments</h4>
          <p>Spans across multiple lines. Ideal for detailed descriptions or disabling multiple properties.</p>

          <p><strong>Syntax:</strong></p>
          <pre className="bg-light p-2 rounded">
            <code>
{`selector {
  /* property1: value1;
     property2: value2;
     property3: value3; */
}`}
            </code>
          </pre>

          <p><strong>Example:</strong></p>
          <pre className="bg-light p-2 rounded">
            <code>
{`/* This is a
multi line
comment */
p {
  /* color: red;
     background-color: purple; */
  color: purple;
  background-color: red;
}`}
            </code>
          </pre>
        </div>
      </div>

      {/* Tip Card */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h5>💡 Tip for VS Code Users</h5>
          <p>
            Use <kbd>Ctrl</kbd> + <kbd>/</kbd> to toggle comments quickly.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Csscoments