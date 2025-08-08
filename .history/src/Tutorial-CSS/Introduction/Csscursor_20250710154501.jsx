import React from 'react'

function Csscursor() {
  const cursors = [
    'pointer', 'alias', 'auto', 'all-scroll', 'col-resize', 'crosshair', 'default', 'copy', 'move', 'e-resize',
    'ew-resize', 'ne-resize', 'nw-resize', 'n-resize', 'se-resize', 'sw-resize', 'w-resize', 's-resize', 'wait',
    'text', 'help', 'progress', 'no-drop', 'not-allowed', 'vertical-text', 'zoom-in', 'zoom-out'
  ];
  return (
    <>
    <div className=''
    <h2 className="text-center text-2xl font-bold mb-6">CSS Cursor</h2>
      <p className="text-center text-gray-700 mb-8">
        The <code>cursor</code> property lets you control the type of mouse pointer displayed when hovering over an element.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {cursors.map((cursor, index) => (
          <div
            key={index}
            className="bg-violet-300 p-4 rounded text-center font-medium hover:bg-violet-500 transition duration-300"
            style={{ cursor }}
          >
            {cursor}
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h3 className="text-xl font-semibold mb-3">Custom Cursor</h3>
        <p className="mb-2">You can use a custom image as your cursor:</p>
        <div
          className="bg-yellow-200 p-4 rounded inline-block hover:bg-yellow-400"
          style={{ cursor: "url('https://cdn-icons-png.flaticon.com/512/1828/1828817.png'), auto" }}
        >
          Hover for Custom Cursor (🔍)
        </div>
      </section>
    </div>
    </>
  )
}

export default Csscursor