import React from 'react'

function Structure() {
  return (
    <>
    <div className="container my-5">
      <h2 className="text-center mb-4">🧱 HTML Page Structure</h2>

      {/* Overview Section */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <p>
            An HTML document is structured using a set of nested tags. Each tag is
            enclosed within <code className="p-2">&lt;...&gt;</code> angle brackets and acts as a container for
            content or other HTML tags.
          </p>
          <p>Let's take a look at a basic HTML document structure:</p>
          <pre className="bg-dark text-white p-3 rounded">
{`<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
   <!-- content -->
</body>
</html>`}
          </pre>
        </div>
      </div>

      {/* Title Explanation */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <p>This is how the title appears on an HTML page:</p>
          <span className="badge bg-warning text-dark">🎬 HTML Title Video</span>
        </div>
      </div>

      {/* Full Example */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title">A Typical HTML Page</h5>
          <pre className="bg-dark text-white p-3 rounded">
{`<html>
<head>
    <title>Page title</title>
</head>
<body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
</body>
</html>`}
          </pre>
          <p className="mt-3">
            Almost every website uses this structure. The main content goes inside the
            <code className="p-2"> &lt;body&gt; </code> tag. No worries if this looks complicated; let's break it
            down!
          </p>
        </div>
      </div>

      {/* Essential Tags */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title">Essential Tags in an HTML Page</h5>
          <ul>
            <li><code className="p-2">&lt;!DOCTYPE html&gt;</code></li>
            <li><code className="p-2">&lt;html&gt; ... &lt;/html&gt;</code></li>
            <li><code className="p-2">&lt;head&gt; ... &lt;/head&gt;</code></li>
            <li><code className="p-2">&lt;title&gt; ... &lt;/title&gt;</code></li>
            <li><code className="p-2">&lt;body&gt; ... &lt;/body&gt;</code></li>
          </ul>
        </div>
      </div>

      {/* Tag Breakdown */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5>📌 DOCTYPE Declaration</h5>
          <code className="d-block mb-2 p-2">&lt;!DOCTYPE html&gt;</code>
          <p className="mt-2">Informs the browser about the HTML version (HTML5).</p>
          <hr />

          <h5>🌍 HTML Root Element</h5>
          <code className="d-block mb-2 p-2">&lt;html&gt; ... &lt;/html&gt;</code>
          <p className="mt-2">Wraps the whole HTML document.</p>
          <hr />

          <h5>🧠 Head Section</h5>
          <code className="d-block mb-2 p-2">&lt;head&gt; ... &lt;/head&gt;</code>
          <p className="mt-2">Contains metadata and links to external resources like CSS or JS.</p>
          <hr />

          <h5>📝 Title Tag</h5>
          <code className="d-block mb-2 p-2">&lt;title&gt;Document&lt;/title&gt;</code>
          <p className="mt-2">Shows the tab title of the page in browser.</p>
          <hr />

          <h5>📦 Body Tag</h5>
          <code className="d-block mb-2 p-2">&lt;body&gt; ... &lt;/body&gt;</code>
          <p className="mt-2">Contains everything that is visible on the web page.</p>
        </div>
      </div>

      {/* Summary */}
      <div className="card shadow mb-4 bg-light">
        <div className="card-body">
          <h5 className="card-title">🧾 Summary</h5>
          <ul>
            <li><code className="p-2">&lt;!DOCTYPE html&gt;</code> <span className="mt-2 d-block">defines the document as HTML5.</span></li>
            <li><code className="p-2">&lt;html lang=\"en\"&gt;</code> <span className="mt-2 d-block">sets the language to English.</span></li>
            <li><code className="p-2">&lt;head&gt;</code> <span className="mt-2 d-block">holds metadata and the title.</span></li>
            <li><code className="p-2">&lt;body&gt;</code> <span className="mt-2 d-block">contains visible page content.</span></li>
            <li><code className="p-2">&lt;h1&gt;</code> and <code className="p-2">&lt;p&gt;</code> <span className="mt-2 d-block">are content elements.</span></li>
          </ul>
        </div>
      </div>

      {/* Visualization Image */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5>📊 Visualization of an HTML Document</h5>
          <p>See the layout of HTML elements:</p>
          <span className="badge bg-info text-dark">📷 HTML Tag Structure Image</span>
        </div>
      </div>

      {/* Browser Output */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5>🌐 How This HTML Appears in a Browser</h5>
          <pre className="bg-dark text-white p-3 rounded">
{`<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <h1>This is a heading</h1>
    <p>This is a paragraph</p>
</body>
</html>`}
          </pre>
          <span className="badge bg-success">🖼️ HTML Headings</span>
          <p className="mt-3">
            The title bar shows content from <code className="p-2">&lt;title&gt;</code>, and body content displays in main window.
          </p>
        </div>
      </div>

      {/* Final Note */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <p>In the upcoming sections, we’ll explore HTML tags and elements in more detail.</p>
        </div>
      </div>
    </div>
    <code className="p-2 text-danger">&lt;!DOCTYPE html&gt;</code>
<code className="p-2 text-primary">&lt;html&gt;</code>
<code className="p-2 text-warning">&lt;head&gt;</code>


    </>
  )
}

export default Structure