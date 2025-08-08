import React from 'react'

function Cssweb() {
  return (
    <>
    <div className="container py-4">
      <h1 className="text-center fw-bold mb-4">Your First CSS Website</h1>

      <div className="card mb-4 shadow-sm border-0">
        <div className="card-body">
          <p>In this tutorial, we will focus on creating our first CSS website.</p>
          <p>We will divide the tutorial into the following parts:</p>
          <ul>
            <li>Setting up the environment</li>
            <li>Creating an HTML page</li>
            <li>Adding CSS to HTML</li>
          </ul>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5>Setting up the Environment</h5>
              <h6 className="mt-3">Installing VS Code</h6>
              <ol>
                <li>Go to Google using your preferred browser.</li>
                <li>Type <strong>Visual Studio Code download</strong> in the search bar.</li>
                <li>Click on download and follow the installation instructions for your OS.</li>
              </ol>
              <p className="text-muted">Here's a quick video showing the VS Code installation process.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h6>Installing the Live Server Extension</h6>
              <p>
                We will also install the Live Server extension in Visual Studio Code to enable live reloading of pages.
              </p>
              <p>
                The Live Server extension launches a local development server and reloads the page live as you make changes.
              </p>
              <p className="text-muted">Here's a quick video showing how to install the Live Server extension.</p>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5>Creating an HTML Page</h5>
              <p>
                If you're not comfortable with HTML, you can start by following this HTML Tutorial.
              </p>
              <p>
                Assuming you have some knowledge of HTML, open VS Code and create a new file named <code>index.html</code>.
              </p>
              <p>After creating the HTML file, type <code>!</code> and press enter. This will generate the default HTML boilerplate.</p>
              <p>The generated code should look something like this after changing the title and adding some content:</p>
              <pre className="bg-light p-3 rounded">
                <code>
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>First CSS Website</title>
</head>
<body>
  I'm learning CSS with my favorite CodeWithHarry.
</body>
</html>`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5>Adding CSS to HTML</h5>
              <p>
                Now that we've set up the environment and created an HTML page, let's add some CSS to style it.
              </p>
              <p>Inside the head tag, add the following code:</p>
              <pre className="bg-light p-3 rounded">
                <code className='h-100 text-light p-3'>
{`<style>
  body {
    text-align: center;
    color: white;
    background-color: purple;
  }
</style>`}
                </code>
              </pre>
              <p>You've successfully begun your journey into the world of CSS!</p>
              <p>As you follow these tutorials, you'll gain a better understanding of various CSS properties.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cssweb