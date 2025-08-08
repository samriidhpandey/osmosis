import React from 'react'

function Cssbackground() {
  return (
    <>
      <div className="p-4">
      <h2 className="text-center mb-4">CSS Backgrounds</h2>
      <p>
        CSS background properties control the background style, including color, image, repeat, size,
        position, attachment, and more. Below are styled examples using each technique.
      </p>

      <h4 className="mt-4">Background Color</h4>
      <div className="mb-3 p-3" style={{ backgroundColor: 'yellow' }}>
        <h5 style={{ backgroundColor: '#FF0000', padding: '5px' }}>Osmosis</h5>
        <p style={{ backgroundColor: 'orange', padding: '5px' }}>
          Developer and founder of <span style={{ backgroundColor: 'purple', color: 'white' }}>Osmosis.com</span>
        </p>
      </div>

      <h4 className="mt-4">Background Image (Simulated)</h4>
      <div
        className="mb-3 p-4 text-white rounded"
        style={{
          backgroundImage: 'linear-gradient(135deg, #1d3557, #457b9d)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h5>Osmosis</h5>
        <p>This is a simulated background image using gradient.</p>
      </div>

      <h4 className="mt-4">Background Repeat Examples</h4>
      <div className="mb-3 p-3 text-white " style={{ backgroundImage: 'repeating-linear-gradient(90deg, #6a0dad, #6a0dad 10px, #ffffff 10px, #ffffff 20px)' }}>
        <p>repeat-x example simulated</p>
      </div>
      <div className="mb-3 p-3 text-white" style={{ backgroundImage: 'repeating-linear-gradient(180deg, #ff6347, #ff6347 10px, #ffffff 10px, #ffffff 20px)' }}>
        <p>repeat-y example simulated</p>
      </div>
      <div className="mb-3 p-3 text-white" style={{ backgroundImage: 'repeating-conic-gradient(#ff4500 0% 25%, #ffffff 25% 50%)' }}>
        <p>repeat both directions</p>
      </div>
      <div className="mb-3 p-3 text-white" style={{ backgroundImage: 'radial-gradient(circle at center, #00bfff, #1e90ff)', backgroundRepeat: 'no-repeat' }}>
        <p>no-repeat simulated</p>
      </div>

      <h4 className="mt-4">Background Size</h4>
      <div className="mb-3 p-3 rounded text-white" style={{ backgroundImage: 'linear-gradient(to right, #008080, #20b2aa)', backgroundSize: 'cover' }}>
        <p>Background-size: cover</p>
      </div>
      <div className="mb-3 p-3 rounded text-white" style={{ backgroundImage: 'linear-gradient(to bottom, #e67e22, #d35400)', backgroundSize: 'contain' }}>
        <p>Background-size: contain</p>
      </div>
      <div className="mb-3 p-3 rounded text-white" style={{ backgroundImage: 'linear-gradient(to top right, #9b59b6, #8e44ad)', backgroundSize: '100% 100%' }}>
        <p>Background-size: 100% 100%</p>
      </div>

      <h4 className="mt-4">Background Position</h4>
      <div className="mb-3 p-5 text-white" style={{ backgroundImage: 'radial-gradient(circle, #1abc9c, #16a085)', backgroundRepeat: 'no-repeat', backgroundPosition: 'top right' }}>
        <p>Background-position: top right</p>
      </div>

      <h4 className="mt-4">Background Attachment</h4>
      <div className="mb-3 p-5 text-white" style={{ backgroundImage: 'linear-gradient(#7f8c8d, #95a5a6)', backgroundAttachment: 'fixed' }}>
        <p>Background-attachment: fixed</p>
      </div>

      <h4 className="mt-4">Shorthand Property</h4>
      <div className="mb-3 p-5 text-white" style={{ background: 'purple fixed linear-gradient(#9b59b6, #6c3483) no-repeat right top' }}>
        <p>Shorthand background with multiple properties</p>
      </div>
    </div>
    </>
  )
}

export default Cssbackground