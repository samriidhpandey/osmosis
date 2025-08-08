import React from 'react'

function Specificity() {
  return (
    <>
    <div className="p-4">
      <h2 className="text-center mb-4">CSS Specificity</h2>

      <p>
        <strong>CSS Specificity</strong> helps determine what style will be applied to the HTML
        element(s) when there are overlapping or multiple CSS rules.
      </p>

      <h4 className="mt-4">Example:</h4>
      <pre className="bg-dark text-light p-3 rounded">
        {`<style>
  * {
    color: gray;
  }
  #title {
    color: red;
  }
  .h1 {
    color: blue;
  }
  h1 {
    color: pink;
  }
</style>

<h1 id="title" class="h1" style="color:purple">CodeWithHarry</h1>`}
      </pre>
      <p>This will result in <strong>purple</strong> text due to inline style having highest specificity.</p>

      <h4 className="mt-4">Cascade Algorithm Stages</h4>
      <ol>
        <li>Position and Order</li>
        <li>Specificity</li>
        <li>Origin</li>
        <li>Importance</li>
      </ol>

      <h4 className="mt-4">Specificity Order:</h4>
      <ul>
        <li>Inline Style (1000)</li>
        <li>ID Selector (100)</li>
        <li>Class / Attribute / Pseudo-class (10)</li>
        <li>Element / Pseudo-elements (1)</li>
        <li>Universal Selector (0)</li>
      </ul>

      <h4 className="mt-4">Specificity Calculation</h4>
      <p>
        Example: <code>&lt;h1 id="title" class="h1"&gt;</code><br />
        <strong>Specificity</strong> = 100 (ID) + 10 (class) + 1 (element) = <strong>111</strong>
      </p>

      <h4 className="mt-4">!important Rule</h4>
      <p>
        CSS <code>!important</code> overrides all other rules regardless of specificity.
        <br />
        Example:
      </p>
      <pre className="bg-dark text-light p-3 rounded">
        {`p {
  color: red !important;
}
p {
  color: blue;
}`}
      </pre>
      <p>Output: The paragraph will be red.</p>

      <h4 className="mt-4">Quick Quiz</h4>
      <p>What is the specificity of:</p>
      <pre className="bg-light p-2 rounded border">
        a.harryclass.rohan-class[href]:hover
      </pre>
      <ul>
        <li>Element (a): 1</li>
        <li>Classes: 2 × 10 = 20</li>
        <li>Attribute: 10</li>
        <li>Pseudo-class (:hover): 10</li>
        <li><strong>Total:</strong> 1 + 20 + 10 + 10 = <strong>41</strong></li>
      </ul>
    </div>
    </>
  )
}

export default Specificity