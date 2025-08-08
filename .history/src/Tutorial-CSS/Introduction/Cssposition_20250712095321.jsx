import React from 'react'

function Cssposition() {
  return (
    <>
    <div className="container py-5 text-center">
      <h2 className="text-primary fw-bold mb-5">CSS Positioning Examples</h2>

      {/* Static Position Example */}
      <div className="mb-5">
        <h4 className="mb-3">1. Static Position (Default)</h4>
        <pre className="text-start bg-dark rounded"><code className="p-3 d-block text-white h-100">
{`img {
  position: static;
}`}
        </code></pre>
        <p>This is the default positioning where elements follow the normal flow of the document.</p>
      </div>

      {/* Relative Position Example */}
      <div className="mb-5">
        <h4 className="mb-3">2. Relative Position</h4>
        <pre className="text-start bg-dark rounded"><code className="p-3 d-block text-white h-100">
{`img {
  position: relative;
  left: 100px;
  top: 50px;
}`}
        </code></pre>
        <p>The element is shifted from its normal position but still occupies its original space.</p>
      </div>

      {/* Absolute Position Example */}
      <div className="mb-5">
        <h4 className="mb-3">3. Absolute Position</h4>
        <pre className="text-start bg-dark rounded"><code className="p-3 d-block text-white h-100">
{`#about {
  position: relative;
}
.logo {
  position: absolute;
  right: 10px;
  top: 10px;
}`}
        </code></pre>
        <p>Positioned relative to the nearest ancestor with a positioning other than static.</p>
      </div>

      {/* Fixed Position Example */}
      <div className="mb-5">
        <h4 className="mb-3">4. Fixed Position</h4>
        <pre className="text-start bg-dark rounded"><code className="p-3 d-block text-white h-100">
{`h1 {
  position: fixed;
  top: 10px;
  right: 20px;
}`}
        </code></pre>
        <p>This element stays at the same position even when the page is scrolled.</p>
      </div>

      {/* Sticky Position Example */}
      <div className="mb-5">
        <h4 className="mb-3">5. Sticky Position</h4>
        <pre className="text-start bg-dark rounded"><code className="p-3 d-block text-white h-100">
{`h1 {
  position: sticky;
  top: 10px;
}`}
        </code></pre>
        <p>This element behaves like relative until it reaches a certain point, then sticks to it while scrolling.</p>
      </div>
    </div>
    </>
  )
}

export default Cssposition