import React from 'react'

function Working() {
  return (
    <>
    <section className="htmlWorkingContainer">

  <header className="htmlWorkingHeader">
    <h1 className="htmlWorkingTitle">How HTML Works & What is a Browser?</h1>
  </header>

  {/* What is HTML and How It Works */}
  <section className="htmlWorkingHtmlSection">
    <h2 className="htmlWorkingHeading">1. What is HTML and How Does It Work?</h2>
    <p className="htmlWorkingParagraph">
      Imagine you want to send a letter to your friend. You write the letter, put it in an envelope, and send it through the post office. Now think of the internet like the post office, and HTML is the language you use to write the letter.
    </p>
    <p className="htmlWorkingParagraph">
      <strong>HTML (HyperText Markup Language)</strong> is like the instructions for writing that letter. It tells your computer browser what the web page should look like — where the headings go, where images should appear, where paragraphs start, and so on.
    </p>
    <p className="htmlWorkingParagraph">
      When you open a website, your browser asks the server for the HTML code of that page. The browser reads the HTML, understands the instructions, and then shows you the webpage visually. In short, HTML is the recipe, and the browser is the chef that cooks and serves the dish you see.
    </p>
  </section>

  {/* What is a Web Browser */}
  <section className="htmlBrowserSection">
    <h2 className="htmlBrowserHeading">2. What is a Web Browser?</h2>
    <p className="htmlBrowserParagraph">
      A <strong>web browser</strong> is a software application like Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge that you use to access websites on the internet.
    </p>
    <p className="htmlBrowserParagraph">
      Think of a browser as a TV remote control — it lets you choose which channel (website) you want to watch. But instead of just showing you a TV show, it shows you webpages.
    </p>
    <p className="htmlBrowserParagraph">
      The browser's job is to:
    </p>
    <ul className="htmlBrowserList">
      <li>Connect to the internet and find the website you want to visit.</li>
      <li>Download the HTML, CSS, JavaScript, and other files from the website.</li>
      <li>Understand and process these files.</li>
      <li>Show you the website on your screen.</li>
    </ul>
  </section>

  {/* How a Web Browser Works */}
  <section className="htmlBrowserWorkingSection">
    <h2 className="htmlBrowserWorkingHeading">3. How Does a Web Browser Work?</h2>
    <p className="htmlBrowserWorkingParagraph">
      Let’s break down what happens behind the scenes when you type a website address (URL) and press Enter:
    </p>
    <ol className="htmlBrowserWorkingList">
      <li><strong>You type a URL:</strong> This is like writing the address on a letter. For example, “www.google.com”.</li>
      <li><strong>DNS Lookup:</strong> Your computer asks a special phonebook called DNS (Domain Name System) to find out the exact address (IP address) of the website’s server.</li>
      <li><strong>Send a Request:</strong> Your browser sends a request to the website’s server asking, "Hey, can you please send me the HTML code for this page?"</li>
      <li><strong>Server Response:</strong> The website’s server replies by sending the HTML code, CSS, JavaScript, images, and other files.</li>
      <li><strong>Rendering the Page:</strong> The browser reads the HTML line by line, applies CSS styles, and runs JavaScript to make it interactive.</li>
      <li><strong>Displaying the Page:</strong> You now see the complete webpage on your screen — texts, images, buttons, and more.</li>
    </ol>

    <p className="htmlBrowserWorkingParagraph">
      <strong>Real-Life Analogy:</strong><br />
      Think of visiting a restaurant:
    </p>
    <ul className="htmlBrowserWorkingAnalogyList">
      <li>The <strong>URL</strong> you type is like telling the waiter what dish you want.</li>
      <li>The <strong>DNS</strong> lookup is the waiter checking the kitchen’s location.</li>
      <li>The <strong>server</strong> is the kitchen preparing your dish (HTML/CSS/JS).</li>
      <li>The <strong>browser</strong> is you receiving and enjoying the meal on your table.</li>
    </ul>
  </section>

  {/* Why Do We Need Browsers */}
  <section className="htmlBrowserNeedSection">
    <h2 className="htmlBrowserNeedHeading">4. Why Do We Need Browsers?</h2>
    <p className="htmlBrowserNeedParagraph">
      Without browsers, you wouldn’t be able to see web pages the way they are meant to be seen. Browsers translate complicated codes into beautiful, interactive websites.
    </p>
    <p className="htmlBrowserNeedParagraph">
      For example, if you open a webpage’s source code, you’ll see a bunch of tags and strange text. But the browser turns all of that into a neat page with colors, images, and buttons you can click.
    </p>
  </section>

  {/* Summary Table */}
  <section className="htmlSummarySection">
    <h2 className="htmlSummaryHeading">5. Summary Table</h2>
    <table className="htmlSummaryTable" border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Term</th>
          <th>What It Means</th>
          <th>Real Life Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>HTML</td>
          <td>Language to structure a webpage</td>
          <td>Recipe for making a dish</td>
        </tr>
        <tr>
          <td>Web Browser</td>
          <td>Software to display webpages</td>
          <td>TV remote to switch channels</td>
        </tr>
        <tr>
          <td>DNS</td>
          <td>Finds server’s IP address</td>
          <td>Post office address book</td>
        </tr>
        <tr>
          <td>Server</td>
          <td>Stores and serves website files</td>
          <td>Kitchen preparing food</td>
        </tr>
        <tr>
          <td>Rendering</td>
          <td>Displays the webpage content</td>
          <td>Waiter serving cooked food</td>
        </tr>
      </tbody>
    </table>
  </section>

</section>

    </>
  )
}

export default Working