import React from 'react'

function List() {
  return (
    <>
     <div className="container my-5">
      <div className="card shadow-sm rounded-4">
        <div className="card-body px-4 py-5">

          <h1 className="text-primary mb-3">HTML Lists</h1>
          <p>
            In our daily life, we often use lists — shopping lists, to-do lists, etc.
            Similarly, in HTML we use lists to group related items.
          </p>

          <hr className="my-4" />
          <h3 className="text-success">Types of HTML Lists</h3>
          <p>HTML provides three types of lists:</p>
          <ul>
            <li>Unordered List (<code>&lt;ul&gt;</code>)</li>
            <li>Ordered List (<code>&lt;ol&gt;</code>)</li>
            <li>Definition List (<code>&lt;dl&gt;</code>)</li>
          </ul>

          <hr className="my-4" />
          <h4 className="text-warning">1. Unordered List</h4>
          <p>
            This list uses <code>&lt;ul&gt;</code> tag with bullet points. Each item is added using <code>&lt;li&gt;</code>.
          </p>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <h6>Preview:</h6>
              <ul>
                <li>Apple</li>
                <li>Mango</li>
                <li>Banana</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h6>Code:</h6>
              <pre className="bg-light p-3 rounded">
{`<ul>
  <li>Apple</li>
  <li>Mango</li>
  <li>Banana</li>
</ul>`}
              </pre>
            </div>
          </div>

          <hr className="my-4" />
          <h4 className="text-warning">2. Ordered List</h4>
          <p>
            This list uses <code >&lt;ol&gt;</code> tag and numbers the items. Useful for step-by-step instructions.
          </p>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <h6>Preview:</h6>
              <ol>
                <li>Wake up</li>
                <li>Brush Teeth</li>
                <li>Have Breakfast</li>
              </ol>
            </div>
            <div className="col-md-6">
              <h6>Code:</h6>
              <pre className="bg-light p-3 rounded">
{`<ol>
  <li>Wake up</li>
  <li>Brush Teeth</li>
  <li>Have Breakfast</li>
</ol>`}
              </pre>
            </div>
          </div>

          <hr className="my-4" />
          <h4 className="text-warning">3. Definition List</h4>
          <p>
            Used to define terms and their meanings. Includes <code className='p-2'>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code> and <code className='p-2'>&lt;dd&gt;</code>.
          </p>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <h6>Preview:</h6>
              <dl>
                <dt>HTML</dt>
                <dd>A markup language</dd>
                <dt>CSS</dt>
                <dd>Styles the page</dd>
              </dl>
            </div>
            <div className="col-md-6">
              <h6>Code:</h6>
              <pre className="bg-light p-3 rounded">
{`<dl>
  <dt>HTML</dt>
  <dd>A markup language</dd>
  <dt>CSS</dt>
  <dd>Styles the page</dd>
</dl>`}
              </pre>
            </div>
          </div>

          <hr className="my-4" />
          <h4 className="text-info">Common HTML List Tags</h4>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item"><code className='p-2'>&lt;ul&gt;</code>: Defines an unordered list</li>
            <li className="list-group-item"><code className='p-2'>&lt;ol&gt;</code>: Defines an ordered list</li>
            <li className="list-group-item"><code className='p-2'>&lt;li&gt;</code>: Defines a list item</li>
            <li className="list-group-item"><code className='p-2'>&lt;dl&gt;</code>: Defines a definition list</li>
            <li className="list-group-item"><code className='p-2'>&lt;dt&gt;</code>: Defines a term in a definition list</li>
            <li className="list-group-item"><code className='p-2'>&lt;dd&gt;</code>: Defines a description of the term</li>
          </ul>

        </div>
      </div>
    </div>
    </>
  )
}

export default List