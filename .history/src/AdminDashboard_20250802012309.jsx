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
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/contact');
      setContacts(res.data);
      setFilteredContacts(res.data);
    } catch (err) {
      console.error('Error fetching contacts:', err);
    }
  };

  useEffect(() => {
    let result = [...contacts];

    if (monthFilter) {
      result = result.filter(
        (c) => new Date(c.date).getMonth() + 1 === parseInt(monthFilter)
      );
    }

    if (dateFilter) {
      result = result.filter(
        (c) => new Date(c.date).toISOString().slice(0, 10) === dateFilter
      );
    }

    setFilteredContacts(result);
  }, [monthFilter, dateFilter, contacts]);

  const today = new Date().toISOString().slice(0, 10);
  const todayContacts = contacts.filter(
    (c) => new Date(c.date).toISOString().slice(0, 10) === today
  );
  const currentMonth = new Date().getMonth() + 1;
  const monthlyContacts = contacts.filter(
    (c) => new Date(c.date).getMonth() + 1 === currentMonth
  );
  const admissions = contacts.filter((c) => c.admission === true);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    window.location.href = '/admin';
  };

  const toggleAdmission = async (id, current) => {
    try {
      await axios.put(`http://localhost:5000/api/contact/${id}`, {
        admission: !current,
      });
      fetchContacts();
    } catch (err) {
      console.error('Error updating admission:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this entry?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      fetchContacts();
    } catch (err) {
      console.error('Error deleting contact:', err);
    }
  };

  const clearAll = async () => {
    if (!window.confirm('Delete ALL entries?')) return;
    try {
      await axios.delete('http://localhost:5000/api/contact');
      fetchContacts();
    } catch (err) {
      console.error('Error clearing all contacts:', err);
    }
  };

  const clearByMonth = async () => {
    if (!monthFilter || !window.confirm(`Clear all from month ${monthFilter}?`)) return;
    try {
      await axios.delete(`http://localhost:5000/api/contact/month/${monthFilter}`);
      fetchContacts();
    } catch (err) {
      console.error('Error clearing by month:', err);
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Welcome to Admin Dashboard</h1>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>

      {/* Cards */}
      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <div className="card bg-info text-white h-100">
            <div className="card-body">
              <h5 className="card-title">Total Enquiries</h5>
              <p className="display-6">{contacts.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card bg-success text-white h-100">
            <div className="card-body">
              <h5 className="card-title">Admissions Done</h5>
              <p className="display-6">{admissions.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card bg-warning text-white h-100">
            <div className="card-body">
              <h5 className="card-title">Today's Enquiries</h5>
              <p className="display-6">{todayContacts.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card bg-primary text-white h-100">
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
          <div className="col-md-2">
            <label className="form-label">Filter by Month</label>
            <input
              type="number"
              className="form-control"
              min="1"
              max="12"
              value={monthFilter}
              onChange={(e) => setMonthFilter(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Filter by Date</label>
            <input
              type="date"
              className="form-control"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-secondary w-100"
              onClick={() => {
                setMonthFilter('');
                setDateFilter('');
              }}
            >
              Clear Filters
            </button>
          </div>
          <div className="col-md-3">
            <button className="btn btn-danger w-100" onClick={clearAll}>
              Clear All Entries
            </button>
          </div>
          <div className="col-md-3">
            <button className="btn btn-danger w-100" onClick={clearByMonth}>
              Clear By Month
            </button>
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
              <th>Admission</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((c) => (
              <tr key={c._id} onClick={() => setSelectedContact(c)}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.subject}</td>
                <td>{new Date(c.date).toLocaleString()}</td>
                <td>
                  <button
                    className={`btn btn-sm ${c.admission ? 'btn-success' : 'btn-outline-secondary'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAdmission(c._id, c.admission);
                    }}
                  >
                    {c.admission ? '✅ Done' : '❌ Pending'}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(c._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
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
