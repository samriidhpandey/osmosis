import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === '12345678') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
