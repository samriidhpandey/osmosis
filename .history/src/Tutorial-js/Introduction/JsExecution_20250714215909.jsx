import React, { useState } from "react";

const JsExecution = () => {
  const [copied, setCopied] = useState(false);

  const codeExample = `// JavaScript code runs from top to bottom
console.log("Line 1");
console.log("Line 2");
console.log("Line 3");`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-primary">JavaScript Execution</h2>

      <p>
        JavaScript is a <strong>single-threaded</strong>, <strong>synchronous</strong> language by default. This means code executes <strong>line by line</strong>, from top to bottom.
      </p>

      <p>
        Each line is executed in the order it appears, unless affected by:
        <ul>
          <li>Functions</li>
          <li>Loops</li>
          <li>Conditions (if/else)</li>
          <li>Asynchronous code (setTimeout, promises, etc.)</li>
        </ul>
      </p>

      <h4 className="mt-4 text-success">📌 Example:</h4>
      <p>This code runs from top to bottom and logs each line in order:</p>

      <div className="position-relative bg-dark text-white rounded p-3 mb-3">
        <pre className="mb-0">
          <code className="h-100 p-3">{codeExample}</code>
        </pre>
        <button
          className="btn btn-sm btn-warning position-absolute top-0 end-0 m-2"
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <p><strong>Output:</strong></p>
      <div className="bg-light p-3 rounded">
        <code className="h-100 p-3">
          Line 1<br />
          Line 2<br />
          Line 3
        </code>
      </div>

      <p className="mt-4">
        🔁 JavaScript also has an internal engine (like Google's V8) that breaks down code into phases like <strong>parsing</strong>, <strong>compiling</strong>, and <strong>execution context creation</strong>. We'll cover that in more detail later.
      </p>
    </div>
    <div className="container py-5">
      <h2 className="fw-bold text-primary mb-4">JavaScript Execution & Getting Started</h2>

      {/* Do we need to install JS */}
      <div className="mb-4">
        <h4 className="text-success">⚙️ Do we need to install JavaScript?</h4>
        <p><strong>Answer:</strong> <span className="text-warning">NO ❌</span></p>
        <p>JavaScript is already available in your browser, on your phone, and in most digital environments. No separate installation is needed to run JavaScript in browsers.</p>
      </div>

      {/* How to execute JS */}
      <div className="mb-4">
        <h4 className="text-success">🚀 How to execute JavaScript?</h4>
        <ul>
          <li>You can open your browser's <strong>Developer Console</strong> (usually by pressing <code>F12</code>) and start typing JavaScript directly.</li>
          <li>You can use a runtime like <strong>Node.js</strong> for backend JS execution.</li>
          <li>You can write JavaScript inside the <code>&lt;script&gt;</code> tag in an HTML document.</li>
        </ul>
      </div>

      {/* What is JS */}
      <div className="mb-4">
        <h4 className="text-success">📘 What is JavaScript?</h4>
        <p>JavaScript is a <strong>programming language</strong> commonly used in web development.</p>
        <p>It is a <strong>client-side language</strong>, meaning it runs in the user's browser and allows the page to respond to user actions without needing to reload.</p>
        <p>JS is often used with <strong>HTML & CSS</strong> to make websites more interactive and visually dynamic.</p>
        <ul>
          <li>Create drop-down menus ✅</li>
          <li>Image sliders & pop-ups ✅</li>
          <li>Live form validation ✅</li>
        </ul>
      </div>

      {/* Getting started */}
      <div className="mb-4">
        <h4 className="text-success">🛠️ Getting Started with JavaScript</h4>
        <p>To start using JavaScript, you'll need two basic things:</p>
        <ol>
          <li><strong>A Text Editor:</strong> Examples: VS Code, Sublime Text, Atom</li>
          <li><strong>A Web Browser:</strong> Chrome, Firefox, Edge, etc.</li>
        </ol>
        <p>
          Start by creating a file with a <code>.js</code> extension. Write your code and then:
          <ul>
            <li>Either open the file in browser with a linked HTML</li>
            <li>Or run it using Node.js if it's backend code</li>
          </ul>
        </p>
      </div>

      {/* Optional Tip Box */}
      <div className="alert alert-info">
        💡 Tip: Open <strong>Chrome DevTools → Console Tab</strong> and type <code>console.log("Hello World");</code> to instantly execute JS in your browser!
      </div>
    </div>
  );
};

export default JsExecution;