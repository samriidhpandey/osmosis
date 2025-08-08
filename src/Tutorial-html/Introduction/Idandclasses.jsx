import React from 'react'

function Idandclasses() {
  return (
    <>
    <div className="container my-5">
      <h2 className="text-center mb-4">🔖 HTML Id & Classes</h2>

      <div className="card shadow mb-4">
        <div className="card-body">
          <p>
            HTML offers multiple ways to select and style elements. Two of the most
            commonly used selectors are <strong>IDs</strong> and <strong>Classes</strong>. This
            blog explores what they are, how to use them, and their differences.
          </p>

          <h5 className="mt-4">🆔 What is an ID?</h5>
          <p>
            An ID is an attribute, a unique identifier assigned to only one HTML element
            within a page. It is often used for unique styling and JavaScript manipulations.
          </p>
          <code className="p-2 d-block bg-light border">&lt;div id="myUniqueID"&gt;This is a div with an ID.&lt;/div&gt;</code>

          <h5 className="mt-4">📦 What are Classes?</h5>
          <p>
            The class attribute lets you give the same name to multiple HTML elements. That
            way, you can easily change their look or behavior all at once. Classes are not
            unique and can be assigned to multiple elements.
          </p>
          <code className="p-2 d-block bg-light border">&lt;div class="myClass"&gt;This is a div with a class.&lt;/div&gt;</code>
          <code className="p-2 d-block bg-light border mt-2">&lt;p class="myClass"&gt;This is a paragraph with the same class.&lt;/p&gt;</code>

          <h5 className="mt-4">🎨 The Style Tag</h5>
          <p>
            The <code className="p-2">style</code> tag in HTML is used to include embedded CSS (Cascading Style
            Sheets) within an HTML document. It is commonly placed within the
            <code className="p-2">&lt;head&gt;</code> section of the HTML file.
          </p>
          <pre className="bg-dark text-white p-3 rounded">
{`<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS rules go here */
    p {
      color: blue;
      font-size: 18px;
    }
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <p>This is a blue paragraph.</p>
  <p class="highlight">This paragraph has a yellow background.</p>
</body>
</html>`}
          </pre>

          <h5 className="mt-4">🎯 Using IDs and Classes in CSS</h5>
          <p>
            In CSS, elements with IDs are selected using a hash <code className="p-2">#</code> symbol,
            and elements with classes are selected using a dot <code className="p-2">.</code>.
          </p>
          <pre className="bg-dark text-white p-3 rounded">
{`/* CSS for ID */
#myUniqueID {
  background-color: yellow;
}

/* CSS for Class */
.myClass {
  font-size: 18px;
}`}
          </pre>

          <h5 className="mt-4">📌 Differences Between IDs and Classes</h5>
          <ul>
            <li><strong>Uniqueness:</strong> IDs are unique, and classes can be reused.</li>
            <li><strong>JavaScript:</strong> IDs are often used for JavaScript operations.</li>
            <li><strong>Styling:</strong> Both can be used for styling, but IDs have higher specificity.</li>
          </ul>

          <h5 className="mt-4">🧠 Conclusion</h5>
          <p>
            Understanding the difference between IDs and Classes is crucial for effective
            web development. While IDs are for unique elements, classes are for grouping
            elements.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Idandclasses