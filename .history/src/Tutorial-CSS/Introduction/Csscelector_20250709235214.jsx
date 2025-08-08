import React from 'react'

function Csscelector() {
  return (
    <>
      <div className="container py-4">
      <h1 className="text-center fw-bold mb-4">CSS Selectors</h1>

      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <p>
            CSS selectors allow us to choose specific elements and apply styles to them.
            There are multiple types of selectors, each with different use-cases:
          </p>
          <ul>
            <li>Universal Selector</li>
            <li>Element Selector</li>
            <li>ID Selector</li>
            <li>Class Selector</li>
            <li>Group Selector</li>
          </ul>
        </div>
      </div>

      {/* Universal Selector */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h4>1. Universal Selector</h4>
          <p>Targets all HTML elements using <code>*</code>.</p>
          <pre className="bg-light p-3 rounded">
            <code className='h-100 p-3 '>
{`* {
  color: purple;
  text-align: center;
}`}
            </code>
          </pre>
          <p>
            This applies <code>color</code> and <code>text-align</code> to every element on the page.
          </p>
          <p className="text-muted">📷 [Universal Selector Output]</p>
        </div>
      </div>

      {/* Element Selector */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h4>2. Element Selector</h4>
          <p>Targets elements by their tag name.</p>
          <pre className="bg-light p-3 rounded">
            <code>
{`p {
  text-decoration: underline;
}`}
            </code>
          </pre>
          <p>
            All <code>&lt;p&gt;</code> tags will have an underline.
          </p>
          <p className="text-danger">⚠️ Can cause conflicts if tag is used many times.</p>
          <p className="text-muted">📷 [Element Selector Output]</p>
        </div>
      </div>

      {/* ID Selector */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h4>3. ID Selector</h4>
          <p>Targets an element with a specific ID using <code>#</code>.</p>
          <pre className="bg-light p-3 rounded">
            <code>
{`#title {
  text-align: center;
  color: red;
}`}
            </code>
          </pre>
          <p>
            Only the element with <code>id="title"</code> gets the style.
          </p>
          <p className="text-muted">📷 [ID Selector Output]</p>
        </div>
      </div>

      {/* Class Selector */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h4>4. Class Selector</h4>
          <p>Targets one or more elements using <code>.</code> followed by the class name.</p>
          <pre className="bg-light p-3 rounded">
            <code>
{`.red {
  color: red;
}`}
            </code>
          </pre>
          <p>
            All elements with <code>class="red"</code> will have red text.
          </p>
          <p className="text-muted">📷 [Class Selector Output]</p>
        </div>
      </div>

      {/* Group Selector */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h4>5. Group Selector</h4>
          <p>
            Groups multiple selectors to apply the same styles using <code>,</code> (comma).
          </p>
          <pre className="bg-light p-3 rounded">
            <code>
{`p, a {
  color: purple;
}`}
            </code>
          </pre>
          <p>
            Both <code>&lt;p&gt;</code> and <code>&lt;a&gt;</code> will have purple text.
          </p>
          <p className="text-muted">📷 [Group Selector Output]</p>
        </div>
      </div>

      {/* Summary */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h5>📌 Summary:</h5>
          <ul>
            <li><strong>Universal Selector (*)</strong>: Targets the entire page.</li>
            <li><strong>Element Selector</strong>: Targets specific tags.</li>
            <li><strong>ID Selector (#)</strong>: Targets a unique element.</li>
            <li><strong>Class Selector (.)</strong>: Targets a group of elements.</li>
            <li><strong>Group Selector</strong>: Groups multiple selectors to apply same styles.</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Csscelector