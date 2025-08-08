import React from 'react'

function Codetag() {
  return (
    <>
    <div className="container my-5">
      <div className="bg-white border rounded shadow-sm p-4">
        <h2 className="text-center text-primary mb-4">💻 HTML &lt;code&gt;</code> Tag</h2>

        <p>
          The <code className="p-2">&lt;code&gt;</code> tag is a semantic HTML tag designed for displaying programming code snippets. It's useful for both inline and multiline code, and helps preserve formatting while improving accessibility.
        </p>

        <h4 className="text-success mt-4">✨ Why Use It?</h4>
        <ul>
          <li><strong>Semantic Clarity:</strong> Indicates that the content is computer code</li>
          <li><strong>Accessibility:</strong> Screen readers and browsers can interpret it more clearly</li>
          <li><strong>Styling and Highlighting:</strong> Can be styled with CSS or syntax highlighting libraries like Prism.js</li>
        </ul>

        <h4 className="text-success mt-4">🔤 Inline Code Example</h4>
        <code className="p-2 bg-light d-block rounded mb-3">
          &lt;p&gt;Use the &lt;code&gt;tag&lt;/code&gt; for inline code.&lt;/p&gt;
        </code>

        <h4 className="text-success mt-4">📚 Block Code with &lt;pre&gt;</h4>
        <code className="p-2 bg-light d-block rounded mb-3">
{`<pre><code>
function greet() {
  console.log("Hello, world!");
}
</code></pre>`}
        </code>

        <h5 className="text-secondary mt-4">🔚 Conclusion</h5>
        <p>
          The <code className="p-2">&lt;code&gt;</code> tag is perfect for including technical snippets in your content. When used with <code className="p-2">&lt;pre&gt;</code>, it allows full preservation of indentation and spacing, ensuring code readability.
        </p>

        <div className="text-end">
          <p className="text-muted mb-0">
            <strong>Previous:</strong> iFrames in HTML<br />
            <strong>Next:</strong> HTML Entities (Coming Soon!)
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Codetag