import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [filterDate, setFilterDate] = useState("");
  const [filterMonth, setFilterMonth] = useState("");

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact");
      setContacts(res.data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter((contact) => {
    const date = contact.createdAt || "";
    if (filterDate && !date.includes(filterDate)) return false;
    if (filterMonth && !date.slice(5, 7).includes(filterMonth)) return false;
    return true;
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      fetchContacts();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Dashboard</h2>

      {/* Filters */}
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Date (YYYY-MM-DD)"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Month (MM)"
            value={filterMonth}
            onChange={(e) => setFilterMonth(e.target.value)}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="row mb-4">
        <div className="col">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5 className="card-title">Total Contacts</h5>
              <p className="card-text">{contacts.length}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white bg-success">
            <div className="card-body">
              <h5 className="card-title">Contacts Today</h5>
              <p className="card-text">
                {
                  contacts.filter(
                    (c) =>
                      c.createdAt === new Date().toISOString().slice(0, 10)
                  ).length
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact, i) => (
            <tr key={contact._id}>
              <td>{i + 1}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.subject}</td>
              <td>{contact.message}</td>
              <td>{contact.createdAt}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(contact._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-info btn-sm ms-2"
                  onClick={() => setSelectedContact(contact)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* View Modal */}
      {selectedContact && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Details</h5>
                <button
                  className="btn-close"
                  onClick={() => setSelectedContact(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p><strong>Name:</strong> {selectedContact.name}</p>
                <p><strong>Email:</strong> {selectedContact.email}</p>
                <p><strong>Phone:</strong> {selectedContact.phone}</p>
                <p><strong>Subject:</strong> {selectedContact.subject}</p>
                <p><strong>Message:</strong> {selectedContact.message}</p>
                <p><strong>Date:</strong> {selectedContact.createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
