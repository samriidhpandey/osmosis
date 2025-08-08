// src/components/TypingText.jsx
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TypingText = () => {
  const words = [
    "Web Development",
    "Digital Marketing",
    "Graphic Designing",
    "RSCIT",
    "Tally",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      // When word is fully typed
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
      }

      // When word is fully deleted
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <div className="container text-center mt-5">
      <h2 className="fw-bold">
        Learn <span>{displayText}</span>
        <span className="blinking-cursor">|</span>
      </h2>

      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 24px;
          color: black;
          animation: blink 0.7s infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default TypingText;
