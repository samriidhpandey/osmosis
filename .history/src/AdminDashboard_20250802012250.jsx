import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [filterMonth, setFilterMonth] = useState('');
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contacts");
      setContacts(res.data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  const filteredContacts = contacts.filter((c) => {
    const created = new Date(c.createdAt);
    const monthMatch = filterMonth ? created.getMonth() + 1 === parseInt(filterMonth) : true;
    const dateMatch = filterDate ? format(created, 'yyyy-MM-dd') === filterDate : true;
    const searchMatch = `${c.name} ${c.email} ${c.phone}`.toLowerCase().includes(search.toLowerCase());
    return monthMatch && dateMatch && searchMatch;
  });

  const contactsToday = contacts.filter(c =>
    format(new Date(c.createdAt), 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
  );

  const contactsThisMonth = contacts.filter(c =>
    new Date(c.createdAt).getMonth() === new Date().getMonth()
  );

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this contact?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      fetchContacts();
    } catch (err) {
      console.error("Error deleting contact:", err);
    }
  };

  const handleMarkDone = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/contacts/${id}`, { status: 'done' });
      fetchContacts();
    } catch (err) {
      console.error("Error updating contact:", err);
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Admin Dashboard</h2>

      {/* Cards */}
      <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
        <div style={{ background: '#007bff', color: 'white', padding: 20, borderRadius: 10 }}>
          <h4>Contacts Today</h4>
          <h2>{contactsToday.length}</h2>
        </div>
        <div style={{ background: '#28a745', color: 'white', padding: 20, borderRadius: 10 }}>
          <h4>Contacts This Month</h4>
          <h2>{contactsThisMonth.length}</h2>
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
        <input type="number" placeholder="Month (1-12)" value={filterMonth} onChange={e => setFilterMonth(e.target.value)} />
        <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} />
      </div>

      {/* Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={th}>Name</th>
            <th style={th}>Email</th>
            <th style={th}>Phone</th>
            <th style={th}>Status</th>
            <th style={th}>Date</th>
            <th style={th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map(c => (
            <tr key={c._id} style={{ backgroundColor: selected === c._id ? '#e0f7fa' : 'white' }}>
              <td style={td} onClick={() => setSelected(c._id)}>{c.name}</td>
              <td style={td}>{c.email}</td>
              <td style={td}>{c.phone}</td>
              <td style={td}>{c.status || 'pending'}</td>
              <td style={td}>{format(new Date(c.createdAt), 'dd-MM-yyyy')}</td>
              <td style={td}>
                <button onClick={() => handleMarkDone(c._id)}>Done</button>
                <button onClick={() => handleDelete(c._id)} style={{ marginLeft: 10 }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Selected Details */}
      {selected && (
        <div style={{ marginTop: 20, padding: 20, border: '1px solid #ccc' }}>
          <h3>Contact Details</h3>
          {(() => {
            const c = contacts.find(item => item._id === selected);
            return (
              <>
                <p><strong>Name:</strong> {c?.name}</p>
                <p><strong>Email:</strong> {c?.email}</p>
                <p><strong>Phone:</strong> {c?.phone}</p>
                <p><strong>Subject:</strong> {c?.subject}</p>
                <p><strong>Message:</strong> {c?.message}</p>
                <p><strong>Date:</strong> {format(new Date(c?.createdAt), 'dd-MM-yyyy')}</p>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
};

const th = { padding: 10, border: '1px solid #ccc' };
const td = { padding: 10, border: '1px solid #ccc', cursor: 'pointer' };

export default AdminDashboard;
