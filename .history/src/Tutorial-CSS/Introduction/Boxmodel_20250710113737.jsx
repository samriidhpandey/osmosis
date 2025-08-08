import React from 'react'

function Boxmodel() {
  return (
    <>
    <div className="p-4">
      <h2 className="text-center mb-4">CSS Box Model</h2>

      <p>
        The <strong>CSS Box Model</strong> defines how elements are rendered and how their
        dimensions are calculated. It consists of:
      </p>

      <ol>
        <li><strong>Content:</strong> The actual content like text, image, video, etc.</li>
        <li><strong>Padding:</strong> Space between content and border.</li>
        <li><strong>Border:</strong> Surrounds content and padding.</li>
        <li><strong>Margin:</strong> Space outside the border to separate from other elements.</li>
      </ol>

      <div className="bg-light p-3 mt-4 rounded border">
        <h5>Total Dimension Formula</h5>
        <ul>
          <li>
            <strong>Total Width =</strong> Width + Left/Right Padding + Left/Right Border +
            Left/Right Margin
          </li>
          <li>
            <strong>Total Height =</strong> Height + Top/Bottom Padding + Top/Bottom Border +
            Top/Bottom Margin
          </li>
        </ul>
      </div>

      <h5 className="mt-4">Example:</h5>
      <pre className="bg-dark text-light p-3 rounded">
        {`<style>
  p {
    width: 200px;
    height: 300px;
    padding: 15px;
    border: 10px solid red;
    margin: 5px;
  }
</style>

<p>CodeWithHarry</p>`}
      </pre>

      <p><strong>Calculated Dimensions:</strong></p>
      <ul>
        <li>Total Width = 200 + 15×2 + 10×2 + 5×2 = <strong>260px</strong></li>
        <li>Total Height = 300 + 15×2 + 10×2 + 5×2 = <strong>360px</strong></li>
      </ul>

      

      <div className="mt-4">
        <h5>Playaround Tip:</h5>
        <ol>
          <li>Right-click the element and click <strong>Inspect</strong>.</li>
          <li>Use the arrow icon to select the element visually.</li>
          <li>Check the <strong>Computed</strong> tab for dimensions.</li>
          <li>Hover to visualize margin, border, padding, and content box.</li>
        </ol>
      </div>
    </div>
    </>
  )
}

export default Boxmodel