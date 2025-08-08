import React from 'react'

function List() {
  return (
    <>
    <div className="container my-5">
      <div className="card shadow rounded-4">
        <div className="card-body">
          <h2 className="text-primary mb-4">HTML Lists</h2>
          <p>
            Our day-to-day lives often involve lists. Web developers use lists to neatly display data on websites.
          </p>

          <h4 className="text-success mt-4">Types of HTML Lists</h4>
          <ul>
            <li><strong>Unordered List</strong>: Displays items using bullets.</li>
            <li><strong>Ordered List</strong>: Displays items in numerical sequence.</li>
            <li><strong>Definition List</strong>: Shows term followed by its definition.</li>
          </ul>

          <h5 className="text-secondary mt-4">Unordered List (<code>&lt;ul&gt;</code>)</h5>
          <p>Uses bullets; order doesn't matter.</p>
          <div className="bg-light p-3 rounded mb-3">
            <pre className="mb-0">
{`<ul>
  <li>Pen</li>
  <li>Pencil</li>
  <li>Eraser</li>
</ul>`}
            </pre>
          </div>

          <h5 className="text-secondary">Ordered List (<code>&lt;ol&gt;</code>)</h5>
          <p>Uses numbers; good for sequences.</p>
          <div className="bg-light p-3 rounded mb-3">
            <pre className="mb-0">
{`<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>`}
            </pre>
          </div>

          <h5 className="text-secondary">Definition List (<code>&lt;dl&gt;</code>)</h5>
          <p>Organizes terms and their definitions.</p>
          <div className="bg-light p-3 rounded mb-3">
            <pre className="mb-0">
{`<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>`}
            </pre>
          </div>

          <ul className="list-group mt-4">
            <li className="list-group-item"><code>&lt;ul&gt;</code>: Unordered List</li>
            <li className="list-group-item"><code>&lt;ol&gt;</code>: Ordered List</li>
            <li className="list-group-item"><code>&lt;dl&gt;</code>: Definition List</li>
            <li className="list-group-item"><code>&lt;li&gt;</code>: List Item</li>
            <li className="list-group-item"><code>&lt;dt&gt;</code>: Definition Term</li>
            <li className="list-group-item"><code>&lt;dd&gt;</code>: Definition Description</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default List