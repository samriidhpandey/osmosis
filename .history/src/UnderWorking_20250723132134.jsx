import React from 'react';

const UnderProcess = () => {
  const containerStyle = {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#8B0000', // dark red
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
    fontSize: '3.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    animation: 'fadeInDown 1.5s ease-out',
    letterSpacing: '1px',
  };

  const subHeadingStyle = {
    fontSize: '1.25rem',
    maxWidth: '600px',
    animation: 'fadeInUp 2s ease-out',
    color: '#f8f8f8',
  };

  const gifStyle = {
    width: '320px',
    maxWidth: '90%',
    marginTop: '2.5rem',
    borderRadius: '14px',
    animation: 'zoomIn 1.5s ease-in-out',
    boxShadow: '0 0 20px rgba(255,255,255,0.15)',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🔧 Page Under Development</h1>
      <p style={subHeadingStyle}>
        Our team is currently working hard to bring this page to life. Please check back soon.
      </p>
      <img
        src="https://media.tenor.com/PP9v7VIs6R4AAAAd/working-on-a-computer.gif"
        alt="Developer Working"
        style={gifStyle}
      />

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default UnderProcess;
