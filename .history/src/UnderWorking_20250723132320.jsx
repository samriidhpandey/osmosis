import React from 'react';

const UnderProcess = () => {
  const containerStyle = {
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url("https://images.unsplash.com/photo-1581093588401-70f8d2bdda2c")', // JCB/Construction
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '2rem',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)', // dark overlay for text visibility
    zIndex: 0,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    animation: 'fadeInDown 1.5s ease-out',
    letterSpacing: '0.5px',
  };

  const subHeadingStyle = {
    fontSize: '1.3rem',
    maxWidth: '600px',
    margin: '0 auto',
    animation: 'fadeInUp 2s ease-out',
    color: '#eee',
  };

  const gifStyle = {
    width: '300px',
    marginTop: '2.5rem',
    borderRadius: '12px',
    animation: 'zoomIn 1.5s ease-in-out',
    boxShadow: '0 0 20px rgba(255,255,255,0.2)',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={headingStyle}>🚧 Page Under Development</h1>
        <p style={subHeadingStyle}>
          We are working hard to build this page. Thank you for your patience!
        </p>
        <img
          src="https://media.tenor.com/PP9v7VIs6R4AAAAd/working-on-a-computer.gif"
          alt="Developer Working"
          style={gifStyle}
        />
      </div>

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
