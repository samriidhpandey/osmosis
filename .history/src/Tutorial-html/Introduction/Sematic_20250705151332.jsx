import React from 'react'

function Sematic() {
  return (
    <>
    <div className="container my-5">
      <div className="bg-white border rounded shadow-sm p-4">
        <h2 className="text-center text-primary mb-4">🧩 HTML Semantic Tags</h2>

        <p>
          HTML5 introduced semantic tags to enhance the meaning and structure of web content.
          These tags help browsers, developers, and assistive technologies better understand
          the purpose of different parts of a webpage.
        </p>

        <h4 className="text-success mt-4">✅ Common Semantic Tags</h4>
        <ul>
          <li><code className="p-2">&lt;header&gt;</code>: Represents the header section, often containing logos, titles, or navigation.</li>
          <li><code className="p-2">&lt;nav&gt;</code>: Used for navigational links.</li>
          <li><code className="p-2">&lt;article&gt;</code>: Encapsulates a self-contained piece of content.</li>
          <li><code className="p-2">&lt;section&gt;</code>: Groups related content within a page.</li>
          <li><code className="p-2">&lt;aside&gt;</code>: Sidebars or tangential content.</li>
          <li><code className="p-2">&lt;footer&gt;</code>: Page footer, often with contact or copyright info.</li>
          <li><code className="p-2">&lt;main&gt;</code>: Indicates the main content of a document.</li>
          <li><code className="p-2">&lt;figure&gt;</code> &amp; <code className="p-2">&lt;figcaption&gt;</code>: Used for images with captions.</li>
          <li><code className="p-2">&lt;time&gt;</code>: For date/time values.</li>
        </ul>

        <h4 className="text-success mt-4">🧪 Example: Header &amp; Footer</h4>
        <code className="p-2 bg-light d-block rounded mb-3">
{`<header>
  <h1>My Website</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

<footer>
  <p>Copyright 2025</p>
</footer>`}
        </code>

        <h4 className="text-success mt-4">📘 Example: Article &amp; Section</h4>
        <code className="p-2 bg-light d-block rounded mb-3">
{`<article>
  <h2>Blog Title</h2>
  <section>
    <p>This is a section of the blog article.</p>
  </section>
</article>`}
        </code>

        <h4 className="text-success mt-4">🧱 Example: Aside &amp; Nav</h4>
        <code className="p-2 bg-light d-block rounded mb-3">
{`<aside>
  <p>This is related sidebar content.</p>
</aside>

<nav>
  <ul>
    <li><a href="#">Dashboard</a></li>
    <li><a href="#">Profile</a></li>
  </ul>
</nav>`}
        </code>

        <h4 className="text-success mt-4">🖼️ Example: Figure &amp; Figcaption</h4>
        <code className="p-2 bg-light d-block rounded mb-3">
{`<figure>
  <img src="example.jpg" alt="Sample" />
  <figcaption>This is an image caption.</figcaption>
</figure>`}
        </code>

        <h4 className="text-success mt-4">⏲️ Example: Time</h4>
        <code className="p-2 bg-light d-block rounded mb-3">
{`<time datetime="2025-07-04">July 4, 2025</time>`}
        </code>

        <h5 className="text-secondary mt-4">🔚 Conclusion</h5>
        <p>
          Semantic HTML enhances the structure, readability, and accessibility of your webpages. 
          By using these meaningful tags, you provide more context to both users and machines.
        </p>

        <div className="text-end">
          <p className="text-muted mb-0">
            <strong>Previous:</strong> HTML Code Tag<br />
            <strong>Next:</strong> HTML Entities (Coming Soon!)
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sematic