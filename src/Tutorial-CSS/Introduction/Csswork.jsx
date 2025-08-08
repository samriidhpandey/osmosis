import React from 'react'

function Csswork() {
  return (
    <>
    <div className="container py-4">
      <h1 className="text-center fw-bold mb-4">How CSS Works?</h1>

      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <p>
            We wrote our first CSS style but still, things wouldn’t be very much clear.
            Let’s look at how CSS works on the DOM model.
          </p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-12">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5>Step-by-Step: How CSS Works</h5>
              <ol>
                <li>The user types the URL and clicks enter.</li>
                <li>The browser makes a fetch request to the server.</li>
                <li>HTML is fetched from the server.</li>
                <li>HTML is converted into a DOM. In the DOM, each tag is considered a node.</li>
                <li>The browser fetches all the linked files like CSS, fonts, images, etc.</li>
                <li>The browser parses the CSS and groups it by selectors (like tags).</li>
                <li>CSS is attached to respective DOM nodes. This forms the <strong>Render Tree</strong>.</li>
                <li>The render tree is built and visually arranged in the browser.</li>
                <li>Finally, the browser paints the design onto the screen.</li>
              </ol>
              <p className="text-muted">📹 Video: How CSS Works</p>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5>What is a DOM?</h5>
              <p>
                A <strong>DOM (Document Object Model)</strong> is like a tree structure of all HTML tags and elements on a web page.
                Every heading, paragraph, image, or button becomes a node in this tree.
              </p>
              <p>
                Think of it as the blueprint that browsers use to build and display a web page.
              </p>
              <p><strong>DOM Example:</strong></p>
              <p className="text-muted">[Insert visual DOM tree image here if needed]</p>
              <p>
                These tags turn into nodes with parent-child relationships.
                DOM is basically an API that lets us interact with HTML using JavaScript or CSS.
              </p>
              <p className="mt-3"><strong>Website Painting:</strong> This is the final result you see in the browser after CSS is rendered and applied.</p>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5>Helpful References</h5>
              <ul>
                <li>🔗 I recommend reading: <strong>How HTML Works</strong></li>
                <li>
                  🔗 For deeper understanding, check out{" "}
                  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" target="_blank">
                    MDN Web Docs on DOM
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

export default Csswork