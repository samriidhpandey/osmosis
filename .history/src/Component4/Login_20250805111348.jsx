
import login from '../image/login.webp'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      const isLoggedIn = localStorage.getItem('LoginAuth');
      if (isLoggedIn === 'true') {
        navigate('/Login/dashboard');
      }
    }, [navigate]);
  
    const handleLogin = () => {
      if (email === 'admin@gmail.com' && password === '12345678') {
        localStorage.setItem('LoginAuth', 'true');
        navigate('/Login/dashboard');
      } else {
        alert('Invalid credentials');
      }
    };
  return (
    <>
    <div className="container-fluid">

      <div className="row mt-5 mb-5 ">
        <div className="col-10 col-sm-9 col-md-10 col-lg-8 col-xl-7 col-xxl-6 m-auto mt-3 mb-4 ">

       
      
      <div className="row shadow rounded-3 overflow-hidden p-3" >
        
        {/* Left Form Section */}
        <div className="col-md-6 col-11  p-4 bg-white">
          <h3 className="fw-bold text-center">Welcome back</h3>
          <p className="text-center text-muted mb-4">Login to your account</p>

          <div style={{
      // height: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // background: 'linear-gradient(135deg, #f0f1f6ff, #500202ff)',
    }}>
      <div>

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
            backgroundColor: 'darkred',
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

          <div className="text-center text-muted mb-2">Or continue with</div>

          <div className="d-flex justify-content-between gap-2 mb-3">
            <button className="btn btn-outline-dark w-100">
              <i className="bi bi-github me-2"></i> Github
            </button>
            <button className="btn btn-outline-dark w-100">
              <i className="bi bi-google me-2"></i> Google
            </button>
          </div>

          <p className="text-center">
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </div>

        {/* Right Image Section (Hidden on mobile/tablet) */}
        <div className="col-md-6 d-none d-md-block p-0">
          <div className="w-100 h-100 login" style={{ backgroundColor: "#ccc" }}>
           
          </div>
        </div>
      </div>

       </div>
       <div className="col-12 text-center"><p>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p></div>
      </div>
    </div>
    
    </>
  )
}

export default Login