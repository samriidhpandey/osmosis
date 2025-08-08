import React from 'react'

function Order() {
  return (
    <>
    <div className="container my-5">
      <div className="card shadow rounded-4">
        <div className="card-body px-4 py-5">
          <h1 className="text-primary mb-3">HTML Ordered List</h1>

          <p>
            An ordered list is used to represent items where the order matters — like steps, rankings, or instructions. It is created using the <code>&lt;ol&gt;</code> tag, and each item inside it is written using <code>&lt;li&gt;</code>.
          </p>

          <hr className="my-4" />
          <h4 className="text-success">Basic Ordered List Example</h4>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <h6>Preview:</h6>
              <ol>
                <li>Wake up</li>
                <li>Brush your teeth</li>
                <li>Have breakfast</li>
              </ol>
            </div>
            <div className="col-md-6">
              <h6>Code:</h6>
              <pre className="bg-light p-3 rounded">
{`<ol>
  <li>Wake up</li>
  <li>Brush your teeth</li>
  <li>Have breakfast</li>
</ol>`}
              </pre>
            </div>
          </div>

          <hr className="my-4" />
          <h4 className="text-warning">Different Number Types</h4>
          <p>
            You can customize the numbering of an ordered list using the <code>type</code> attribute:
          </p>

          <ul>
            <li><code>type="1"</code>: Default numbers (1, 2, 3...)</li>
            <li><code>type="A"</code>: Uppercase letters (A, B, C...)</li>
            <li><code>type="a"</code>: Lowercase letters (a, b, c...)</li>
            <li><code>type="I"</code>: Uppercase Roman (I, II, III...)</li>
            <li><code>type="i"</code>: Lowercase Roman (i, ii, iii...)</li>
          </ul>

          <div className="row g-3 mt-3 mb-4">
            <div className="col-md-6">
              <h6>Preview (type="A"):</h6>
              <ol type="A">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ol>
            </div>
            <div className="col-md-6">
              <h6>Code:</h6>
              <pre className="bg-light p-3 rounded">
{`<ol type="A">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>`}
              </pre>
            </div>
          </div>

          <hr className="my-4" />
          <h4 className="text-info">Start Attribute</h4>
          <p>
            You can use the <code>start</code> attribute to begin the list from a specific number.
          </p>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <h6>Preview (start="5"):</h6>
              <ol start="5">
                <li>Item One</li>
                <li>Item Two</li>
              </ol>
            </div>
            <div className="col-md-6">
              <h6>Code:</h6>
              <pre className="bg-light p-3 rounded">
{`<ol start="5">
  <li>Item One</li>
  <li>Item Two</li>
</ol>`}
              </pre>
            </div>
          </div>

          <hr className="my-4" />
          <h4 className="text-info">Reversed Attribute</h4>
          <p>
            You can also use the <code>reversed</code> attribute to make the list count backward.
          </p>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <h6>Preview (reversed):</h6>
              <ol reversed>
                <li>Item One</li>
                <li>Item Two</li>
                <li>Item Three</li>
              </ol>
            </div>
            <div className="col-md-6">
              <h6>Code:</h6>
              <pre className="bg-light p-3 rounded">
{`<ol reversed>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ol>`}
              </pre>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Order