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
        <div className="bg-light p-3 mt-3">
          <p>Image placed normally in the document flow.</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7x-2eHz6-vHw9sVyqxTVwLDErzYzikJsHcg&s" alt="Static Example" />
        </div>
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
        <div className="bg-light p-3 mt-3 position-relative" style={{ height: '150px' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7x-2eHz6-vHw9sVyqxTVwLDErzYzikJsHcg&s" alt="Relative Example" style={{ position: 'relative', left: '100px', top: '50px' }} />
        </div>
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
        <div className="position-relative bg-light p-4 mt-3" style={{ height: '150px' }}>
          <p>Parent container with relative position.</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7x-2eHz6-vHw9sVyqxTVwLDErzYzikJsHcg&s" className="position-absolute" alt="Absolute Example" style={{ right: '10px', top: '10px' }} />
        </div>
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
        <div className="bg-light p-3 mt-3 bg-" style={{ height: '120px' }}>
          <div className="position-fixed bg-danger text-white p-2" style={{ top: '10px', right: '20px' }}>Fixed Element</div>
          <p>Scroll down to see the fixed element stays in position.</p>
        </div>
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
        <div className="bg-light p-3 mt-3" style={{ height: '200px', overflowY: 'scroll' }}>
          <h5 className="bg-info p-2 text-white position-sticky" style={{ top: '0' }}>Sticky Header</h5>
          <p className="mt-5">Keep scrolling to observe sticky behavior.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloribus officia maiores?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloribus officia maiores?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloribus officia maiores?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloribus officia maiores?</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cssposition