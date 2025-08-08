import React from 'react'

function Execution() {
  return (
    <>
    <div className="container my-5">
      <h2 className="text-center mb-4">📄 HTML Execution</h2>

      {/* Introduction */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title">Your Journey to Creating Your First Website Begins Here!</h5>
          <p>Let's mark this as an important milestone: the creation of your first website!</p>
          <p><strong>And what's a better way to start than with the traditional "Hello, World!"?</strong></p>
        </div>
      </div>

      {/* Why Hello World */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title">Why "Hello, World!"?</h5>
          <p>In the programming world, "Hello, World!" is more than just a phrase. It's a tradition, an emotion — a simple program that teaches you syntax and gets you started.</p>
          <p><strong>And guess what? HTML is no different!</strong></p>
          <p>Our first website will display the text <code>Hello World</code>.</p>
        </div>
      </div>

      {/* VS Code Setup */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title">Let's Get Started: Setting Up Your VS Code</h5>
          <p>If you haven't already set up your environment, open <strong>Visual Studio Code</strong> (VS Code).</p>
          <p><span className="badge bg-primary">📁 VS Code Open</span></p>
        </div>
      </div>

      {/* Creating New File */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title">Creating a New File</h5>
          <ol>
            <li>Click on <strong>"Open Folder"</strong> and select a folder (e.g., <code>html-tutorial</code>).</li>
            <li>Click on the <strong>"New File"</strong> icon.</li>
            <li>Type the filename as <code>index.html</code> and hit Enter.</li>
          </ol>
          <p><span className="badge bg-warning text-dark">🎬 Video Tutorial</span></p>
        </div>
      </div>

      {/* Code Block */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title">Pasting the Code</h5>
          <p>Copy and paste the following code into your <code>index.html</code> file:</p>
          <pre className="bg-dark text-white p-3 rounded">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Hello World
</body>
</html>`}
          </pre>
        </div>
      </div>

      {/* Live Server */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title">Going Live using the "Live Server" Extension</h5>
          <p>Click the <strong>"Go Live"</strong> icon at the bottom-right of VS Code.</p>
          <p>If it's not visible, install the <strong>Live Server</strong> extension.</p>
          <p><span className="badge bg-success">🟢 Go Live</span></p>
        </div>
      </div>

      {/* Success Message */}
      <div className="card shadow mb-4 bg-light">
        <div className="card-body">
          <h5 className="card-title">Your First Website is Live!</h5>
          <p>Congratulations! You should now see your very first website displaying:</p>
          <div className="alert alert-secondary mt-3 text-center fw-bold">Hello World</div>
        </div>
      </div>

      {/* HTML Preview Extension */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title">Live Preview Extension</h5>
          <p>Another great extension is <strong>HTML Preview</strong>.</p>
          <ol>
            <li>Click on the extensions icon in VS Code.</li>
            <li>Search <strong>"HTML Preview"</strong> and install it.</li>
            <li>A preview button will appear inside VS Code.</li>
          </ol>
          <p><span className="badge bg-info text-dark">🖥️ HTML Preview Extension</span></p>
        </div>
      </div>

      {/* Final Note */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <p>You can now view your HTML without even leaving VS Code. It’s a perfect way to learn and build!</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Execution