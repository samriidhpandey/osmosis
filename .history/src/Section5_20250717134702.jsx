import React from 'react'

function Section5({isDark}) {
  const Section5 = {
    backgroundColor: isDark ? '#0E121B' : 'white',
    color: isDark ? 'white' : 'black',
  };
  const student = {
    backgroundColor: isDark ? '#27272A' : 'darkred',
    color: isDark ? 'white' : 'white',
  };
  const Section6 = {
    backgroundColor: isDark ? 'black' : 'darkred',
    color: isDark ? 'white' : 'white',
  };
  const reviews = [
  { name: "Anjali Sharma", rating: 5, message: "Amazing course structure!" },
  { name: "Rahul Meena", rating: 4, message: "Loved the practical examples." },
  { name: "Priya S.", rating: 5, message: "Great support from faculty." },
  { name: "Yash Gupta", rating: 4, message: "Perfect for beginners." },
  { name: "Rohit Jain", rating: 5, message: "Highly recommend Osmosis!" },
  { name: "Sneha Verma", rating: 4, message: "Trainers are very experienced." },
  { name: "Arjun Patel", rating: 5, message: "Best computer class in Jodhpur." },
  { name: "Divya Joshi", rating: 5, message: "Helped me get job-ready!" },
  { name: "Nikhil Raj", rating: 4, message: "Awesome explanation style." },
  { name: "Neha Kumari", rating: 5, message: "Super motivating teachers." },
];
  return (
    <>
    <div className="container-fluid p-0">
      <div className="row" style={Section5}>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-11 col-xxl-10 m-auto pb-5">
          <h2 className='text-center fw-bolder mt-5'>Testimonials</h2>
          <div className="row">



            <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: "#0F0F0F",
        padding: "15px 0",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: "2rem",
        }}
        animate={{ x: ["0%", "-50%"] }} // Only half (because we duplicated)
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40, // ⏱️ Slower means smoother
        }}
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


            
          </div>
        </div>
      </div>

      <div className="row" style={Section6}>
        <div className="col-12 text-center pt-5 pb-5">
          <h1 className='mt-3'>Start Your Journey</h1>
          <h5 className='mt-5'>Learn step-by-step with Jodhpur's most loved programming mentor.</h5>
          <button className='btn-light mt-5 rounded ps-4 pt-2 pe-4 fs-5 pb-2 border-0'>Start Now</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Section5