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
    const isLoggedIn = localStorage.getItem("adminAuth");
    if (isLoggedIn !== "true") {
      navigate("/admin"); // Login page
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
    localStorage.removeItem("adminAuth");
    navigate("/admin");
  };

  return (
    <div className="container mt-5">
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>

      <h2 className="mb-4">Admin Dashboard</h2>

      Filters */}
      {/* ... (rest same as before, no change in filters, cards, table, modals) */}

      {/* --- Keep your existing code below this point unchanged --- */}
      {/* Your filters, table, view/edit modals remain as-is */}
      {/* All code same as your original from here onward */}
      {/* Only logout and auth check added above
    </div>
  );
};

export default AdminDashboard;
