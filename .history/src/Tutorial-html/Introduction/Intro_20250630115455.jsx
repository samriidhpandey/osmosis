import React from 'react'

function Intro() {
  return (
    <>
    <section className="htmlTutorialContainer mb-5 mt-4">
  <header className="htmlTutorialHeader">
    <h1 className="htmlTutorialTitle">HTML Tutorial</h1>
  </header>

  <section className="htmlIntroSection">
    <h2 className="htmlIntroHeading">1. What is HTML?</h2>
    <p className="htmlIntroParagraph">
      <strong>HTML</strong> stands for <strong>HyperText Markup Language</strong>. It is not a programming language — it’s a <em>markup language</em> used to structure content on the web. Just like you use pen and paper to write a letter, developers use HTML to build web pages.
    </p>

    <p className="htmlIntroParagraph">
      <strong>Real-Life Example:</strong><br />
      Imagine you're making a burger. You have a bun, patty, cheese, veggies, and sauces — each layer has a purpose and place. Similarly, a web page has text, images, videos, and buttons — and <strong>HTML decides how and where each of them will appear</strong>.
    </p>

    <p className="htmlIntroParagraph">
      Think of:<br />
      - <strong>HTML = Skeleton of a website</strong><br />
      - <strong>CSS = Styling/makeup</strong><br />
      - <strong>JavaScript = Brain/functions</strong>
    </p>

    <p className="htmlIntroParagraph"><strong>What HTML Does:</strong></p>
    <ul className="htmlIntroList">
      <li>Gives <strong>structure</strong> to a web page</li>
      <li>Tells browsers what each part of the content is (heading, paragraph, image, etc.)</li>
      <li>Forms the <strong>foundation</strong> of every website on the internet</li>
    </ul>
  </section>

  <section className="htmlIntroToHtmlSection">
    <h2 className="htmlIntroToHtmlHeading">2. Introduction to HTML</h2>
    <p className="htmlIntroToHtmlParagraph">
      HTML is the language of the internet. It was created in <strong>1991 by Sir Tim Berners-Lee</strong>, the same person who invented the World Wide Web. It’s so simple that even kids can learn it. If you know how to make text bold in Word, you'll easily understand HTML tags.
    </p>

    <p className="htmlIntroToHtmlParagraph">
      <strong>A Simple Analogy:</strong><br />
      Imagine a classroom where a teacher asks students to sit according to roll numbers. HTML works the same way — it organizes different parts of a webpage (text, images, videos) so that the browser knows <em>what to show and where</em>.
    </p>

    <p className="htmlIntroToHtmlParagraph"><strong>Sample Code:</strong></p>
    <pre className="htmlIntroToHtmlCode">
{`<h1>This is a heading</h1>
<p>This is a paragraph of text.</p>
<img src="image.jpg" alt="Image Example">`}
    </pre>

    <p className="htmlIntroToHtmlParagraph"><strong>Where is HTML used?</strong></p>
    <ul className="htmlIntroToHtmlList">
      <li>Blogs</li>
      <li>Online shopping sites (like Amazon)</li>
      <li>Social media (Instagram, Facebook layout)</li>
      <li>Portfolio websites</li>
      <li>Even mobile apps (via WebView)</li>
    </ul>

    <p className="htmlIntroToHtmlParagraph">
      <strong>Summary:</strong><br />
      HTML is a simple and powerful language that uses tags to define structure — like headings, text, images, buttons, and more. It’s the first step in becoming a web developer.
    </p>
  </section>

  <section className="htmlHistorySection">
    <h2 className="htmlHistoryHeading">3. History of HTML</h2>
    <p className="htmlHistoryParagraph"><strong>Timeline of HTML:</strong></p>
    <table className="htmlHistoryTable" border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Version</th>
          <th>Key Features</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1991</td>
          <td>HTML 1.0</td>
          <td>Basic tags like headings, paragraphs, links</td>
        </tr>
        <tr>
          <td>1995</td>
          <td>HTML 2.0</td>
          <td>Forms and input elements introduced</td>
        </tr>
        <tr>
          <td>1997</td>
          <td>HTML 3.2</td>
          <td>Support for scripting and styling</td>
        </tr>
        <tr>
          <td>1999</td>
          <td>HTML 4.01</td>
          <td>Tables, scripting, and layout enhancements</td>
        </tr>
        <tr>
          <td>2014</td>
          <td>HTML5</td>
          <td>Video, audio, canvas, local storage, semantic tags</td>
        </tr>
      </tbody>
    </table>

    <p className="htmlHistoryParagraph"><strong>Real-Life Comparison:</strong><br />
      Think of old school feature phones — they could only call and text. Now think of today’s smartphones — you can play games, watch movies, use GPS. HTML has evolved the same way — from basic text to rich interactive web experiences.
    </p>

    <p className="htmlHistoryParagraph"><strong>Major Features in HTML5:</strong></p>
    <ul className="htmlHistoryList">
      <li>Play YouTube videos without any plugin</li>
      <li>Build games that run in the browser</li>
      <li>Store data locally</li>
      <li>Create offline web applications</li>
      <li>Use semantic tags for cleaner, easier to read code</li>
    </ul>
  </section>
</section>
    </>
  )
}

export default Intro