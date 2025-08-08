import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [monthFilter, setMonthFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/contact')
      .then(res => {
        setContacts(res.data);
        setFilteredContacts(res.data);
      })
      .catch(err => console.error('Error fetching contacts:', err));
  }, []);

  useEffect(() => {
    let result = contacts;

    if (monthFilter) {
      result = result.filter(c => new Date(c.date).getMonth() + 1 === parseInt(monthFilter));
    }

    if (dateFilter) {
      result = result.filter(c => new Date(c.date).toISOString().slice(0, 10) === dateFilter);
    }

    setFilteredContacts(result);
  }, [monthFilter, dateFilter, contacts]);

  const today = new Date().toISOString().slice(0, 10);
  const todayContacts = contacts.filter(c => new Date(c.date).toISOString().slice(0, 10) === today);
  const currentMonth = new Date().getMonth() + 1;
  const monthlyContacts = contacts.filter(c => new Date(c.date).getMonth() + 1 === currentMonth);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth'); // ⛔ Remove auth key
    window.location.href = '/admin'; // 🔁 Redirect to login page
  };
  return (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
      <button onClick={handleLogout} style={{ marginTop: '20px' }}>
        Logout
      </button>
    </div>
    <div className="container py-4">
      <h2 className="mb-4 text-center">📋 Admin Dashboard</h2>

      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="card text-white bg-success h-100">
            <div className="card-body">
              <h5 className="card-title">Today's Contacts</h5>
              <p className="display-6">{todayContacts.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card text-white bg-primary h-100">
            <div className="card-body">
              <h5 className="card-title">This Month</h5>
              <p className="display-6">{monthlyContacts.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card mb-4">
        <div className="card-body row g-3 align-items-end">
          <div className="col-md-3">
            <label className="form-label">Filter by Month</label>
            <input
              type="number"
              className="form-control"
              min="1"
              max="12"
              value={monthFilter}
              onChange={e => setMonthFilter(e.target.value)}
              placeholder="e.g. 8"
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Filter by Date</label>
            <input
              type="date"
              className="form-control"
              value={dateFilter}
              onChange={e => setDateFilter(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <button className="btn btn-warning w-100" onClick={() => {
              setMonthFilter('');
              setDateFilter('');
            }}>Clear Filters</button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map(c => (
              <tr key={c._id} onClick={() => setSelectedContact(c)} style={{ cursor: 'pointer' }}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.subject}</td>
                <td>{new Date(c.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Card */}
      {selectedContact && (
        <div className="card mt-4 bg-light">
          <div className="card-body">
            <h4 className="card-title mb-3">🧾 Contact Details</h4>
            <p><strong>Name:</strong> {selectedContact.name}</p>
            <p><strong>Email:</strong> {selectedContact.email}</p>
            <p><strong>Phone:</strong> {selectedContact.phone}</p>
            <p><strong>Subject:</strong> {selectedContact.subject}</p>
            <p><strong>Message:</strong> {selectedContact.message}</p>
            <p><strong>Date:</strong> {new Date(selectedContact.date).toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
