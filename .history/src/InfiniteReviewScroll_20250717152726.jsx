import { useRef, useEffect, useState } from "react";

const reviews = [
  { name: "Ravi", message: "Great experience!", rating: 5 },
  { name: "Priya", message: "Loved the teaching style.", rating: 4 },
  { name: "Aman", message: "Highly recommended.", rating: 5 },
  { name: "Neha", message: "Awesome course!", rating: 5 },
  { name: "Vikas", message: "Very helpful mentors.", rating: 4 },
];

const InfiniteScroll = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [xPos, setXPos] = useState(0);

  useEffect(() => {
    let animationFrame;
    const scrollSpeed = 10; // Increase for faster scroll

    const scroll = () => {
      if (contentRef.current && containerRef.current) {
        const contentWidth = contentRef.current.offsetWidth;
        setXPos((prev) => {
          const newPos = (prev - scrollSpeed) % contentWidth;
          return newPos;
        });
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        padding: "15px 0",
        background: "#111",
      }}
    >
      <div
        ref={contentRef}
        style={{
          display: "inline-flex",
          transform: `translateX(${xPos}px)`,
        }}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            style={{
              minWidth: "250px",
              maxWidth: "250px",
              backgroundColor: "#1a1a1a",
              color: "white",
              borderRadius: "10px",
              padding: "1rem",
              marginRight: "1rem",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            {/* Stars */}
            <div style={{ marginBottom: "0.5rem" }}>
              {[...Array(5)].map((_, idx) => (
                <span
                  key={idx}
                  style={{
                    color: idx < review.rating ? "#FFD700" : "#555",
                    fontSize: "1.2rem",
                  }}
                >
                  ★
                </span>
              ))}
            </div>

            <p style={{ fontSize: "1rem", marginBottom: "0.7rem" }}>
              “{review.message}”
            </p>

            <p
              style={{
                textAlign: "right",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "#ccc",
                margin: 0,
              }}
            >
              - {review.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
