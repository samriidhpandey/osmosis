import React, { useEffect, useState } from 'react';
import axios from 'axios';
 // Optional: your custom styling
import { format } from 'date-fns';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/contact');
      setContacts(res.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const totalEnquiries = contacts.length;
  const totalAdmissions = contacts.filter(c => c.status === 'done').length;

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      fetchContacts();
    }
  };

  const handleMarkDone = async (id) => {
    await axios.patch(`http://localhost:5000/api/contact/${id}`, { status: 'done' });
    fetchContacts();
  };

  const handleClearAll = async () => {
    if (window.confirm('Delete all contact entries?')) {
      await axios.delete('http://localhost:5000/api/contact');
      fetchContacts();
    }
  };

  const handleClearMonth = async () => {
    const currentMonth = new Date().getMonth() + 1;
    if (window.confirm(`Delete all entries from month ${currentMonth}?`)) {
      await axios.delete(`http://localhost:5000/api/contact?month=${currentMonth}`);
      fetchContacts();
    }
  };

  const handleEdit = (contact) => {
    setEditingId(contact._id);
    setEditData(contact);
  };

  const handleEditSave = async () => {
    await axios.patch(`http://localhost:5000/api/contact/${editingId}`, editData);
    setEditingId(null);
    fetchContacts();
  };

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.phone.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>

      {/* Summary Cards */}
      <div className="row my-4">
        <div className="col-md-6">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Enquiries</h5>
              <p className="card-text">{totalEnquiries}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Admissions</h5>
              <p className="card-text">{totalAdmissions}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search + Clear Buttons */}
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          placeholder="Search by name/email/phone"
          className="form-control w-50"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div>
          <button onClick={handleClearMonth} className="btn btn-warning me-2">Clear This Month</button>
          <button onClick={handleClearAll} className="btn btn-danger">Clear All</button>
        </div>
      </div>

      {/* Contacts Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="8">Loading...</td></tr>
            ) : filteredContacts.length === 0 ? (
              <tr><td colSpan="8">No results found.</td></tr>
            ) : filteredContacts.map(contact => (
              <tr key={contact._id}>
                {editingId === contact._id ? (
                  <>
                    <td><input value={editData.name} onChange={e => setEditData({ ...editData, name: e.target.value })} /></td>
                    <td><input value={editData.email} onChange={e => setEditData({ ...editData, email: e.target.value })} /></td>
                    <td><input value={editData.phone} onChange={e => setEditData({ ...editData, phone: e.target.value })} /></td>
                    <td><input value={editData.subject} onChange={e => setEditData({ ...editData, subject: e.target.value })} /></td>
                    <td><input value={editData.message} onChange={e => setEditData({ ...editData, message: e.target.value })} /></td>
                    <td>{format(new Date(contact.createdAt), 'dd-MM-yyyy')}</td>
                    <td>{contact.status || 'pending'}</td>
                    <td>
                      <button className="btn btn-success btn-sm me-2" onClick={handleEditSave}>Save</button>
                      <button className="btn btn-secondary btn-sm" onClick={() => setEditingId(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.subject}</td>
                    <td>{contact.message}</td>
                    <td>{format(new Date(contact.createdAt), 'dd-MM-yyyy')}</td>
                    <td>{contact.status || 'pending'}</td>
                    <td>
                      <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(contact)}>Edit</button>
                      <button className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(contact._id)}>Delete</button>
                      {contact.status !== 'done' && (
                        <button className="btn btn-success btn-sm" onClick={() => handleMarkDone(contact._id)}>Done</button>
                      )}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
