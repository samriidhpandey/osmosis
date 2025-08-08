import React from "react";
// import { Spinner } from "react-bootstrap";

const UnderWorking = () => {
  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#0E121B",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "2rem",
    overflow: "hidden",
    position: "relative",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#ff4b2b",
    zIndex: 2,
  };

  const subTextStyle = {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#ccc",
    zIndex: 2,
  };

  const animationContainerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    overflow: "hidden",
    pointerEvents: "none",
  };

  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: "none",
    opacity: 0.12,
    objectFit: "cover",
  };

  return (
    <div style={containerStyle}>
      <div style={animationContainerStyle}>
        <iframe
          src="https://lottie.host/?file=2f77b351-7a29-494e-8e38-34568a06c4ab/SvW0FySPBj.json"
          title="Web Dev Work Animation"
          style={iframeStyle}
        ></iframe>
      </div>
      {/* <Spinner animation="border" variant="danger" style={{ zIndex: 2 }} /> */}
      <h1 style={headingStyle}>Website Under Development</h1>
      <p style={subTextStyle}>
        Our developers are working on something amazing! 🚧 <br />
        Stay tuned while we build a powerful experience.
      </p>
      <p style={{ color: "#aaa", fontSize: "1rem", zIndex: 2 }}>
        Contact: <a href="mailto:youremail@example.com" style={{ color: "#ff4b2b" }}>youremail@example.com</a>
      </p>
    </div>
  );
};

export default UnderWorking;
