// ReviewSlider.jsx
import React from "react";

const reviews = [
  { name: "Rahul", message: "Great teaching!", rating: 5 },
  { name: "Anjali", message: "Very helpful course.", rating: 4 },
  { name: "Vikram", message: "Explained from zero level!", rating: 5 },
  { name: "Sneha", message: "Best institute ever!", rating: 5 },
  { name: "Amit", message: "Highly recommend.", rating: 4 },
];

const ReviewCard = ({ review }) => (
  <div
    style={{
      minWidth: "280px",
      padding: "1.2rem",
      backgroundColor: isDark ? "black" : "darkred",
      color: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      margin: "0 1rem",
    }}
  >
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
    <p style={{ fontSize: "1rem", margin: "0 0 0.8rem 0" }}>“{review.message}”</p>
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
);

const ReviewSlider = () => {
  // Double the reviews so it can loop smoothly
  const repeated = [...reviews, ...reviews];

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        padding: "1rem 0",
        background: "",
      }}
    >
      <div
        style={{
          display: "flex",
          animation: "scroll-left 20s linear infinite",
          width: "fit-content",
        }}
      >
        {repeated.map((review, idx) => (
          <ReviewCard key={idx} review={review} />
        ))}
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        }
      `}</style>
    </div>
  );
};

export default ReviewSlider;
