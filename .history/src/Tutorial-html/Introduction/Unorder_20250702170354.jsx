import React from 'react'

function Unorder() {
  return (
    <>
    <div className="container my-5">
      <div className="card shadow rounded-4">
        <div className="card-body px-4 py-5">
          <h1 className="text-primary mb-3">HTML Unordered List</h1>

          <p>
            An unordered list in HTML is used to group a set of related items in no particular order. Items are usually shown using bullets (•).
            It is defined using the <code>&lt;ul&gt;</code> tag, and each item is added using <code>&lt;li&gt;</code>.
          </p>

          <hr className="my-4" />
          <h4 className="text-success">Syntax of Unordered List</h4>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <h6>Preview:</h6>
              <ul>
                <li>Apple</li>
                <li>Mango</li>
                <li>Banana</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h6>Code:</h6>
              <pre className="bg-light p-3 rounded">
{`<ul>
  <li>Apple</li>
  <li>Mango</li>
  <li>Banana</li>
</ul>`}
              </pre>
            </div>
          </div>

          <hr className="my-4" />
          <h4 className="text-warning">Bullet Types in &lt;ul&gt;</h4>
          <p>
            You can control bullet style using the <code>type</code> attribute or with CSS:
          </p>

          <ul>
            <li><code>disc</code> – default filled circle</li>
            <li><code>circle</code> – hollow circle</li>
            <li><code>square</code> – square bullet</li>
            <li><code>none</code> – no bullet (only using CSS)</li>
          </ul>

          <div className="row g-3 mt-3">
            <div className="col-md-6">
              <h6>Preview (circle):</h6>
              <ul style={{ listStyleType: "circle" }}>
                <li>Pen</li>
                <li>Pencil</li>
                <li>Scale</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h6>Code:</h6>
              <pre className="bg-light p-3 rounded">
{`<ul style="list-style-type: circle;">
  <li>Pen</li>
  <li>Pencil</li>
  <li>Scale</li>
</ul>`}
              </pre>
            </div>
          </div>

          <hr className="my-4" />
          <h4 className="text-info">Nesting Unordered Lists</h4>
          <p>You can place one <code>&lt;ul&gt;</code> inside another to create nested lists.</p>

          <div className="row g-3">
            <div className="col-md-6">
              <h6>Preview:</h6>
              <ul>
                <li>Fruits
                  <ul>
                    <li>Apple</li>
                    <li>Banana</li>
                  </ul>
                </li>
                <li>Vegetables</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h6>Code:</h6>
              <pre className="bg-light p-3 rounded">
{`<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>`}
              </pre>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Unorder