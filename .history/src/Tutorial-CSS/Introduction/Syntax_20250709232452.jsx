import React from 'react'

function Syntax() {
  return (
    <>
     <div className="container py-4">
      <h1 className="text-center fw-bold mb-4">Syntax of CSS</h1>

      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <p>
            CSS follows a <strong>rule-based structure</strong>. Each rule consists of a <strong>selector</strong> and a <strong>declaration block</strong>.
            Selectors target the HTML elements, and the declaration block contains property-value pairs.
          </p>

          <h5 className="mt-4">General Syntax:</h5>
          <pre className="bg-light p-3 rounded">
            <code>
{`selector {
  property: value;
}`}
            </code>
          </pre>

          <p className="text-danger fw-semibold">
            🔸 Note: Semicolon <code>;</code> at the end of each property is <u>very important</u>.
          </p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5>Example 1</h5>
              <pre className="bg-light p-3 rounded">
                <code>
{`h2 {
  color: blue;
}`}
                </code>
              </pre>

              <p>
                <strong>Explanation:</strong>
                <ul className="mb-0">
                  <li><strong>h2</strong> → selector</li>
                  <li><strong>color</strong> → property</li>
                  <li><strong>blue</strong> → property value</li>
                </ul>
              </p>

              <p className="text-muted mt-2">📷 [CWH tutorial image]</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5>Example 2 (Multiple Declarations)</h5>
              <pre className="bg-light p-3 rounded">
                <code className='h-100 p-3 text-'>
{`button {
  color: white;
  background-color: black;
  border: transparent;
  border-radius: 5px;
}`}
                </code>
              </pre>
              <p>
                <strong>Explanation:</strong> <br />
                The <code className='h-100 p-3'>button</code> selector is styled with <strong>multiple</strong> property-value pairs.
              </p>
              <p className="text-success">
                ✅ Each line is separated by a semicolon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Syntax