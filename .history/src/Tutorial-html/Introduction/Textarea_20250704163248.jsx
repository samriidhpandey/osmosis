import React from 'react'

function Textarea() {
  return (
    <>
    <div className="container my-5">
      <div className="bg-white border rounded shadow-sm p-4">
        <h2 className="text-center text-primary mb-4">
          Textarea & Select in HTML Forms
        </h2>

        <p>
          Beyond basic inputs, HTML forms also include the{" "}
          <strong>&lt;textarea&gt;</strong> and{" "}
          <strong>&lt;select&gt;</strong> elements. These are useful when you need multiline input or predefined dropdown choices for a better user experience.
        </p>

        {/* Textarea Section */}
        <h4 className="text-success mt-4">📝 The Textarea Element</h4>
        <p>
          <code className="p-2 bg-light rounded d-inline-block">
            &lt;textarea name="comment" rows="4" cols="50"&gt;&lt;/textarea&gt;
          </code>
          <br />
          The <code>textarea</code> tag lets users enter multi-line input, ideal for comments or feedback.
        </p>

        <div className="mb-4">
          <label htmlFor="comment" className="form-label fw-medium">
            Your Comment:
          </label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            cols="50"
            className="form-control"
            placeholder="Enter your comment here..."
          ></textarea>
        </div>

        {/* Select Section */}
        <h4 className="text-success">📋 The Select Element</h4>
        <p>
          <code className="p-2 bg-light rounded d-inline-block">
            &lt;select name="fruits"&gt;&lt;/select&gt;
          </code>
          <br />
          The <code>select</code> tag displays a dropdown menu with predefined options.
        </p>

        <div className="mb-4">
          <label htmlFor="fruits" className="form-label fw-medium">
            Choose a fruit:
          </label>
          <select id="fruits" name="fruits" className="form-select">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
          </select>
        </div>

        {/* Combined Form */}
        <h4 className="text-success">🔗 Combined Example</h4>
        <p>
          You can use <code>textarea</code> and <code>select</code> together to capture different kinds of data.
        </p>

        <form action="/submit" className="bg-light p-4 border rounded mb-4">
          <div className="mb-3">
            <label htmlFor="feedback" className="form-label">
              Feedback:
            </label>
            <textarea
              id="feedback"
              name="comment"
              rows="4"
              cols="50"
              className="form-control"
              placeholder="Share your thoughts..."
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="fruit" className="form-label">
              Favorite Fruit:
            </label>
            <select id="fruit" name="fruits" className="form-select">
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="cherry">Cherry</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        {/* HTML Code Block */}
        <h5 className="text-secondary">💻 HTML Code</h5>
        <div className="bg-dark text-light p-3 rounded mb-4">
          <pre>
{`<form action="/submit">
  <textarea name="comment" rows="4" cols="50">Enter your comment here...</textarea>
  <select name="fruits">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="cherry">Cherry</option>
  </select>
  <input type="submit" value="Submit">
</form>`}
          </pre>
        </div>

        {/* Conclusion */}
        <h5 className="text-secondary">🔚 Conclusion</h5>
        <p>
          <strong>&lt;textarea&gt;</strong> and <strong>&lt;select&gt;</strong> are powerful form elements for capturing long-form text and restricted options. When used together, they make forms more interactive and user-friendly.
        </p>

        
      </div>
    </div>
    </>
  )
}

export default Textarea