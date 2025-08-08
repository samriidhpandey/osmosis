import { motion } from "framer-motion";
import { useRef } from "react";

const reviews = [
  { name: "Ravi", message: "Great experience!", rating: 5 },
  { name: "Priya", message: "Very helpful course.", rating: 4 },
  { name: "Aman", message: "Loved it!", rating: 5 },
  { name: "Neha", message: "Excellent support!", rating: 4 },
  { name: "Vikas", message: "Learned a lot.", rating: 5 },
];

// Duplicate for seamless infinite scroll
const repeatedReviews = [...reviews, ...reviews];

function ReviewScroller() {
  const containerRef = useRef();

  return (
    <div
      ref={containerRef}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "15px 0",
        background: "transparent",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: "1.5rem",
        }}
        animate={{ x: ["0%", "100%"] }} // Reverse direction: right to left
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        }}
        whileHover={{ animationPlayState: "paused" }} // Not supported
      >
        {repeatedReviews.map((review, i) => (
          <div
            key={i}
            style={{
              minWidth: "280px",
              padding: "1.2rem",
              backgroundColor: "#1A1A1A",
              color: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.3s ease-in-out",
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

            {/* Message */}
            <p style={{ fontSize: "1rem", margin: "0 0 0.8rem 0" }}>
              “{review.message}”
            </p>

            {/* Name */}
            <p
              style={{
                textAlign: "right",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "#aaa",
                margin: 0,
              }}
            >
              - {review.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ReviewScroller;
