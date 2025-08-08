import React from 'react'

function Structure() {
  return (
    <>
     <div className="container my-5">
      <h2 className="text-center mb-4">🧱 HTML Page Structure</h2>

      {/* Introduction */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <p>
            An HTML document is structured using a set of nested tags. Each tag is enclosed within  angle brackets and acts as a container for content or other HTML tags.
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

      {/* Title Section */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <p>This is how the title appears on an HTML page:</p>
          <span className="badge bg-warning text-dark">🎬 HTML Title Video</span>
        </div>
      </div>

      {/* Typical HTML Page */}
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
            Almost every website uses this structure. The main content goes inside the <code>&lt;body&gt;</code> tag.
          </p>
          <div className="alert alert-info">
            No worries if this looks complicated; let's break it down!
          </div>
        </div>
      </div>

      {/* Essential Elements */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title">Essential Elements in HTML</h5>
          <p>These are the must-have tags for a basic HTML document:</p>
          <ul>
            <li><code>&lt;!DOCTYPE html&gt;</code></li>
            <li><code>&lt;html&gt;</code> ... <code>&lt;/html&gt;</code></li>
            <li><code>&lt;head&gt;</code> ... <code>&lt;/head&gt;</code></li>
            <li><code>&lt;title&gt;</code> ... <code>&lt;/title&gt;</code></li>
            <li><code>&lt;body&gt;</code> ... <code>&lt;/body&gt;</code></li>
          </ul>
        </div>
      </div>

      {/* Breakdown Sections */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5>📌 DOCTYPE Declaration</h5>
          <code className="d-block mb-2">&lt;!DOCTYPE html&gt;</code>
          <p>This tells the browser you're using HTML5 — the latest version.</p>
          <hr />

          <h5>🌍 HTML Root Element</h5>
          <code className="d-block mb-2">&lt;html&gt; ... &lt;/html&gt;</code>
          <p>This is the wrapper for the entire web page.</p>
          <hr />

          <h5>🧠 Head Section</h5>
          <code className="d-block mb-2">&lt;head&gt; ... &lt;/head&gt;</code>
          <p>It contains meta info, links to stylesheets, and scripts.</p>
          <hr />

          <h5>📝 Title Tag</h5>
          <code className="d-block mb-2">&lt;title&gt;Document&lt;/title&gt;</code>
          <p>Sets the text shown in the browser tab.</p>
          <hr />

          <h5>📦 Body Tag</h5>
          <code className="d-block mb-2">&lt;body&gt; ... &lt;/body&gt;</code>
          <p>This is where your actual web page content lives (text, images, etc.).</p>
        </div>
      </div>

      {/* Summary */}
      <div className="card shadow mb-4 bg-light">
        <div className="card-body">
          <h5 className="card-title">🧾 Summary</h5>
          <ul>
            <li><code>&lt;!DOCTYPE html&gt;</code> defines this is an HTML5 document.</li>
            <li><code>&lt;html lang="en"&gt;</code> sets the document language.</li>
            <li><code>&lt;head&gt;</code> includes metadata and the <code>&lt;title&gt;</code>.</li>
            <li><code>&lt;body&gt;</code> holds the visible content.</li>
            <li><code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code> are examples of content tags.</li>
          </ul>
        </div>
      </div>

      {/* Visualization Image */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5>📊 Visualization of an HTML Document</h5>
          <p>Below image shows how an HTML page is structured:</p>
          <span className="badge bg-primary">📷 HTML Tag Structure Image</span>
        </div>
      </div>

      {/* Rendered in Browser */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5>🌐 How This HTML Appears in a Web Browser</h5>
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
            The title bar shows what's inside the <code>&lt;title&gt;</code>, and the body tag displays visible content.
          </p>
        </div>
      </div>

      {/* Final Note */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <p>In the upcoming sections, we will learn more HTML tags and how to structure full pages with them.</p>
        </div>
      </div>
    </div>

    </>
  )
}

export default Structure