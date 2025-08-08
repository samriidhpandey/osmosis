import React from 'react'

function Comdinators() {
  return (
    <>
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">CSS Combinators</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        CSS combinators describe the relationship between selectors. There are four major types: Descendant, Child, Adjacent Sibling, and General Sibling.
      </p>

      {/* Descendant Selector */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Descendant Selector</h2>
        <div className="descendant-box border p-4">
          <p>Paragraph 1 (inside div)</p>
          <p>Paragraph 2 (inside div)</p>
          <section>
            <p>Paragraph 3 (inside section inside div)</p>
          </section>
          <p>Paragraph 4 (inside div)</p>
        </div>
      </section>

      {/* Child Selector */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Child Selector</h2>
        <div className="child-box border p-4">
          <p>Paragraph 1 (first-level child)</p>
          <section>
            <p>Paragraph 2 (nested in section)</p>
          </section>
          <p>Paragraph 3 (first-level child)</p>
        </div>
      </section>

      {/* Adjacent Sibling Selector */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Adjacent Sibling Selector</h2>
        <div className="adjacent-box border p-4 mb-2">This is the div element</div>
        <p>This paragraph is selected by the adjacent sibling selector.</p>
        <p>This paragraph is not affected.</p>
      </section>

      {/* General Sibling Selector */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">General Sibling Selector</h2>
        <div className="general-box border p-4 mb-2">This is the div element</div>
        <p>This paragraph is selected by the general sibling selector.</p>
        <p>This one too.</p>
        <p>And this as well.</p>
      </section>
    </div>
    </>
  )
}

export default Comdinators