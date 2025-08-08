import React from 'react'

function Infoform() {
  return (
    <>
     <div className="container my-5">
      <div className="bg-white border rounded shadow-sm p-4">
        <h2 className="text-center text-primary mb-4">Introduction to HTML Forms</h2>

        <p>
          HTML forms are essential for collecting user input on web pages. Whether it’s a search box, login form, or registration screen — forms make web experiences interactive.
        </p>

        {/* Why Use Forms */}
        <h4 className="text-success mt-4">💡 Why Do We Use Forms?</h4>
        <p>
          Forms act as a communication bridge between the <strong>user</strong> and the <strong>server</strong>. They are used for:
        </p>
        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item">✅ User login and authentication</li>
          <li className="list-group-item">✅ Submitting user data (e.g., feedback, registrations)</li>
          <li className="list-group-item">✅ Interactive features like search, polls, etc.</li>
        </ul>

        {/* Form Structure */}
        <h4 className="text-success">🧱 HTML Form Structure</h4>
        <p>
          The basic form structure is defined using{" "}
          <code className="p-2 bg-light rounded d-inline-block">&lt;form&gt;</code> tags. Inside it, you place controls like:
        </p>
        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item">🔹 Text fields</li>
          <li className="list-group-item">🔹 Password fields</li>
          <li className="list-group-item">🔹 Checkboxes / Radio buttons</li>
          <li className="list-group-item">🔹 Submit / Reset buttons</li>
        </ul>

        {/* Rendered Form Example */}
        <h4 className="text-success">📋 Rendered Form Example</h4>
        <form action="/submit" method="post" className="bg-light p-4 rounded border mb-4">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input type="text" id="username" name="username" required className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" id="password" name="password" required className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label d-block">Gender:</label>
            <div className="form-check form-check-inline">
              <input type="radio" id="male" name="gender" value="male" className="form-check-input" />
              <label htmlFor="male" className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="radio" id="female" name="gender" value="female" className="form-check-input" />
              <label htmlFor="female" className="form-check-label">Female</label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        {/* HTML Code Block */}
        <h5 className="text-secondary">💻 HTML Code</h5>
        <div className="bg-dark text-light p-3 rounded mb-4">
          <pre>
{`<form action="/submit" method="post">
  <!-- Text input for username -->
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>

  <!-- Password input -->
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <!-- Radio buttons for gender -->
  <label>Gender:</label>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label>

  <!-- Submit button -->
  <input type="submit" value="Submit">
</form>`}
          </pre>
        </div>

        {/* Explanation of Form Controls */}
        <h4 className="text-success">⚙️ How Form Controls Work?</h4>
        <p>The <code className="p-2 bg-light rounded d-inline-block">&lt;input&gt;</code> tag is the most used form control. Its attributes:</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>type:</strong> Defines the input type (text, password, radio, etc.)
          </li>
          <li className="list-group-item">
            <strong>name:</strong> Used to identify the input when submitting data to a server.
          </li>
          <li className="list-group-item">
            <strong>value:</strong> Sets a default value for the input.
          </li>
        </ul>

        {/* Footer */}
        <div className="text-end mt-4">
          <p className="text-muted mb-0">
            <strong>Previous:</strong> More on Tables <br />
            <strong>Next:</strong> Input Types in Forms (Coming Soon!)
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Infoform