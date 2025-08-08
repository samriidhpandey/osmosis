import React from 'react'

function Specificity() {
  return (
    <>
    <div className="container py-4">
      <h1 className="text-center fw-bold mb-4">CSS Specificity</h1>

      {/* Introduction */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <p>
            CSS specificity determines which style rule is applied when multiple rules target the same element. Higher
            specificity means higher priority.
          </p>
          <p>
            Example: If multiple rules define the color of an element, the rule with the highest specificity takes effect.
          </p>
        </div>
      </div>

      {/* Cascade Algorithm */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h4>The Cascade Algorithm</h4>
          <ul>
            <li><strong>1. Position:</strong> Last rule wins if specificity is equal.</li>
            <li><strong>2. Specificity:</strong> Based on selector type (explained below).</li>
            <li><strong>3. Origin:</strong> Author > User > Browser default.</li>
            <li><strong>4. Importance:</strong> <code>!important</code> overrides everything.</li>
          </ul>
        </div>
      </div>

      {/* Specificity Order */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h4>Specificity Order</h4>
          <ul>
            <li>Inline Styles: <strong>1000</strong></li>
            <li>ID Selectors: <strong>100</strong></li>
            <li>Class / Attribute / Pseudo-classes: <strong>10</strong></li>
            <li>Element / Pseudo-elements: <strong>1</strong></li>
            <li>Universal Selector: <strong>0</strong></li>
          </ul>
          <p className="mb-0"><strong>Example:</strong></p>
          <pre className="bg-light p-2 rounded">
            <code>{'<h1 id="title" class="h1">CodeWithHarry</h1>'}</code>
          </pre>
          <p>Specificity = 100 (ID) + 10 (class) + 1 (element) = <strong>111</strong></p>
        </div>
      </div>

      {/* !important */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h4>Using <code>!important</code></h4>
          <p>
            Adding <code>!important</code> gives a property the highest priority (specificity: 10,000). It overrides
            all normal rules.
          </p>
          <pre className="bg-light p-2 rounded">
            <code>
{`p {
  color: red !important;
}
p {
  color: blue;
}`}
            </code>
          </pre>
          <p>Result: Paragraph text will be <strong>red</strong>, not blue.</p>
          <p className="text-danger mb-0">⚠️ Use <code>!important</code> sparingly as it can make debugging harder.</p>
        </div>
      </div>

      {/* Quiz */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h4>Quick Quiz</h4>
          <p><strong>Q:</strong> What is the specificity value of this selector?</p>
          <pre className="bg-light p-2 rounded">
            <code>{`a.harryclass.rohan-class[href]:hover`}</code>
          </pre>
          <ul className="mb-2">
            <li>Element <code>a</code> → <strong>1</strong></li>
            <li>2 Classes → <strong>10 + 10</strong></li>
            <li>Attribute selector [href] → <strong>10</strong></li>
            <li>Pseudo-class :hover → <strong>10</strong></li>
          </ul>
          <p><strong>Total Specificity = 1 + 20 + 10 + 10 = 41</strong></p>
        </div>
      </div>

      {/* Final Note */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h5>Summary</h5>
          <ul>
            <li>Inline Style > ID > Class/Attr/Pseudo-class > Element > Universal</li>
            <li><code>!important</code> overrides all specificity rules.</li>
            <li>Later rules override earlier ones if specificity is the same.</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Specificity