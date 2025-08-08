import React from 'react'

function Tags() {
  return (
    <>
     <div className="container my-5">
      <h2 className="text-center mb-4">🏷️ HTML Tags Overview</h2>

      <div className="card shadow mb-4">
        <div className="card-body">
          <p>
            If you want to build a beautiful website, tags are essential elements that help you achieve that.
          </p>
          <p>
            An HTML <code className="text-warning">tag</code> acts as a container for content or other HTML tags. Tags are words enclosed within <code className="text-primary">&lt;</code> and <code className="text-primary">&gt;</code> angle brackets.
          </p>
          <p>
            They serve as keywords that instruct the web browser on how to format and display the content.
          </p>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-body">
          <h5 className="card-title">📚 Commonly Used Tags in HTML</h5>

          <h6 className="mt-4">📄 Document Structure Tags</h6>
          <ul>
            <li><code className="text-danger">&lt;!DOCTYPE html&gt;</code>: Specifies the document type.</li>
            <li><code className="text-primary">&lt;html&gt;</code>: Encloses the entire HTML document.</li>
            <li><code className="text-info">&lt;head&gt;</code>: Contains meta-information and links to scripts and stylesheets.</li>
            <li><code className="text-success">&lt;body&gt;</code>: Contains the content of the web page.</li>
          </ul>

          <h6 className="mt-4">🧠 Metadata Tags</h6>
          <ul>
            <li><code className="text-warning">&lt;title&gt;</code>: Sets the title of the web page.</li>
            <li><code className="text-danger">&lt;meta&gt;</code>: Provides metadata such as character set, author, and viewport settings.</li>
            <li><code className="text-primary">&lt;link&gt;</code>: Links external resources like stylesheets.</li>
          </ul>

          <h6 className="mt-4">✍️ Text Formatting Tags</h6>
          <ul>
            <li><code className="text-secondary">&lt;p&gt;</code>: Paragraph.</li>
            <li><code className="text-secondary">&lt;h1&gt;</code> to <code className="text-secondary">&lt;h6&gt;</code>: Headings.</li>
            <li><code className="text-success">&lt;strong&gt;</code>: Bold emphasis.</li>
            <li><code className="text-info">&lt;em&gt;</code>: Italic emphasis.</li>
            <li><code className="text-primary">&lt;br&gt;</code>: Line break.</li>
            <li><code className="text-primary">&lt;hr&gt;</code>: Horizontal rule.</li>
          </ul>

          <h6 className="mt-4">📋 List Tags</h6>
          <ul>
            <li><code className="text-warning">&lt;ul&gt;</code>: Unordered list.</li>
            <li><code className="text-warning">&lt;ol&gt;</code>: Ordered list.</li>
            <li><code className="text-success">&lt;li&gt;</code>: List item.</li>
          </ul>

          <h6 className="mt-4">🔗 Hyperlink and Media Tags</h6>
          <ul>
            <li><code className="text-primary">&lt;a&gt;</code>: Anchor (used for links).</li>
            <li><code className="text-danger">&lt;img&gt;</code>: Image.</li>
            <li><code className="text-warning">&lt;audio&gt;</code>: Audio content.</li>
            <li><code className="text-success">&lt;video&gt;</code>: Video content.</li>
          </ul>

          <h6 className="mt-4">📨 Form Tags</h6>
          <ul>
            <li><code className="text-primary">&lt;form&gt;</code>: Form.</li>
            <li><code className="text-success">&lt;input&gt;</code>: Input field.</li>
            <li><code className="text-danger">&lt;textarea&gt;</code>: Text area.</li>
            <li><code className="text-warning">&lt;button&gt;</code>: Button.</li>
            <li><code className="text-info">&lt;select&gt;</code>: Dropdown list.</li>
            <li><code className="text-info">&lt;option&gt;</code>: Options inside dropdown.</li>
          </ul>

          <h6 className="mt-4">📊 Table Tags</h6>
          <ul>
            <li><code className="text-secondary">&lt;table&gt;</code>: Table.</li>
            <li><code className="text-secondary">&lt;tr&gt;</code>: Table row.</li>
            <li><code className="text-secondary">&lt;td&gt;</code>: Table data cell.</li>
            <li><code className="text-secondary">&lt;th&gt;</code>: Table header cell.</li>
            <li><code className="text-secondary">&lt;thead&gt;</code>, <code className="text-secondary">&lt;tbody&gt;</code>, <code className="text-secondary">&lt;tfoot&gt;</code></li>
          </ul>

          <h6 className="mt-4">🧩 Semantic Tags</h6>
          <ul>
            <li><code className="text-success">&lt;header&gt;</code>: Header section.</li>
            <li><code className="text-success">&lt;footer&gt;</code>: Footer section.</li>
            <li><code className="text-info">&lt;article&gt;</code>: Article.</li>
            <li><code className="text-info">&lt;section&gt;</code>: Section.</li>
            <li><code className="text-primary">&lt;nav&gt;</code>: Navigation.</li>
            <li><code className="text-warning">&lt;aside&gt;</code>: Sidebar content.</li>
          </ul>

          <h5 className="mt-5">🔄 Paired and Unpaired HTML Tags</h5>
          <p>In HTML, tags are either paired (with opening and closing) or unpaired (self-closing):</p>

          <h6 className="mt-4">✅ Paired Tags</h6>
          <p>These tags come in pairs with content between them:</p>
          <pre className="bg-dark text-white p-3 rounded">
{`<p>This is a paragraph.</p>
<h1>This is a heading.</h1>`}
          </pre>

          <h6 className="mt-4">🚫 Unpaired Tags</h6>
          <p>These are self-contained and don’t require a closing tag:</p>
          <pre className="bg-dark text-white p-3 rounded">
{`<br />
<hr />
<img src="image.jpg" alt="An example image" />`}
          </pre>

          <div className="mt-4">
            <span className="badge bg-info text-dark">🖼️ CWH Tutorial Image</span>
            <p className="mt-2">Shows nested and self-closing HTML tags visually like a tree structure.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tags