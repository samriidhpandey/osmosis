import React from 'react'

function Whystoaddcss() {
  return (
    <>
    <div className="container py-4">
      <h1 className="text-center fw-bold mb-4">Ways to Add CSS</h1>

      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <p>There are <strong>three different ways</strong> to add CSS to an HTML page:</p>
          <ul>
            <li>Inline CSS</li>
            <li>Internal CSS</li>
            <li>External CSS</li>
          </ul>
        </div>
      </div>

      {/* Inline CSS */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h4>1. Inline CSS</h4>
          <p>
            Inline CSS is used to add custom styles directly to specific HTML elements.
            It only affects that one element.
          </p>
          <p>Use the <code className='p-3 text-white'>style</code> attribute inside the HTML tag:</p>
          <pre className="bg-light p-3 rounded">
            <code className='p-3 text-white h-100'>
{`<h1 style="color: purple;">I'm harry</h1>
<h2>I'm CodeWithHarry</h2>`}
            </code>
          </pre>
          <p>
            Here, only the <code className='p-3 text-white'>h1</code> element gets the purple color style.
          </p>
          <p className="text-danger fw-semibold">
            ⚠️ Not ideal for large projects as it's hard to manage.
          </p>
          <p className="text-muted">📷 [CWH tutorial image]</p>
        </div>
      </div>

      {/* Internal CSS */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h4>2. Internal CSS</h4>
          <p>
            Internal CSS is written inside a <code className='p-3 text-white'>&lt;style&gt;</code> block
            inside the <code className='p-3 text-white'>&lt;head&gt;</code> of the HTML file. It can target multiple elements.
          </p>
          <pre className="bg-light p-3 rounded">
            <code className='p-3 text-white'>
{`<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>

<body>
  <h1>CodeWithHarry</h1>
  <p>I'm harry, from CodeWithHarry</p>
  <p>I'm a Developer and founder of CodeWithHarry.com</p>
</body>`}
            </code>
          </pre>
          <p>
            All <code className='p-3 text-white'>&lt;p&gt;</code> tags will have red text.
          </p>
          <p className="text-muted">📷 [CWH tutorial image]</p>
        </div>
      </div>

      {/* External CSS */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h4>3. External CSS</h4>
          <p>
            External CSS is written in a separate file (e.g., <code className='p-3 text-white'>style.css</code>)
            and linked to the HTML using the <code className='p-3 text-white'>&lt;link&gt;</code> tag.
          </p>

          <h6>HTML File:</h6>
          <pre className="bg-light p-3 rounded">
            <code className='p-3 text-white'>
{`<html lang="en">
<head>
  <title>CodeWithHarry</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p>I'm harry, from CodeWithHarry</p>
  <p>I'm a Developer and founder of CodeWithHarry.com</p>
</body>
</html>`}
            </code>
          </pre>

          <h6 className="mt-3">style.css File:</h6>
          <pre className="bg-light p-3 rounded">
            <code className='p-3 text-white'>
{`p {
  color: red;
}`}
            </code>
          </pre>

          <p>
            This approach keeps code cleaner and allows styles to be reused across multiple HTML files.
          </p>

          <h6>🔍 Explanation of Attributes:</h6>
          <ul>
            <li><code className='p-3 text-white'>&lt;link&gt;</code>: connects the HTML to external resources.</li>
            <li><code className='p-3 text-white'>rel="stylesheet"</code>: tells browser this is a CSS file.</li>
            <li><code className='p-3 text-white'>href="style.css"</code>: path to the external file.</li>
          </ul>

          <p className="text-muted">📷 [CWH tutorial image]</p>
        </div>
      </div>

      {/* Precedence Note */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h5>CSS Precedence</h5>
          <p>
            If the same property is defined using all three methods, the browser follows this priority:
          </p>
          <p className="fw-semibold">
            <code className='p-3 text-white'>Inline CSS &gt; Internal CSS &gt; External CSS</code>
          </p>
          <p className="text-info">Use wisely to avoid confusion in styling.</p>

          <p className="mt-3">📘 For more, visit: <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">CSS on Wikipedia</a></p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Whystoaddcss