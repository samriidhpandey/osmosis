import React from 'react'

function Block() {
  return (
    <>
    
     <div className="container my-5">
      <div className="card shadow rounded-4">
        <div className="card-body">
          <h2 className="text-primary mb-4">HTML Block-level Elements</h2>

          <p>
            You already know about HTML inline elements. All HTML tags have specific display behavior: they are either <strong>block-level</strong> or <strong>inline</strong>.
          </p>

          <div className="bg-light p-3 rounded mb-4">
            <h5 className="text-secondary">What are Block-level Elements?</h5>
            <p>
              Block-level elements start on a new line and take up the full width of their container by default. They push any following content to a new line.
            </p>
          </div>

          <h5 className="text-success">Characteristics of Block-level Elements:</h5>
          <ul className="list-group mb-4">
            <li className="list-group-item">Start on a new line</li>
            <li className="list-group-item">Take up the full width available</li>
            <li className="list-group-item">Width and height can be controlled via CSS</li>
            <li className="list-group-item">Can contain both block and inline elements</li>
          </ul>

          <h5 className="text-warning">Common Block-level Elements</h5>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-2 mb-4">
            {blockTags.map((tag, index) => (
              <div className="col" key={index}>
                <div className="border text-center p-2 rounded bg-light">
                  &lt;{tag}&gt;
                </div>
              </div>
            ))}
          </div>

          <h5 className="text-info">Example:</h5>
          <div className="bg-dark text-white p-3 rounded mb-2">
            <pre className="mb-0">
{`<div>
  <h2>This is a heading</h2>
  <p>This is a paragraph inside a block-level div.</p>
</div>`}
            </pre>
          </div>

          <p className="mt-3">
            The above example shows a <code>&lt;div&gt;</code> containing a heading and a paragraph — both block-level elements.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Block