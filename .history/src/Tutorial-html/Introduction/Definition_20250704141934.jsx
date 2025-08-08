import React from 'react'

function Definition() {
  return (
    <>
      <div className="container my-5">
      <div className="bg-white border rounded shadow-sm p-4">
        <h2 className="text-center text-primary mb-4">HTML Definition Lists</h2>

        <p>
          In HTML, a <strong>Definition List</strong> is used to present terms and their associated meanings or explanations.
          It is commonly used for glossaries, technical documentation, or where structured meaning is needed.
        </p>

        <div className="mb-4">
          <h4 className="text-success mt-4">🧠 What Elements Are Used?</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <code>&lt;dl&gt;</code> – Definition List container (wraps everything)
            </li>
            <li className="list-group-item">
              <code>&lt;dt&gt;</code> – Definition Term (the word or concept)
            </li>
            <li className="list-group-item">
              <code>&lt;dd&gt;</code> – Definition Description (the meaning of the term)
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-success mt-4">📘 Real-life Example 1: Web Terminologies</h4>
          <div className="bg-light p-3 rounded border">
            <dl className="row">
              <dt className="col-sm-3 fw-bold">HTML</dt>
              <dd className="col-sm-9">
                HyperText Markup Language – Used to create the structure of web pages.
              </dd>

              <dt className="col-sm-3 fw-bold">CSS</dt>
              <dd className="col-sm-9">
                Cascading Style Sheets – Controls the layout and design of HTML elements.
              </dd>

              <dt className="col-sm-3 fw-bold">JavaScript</dt>
              <dd className="col-sm-9">
                A scripting language that adds interactivity and logic to web pages.
              </dd>
            </dl>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-success">📗 Real-life Example 2: Fruits Glossary</h4>
          <div className="bg-light p-3 rounded border">
            <dl className="row">
              <dt className="col-sm-3 fw-bold">Apple</dt>
              <dd className="col-sm-9">
                A sweet red or green fruit. Good source of fiber.
              </dd>

              <dt className="col-sm-3 fw-bold">Banana</dt>
              <dd className="col-sm-9">
                A long yellow fruit rich in potassium and energy.
              </dd>

              <dt className="col-sm-3 fw-bold">Mango</dt>
              <dd className="col-sm-9">
                Known as the "king of fruits", mangoes are juicy and full of flavor.
              </dd>
            </dl>
          </div>
        </div>

        <div>
          <h4 className="text-success">💡 Why Use a Definition List?</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">✅ Clearly separates terms from their meanings.</li>
            <li className="list-group-item">✅ Ideal for glossaries, FAQ sections, and documentation.</li>
            <li className="list-group-item">✅ Makes content easier to read and understand.</li>
            <li className="list-group-item">✅ Improves structure and accessibility of content.</li>
          </ul>
        </div>
      </div>
    </div>

    </>
  )
}

export default Definition