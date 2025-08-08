import React from 'react'

function Tables() {
  return (
    <>
    <div className="container my-5">
      <div className="bg-white border shadow-sm rounded p-4">
        <h2 className="text-center text-primary mb-4">HTML Tables</h2>

        <p>
          HTML tables allow you to organize and display data (like text, images, or links) in a grid of rows and columns. The basic table structure begins with the <code>&lt;table&gt;</code> tag, which wraps all table content.
        </p>

        <h4 className="text-success mt-4">📘 Syntax of HTML Table</h4>
        <div className="bg-light border rounded p-3 mb-4">
          <pre className="mb-0">
            {`<table>
  // table content
</table>`}
          </pre>
        </div>

        <h4 className="text-success">🔑 Key Elements of an HTML Table</h4>
        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item">
            <code>&lt;table&gt;</code>: Defines the entire table.
          </li>
          <li className="list-group-item">
            <code>&lt;tr&gt;</code>: Table Row — groups cells into rows.
          </li>
          <li className="list-group-item">
            <code>&lt;th&gt;</code>: Table Header — used for column or row headings.
          </li>
          <li className="list-group-item">
            <code>&lt;td&gt;</code>: Table Data — the main content cells of the table.
          </li>
        </ul>

        <h4 className="text-success">📋 Basic Table Structure Example</h4>
        <div className="table-responsive mb-4">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Harry</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-success">➕ Rowspan and Colspan Attributes</h4>
        <p><strong>Rowspan:</strong> Makes a cell span across multiple rows — use <code>rowspan="value"</code>.</p>
        <p><strong>Colspan:</strong> Makes a cell span across multiple columns — use <code>colspan="value"</code>.</p>

        <h5 className="mt-4 text-secondary">📌 Example: Colspan</h5>
        <div className="table-responsive mb-4">
          <table className="table table-bordered text-center">
            <tbody>
              <tr>
                <td colSpan="2">Merged Columns</td>
              </tr>
              <tr>
                <td>Column 1</td>
                <td>Column 2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5 className="text-secondary">📌 Example: Rowspan</h5>
        <div className="table-responsive mb-4">
          <table className="table table-bordered text-center">
            <tbody>
              <tr>
                <td>Row 1, Column 1</td>
                <td rowSpan="2">Merged Rows</td>
              </tr>
              <tr>
                <td>Row 2, Column 1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-end mt-4">
          <p className="text-muted mb-0">
            <strong>Previous:</strong> HTML Definition Lists <br />
            <strong>Next:</strong> More on Tables
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tables