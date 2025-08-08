import React from 'react'

function Install() {
  return (
    <>
    <section className="htmlSetupContainer">

  <header className="htmlSetupHeader">
    <h1 className="htmlSetupTitle">Tools You Need to Start HTML</h1>
  </header>

  {/* Do You Need to Install Anything? */}
  <section className="htmlInstallNeedSection">
    <h2 className="htmlInstallNeedHeading">1. Do You Even Need to Install Anything?</h2>
    <p className="htmlInstallNeedParagraph">
      Technically, no! You can write HTML using basic apps like <strong>Notepad</strong> (Windows) or <strong>TextEdit</strong> (Mac). Just save the file with a <code>.html</code> extension and open it in any browser.
    </p>
    <p className="htmlInstallNeedParagraph">
      But if you want to **code faster and smarter**, tools like <strong>Visual Studio Code (VS Code)</strong> or <strong>Sublime Text</strong> make the experience smoother and more professional.
    </p>
  </section>

  {/* VS Code Section */}
  <section className="htmlVSCodeSection">
    <h2 className="htmlVSCodeHeading">2. Visual Studio Code (VS Code) – 🔥 Highly Recommended</h2>
    <p className="htmlVSCodeParagraph">
      <strong>What is it?</strong><br />
      A free and powerful code editor created by Microsoft.
    </p>
    <p className="htmlVSCodeParagraph">
      <strong>Why use it?</strong>
    </p>
    <ul className="htmlVSCodeList">
      <li>Smart suggestions while writing HTML</li>
      <li>Color-coded tags (syntax highlighting)</li>
      <li>Extensions like Live Server for real-time preview</li>
      <li>Works on Windows, macOS, and Linux</li>
    </ul>
    <p className="htmlVSCodeParagraph"><strong>How to Install VS Code:</strong></p>
    <ol className="htmlVSCodeStepsList">
      <li>Go to <a href="https://code.visualstudio.com" target="_blank">https://code.visualstudio.com</a></li>
      <li>Click "Download" for your operating system</li>
      <li>Install it like any other app</li>
      <li>Launch and start coding!</li>
    </ol>

    <p className="htmlVSCodeParagraph"><strong>Must-have Extensions:</strong></p>
    <ul className="htmlVSCodeList">
      <li><code>Live Server</code> – Auto-preview your HTML in browser</li>
      <li><code>Prettier</code> – Automatically format your code</li>
      <li><code>HTML CSS Support</code> – Suggests class names from CSS</li>
      <li><code>Auto Rename Tag</code> – Auto-updates closing tags</li>
    </ul>
  </section>

  {/* Sublime Text Section */}
  <section className="htmlSublimeSection">
    <h2 className="htmlSublimeHeading">3. Sublime Text – ⚡ Fast and Lightweight</h2>
    <p className="htmlSublimeParagraph">
      <strong>What is it?</strong><br />
      A super-fast text editor that is simple and clean.
    </p>
    <p className="htmlSublimeParagraph">
      <strong>Why use it?</strong>
    </p>
    <ul className="htmlSublimeList">
      <li>Very lightweight – opens instantly</li>
      <li>Easy to use interface</li>
      <li>Great for slower computers</li>
    </ul>
    <p className="htmlSublimeParagraph"><strong>How to Install Sublime Text:</strong></p>
    <ol className="htmlSublimeStepsList">
      <li>Go to <a href="https://www.sublimetext.com" target="_blank">https://www.sublimetext.com</a></li>
      <li>Download the setup for your OS</li>
      <li>Install and start using right away</li>
    </ol>
    <p className="htmlSublimeParagraph"><em>Note:</em> Some advanced features require a license, but for basic HTML, it works fine for free.</p>
  </section>

  {/* Online Editors Section */}
  <section className="htmlOnlineSection">
    <h2 className="htmlOnlineHeading">4. Online HTML Editors – No Installation Needed</h2>
    <p className="htmlOnlineParagraph">
      Don’t want to install anything? Try these online editors right in your browser:
    </p>
    <ul className="htmlOnlineList">
      <li><a href="https://codepen.io" target="_blank">CodePen.io</a></li>
      <li><a href="https://jsfiddle.net" target="_blank">JSFiddle.net</a></li>
      <li><a href="https://playcode.io" target="_blank">PlayCode.io</a></li>
    </ul>
    <p className="htmlOnlineParagraph">
      Great for learning on shared or school computers.
    </p>
  </section>

  {/* Analogy Section */}
  <section className="htmlSetupAnalogySection">
    <h2 className="htmlSetupAnalogyHeading">5. Real-Life Analogy</h2>
    <p className="htmlSetupAnalogyParagraph">
      Writing HTML in Notepad is like painting with a pencil — it gets the job done but it's slow and not colorful.
    </p>
    <p className="htmlSetupAnalogyParagraph">
      Using VS Code is like using a digital drawing tablet — it auto-corrects, gives colors, tools, and makes your work faster and easier.
    </p>
  </section>

  {/* Folder Setup Section */}
  <section className="htmlSetupFolderSection">
    <h2 className="htmlSetupFolderHeading">6. Basic Folder Setup (Recommended)</h2>
    <p className="htmlSetupFolderParagraph">
      Create a folder like this to stay organized:
    </p>
    <pre className="htmlSetupFolderCode">
{`/MyHTMLPractice
  ├── index.html
  ├── about.html
  ├── contact.html
  └── /images`}
    </pre>
    <p className="htmlSetupFolderParagraph">
      Open this folder in VS Code and use “Live Server” to instantly preview your site.
    </p>
  </section>

  {/* Summary Table */}
  <section className="htmlSetupSummarySection">
    <h2 className="htmlSetupSummaryHeading">7. Summary Table</h2>
    <table className="htmlSetupSummaryTable" border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse' }}>
      <thead>
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
          <td>Writing basic HTML</td>
          <td>Total beginners</td>
          <td>No</td>
        </tr>
        <tr>
          <td>VS Code</td>
          <td>Smart coding & Live Preview</td>
          <td>Students, Devs</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Sublime Text</td>
          <td>Fast and clean editing</td>
          <td>Slow PCs</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>CodePen</td>
          <td>Online practice</td>
          <td>Quick learning</td>
          <td>No</td>
        </tr>
      </tbody>
    </table>
  </section>

</section>
    </>
  )
}

export default Install