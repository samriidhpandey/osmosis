import React from "react";

const UnderWorking = () => {
  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "#0e0e0e",
    color: "#fff",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "2rem",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    fontWeight: "bold",
    color: "#ff4b2b",
    marginBottom: "1rem",
    zIndex: 2,
  };

  const subTextStyle = {
    fontSize: "1.2rem",
    color: "#ccc",
    zIndex: 2,
    maxWidth: "600px",
  };

  const animationStyle = {
    position: "absolute",
    width: "120px",
    height: "120px",
    border: "8px solid #ff4b2b",
    borderTop: "8px solid transparent",
    borderRadius: "50%",
    animation: "rotate 2s linear infinite",
    top: "10%",
    left: "10%",
    opacity: 0.1,
    zIndex: 0,
  };

  const codeLineStyle = {
    position: "absolute",
    width: "60%",
    height: "4px",
    backgroundColor: "#ff4b2b",
    animation: "blink 1s infinite alternate",
    opacity: 0.05,
    zIndex: 0,
  };

  const spinnerStyle = {
    width: "40px",
    height: "40px",
    border: "5px solid #ff4b2b",
    borderTop: "5px solid transparent",
    borderRadius: "50%",
    animation: "rotate 1s linear infinite",
    marginBottom: "1.5rem",
    zIndex: 2,
  };

  return (
    <div style={containerStyle}>
      <div style={animationStyle}></div>
      <div style={{ ...codeLineStyle, top: "20%", left: "20%" }}></div>
      <div style={{ ...codeLineStyle, top: "35%", left: "15%", animationDelay: "0.5s" }}></div>
      <div style={{ ...codeLineStyle, top: "50%", left: "25%", animationDelay: "1s" }}></div>

      <div style={spinnerStyle}></div>
      <h1 style={headingStyle}>We're Building Something Great</h1>
      <p style={subTextStyle}>
        Our development team is actively working behind the scenes to launch an amazing experience. Please check back soon!
      </p>

      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes blink {
          0% { opacity: 0.05; }
          100% { opacity: 0.15; }
        }
      `}</style>
    </div>
  );
};

export default UnderWorking;
