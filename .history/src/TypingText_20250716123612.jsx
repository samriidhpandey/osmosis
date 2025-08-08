import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TypingText = () => {
  const words = [
    "Web Development",
    "Digital Marketing",
    "Graphic Designing",
    "RSCIT",
    "Tally",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="container text-center mt-5">
      <h2 className="fw-bold">
        Learn <span ref={typingRef}>{currentText}</span>
        <span className="blinking-cursor">|</span>
      </h2>
      <style>
        {`
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
        `}
      </style>
    </div>
  );
};

export default TypingText;
