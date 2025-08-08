import React, { useState } from "react";

const JsIntroduction = () => {
  const [copied, setCopied] = useState(false);

  const codeExample = `// This is a simple JavaScript program
let name = "Samridh";
console.log("Hello, " + name + "!");`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-primary">Introduction to JavaScript</h2>

      <p>
        JavaScript is a <strong>high-level</strong>, <strong>interpreted</strong> programming language that allows you to create dynamic and interactive content on web pages.
      </p>

      <ul>
        <li>🎯 It runs directly in the browser (no compiler needed).</li>
        <li>🛠️ It adds behavior to your website — like popups, sliders, form validation, etc.</li>
        <li>📡 JavaScript can even be used on servers (using Node.js).</li>
      </ul>

      <h4 className="mt-4 text-success">🔰 Basic Example:</h4>
      <p>This JavaScript code declares a variable and prints a message to the browser console.</p>

      <div className="position-relative text-white rounded p-3 mb-3">
        <pre className="mb-0">
          <code className="h-100 p-3">{codeExample}</code>
        </pre>
        <button
          className="btn btn-sm btn-warning position-absolute top-1 end-0 m-2"
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <p><strong>Output:</strong> <code>Hello, Samridh!</code></p>

      <p className="mt-4">
        As you move forward, you'll learn how to work with:
        <ul>
          <li>Variables & Data Types</li>
          <li>Operators & Conditions</li>
          <li>Functions & Events</li>
          <li>DOM Manipulation</li>
          <li>...and much more!</li>
        </ul>
      </p>
    </div>
  );
};

export default JsIntroduction;
