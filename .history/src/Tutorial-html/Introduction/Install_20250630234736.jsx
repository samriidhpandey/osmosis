import React from 'react'
import { Container,Card, ListGroup } from "react-bootstrap";
import { FaBolt, FaLaptopCode, FaChrome } from "react-icons/fa";

function Install() {
  return (
    <>
    <Container className="my-5">
      <h2 className="mb-4 text-center">🛠️ Tools You Need to Start HTML</h2>

      {/* Section 1 */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title>1. Do You Even Need to Install Anything?</Card.Title>
          <Card.Text>
            Technically, <strong>no!</strong> You can use basic apps like <code>Notepad</code> (Windows) or <code>TextEdit</code> (Mac). Save your file with a <code>.html</code> extension and open it in any browser.
          </Card.Text>
          <Card.Text>
            But to <strong>code faster and smarter</strong>, use tools like VS Code or Sublime Text.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Section 2 */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title>
            2. Visual Studio Code (VS Code) – 🔥 Highly Recommended
          </Card.Title>
          <Card.Text>
            <FaLaptopCode className="me-2" />
            A free and powerful code editor by Microsoft.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Smart suggestions for HTML</ListGroup.Item>
            <ListGroup.Item>Color-coded syntax</ListGroup.Item>
            <ListGroup.Item>Live Server for real-time preview</ListGroup.Item>
            <ListGroup.Item>Cross-platform: Windows, macOS, Linux</ListGroup.Item>
          </ListGroup>
          <Card.Text className="mt-3">
            <strong>Install:</strong>{" "}
            <a href="https://code.visualstudio.com" target="_blank" rel="noreferrer">
              https://code.visualstudio.com
            </a>
          </Card.Text>
          <Card.Text>
            <strong>Must-have Extensions:</strong>
            <ul>
              <li>Live Server – Auto-preview</li>
              <li>Prettier – Auto-formatting</li>
              <li>HTML CSS Support – Class suggestions</li>
              <li>Auto Rename Tag – Sync tag names</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Section 3 */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title>3. Sublime Text – ⚡ Fast and Lightweight</Card.Title>
          <Card.Text>
            <FaBolt className="me-2" />
            A fast text editor — simple and clean.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Opens instantly</ListGroup.Item>
            <ListGroup.Item>Great for slower PCs</ListGroup.Item>
            <ListGroup.Item>Easy interface</ListGroup.Item>
          </ListGroup>
          <Card.Text className="mt-3">
            <strong>Install:</strong>{" "}
            <a href="https://www.sublimetext.com" target="_blank" rel="noreferrer">
              https://www.sublimetext.com
            </a>
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Section 4 */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title>4. Online HTML Editors – No Installation</Card.Title>
          <Card.Text>
            <FaChrome className="me-2" />
            Try these in-browser editors:
          </Card.Text>
          <ul>
            <li><a href="https://codepen.io" target="_blank" rel="noreferrer">CodePen.io</a></li>
            <li><a href="https://jsfiddle.net" target="_blank" rel="noreferrer">JSFiddle.net</a></li>
            <li><a href="https://playcode.io" target="_blank" rel="noreferrer">PlayCode.io</a></li>
          </ul>
          <Card.Text>
            Ideal for quick practice or learning on shared/school computers.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Section 5 */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title>5. Real-Life Analogy</Card.Title>
          <Card.Text>
            Writing HTML in Notepad = 📝 Painting with a pencil (basic but slow)
          </Card.Text>
          <Card.Text>
            Using VS Code = 🖌️ Digital drawing tablet (fast, colorful, smart)
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Section 6 */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title>6. Basic Folder Setup (Recommended)</Card.Title>
          <Card.Text>Create a folder like this:</Card.Text>
          <pre>
            /MyHTMLPractice{'\n'}
            ├── index.html{'\n'}
            ├── about.html{'\n'}
            ├── contact.html{'\n'}
            └── /images
          </pre>
          <Card.Text>
            Open this in VS Code and use <strong>Live Server</strong> to preview instantly.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Section 7 */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Card.Title>7. Summary Table</Card.Title>
          <table className="table table-bordered text-center mt-3">
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
                <td>Total beginners</td>
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
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}

export default Install