// src/components/TypingText.jsx
import React from "react";
import { Typed } from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";

const TypingText = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="fw-bold">
        Learn{" "}
        <Typed
          strings={[
            "Web Development",
            "Digital Marketing",
            "Graphic Designing",
            "RSCIT",
            "Tally",
          ]}
          typeSpeed={70}
          backSpeed={50}
          loop
        />
      </h2>
    </div>
  );
};

export default TypingText;
