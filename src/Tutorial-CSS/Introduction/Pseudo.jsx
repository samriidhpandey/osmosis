import React from 'react'

function Pseudo() {
  return (
    <>
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">CSS Pseudo-Classes</h2>
      <p className="text-center text-gray-700">
        Pseudo-classes define a special state of an element. Here are some examples:
      </p>

      <section className="bg-white shadow p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Hover</h3>
        <button className="hover-example">Hover Me!</button>
      </section>

      <section className="bg-white shadow p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Visited & Link</h3>
        <a href="https://osmosis.org" className="link-example" target="_blank" rel="noopener noreferrer">
          Visit Osmosis.org
        </a>
      </section>

      <section className="bg-white shadow p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Active</h3>
        <button className="active-example">Click & Hold Me!</button>
      </section>
    </div>
    </>
  )
}

export default Pseudo