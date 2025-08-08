import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [editingContact, setEditingContact] = useState(null);
  const [filterDate, setFilterDate] = useState("");
  const [filterMonth, setFilterMonth] = useState("");
  const [searchName, setSearchName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("LoginAuth");
    if (isLoggedIn !== "true") {
      navigate("/Login"); // Login page
    }
  }, [navigate]);

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
    const nameMatch = contact.name.toLowerCase().includes(searchName.toLowerCase());
    const dateMatch = !filterDate || date.includes(filterDate);
    const monthMatch = !filterMonth || date.slice(5, 7).includes(filterMonth);
    return nameMatch && dateMatch && monthMatch;
  });

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this entry?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      fetchContacts();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleEditSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/contact/${editingContact._id}`, editingContact);
      setEditingContact(null);
      fetchContacts();
    } catch (err) {
      console.error("Edit error:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("Auth");
    navigate("/Login");
  };

  return (
    <div className="container mt-5">
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>

      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="row mb-3">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Date (YYYY-MM-DD)"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Month (MM)"
            value={filterMonth}
            onChange={(e) => setFilterMonth(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              setFilterDate("");
              setFilterMonth("");
              setSearchName("");
            }}
          >
            Clear Filters
          </button>
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
                    (c) => c.createdAt === new Date().toISOString().slice(0, 10)
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
                <button
                  className="btn btn-warning btn-sm ms-2"
                  onClick={() => setEditingContact({ ...contact })}
                >
                  Edit
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

      {/* Edit Modal */}
      {editingContact && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Contact</h5>
                <button
                  className="btn-close"
                  onClick={() => setEditingContact(null)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  className="form-control mb-2"
                  placeholder="Name"
                  value={editingContact.name}
                  onChange={(e) =>
                    setEditingContact({ ...editingContact, name: e.target.value })
                  }
                />
                <input
                  className="form-control mb-2"
                  placeholder="Email"
                  value={editingContact.email}
                  onChange={(e) =>
                    setEditingContact({ ...editingContact, email: e.target.value })
                  }
                />
                <input
                  className="form-control mb-2"
                  placeholder="Phone"
                  value={editingContact.phone}
                  onChange={(e) =>
                    setEditingContact({ ...editingContact, phone: e.target.value })
                  }
                />
                <input
                  className="form-control mb-2"
                  placeholder="Subject"
                  value={editingContact.subject}
                  onChange={(e) =>
                    setEditingContact({ ...editingContact, subject: e.target.value })
                  }
                />
                <textarea
                  className="form-control mb-2"
                  placeholder="Message"
                  rows={3}
                  value={editingContact.message}
                  onChange={(e) =>
                    setEditingContact({ ...editingContact, message: e.target.value })
                  }
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setEditingContact(null)}>
                  Cancel
                </button>
                <button className="btn btn-success" onClick={handleEditSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
   
  );
};

export default AdminDashboard;
