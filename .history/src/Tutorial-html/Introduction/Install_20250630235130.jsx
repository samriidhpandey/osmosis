import React from 'react'


function Install() {
  return (
    <>
    <div className="container-fluid my-4 p-0">
      <h2 className="mb-4 text-center">🛠️ Tools You Need to Start HTML</h2>

      {/* Section 1 */}
      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title">1. Do You Even Need to Install Anything?</h5>
          <p className="card-text">
            Technically, <strong>no!</strong> You can use Notepad (Windows) or TextEdit (Mac).
            Just save the file with a <code>.html</code> extension and open in a browser.
          </p>
          <p className="card-text">
            But to <strong>code faster and smarter</strong>, use tools like VS Code or Sublime Text.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title">2. Visual Studio Code (VS Code) – 🔥 Highly Recommended</h5>
          <p className="card-text">
            A free and powerful code editor by Microsoft.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Smart suggestions for HTML</li>
            <li className="list-group-item">Color-coded syntax</li>
            <li className="list-group-item">Live Server for real-time preview</li>
            <li className="list-group-item">Works on Windows, macOS, and Linux</li>
          </ul>
          <p className="mt-3">
            <strong>Install:</strong>{" "}
            <a href="https://code.visualstudio.com" target="_blank" rel="noreferrer">
              https://code.visualstudio.com
            </a>
          </p>
          <p><strong>Must-have Extensions:</strong></p>
          <ul>
            <li>Live Server – Auto-preview</li>
            <li>Prettier – Auto-formatting</li>
            <li>HTML CSS Support – Class suggestions</li>
            <li>Auto Rename Tag – Sync tag names</li>
          </ul>
        </div>
      </div>

      {/* Section 3 */}
      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title">3. Sublime Text – ⚡ Fast and Lightweight</h5>
          <p className="card-text">A fast and simple text editor.</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Opens instantly</li>
            <li className="list-group-item">Great for slower PCs</li>
            <li className="list-group-item">Easy interface</li>
          </ul>
          <p className="mt-3">
            <strong>Install:</strong>{" "}
            <a href="https://www.sublimetext.com" target="_blank" rel="noreferrer">
              https://www.sublimetext.com
            </a>
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title">4. Online HTML Editors – No Installation</h5>
          <p className="card-text">Use these in-browser editors:</p>
          <ul>
            <li><a href="https://codepen.io" target="_blank" rel="noreferrer">CodePen.io</a></li>
            <li><a href="https://jsfiddle.net" target="_blank" rel="noreferrer">JSFiddle.net</a></li>
            <li><a href="https://playcode.io" target="_blank" rel="noreferrer">PlayCode.io</a></li>
          </ul>
        </div>
      </div>

      {/* Section 5 */}
      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title">5. Real-Life Analogy</h5>
          <p className="card-text">
            Writing HTML in Notepad = 📝 Pencil drawing (basic but slow)
          </p>
          <p className="card-text">
            Using VS Code = 🖌️ Digital tablet (smart, colorful, faster)
          </p>
        </div>
      </div>

      {/* Section 6 */}
      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title">6. Basic Folder Setup (Recommended)</h5>
          <p className="card-text">Create your project folder like this:</p>
          <pre>
{`/MyHTMLPractice
├── index.html
├── about.html
├── contact.html
└── /images`}
          </pre>
          <p>Open it in VS Code and use Live Server to preview.</p>
        </div>
      </div>

      {/* Section 7 */}
      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title">7. Summary Table</h5>
          <div className="table-responsive mt-3">
            <table className="table table-bordered text-center">
              <thead className="table-light">
                <tr>
                  <th>Tool</th>
                  <th>Use For</th>
                  <th>Best For</th>
                  <th>Install?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Notepad/TextEdit</td>
                  <td>Basic HTML</td>
                  <td>Beginners</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>VS Code</td>
                  <td>Smart Coding</td>
                  <td>Students, Devs</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Sublime Text</td>
                  <td>Fast Editing</td>
                  <td>Slow PCs</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>CodePen</td>
                  <td>Online Practice</td>
                  <td>Quick Learning</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Install