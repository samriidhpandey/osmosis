import React from 'react'

function Script() {
  return (
    <>
    <div className="container my-5">
      <div className="bg-white border rounded shadow-sm p-4">
        <h2 className="text-center text-primary mb-4">HTML <code className="p-2">&lt;link&gt;</code> & <code className="p-2">&lt;script&gt;</code> Tags</h2>

        <p>
          The <code className="p-2">&lt;link&gt;</code> and <code className="p-2">&lt;script&gt;</code> tags are fundamental in HTML for connecting your page to external resources like stylesheets and JavaScript files. These tags usually appear inside the <code className="p-2">&lt;head&gt;</code> section.
        </p>

        {/* Link Tag Section */}
        <h4 className="text-success mt-4">🎨 The <code className="p-2">&lt;link&gt;</code> Tag</h4>
        <p>
          This tag is used to attach an external CSS file to your HTML document. It’s self-closing and does not require a closing tag.
        </p>
        <code className="p-2 bg-light d-block rounded mb-3">
          &lt;link rel="stylesheet" type="text/css" href="styles.css" /&gt;
        </code>
        <p>
          <strong>rel</strong> defines the relationship (usually "stylesheet") and <strong>href</strong> points to the CSS file.
        </p>

        {/* Script Tag Section */}
        <h4 className="text-success mt-5">⚙️ The <code className="p-2">&lt;script&gt;</code> Tag</h4>
        <p>
          This tag is used to include JavaScript into your HTML. It can either link to an external JS file or contain inline JavaScript code.
        </p>

        <code className="p-2 bg-light d-block rounded mb-3">
{`<script src="script.js" type="text/javascript"></script>`}
        </code>

        <p>
          Always close the <code className="p-2">&lt;script&gt;</code> tag, even if it links to an external file.
        </p>

        <h5 className="text-secondary mt-4">🔚 Conclusion</h5>
        <p>
          The <code className="p-2">&lt;link&gt;</code> and <code className="p-2">&lt;script&gt;</code> tags help modularize your code by keeping CSS and JavaScript in separate files. This improves maintainability, load time, and reusability across pages.
        </p>

        <div className="text-end">
          <p className="text-muted mb-0">
            <strong>Previous:</strong> HTML Meta Tags<br />
            <strong>Next:</strong> Head Elements (Coming Soon!)
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Script