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
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: '400px',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Admin Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#4e2121ff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
