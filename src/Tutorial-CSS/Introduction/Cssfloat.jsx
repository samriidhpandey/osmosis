import React from 'react'

function Cssfloat() {
  return (
    <div>
      <div className="container py-5 text-center">
      <h2 className="text-primary fw-bold mb-5">CSS Float Examples</h2>

      {/* Float Left Example */}
      <div className="mb-5">
        <h4 className="mb-3">1. Float Left</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<div style="float: left; width: 150px;">Left Box</div>`}
        </pre>
        <div className="clearfix">
          <div className="bg-success text-white p-2 me-3" style={{ float: 'left', width: '150px' }}>
            Float Left Box
          </div>
          <p>This text flows around the floated box aligned to the left side.</p>
        </div>
      </div>

      {/* Float Right Example */}
      <div className="mb-5">
        <h4 className="mb-3">2. Float Right</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<div style="float: right; width: 150px;">Right Box</div>`}
        </pre>
        <div className="clearfix">
          <div className="bg-info text-white p-2 ms-3" style={{ float: 'right', width: '150px' }}>
            Float Right Box
          </div>
          <p>This paragraph wraps around the floated box aligned to the right side.</p>
        </div>
      </div>

      {/* Float Both & Clearfix */}
      <div className="mb-5">
        <h4 className="mb-3">3. Float Left & Right with Clearfix</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<div style="float: left;">Left</div>
<div style="float: right;">Right</div>
<div class="clearfix"></div>`}
        </pre>
        <div className="clearfix">
          <div className="bg-warning p-2 text-dark" style={{ float: 'left', width: '150px' }}>Left Floated</div>
          <div className="bg-danger p-2 text-white" style={{ float: 'right', width: '150px' }}>Right Floated</div>
        </div>
        <div className="mt-3">
          <p>Both left and right floated boxes are cleared below using Bootstrap's <code>.clearfix</code> utility.</p>
        </div>
      </div>

      {/* Float None Example */}
      <div className="mb-5">
        <h4 className="mb-3">4. Float None</h4>
        <pre className="text-start bg-light p-3 rounded">
{`<div style="float: none;">No Float</div>`}
        </pre>
        <div className="bg-secondary text-white p-2">
          <div style={{ float: 'none' }}>This box is not floated and remains in normal flow.</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cssfloat