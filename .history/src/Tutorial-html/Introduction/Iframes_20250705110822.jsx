import React from 'react'

function Iframes() {
  return (
    <>
    <div className="container my-5">
      <div className="bg-white border rounded shadow-sm p-4">
        <h2 className="text-center text-primary mb-4">🔗 iFrames in HTML</h2>

        <p>
          The <code className="p-2">&lt;iframe&gt;</code> tag is used to embed another HTML document within the current one. It is especially useful when displaying third-party content like videos, maps, charts, or documents without redirecting the user.
        </p>

        <h4 className="text-success mt-4">📌 Why Use iFrames?</h4>
        <ul>
          <li><strong>Embed External Content:</strong> Videos, maps, charts, widgets</li>
          <li><strong>Content Isolation:</strong> Keeps embedded content sandboxed</li>
          <li><strong>Asynchronous Loading:</strong> Embedded content loads separately</li>
          <li><strong>Easy Integration:</strong> Works well with 3rd party services</li>
        </ul>

        <h4 className="text-success mt-4">🔤 Basic Syntax</h4>
        <code className="p-2 bg-light d-block rounded mb-3">
          &lt;iframe src="URL" width="WIDTH" height="HEIGHT"&gt;&lt;/iframe&gt;
        </code>

        <h5>✨ Common Attributes</h5>
        <ul>
          <li><code className="p-2">src</code>: Source URL of the content</li>
          <li><code className="p-2">width / height</code>: Dimensions in pixels or %</li>
          <li><code className="p-2">frameborder</code>: Show/hide border</li>
          <li><code className="p-2">scrolling</code>: Enable/disable scrollbars</li>
          <li><code className="p-2">allowfullscreen</code>: Enable full screen (for videos)</li>
        </ul>

        <h4 className="text-success mt-4">📽️ Embedding YouTube Video</h4>
        <code className="p-2 bg-light d-block rounded mb-3">
{`<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>`}
        </code>

        <h4 className="text-success mt-4">🗺️ Embedding Google Maps</h4>
        <code className="p-2 bg-light d-block rounded mb-3">
{`<iframe src="https://maps.google.com/maps?q=New+Delhi&output=embed" width="600" height="450" frameborder="0"></iframe>`}
        </code>

        <h5 className="text-secondary mt-4">🔚 Conclusion</h5>
        <p>
          The <code className="p-2">&lt;iframe&gt;</code> tag is a powerful tool to enrich your site with interactive and externally hosted content. With responsive design techniques and proper attributes, it can enhance user engagement seamlessly.
        </p>

        <div className="text-end">
          <p className="text-muted mb-0">
            <strong>Previous:</strong> SVG in HTML<br />
            <strong>Next:</strong> Embedding PDFs or Docs (Coming Soon!)
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Iframes