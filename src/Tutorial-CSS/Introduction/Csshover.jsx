import React from 'react'

function Csshover() {
  return (
    <>
    <div className="p-4 space-y-8">
      <h2 className="text-center text-2xl font-bold">CSS Hover</h2>
      <p className="text-gray-700 text-center">
        CSS hover allows you to enhance interactivity by changing an element's appearance when a user hovers over it.
      </p>

      <section>
        <h3 className="text-xl font-semibold mb-3">1. Text Color Change on Hover</h3>
        <p className="text-yellow-400 hover:text-red-500 transition duration-300">
          Osmosis (Hover to change text color)
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">2. Border Change on Hover</h3>
        <p className="border-2 border-red-500 p-2 hover:border-purple-600 hover:border-4 transition-all duration-300">
          Osmosis - Developer and Founder (Hover to change border)
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">3. Background Color Change</h3>
        <div className="p-4 bg-blue-100 hover:bg-blue-400 transition duration-300 rounded-md w-fit">
          Hover over me to change background
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">4. Scale and Shadow on Hover</h3>
        <div className="bg-green-100 p-5 rounded-md shadow-md hover:shadow-2xl hover:scale-105 transform transition duration-300 w-fit">
          Hover to see scale and shadow
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">5. Rotate an Icon</h3>
        <div className="text-3xl inline-block transition-transform duration-300 hover:rotate-180">
          🔁 Hover to Rotate
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">6. Button Hover</h3>
        <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800 transition duration-300">
          Hoverable Button
        </button>
      </section>
    </div>
    </>
  )
}

export default Csshover