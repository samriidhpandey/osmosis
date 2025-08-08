import React from 'react'

function Input() {
  return (
    <>
      <div className="container my-5">
      <div className="bg-white border rounded shadow-sm p-4">
        <h2 className="text-center text-primary mb-4">HTML Input Types</h2>

        <p>
          HTML input types form the foundation of interactive forms. They help collect different kinds of user data, like text, passwords, dates, files, and more.
        </p>

        <h4 className="text-success mt-4">✏️ Text Input</h4>
        <p>
          Collects a single line of text.
          <br />
          <code className="p-2 bg-light rounded d-inline-block">
            &lt;input type="text" name="username" placeholder="Enter your username" /&gt;
          </code>
        </p>
        <input type="text" name="username" placeholder="Enter your username" className="form-control mb-3" />

        <h4 className="text-success">🔒 Password Input</h4>
        <p>
          Hides characters entered by the user for privacy.
          <br />
          <code className="p-2 bg-light rounded d-inline-block">
            &lt;input type="password" name="password" placeholder="Enter your password" /&gt;
          </code>
        </p>
        <input type="password" name="password" placeholder="Enter your password" className="form-control mb-3" />

        <h4 className="text-success">🎯 Radio Buttons</h4>
        <p>Select only one option from a group.</p>
        <div className="form-check form-check-inline">
          <input type="radio" id="male" name="gender" value="male" className="form-check-input" />
          <label htmlFor="male" className="form-check-label">Male</label>
        </div>
        <div className="form-check form-check-inline">
          <input type="radio" id="female" name="gender" value="female" className="form-check-input" />
          <label htmlFor="female" className="form-check-label">Female</label>
        </div>

        <h4 className="text-success mt-4">✅ Checkbox</h4>
        <p>Choose multiple options.</p>
        <div className="form-check">
          <input type="checkbox" id="subscribe" name="subscribe" value="yes" className="form-check-input" />
          <label htmlFor="subscribe" className="form-check-label">Subscribe to newsletter</label>
        </div>

        <h4 className="text-success mt-5">📋 More Input Types</h4>
        <p>
          HTML offers many more input types for specific data collection:
        </p>
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>Input Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["text", "Single line text input"],
                ["password", "Password field"],
                ["submit", "Submit button for form"],
                ["reset", "Reset all fields"],
                ["radio", "Select one option"],
                ["checkbox", "Select multiple options"],
                ["button", "Clickable custom button"],
                ["color", "Color picker"],
                ["date", "Select a date"],
                ["datetime-local", "Select date and time (no time zone)"],
                ["email", "Enter email address"],
                ["file", "Choose file from device"],
                ["hidden", "Hidden but submitted to server"],
                ["image", "Image as a submit button"],
                ["month", "Select month and year"],
                ["number", "Enter numeric value"],
                ["range", "Select value in a range"],
                ["search", "Search query field"],
                ["tel", "Enter phone number"],
                ["time", "Select time"],
                ["url", "Enter a URL"],
                ["week", "Select week"],
              ].map(([type, desc]) => (
                <tr key={type}>
                  <td>
                    <code className="p-2 bg-light rounded d-inline-block">&lt;input type="{type}" /&gt;</code>
                  </td>
                  <td>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h5 className="text-secondary mt-4">🔚 Conclusion</h5>
        <p>
          HTML input types are the key to building powerful, user-friendly forms. Choose the right type to ensure the best data entry experience and accurate submissions.
        </p>

        <div className="text-end">
          <p className="text-muted mb-0">
            <strong>Previous:</strong> HTML Forms<br />
            <strong>Next:</strong> HTML Form Validation (Coming Soon!)
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Input