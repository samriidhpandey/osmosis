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

  const deskStyle = {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "200px",
    height: "120px",
    backgroundColor: "#1e1e1e",
    borderRadius: "10px",
    boxShadow: "0 -5px 20px rgba(255, 75, 43, 0.2)",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const screenStyle = {
    width: "160px",
    height: "90px",
    backgroundColor: "#000",
    borderRadius: "6px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 0 10px #ff4b2b inset",
  };

  const codeLineStyle = {
    position: "absolute",
    height: "8px",
    width: "100%",
    backgroundColor: "#ff4b2b",
    animation: "typing 2s steps(20, end) infinite alternate",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>We're Building Something Great</h1>
      <p style={subTextStyle}>
        Our development team is actively working behind the scenes to launch an amazing experience. Please check back soon!
      </p>

      <div style={deskStyle}>
        <div style={screenStyle}>
          <div style={{ ...codeLineStyle, top: "10%" }}></div>
          <div style={{ ...codeLineStyle, top: "35%", animationDelay: "0.5s" }}></div>
          <div style={{ ...codeLineStyle, top: "60%", animationDelay: "1s" }}></div>
        </div>
      </div>

      <style>{`
        @keyframes typing {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default UnderWorking;
