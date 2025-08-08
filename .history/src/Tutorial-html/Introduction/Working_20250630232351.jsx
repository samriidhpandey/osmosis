import React from 'react'

function Working() {
  return (
    <>
      <div className="container py-5 px-4">
      <h1 className="text-center mb-5">HTML Tutorial</h1>

      {/* Section 1: What is HTML */}
      <div className="card mb-5 shadow rounded-4 p-4">
        <div className="card-body">
          <h2 className="card-title mb-3">1. What is HTML?</h2>
          <p>HTML stands for <strong>HyperText Markup Language</strong>. It is not a programming language — it’s a markup language used to structure content on the web. Just like you use pen and paper to write a letter, developers use HTML to build web pages.</p>
          <div className="alert alert-info mt-3">
            <strong>Real-Life Example:</strong> Imagine you're making a burger. You have a bun, patty, cheese, veggies, and sauces — each layer has a purpose and place. Similarly, a web page has text, images, videos, and buttons — and HTML decides how and where each of them will appear.
          </div>
          <ul className="mt-3">
            <li><strong>HTML</strong> = Skeleton of a website</li>
            <li><strong>CSS</strong> = Styling/makeup</li>
            <li><strong>JavaScript</strong> = Brain/functions</li>
          </ul>
          <p className="mt-3"><strong>What HTML Does:</strong></p>
          <ul>
            <li>Gives structure to a web page</li>
            <li>Tells browsers what each part of the content is</li>
            <li>Forms the foundation of every website on the internet</li>
          </ul>
        </div>
      </div>

      {/* Section 2: Introduction to HTML */}
      <div className="card mb-5 shadow rounded-4 p-4">
        <div className="card-body">
          <h2 className="card-title mb-3">2. Introduction to HTML</h2>
          <p>HTML is the language of the internet. Created in 1991 by <strong>Sir Tim Berners-Lee</strong>, it’s so simple that even kids can learn it. If you know how to make text bold in Word, you'll easily understand HTML tags.</p>
          <div className="alert alert-warning mt-3">
            <strong>Analogy:</strong> Imagine a classroom where a teacher asks students to sit according to roll numbers. HTML organizes parts of a webpage so browsers know what to show and where.
          </div>
          <pre className="p-3 mt-3" style={{ backgroundColor: '#f8f9fa', color: '#212529', fontFamily: 'monospace', borderRadius: '0.5rem' }}>
            <code>{`
<h1>This is a heading</h1>
<p>This is a paragraph of text.</p>
<img src="image.jpg" alt="Image Example" />
            `}</code>
          </pre>
          <p className="mt-3"><strong>Where is HTML used?</strong></p>
          <ul>
            <li>Blogs</li>
            <li>Online shopping sites (like Amazon)</li>
            <li>Social media layouts (Instagram, Facebook)</li>
            <li>Portfolio websites</li>
            <li>Mobile apps (via WebView)</li>
          </ul>
          <p className="mt-3"><strong>Summary:</strong> HTML is a simple and powerful language that uses tags to define structure — like headings, text, images, buttons, and more. It’s the first step in becoming a web developer.</p>
        </div>
      </div>

      {/* Section 3: History of HTML */}
      <div className="card mb-5 shadow rounded-4 p-4">
        <div className="card-body">
          <h2 className="card-title mb-3">3. History of HTML</h2>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Year</th>
                  <th>Version</th>
                  <th>Key Features</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1991</td><td>HTML 1.0</td><td>Basic tags like headings, paragraphs, links</td></tr>
                <tr><td>1995</td><td>HTML 2.0</td><td>Forms and input elements introduced</td></tr>
                <tr><td>1997</td><td>HTML 3.2</td><td>Support for scripting and styling</td></tr>
                <tr><td>1999</td><td>HTML 4.01</td><td>Tables, scripting, and layout enhancements</td></tr>
                <tr><td>2014</td><td>HTML5</td><td>Video, audio, canvas, local storage, semantic tags</td></tr>
              </tbody>
            </table>
          </div>
          <div className="alert alert-success mt-3">
            <strong>Comparison:</strong> Think of old-school feature phones (just call & text) vs modern smartphones (games, GPS, videos). HTML evolved in the same way.
          </div>
          <p className="mt-3"><strong>Major Features in HTML5:</strong></p>
          <ul>
            <li>Play YouTube videos without plugins</li>
            <li>Build games that run in the browser</li>
            <li>Store data locally</li>
            <li>Create offline web applications</li>
            <li>Use semantic tags for cleaner code</li>
          </ul>
        </div>
      </div>

      {/* Section 4: How HTML Works & What is a Browser */}
      <div className="card mb-5 shadow rounded-4 p-4">
        <div className="card-body">
          <h2 className="card-title mb-3">4. How HTML Works & What is a Browser?</h2>

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