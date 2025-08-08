import React from 'react';

const UnderProcess = () => {
  const containerStyle = {
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url("https://images.unsplash.com/photo-1581093588401-70f8d2bdda2c")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  };

  const overlayStyle = {
    position: 'absolute',
    // width:"90% !important",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    color: 'white',
    padding: '2rem',
    animation: 'fadeIn 1.2s ease-in-out',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    animation: 'slideDown 1.2s ease-in-out',
  };

  const subHeadingStyle = {
    fontSize: '1.4rem',
    maxWidth: '600px',
    margin: '0 auto',
    color: '#f0f0f0',
    animation: 'fadeIn 2s ease-in-out',
  };

  const gifStyle = {
    width: '300px',
    marginTop: '2rem',
    borderRadius: '12px',
    animation: 'zoomIn 1.5s ease-in-out',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
  };

  return (
    <div className='cont' style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={headingStyle}>🚧 Page Under Development</h1>
        <p style={subHeadingStyle}>
          Our team is currently working on this page. Thank you for your patience!
        </p>
        <img
          src="https://media.tenor.com/PP9v7VIs6R4AAAAd/working-on-a-computer.gif"
          alt="Developer Working"
          style={gifStyle}
        />
      </div>

      {/* Inline animation keyframes */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
