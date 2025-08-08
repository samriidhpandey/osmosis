// UnderProcess.jsx
import { color } from 'framer-motion';
import React from 'react';

const UnderProcess = () => {
  const containerStyle = {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'white', // dark red
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '2rem',
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '1rem',
    color:"darkred",
    animation: 'fadeInDown 1.5s ease-out',
  };

  const subHeadingStyle = {
    fontSize: '1.5rem',
    color:"darkred",
    animation: 'fadeInUp 2s ease-out',
  };

  const gifStyle = {
    width: '300px',
    maxWidth: '90%',
    marginTop: '2rem',
    borderRadius: '12px',
    animation: 'zoomIn 1.5s ease-in-out',
    boxShadow: '0 0 0px rgba(136, 32, 32, 0.2)',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🚧 Under Process 🚧</h1>
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default UnderProcess;
