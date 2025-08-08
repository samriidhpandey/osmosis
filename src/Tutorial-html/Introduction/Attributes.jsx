import React from 'react'

function Attributes() {
  return (
    <>
    <div className="container my-5">
      <h2 className="text-center mb-4">🔧 HTML Attributes</h2>

      <div className="card shadow mb-4">
        <div className="card-body">
          <p>
            HTML attributes are used to define the characteristics of an HTML element.
            They are placed within the element's opening tag and consist of two parts:
            the <strong>name</strong> and the <strong>value</strong>.
          </p>
          <ul>
            <li><strong>Name:</strong> Specifies the property for that element.</li>
            <li><strong>Value:</strong> Sets the value of that property for the element.</li>
          </ul>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title">📚 Types of HTML Attributes</h5>
          <p>There are three main types of HTML attributes:</p>
          <ul>
            <li><strong>Core Attributes:</strong> id, class, style</li>
            <li><strong>Internationalization Attributes:</strong> lang, dir</li>
            <li><strong>Generic Attributes:</strong> data-* (custom data)</li>
          </ul>

          <h6 className="mt-4">✅ Core Attributes</h6>
          <p>There are four main core attributes:</p>
          <ul>
            <li><code className="p-2 text-primary">id</code></li>
            <li><code className="p-2 text-warning">class</code></li>
            <li><code className="p-2 text-success">title</code></li>
            <li><code className="p-2 text-danger">style</code></li>
          </ul>

          <h6 className="mt-4">🆔 ID Attribute</h6>
          <p>The ID attribute assigns a unique identifier to an element.</p>
          <pre className="bg-dark text-white p-3 rounded">
{`<p id="html">This is an HTML tutorial</p>
<p id="python">This is a Python tutorial</p>`}
          </pre>

          <h6 className="mt-4">👥 Class Attribute</h6>
          <p>The class attribute is used for applying styles or JS to multiple elements with the same class.</p>

          <h6 className="mt-4">🖱️ Title Attribute</h6>
          <p>Provides a tooltip on hover:</p>
          <pre className="bg-dark text-white p-3 rounded">
{`<h4 title="hello, motto">Title attribute</h4>`}
          </pre>

          <h6 className="mt-4">🎨 Style Attribute</h6>
          <p>Used to apply inline CSS styling.</p>

          <h6 className="mt-4">🔠 Case Sensitivity</h6>
          <p>
            HTML allows both uppercase and lowercase for attribute names, but the W3C recommends using lowercase for consistency and XHTML compatibility.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Attributes