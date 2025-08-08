import React from 'react'

function Comment() {
  return (
    <>
    <div className="container my-5">
      <h2 className="text-center mb-4">💬 HTML Comments</h2>

      <div className="card shadow mb-4">
        <div className="card-body">
          <p>
            Comments in HTML are like little notes you leave in your code for yourself or other people. These notes help make the code easier to understand but don't show up on the actual website. The web browser just skips over them!
          </p>

          <h5 className="mt-4">📌 Key Points About HTML Comments</h5>
          <ul>
            <li>Comments are ignored by web browsers.</li>
            <li>They aid in code readability and documentation.</li>
            <li>HTML comments are denoted by <code className="p-2 text-warning">&lt;!-- content --&gt;</code>.</li>
            <li>The shortcut key for commenting out code is <code className="p-2 text-info">Ctrl + /</code>.</li>
            <li>HTML supports both single-line and multi-line comments.</li>
          </ul>

          <h5 className="mt-4">📝 Types of Comments in HTML</h5>

          <h6 className="mt-3">🔹 Single-line Comments</h6>
          <p>Single-line comments are contained within one line. They are useful for short annotations.</p>

          <div className="bg-dark text-white p-3 rounded">
            <code className="p-2 text-success">&lt;!-- This is a single-line comment --&gt;</code>
          </div>

          <p className="mt-3">
            As you can see in the video below, the text inside the comment is not rendered.
          </p>

          <h6 className="mt-4">🔸 Multi-line Comments</h6>
          <p>Multi-line comments span across multiple lines, making them ideal for detailed explanations or temporarily disabling blocks of code.</p>

          <div className="bg-dark text-white p-3 rounded">
            <code className="p-2 text-warning">{`<!-- \n  This is a multi-line comment.\n  It spans multiple lines.\n-->`}</code>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Comment