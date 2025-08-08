import React from 'react'

function Svgs() {
  return (
    <>
     <div className="container my-5">
      <div className="bg-white border rounded shadow-sm p-4">
        <h2 className="text-center text-primary mb-4">SVG in HTML</h2>

        <p>
          SVG (Scalable Vector Graphics) allows you to create high-quality, scalable graphics using XML syntax. Unlike raster images like JPG or PNG, SVGs retain their sharpness and clarity at any size, making them ideal for modern responsive design.
        </p>

        <h4 className="text-success mt-4">📌 Why Use SVG?</h4>
        <ul>
          <li><strong>Scalability:</strong> SVG graphics don’t lose quality at any resolution.</li>
          <li><strong>File Size:</strong> Often smaller for simple graphics compared to PNGs/JPEGs.</li>
          <li><strong>Flexibility:</strong> Can be styled and animated with CSS/JS.</li>
        </ul>

        <h4 className="text-success mt-4">📥 How to Embed SVG in HTML</h4>

        <h5>1. Inline SVG</h5>
        <code className="p-2 bg-light d-block rounded mb-3">
{`<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>`}
        </code>

        <h5>2. Using &lt;img&gt; Tag</h5>
        <code className="p-2 bg-light d-block rounded mb-3">
          &lt;img src="image.svg" alt="Sample SVG" /&gt;
        </code>

        <h5>3. CSS Background</h5>
        <code className="p-2 bg-light d-block rounded mb-3">
{`.background {
  background-image: url('image.svg');
}`}
        </code>

        <h4 className="text-success mt-4">🛠️ SVG Attributes</h4>
        <ul>
          <li><code className="p-2">width</code> and <code className="p-2">height</code>: Set dimensions</li>
          <li><code className="p-2">viewBox</code>: Set internal coordinate system</li>
          <li><code className="p-2">fill</code> and <code className="p-2">stroke</code>: Define colors</li>
        </ul>

        <h4 className="text-success mt-4">💡 Practical Examples</h4>

        <h5>Simple Rectangle Icon</h5>
        <code className="p-2 bg-light d-block rounded mb-3">
{`<svg height="30" width="30">
  <rect width="30" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
</svg>`}
        </code>

        <h5>Complex Shapes</h5>
        <code className="p-2 bg-light d-block rounded mb-3">
{`<svg height="100" width="200">
  <polygon points="50,0 100,100 0,100" style="fill:lime;stroke:purple;stroke-width:1" />
</svg>`}
        </code>

        <h5 className="text-secondary mt-4">🔚 Conclusion</h5>
        <p>
          SVG is a modern web standard for vector graphics that enables crisp visuals, responsive design, and high performance. It’s a powerful tool for web developers creating anything from simple icons to complex illustrations.
        </p>

        
      </div>
    </div>
    </>
  )
}

export default Svgs