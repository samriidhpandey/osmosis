import React from 'react'

function Introandhis() {
  return (
    <>
    <div className="container shadow-sm pb-5 py-4">
      <h1 className="text-center fw-bold mb-4">CSS Tutorial</h1>

      <div className="card mb-4 shadow-sm border-0">
        <div className="card-body">
          <h4>Information & History</h4>
          <p>
            Let's start this journey of learning CSS together. I'm Harry, the
            same guy from the CodeWithHarry YouTube channel. This tutorial will
            serve as a resource for students to learn CSS and use the code from
            these lessons as a reference.
          </p>
          <p>Without further ado, let's dive into learning CSS.</p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5>What is CSS?</h5>
              <p>
                CSS stands for <strong>Cascading Style Sheets</strong>. It is a
                stylesheet language used to describe the visual presentation of
                a web page written in HTML.
              </p>
              <p>
                HTML provides structure; CSS provides style. If you're new to
                HTML, consider learning it first.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5>Why "Cascade"?</h5>
              <p>
                "Cascade" refers to the priority system used to apply styles
                when multiple rules affect an element. It uses specificity and
                inheritance to decide which styles win.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5>Why use CSS?</h5>
              <p>
                CSS makes webpages visually appealing and easier to navigate. It
                enables customization of layout, color, fonts, spacing, and more.
              </p>
              <p>
                Without CSS: <br />
                <span className="text-muted">[Before Image]</span>
              </p>
              <p>
                With CSS: <br />
                <span className="text-muted">[After Image]</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5>CSS Analogy</h5>
              <p>
                Imagine a book with plain text—boring, right? Now add colors,
                fonts, headings—much better! CSS is that visual boost.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5>How CSS Works</h5>
              <p>
                CSS targets HTML elements and applies styles like colors,
                margins, fonts, etc. Here's a basic rule:
              </p>
              <pre className="bg-light p-3 rounded">
                <code>
                  selector {"{"}
                  {"\n"} &nbsp;&nbsp;property: value;
                  {"\n"}{"}"}
                </code>
              </pre>

              <h6 className="mt-3">Try this:</h6>
              <ul>
                <li>Right-click anywhere and choose <strong>Inspect</strong></li>
                <li>Click the top-left arrow icon</li>
                <li>Select an element to see its applied CSS</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5>Key Features of CSS</h5>
              <ul>
                <li>Controls layout and styling</li>
                <li>Works with HTML/XML</li>
                <li>Responsive across devices</li>
                <li>Enables animations and interactions</li>
                <li>Modular and regularly updated</li>
                <li>Reusable across multiple pages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5>A Bit of History</h5>
              <p>
                CSS was created by <strong>Håkon Wium Lie</strong> to make the
                web more beautiful. Early websites were plain and text-heavy,
                but CSS brought color, layout, and creativity to the web.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5>Important References</h5>
              <ul>
                <li>Beginner? Start with the HTML tutorial</li>
                <li>
                  Learn more on{" "}
                  <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">
                    Wikipedia
                  </a>
                </li>
                <li>
                  Advanced? Visit{" "}
                  <a
                    href="https://www.w3.org/Style/CSS/Overview.en.html"
                    target="_blank"
                  >
                    W3C CSS Specifications
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Introandhis