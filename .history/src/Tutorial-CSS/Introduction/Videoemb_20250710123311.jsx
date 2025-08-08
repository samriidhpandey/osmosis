import React from 'react'

function Videoemb() {
  return (
    <>
    <div className="p-4">
      <h2 className="text-center mb-4">CSS Video Embedding</h2>

      <p>
        We can embed videos in HTML using the <code>&lt;video&gt;</code> tag and style it with CSS. Below is an example:
      </p>

      <div className="text-center my-4">
        <video controls style={{ width: '100%', maxWidth: '500px', height: '200px' }}>
          <source src="/videos/sigma-web-development-course.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h4 className="mt-5">CSS Styling Example</h4>
      <pre className="bg-light p-3 rounded">
        <code className='h-100'>
{`video {
  width: 500px;
  height: 200px;
}`}
        </code>
      </pre>
    </div>
    </>
  )
}

export default Videoemb