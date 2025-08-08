import React from 'react'


function Inline() {
   const inlineTags = [
    "a", "abbr", "acronym", "button", "br", "big", "bdo", "b", "cite", "code",
    "dfn", "i", "em", "img", "input", "kbd", "label", "map", "object", "output",
    "tt", "time", "samp", "script", "select", "small", "span", "strong", "sub",
    "sup", "textarea"
  ];
  return (
    <>
    <div className="container my-5">
      <div className="card shadow rounded-4">
        <div className="card-body">
          <h2 className="text-primary mb-4">HTML Inline Elements</h2>

          <p>
            Inline elements don’t start on a new line. They only take the width required to cover the content.
          </p>

          <div className="bg-light p-3 rounded mb-4">
            <h5 className="text-secondary">Inline vs Block</h5>
            <p>
              HTML elements are generally divided into two categories: <strong>Block-level</strong> and <strong>Inline</strong> elements.
            </p>
            <p>
              Block elements start on a new line and take full width. Inline elements flow within text and take only necessary width.
            </p>
          </div>

          <h4 className="text-success mt-4">What are Inline Elements?</h4>
          <p>
            Inline elements do not start on a new line. They only take as much width as necessary and fit within the flow of text.
          </p>
          <p>
            They can contain other inline elements, but not block-level elements.
          </p>

          <div className="bg-dark text-white p-3 rounded mb-3">
            <strong>Correct:</strong>
            <pre className="mb-0 mt-2">
{`<span>This is <strong>important</strong> text.</span>`}
            </pre>
          </div>

          <div className="bg-danger text-white p-3 rounded mb-4">
            <strong>Incorrect:</strong>
            <pre className="mb-0 mt-2">
{`<span>This is <div>not recommended</div> text.</span>`}
            </pre>
          </div>

          <h5 className="text-warning">Common Inline Elements</h5>
          <ul className="list-group mb-4">
            <li className="list-group-item">&lt;span&gt;: A generic inline container</li>
            <li className="list-group-item">&lt;a&gt;: Defines a hyperlink</li>
            <li className="list-group-item">&lt;strong&gt;: Important text</li>
            <li className="list-group-item">&lt;em&gt;: Emphasized text</li>
            <li className="list-group-item">&lt;img&gt;: Embeds an image</li>
            <li className="list-group-item">&lt;input&gt;: Input control</li>
          </ul>

          <h5 className="text-info">Example Paragraph:</h5>
          <p className="p-3 bg-light rounded">
            This text contains <a href="#">a link</a>, <strong>important</strong> and <em>emphasized</em> content.
          </p>

          <h5 className="text-success mt-4">Styling Inline Elements</h5>
          <p>
            Some CSS properties like <code>color</code> and <code>font-size</code> work well with inline elements. But <code>width</code> and <code>height</code> often don't apply.
          </p>

          <h5 className="text-primary mt-4">List of Inline Tags</h5>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-2">
            {inlineTags.map((tag, index) => (
              <div className="col" key={index}>
                <div className="border text-center p-2 rounded bg-light">
                  &lt;{tag}&gt;
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Inline