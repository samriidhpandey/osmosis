import { motion } from "framer-motion";

// Sample review data
const reviews = [
  { name: "Ravi", message: "Great experience!", rating: 5 },
  { name: "Priya", message: "Loved the teaching style.", rating: 4 },
  { name: "Aman", message: "Highly recommended.", rating: 5 },
  { name: "Neha", message: "Awesome course!", rating: 5 },
  { name: "Vikas", message: "Very helpful mentors.", rating: 4 },
];

// Duplicate reviews for infinite effect
const repeatedReviews = [...reviews, ...reviews];

function InfiniteReviewScroll() {
  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        padding: "20px 0",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: "1rem",
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10, // ⏩ Fast & smooth
        }}
      >
        {repeatedReviews.map((review, i) => (
          <div
            key={i}
            style={{
              
              backgroundColor: "#1a1a1a",
              color: "#fff",
              borderRadius: "10px",
              padding: "1rem",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
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
            <p style={{ fontSize: "1rem", marginBottom: "0.7rem" }}>
              “{review.message}”
            </p>

            {/* Name */}
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
      </motion.div>
    </div>
  );
}

export default InfiniteReviewScroll;
