import React from 'react'

function Csslink() {
  return (
    <>
    <div className="p-4">
      <h2 className="text-center text-2xl font-bold mb-6">CSS Links</h2>
      <p className="text-center text-gray-700 mb-4">
        You can style anchor tags using different states like <code>:hover</code>, <code>:visited</code>, <code>:active</code>, etc.
      </p>

      <div className="text-center">
        <a
          href="https://osmosis.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-pink-500 underline font-semibold transition duration-300"
        >
          Visit Osmosis.org
        </a>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Example Description</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li><code>:hover</code> changes the link color to hotpink.</li>
          <li>Target <code>_blank</code> opens the link in a new tab.</li>
          <li>Link has <code>underline</code> and a smooth transition effect.</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Csslink