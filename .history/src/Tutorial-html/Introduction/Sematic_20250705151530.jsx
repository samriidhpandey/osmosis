import React from 'react'

function Sematic() {
  return (
    <>
    <div className="container my-5">
      <div className="bg-white border rounded shadow-sm p-4">
        <header className="mb-5 border-bottom pb-3">
          <h2 className="text-center text-primary">🧩 HTML Semantic Tags</h2>
          <p className="text-muted text-center">
            Enhance the structure and meaning of your webpage using semantic HTML5 elements.
          </p>
        </header>

        <main>
          <section className="mb-5">
            <h4 className="text-success">✅ What Are Semantic Tags?</h4>
            <p>
              Semantic tags clearly define the purpose of the content enclosed within them. These tags improve
              accessibility, SEO, and overall code readability.
            </p>
          </section>

          <section className="mb-5">
            <h4 className="text-success">🔤 Common Semantic Tags</h4>
            <ul>
              <li><code className="p-2">&lt;header&gt;</code>: Represents the top section, typically containing logos or titles.</li>
              <li><code className="p-2">&lt;nav&gt;</code>: Contains navigation links.</li>
              <li><code className="p-2">&lt;article&gt;</code>: Wraps a complete and independent content block.</li>
              <li><code className="p-2">&lt;section&gt;</code>: Defines thematic groupings of content.</li>
              <li><code className="p-2">&lt;aside&gt;</code>: Holds side information like ads or related links.</li>
              <li><code className="p-2">&lt;footer&gt;</code>: Page or section footer.</li>
              <li><code className="p-2">&lt;main&gt;</code>: Main unique content of the page.</li>
              <li><code className="p-2">&lt;figure&gt;</code> + <code className="p-2">&lt;figcaption&gt;</code>: For images and captions.</li>
              <li><code className="p-2">&lt;time&gt;</code>: Specifies time/date.</li>
            </ul>
          </section>

          <section className="mb-5">
            <h4 className="text-success">🧪 Examples</h4>

            <div className="mb-4">
              <h5 className="text-info">1️⃣ Header & Footer</h5>
              <code className="p-2 bg-light d-block rounded">
{`<header>
  <h1>My Portfolio</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

<footer>
  <p>&copy; 2025 My Name</p>
</footer>`}
              </code>
            </div>

            <div className="mb-4">
              <h5 className="text-info">2️⃣ Article & Section</h5>
              <code className="p-2 bg-light d-block rounded">
{`<article>
  <h2>How to Write Clean Code</h2>
  <section>
    <p>Follow principles like DRY, KISS, and YAGNI.</p>
  </section>
</article>`}
              </code>
            </div>

            <div className="mb-4">
              <h5 className="text-info">3️⃣ Aside & Nav</h5>
              <code className="p-2 bg-light d-block rounded">
{`<aside>
  <h4>Related Links</h4>
  <ul>
    <li><a href="#">HTML Basics</a></li>
    <li><a href="#">CSS Grid</a></li>
  </ul>
</aside>

<nav>
  <ul>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Support</a></li>
  </ul>
</nav>`}
              </code>
            </div>

            <div className="mb-4">
              <h5 className="text-info">4️⃣ Figure & Figcaption</h5>
              <code className="p-2 bg-light d-block rounded">
{`<figure>
  <img src="icon.svg" alt="HTML Icon" width="100" />
  <figcaption>HTML Logo</figcaption>
</figure>`}
              </code>
            </div>

            <div className="mb-4">
              <h5 className="text-info">5️⃣ Time Tag</h5>
              <code className="p-2 bg-light d-block rounded">
{`<p>Posted on <time datetime="2025-07-04">July 4, 2025</time></p>`}
              </code>
            </div>
          </section>

          <aside className="bg-light p-3 border rounded">
            <strong>💡 Pro Tip:</strong> Using semantic tags improves accessibility and helps search engines better index your content.
          </aside>

          <footer className="text-end mt-5 pt-3 border-top">
            <p className="text-muted mb-0">
              <strong>Previous:</strong> HTML Code Tag<br />
              <strong>Next:</strong> HTML Entities (Coming Soon!)
            </p>
          </footer>
        </main>
      </div>
    </div>
    </>
  )
}

export default Sematic