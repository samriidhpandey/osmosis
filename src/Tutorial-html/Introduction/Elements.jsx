import React from 'react'

function Elements() {
  return (
    <>
    <div className="container my-5">
      <h2 className="text-center mb-4">🔎 HTML Elements</h2>

      <div className="card shadow mb-4">
        <div className="card-body">
          <p>
            Beginners often get confused between HTML <code className="p-2 text-info">elements</code>, <code className="p-2 text-info">nested elements</code>, and <code className="p-2 text-info">tags</code>. Let's clarify the difference by understanding each one step-by-step.
          </p>

          <h5 className="mt-4">✅ What is an HTML Element?</h5>
          <p>
            An HTML element is a complete set that consists of a start tag (or opening tag), content, and an end tag (or closing tag).
          </p>
          <p><strong>HTML Element = Start Tag + Content + End Tag</strong></p>
          <pre className="bg-dark text-white p-3 rounded">
{`<h1>This is our first heading</h1>`}
          </pre>

          <h5 className="mt-4">🔁 What is a Nested HTML Element?</h5>
          <p>
            A nested HTML element is an HTML structure where one element is placed inside another element.
          </p>
          <p>
            The enclosing element is often referred to as the <code className="p-2 text-warning">parent</code>, while the enclosed element is called the <code className="p-2 text-warning">child</code>.
          </p>
          <p><strong>Nested HTML Element = One HTML Element Inside Another HTML Element</strong></p>
          <pre className="bg-dark text-white p-3 rounded">
{`<h1><b>This is our first heading</b></h1>`}
          </pre>

          <h5 className="mt-4">🚫 What is an Empty HTML Element?</h5>
          <p>
            An empty HTML element is one that does not have a closing tag or content. These elements are also known as <code className="p-2 text-danger">void elements</code> or <code className="p-2 text-danger">self-closing elements</code>.
          </p>
          <p><strong>Empty HTML Element = Tags with No Content</strong></p>
          <pre className="bg-dark text-white p-3 rounded">
{`<br />
<hr />`}
          </pre>

          <h5 className="mt-4">🏷️ HTML Tags vs. Elements</h5>
          <h6 className="mt-3">🔹 HTML Tags</h6>
          <p>
            HTML tags are the markers that define the start and end of an element. They are wrapped in angle brackets, like <code className="p-2 text-primary">&lt;p&gt;</code> and <code className="p-2 text-primary">&lt;/p&gt;</code>.
          </p>

          <h6 className="mt-3">🔹 HTML Elements</h6>
          <p>
            An HTML element includes an opening tag, content, and a closing tag, forming a complete set. For example:
          </p>
          <pre className="bg-dark text-white p-3 rounded">
{`<p>This is a paragraph.</p>`}
          </pre>

          <h5 className="mt-4">📝 Key Takeaways</h5>
          <ul>
            <li>Tags set boundaries; elements include tags plus content.</li>
            <li>Tags come in pairs (most of the time), whereas elements may include nested elements.</li>
            <li>Self-closing or void elements like <code className="p-2 text-success">&lt;br /&gt;</code> are still considered elements.</li>
            <li>Elements can be <code className="p-2 text-warning">"parent"</code> or <code className="p-2 text-warning">"child"</code> when nested, but tags cannot.</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Elements