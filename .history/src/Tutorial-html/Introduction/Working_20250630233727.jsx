import React from 'react'
// import { motion } from 'framer-motion';
// import { Globe, Chrome, Server, Eye, FileText } from 'lucide-react';

function Working() {
  return (
    <>
      <div className="container-fluid py-5 px-4">
      <h1 className="text-center mb-5">
        HTML Tutorial
      </h1>

      {/* Section 4: How HTML Works & What is a Browser */}
      <div className="card mb-5 shadow rounded-4 p-4">
        <div className="card-body">
          <h2 className="card-title mb-3">
            4. How HTML Works & What is a Browser?
          </h2>

          <h5 className="mt-3">1. What is HTML and How Does It Work?</h5>
          <p>HTML (HyperText Markup Language) is like writing a letter. It gives instructions to your browser about how to display headings, paragraphs, images, etc. Your browser sends a request to a server, receives HTML, and then displays it.</p>

          <h5 className="mt-4">2. What is a Web Browser?</h5>
          <p>A browser (Chrome, Firefox, Safari, etc.) is a software that lets you access and view websites. It acts like a TV remote that shows you channels (webpages).</p>
          <ul>
            <li>Connects to internet</li>
            <li>Downloads HTML, CSS, JS</li>
            <li>Processes and displays the page</li>
          </ul>

          <h5 className="mt-4">3. How Does a Web Browser Work?</h5>
          <ol>
            <li>You type a URL (e.g., www.google.com)</li>
            <li>DNS finds the server IP</li>
            <li>Browser sends request to server</li>
            <li>Server sends HTML, CSS, JS</li>
            <li>Browser renders the page</li>
            <li>You see the final webpage</li>
          </ol>

          <div className="alert alert-secondary mt-3">
            <strong>Analogy:</strong> Like ordering food — URL is your order, DNS is address lookup, server is the kitchen, browser is you receiving and enjoying the dish.
          </div>

          <h5 className="mt-4">4. Why Do We Need Browsers?</h5>
          <p>Browsers translate code into beautiful websites. Without them, you'd only see raw HTML/CSS/JS — not the styled, clickable, media-rich sites we use every day.</p>

          <h5 className="mt-4">5. Summary Table</h5>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Term</th>
                  <th>What It Means</th>
                  <th>Real Life Example</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>HTML</td><td>Language to structure a webpage</td><td>Recipe for making a dish</td></tr>
                <tr><td>Web Browser</td><td>Software to display webpages</td><td>TV remote to switch channels</td></tr>
                <tr><td>DNS</td><td>Finds server’s IP address</td><td>Post office address book</td></tr>
                <tr><td>Server</td><td>Stores and serves website files</td><td>Kitchen preparing food</td></tr>
                <tr><td>Rendering</td><td>Displays the webpage content</td><td>Waiter serving cooked food</td></tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>

    </>
  )
}

export default Working