import React from 'react'

function Cssbutton() {
  return (
    <>
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center">CSS Button Examples</h2>
      
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Basic Button</h3>
        <button className="btn basic">Osmosis Button</button>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Hover Button</h3>
        <button className="btn hover">Hover Me</button>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Animated Button</h3>
        <button className="btn animated">Click Me</button>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Disabled Button</h3>
        <button className="btn disabled" disabled>Disabled</button>
      </section>
    </div>
    </>
  )
}

export default Cssbutton