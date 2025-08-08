import React from 'react'

function cssbackground() {
  return (
    <>
     <div className="p-4">
      <h2 className="text-center mb-4">CSS Backgrounds</h2>

      <h4 className="mt-4">Background Color</h4>
      <p className="text-muted">Use <code>background-color</code> to set background for elements:</p>
      <div className="p-3 mb-3" style={{ backgroundColor: 'yellow' }}>
        <h5 style={{ backgroundColor: '#FF0000', padding: '5px' }}>Osmosis</h5>
        <p style={{ backgroundColor: 'orange', padding: '5px' }}>
          Developer and founder of <span style={{ backgroundColor: 'purple', color: '#fff' }}>Osmosis.com</span>
        </p>
      </div>

      <h4 className="mt-4">Background Image</h4>
      <div
        className="mb-3 text-white p-4"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '200px',
        }}
      >
        <h5>Osmosis Background Image Example</h5>
      </div>

      <h4 className="mt-4">Background Repeat</h4>
      <div className="row g-3">
        <div className="col-md-3">
          <div
            className="border p-2"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: 'repeat',
              height: '100px',
            }}
          >Repeat</div>
        </div>
        <div className="col-md-3">
          <div
            className="border p-2"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: 'repeat-x',
              height: '100px',
            }}
          >Repeat-X</div>
        </div>
        <div className="col-md-3">
          <div
            className="border p-2"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: 'repeat-y',
              height: '100px',
            }}
          >Repeat-Y</div>
        </div>
        <div className="col-md-3">
          <div
            className="border p-2"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: 'no-repeat',
              height: '100px',
            }}
          >No Repeat</div>
        </div>
      </div>

      <h4 className="mt-4">Background Size</h4>
      <div className="row g-3">
        <div className="col-md-4">
          <div
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '100px',
            }}
            className="border p-2"
          >Cover</div>
        </div>
        <div className="col-md-4">
          <div
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              height: '100px',
            }}
            className="border p-2"
          >Contain</div>
        </div>
        <div className="col-md-4">
          <div
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              height: '100px',
            }}
            className="border p-2"
          >100% 100%</div>
        </div>
      </div>

      <h4 className="mt-4">Background Position</h4>
      <div
        className="border p-3 mb-3 text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
          backgroundSize: '100px',
          height: '100px',
        }}
      >Top Right Position</div>

      <h4 className="mt-4">Background Attachment</h4>
      <div
        className="border p-3 text-white mb-4"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          height: '200px',
        }}
      >Fixed Background Example</div>

      <h4 className="mt-4">Shorthand Property</h4>
      <div
        className="border p-3 text-white"
        style={{
          background: `purple fixed url(${bgImage}) no-repeat right top`,
          height: '150px',
        }}
      >Shorthand Background Example</div>
    </div>
    </>
  )
}

export default Background