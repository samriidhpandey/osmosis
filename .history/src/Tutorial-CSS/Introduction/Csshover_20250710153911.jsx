import React from 'react'

function Csshover() {
  return (
    <>
    <div className="p-5">
      <h2 className="text-center mb-4">CSS Hover</h2>
      <p className="mb-4">
        The <code>:hover</code> pseudo-class is used to define a special style for an element when the user mouses over it.
        This is often used to enhance UX by providing visual feedback.
      </p>

      <section className="mb-6">
        <h4 className="mb-3">Example 1: Text Color Change on Hover</h4>
        <p className="hover-text transition-all duration-300 text-yellow-500">
          Osmosis
        </p>
      </section>

      <section className="mb-6">
        <h4 className="mb-3">Example 2: Border Style Change on Hover</h4>
        <p className="hover-border transition-all duration-300 border-2 border-red-500 p-3">
          Developer and Founder of Osmosis
        </p>
      </section>

      <section>
        <h4 className="mb-3">Try More</h4>
        <p>
          You can apply hover effects to buttons, links, cards, or any HTML element to add interactivity.
        </p>
      </section>
    </div>
    </>
  )
}

export default Csshover