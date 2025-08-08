import React from 'react'

function Mtables() {
  return (
    <>
    <div className="container my-5">
      <div className="bg-white border rounded shadow-sm p-4">
        <h2 className="text-center text-primary mb-4">More on HTML Tables</h2>

        <p>
          Let’s take a closer look at how you can enhance HTML tables with additional features such as captions, headers, footers, column styling, and accessibility enhancements.
        </p>

        {/* Caption */}
        <h4 className="text-success mt-4">📌 Adding a Caption</h4>
        <p>
          To add a title to your table, use the{" "}
          <code className="p-2 bg-light rounded d-inline-block">&lt;caption&gt;</code> element. It improves both SEO and accessibility.
        </p>
        <div className="table-responsive mb-4">
          <table className="table table-bordered text-center">
            <caption className="caption-top">Student Details</caption>
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ravi</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Simran</td>
                <td>B+</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Thead, Tfoot, Tbody */}
        <h4 className="text-success">📘 Table Headers and Footers</h4>
        <p>
          Use{" "}
          <code className="p-2 bg-light rounded d-inline-block">&lt;thead&gt;</code>,{" "}
          <code className="p-2 bg-light rounded d-inline-block">&lt;tbody&gt;</code>, and{" "}
          <code className="p-2 bg-light rounded d-inline-block">&lt;tfoot&gt;</code> to group different sections of your table.
        </p>

        {/* Column Grouping */}
        <h4 className="text-success">🎨 Column Groups</h4>
        <p>
          The{" "}
          <code className="p-2 bg-light rounded d-inline-block">&lt;colgroup&gt;</code> and{" "}
          <code className="p-2 bg-light rounded d-inline-block">&lt;col&gt;</code> tags allow styling of entire columns.
        </p>

        <div className="table-responsive mb-4">
          <table className="table table-bordered text-center">
            <colgroup>
              <col style={{ backgroundColor: "#fff3cd" }} />
              <col />
            </colgroup>
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Meena</td>
                <td>88</td>
              </tr>
              <tr>
                <td>Raj</td>
                <td>92</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Accessibility */}
        <h4 className="text-success">♿ Accessibility in Tables</h4>
        <p>
          Use the{" "}
          <code className="p-2 bg-light rounded d-inline-block">scope</code> attribute in{" "}
          <code className="p-2 bg-light rounded d-inline-block">&lt;th&gt;</code> to define whether a header applies to a row, column, or group.
        </p>

        {/* Complete Sample Table */}
        <h4 className="text-success">🧾 Sample HTML Table</h4>
        <div className="table-responsive mb-4">
          <table className="table table-bordered text-center">
            <caption className="caption-top">Employee Information</caption>
            <thead className="table-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alice</td>
                <td>Developer</td>
                <td>$80,000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bob</td>
                <td>Designer</td>
                <td>$70,000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Carol</td>
                <td>Manager</td>
                <td>$90,000</td>
              </tr>
            </tbody>
            <tfoot className="table-light">
              <tr>
                <td colSpan="3" className="text-end">
                  Total Employees
                </td>
                <td>3</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Conclusion */}
        <h5 className="text-secondary mt-4">🔚 Conclusion</h5>
        <p>
          In this section, we explored advanced HTML table elements like captions, headers/footers, column styling, and accessibility. 
          These features help make your tables more organized, readable, and user-friendly.
        </p>

        <div className="text-end">
          <p className="text-muted mb-0">
            <strong>Previous:</strong> HTML Tables <br />
            <strong>Next:</strong> HTML Forms (Coming Up!)
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Mtables