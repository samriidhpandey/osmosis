import React from 'react'

function Form() {
  return (
    <>
     <div className="container my-5">
      <div className="bg-white border rounded shadow-sm p-4">
        <h2 className="text-center text-primary mb-4">More on HTML Forms</h2>

        <p>
          HTML forms are the backbone of interactive websites. They collect data from users and send it to the server. While basic input types are essential, understanding form <strong>attributes</strong> and <strong>HTML5 features</strong> enhances your form’s functionality and usability.
        </p>

        {/* Common Attributes */}
        <h4 className="text-success mt-4">🧩 Common Attributes</h4>

        <h5 className="mt-3">1️⃣ <code>action</code></h5>
        <p>
          Specifies the URL to send form data after submission.
        </p>
        <code className="p-2 bg-light d-block rounded mb-3">
          &lt;form action="/submit.php" method="POST"&gt;&lt;/form&gt;
        </code>

        <h5>2️⃣ <code>method</code></h5>
        <p>
          Defines how the form data is sent. Common methods: <strong>GET</strong> and <strong>POST</strong>.
        </p>
        <code className="p-2 bg-light d-block rounded mb-3">
          &lt;form action="/submit.php" method="POST"&gt;&lt;/form&gt;
        </code>

        <h5>3️⃣ <code>name</code></h5>
        <p>
          Helps identify form elements for scripting or backend.
        </p>
        <code className="p-2 bg-light d-block rounded mb-3">
          &lt;input type="text" name="username" /&gt;
        </code>

        {/* HTML5 Attributes */}
        <h4 className="text-success mt-5">🌐 New HTML5 Attributes</h4>

        <h5 className="mt-3">1️⃣ <code>placeholder</code></h5>
        <p>
          Provides a hint inside input field.
        </p>
        <input type="text" placeholder="Enter your username" className="form-control mb-3" />

        <h5>2️⃣ <code>required</code></h5>
        <p>
          Ensures that the user must fill out the field before submitting.
        </p>
        <input type="text" required placeholder="Required field" className="form-control mb-3" />

        <h5>3️⃣ <code>autofocus</code></h5>
        <p>
          Automatically focuses on the field when the page loads.
        </p>
        <input type="text" autoFocus placeholder="Autofocus example" className="form-control mb-3" />

        {/* HTML5 Validation Attributes */}
        <h4 className="text-success mt-5">🛡️ HTML5 Validation Attributes</h4>

        <h5 className="mt-3">1️⃣ <code>required</code></h5>
        <p>Same as above — makes input mandatory.</p>
        <input type="email" required placeholder="Required email" className="form-control mb-3" />

        <h5>2️⃣ <code>pattern</code></h5>
        <p>
          Specifies a regular expression pattern to match valid input.
        </p>
        <input
          type="text"
          pattern="[a-zA-Z0-9]+"
          placeholder="Alphanumeric only"
          className="form-control mb-3"
        />
        <small className="text-muted d-block mb-4">
          Try typing only letters and numbers.
        </small>

        {/* HTML Code Block */}
        <h5 className="text-secondary">💻 HTML Code</h5>
        <div className="bg-dark text-light p-3 rounded mb-4">
          <pre>
{`<form action="/submit.php" method="POST">
  <input type="text" name="username" placeholder="Enter username" required autofocus>
  <input type="text" pattern="[a-zA-Z0-9]+" required>
</form>`}
          </pre>
        </div>

        {/* Conclusion */}
        <h5 className="text-secondary">🔚 Conclusion</h5>
        <p>
          Form attributes in HTML enhance both the functionality and user experience of your web forms. HTML5 brought powerful new attributes like <code>required</code>, <code>autofocus</code>, and <code>pattern</code> that help in validating and guiding input before submission. Mastering these will ensure your forms are both usable and secure.
        </p>

        <div className="text-end">
          <p className="text-muted mb-0">
            <strong>Previous:</strong> Textarea & Select<br />
            <strong>Next:</strong> Form Layouts with Bootstrap (Coming Soon!)
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreOnForms;
✅ Use in App.jsx
jsx
Copy
Edit
import React from "react";
import MoreOnForms from "./components/MoreOnForms";

function App() {
  return (
    <main className="bg-light min-vh-100 py-5">
      <MoreOnForms />
    </main>
    </>
  )
}

export default Form