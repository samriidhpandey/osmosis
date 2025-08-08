import React, { useState } from "react";
import { motion } from "framer-motion";

const mernRoadmap = [
  { title: "HTML & CSS", desc: "Start with the building blocks of the web. Learn how to structure and style web pages." },
  { title: "JavaScript Basics", desc: "Understand variables, functions, loops, and DOM manipulation for dynamic behavior." },
  { title: "Advanced JavaScript", desc: "Learn ES6+, closures, async/await, and how to write modern JavaScript code." },
  { title: "Git & GitHub", desc: "Master version control, repositories, branching, and collaboration on GitHub." },
  { title: "React.js", desc: "Build powerful front-end apps using components, hooks, props, and state management." },
  { title: "Node.js & Express.js", desc: "Create robust backends, APIs, and middleware using Node.js with Express.js." },
  { title: "MongoDB", desc: "Store and manage data using MongoDB with Mongoose ORM in a NoSQL environment." },
  { title: "Full Stack Projects", desc: "Build real-world full stack applications using the complete MERN stack." },
  { title: "Deployment", desc: "Host your projects using platforms like Vercel, Netlify, or Render for free." },
  { title: "Interview Prep & Certification", desc: "Practice coding questions, prepare resumes, and receive a MERN certificate." }
];

const faqsLeft = [
  { question: "What is the duration of the MERN course?", answer: "Typically 6 months depending on the pace and batch schedule." },
  { question: "Do I need prior coding knowledge?", answer: "No, this course starts from the very basics and goes up to advanced level." },
  { question: "Will I get real project experience?", answer: "Yes, multiple real-time projects are part of the curriculum." },
];

const faqsRight = [
  { question: "Is certification provided?", answer: "Yes, certification is provided upon successful completion of the course." },
  { question: "Are classes online or offline?", answer: "Both modes are available: offline at center or online via live sessions." },
  { question: "Will placement assistance be provided?", answer: "Yes, we provide placement support after the course." },
];

const MernRoadmap = ({ isDark }) => {
  const [openIndexLeft, setOpenIndexLeft] = useState(null);
  const [openIndexRight, setOpenIndexRight] = useState(null);

  const toggleFAQLeft = (index) => setOpenIndexLeft(openIndexLeft === index ? null : index);
  const toggleFAQRight = (index) => setOpenIndexRight(openIndexRight === index ? null : index);

  const bg = isDark ? "#09071dff" : "linear-gradient(to bottom, #f8d7da, white)";
  const cardBg = isDark ? "#1e1e1e" : "white";
  const textColor = isDark ? "#f1f1f1" : "#8B0000";
  const paraColor = isDark ? "#aaa" : "#555";
  const borderColor = isDark ? "#333" : "#f5c6cb";
  const shadow = isDark ? "0 2px 8px rgba(255,255,255,0.05)" : "0 2px 8px rgba(0,0,0,0.1)";

  return (
    <div style={{ minHeight: "100vh", background: bg, padding: "3rem 1rem" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", color: textColor, marginBottom: "3rem" }}>
        MERN Stack Course Roadmap
      </h1>

      <div style={{ maxWidth: "960px", margin: "0 auto", borderLeft: `4px solid ${textColor}`, paddingLeft: "1.5rem", marginBottom: "4rem" }}>
        {mernRoadmap.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            style={{ backgroundColor: cardBg, boxShadow: shadow, borderRadius: "1rem", padding: "1.5rem", marginBottom: "1.5rem" }}
          >
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: textColor }}>
              Step {index + 1}: {step.title}
            </h3>
            <p style={{ color: paraColor, marginTop: "0.5rem", fontSize: "0.875rem" }}>{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: textColor, marginBottom: "1.5rem", textAlign: "center" }}>Frequently Asked Questions</h2>
        <div className="row" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <div className="col-12 col-md-6" style={{ flex: 1 }}>
            {faqsLeft.map((faq, index) => (
              <div
                key={index}
                style={{ border: `1px solid ${borderColor}`, borderRadius: "1rem", backgroundColor: cardBg, boxShadow: shadow, padding: "1rem", marginBottom: "1rem" }}
              >
                <button
                  style={{ width: "100%", textAlign: "left", fontWeight: "600", color: textColor, background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  onClick={() => toggleFAQLeft(index)}
                >
                  <span>{faq.question}</span>
                  <span>{openIndexLeft === index ? "➖" : "➕"}</span>
                </button>
                {openIndexLeft === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    style={{ marginTop: "0.5rem", color: paraColor, fontSize: "0.875rem" }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>

          <div className="col-12 col-md-6" style={{ flex: 1 }}>
            {faqsRight.map((faq, index) => (
              <div
                key={index}
                style={{ border: `1px solid ${borderColor}`, borderRadius: "1rem", backgroundColor: cardBg, boxShadow: shadow, padding: "1rem", marginBottom: "1rem" }}
              >
                <button
                  style={{ width: "100%", textAlign: "left", fontWeight: "600", color: textColor, background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  onClick={() => toggleFAQRight(index)}
                >
                  <span>{faq.question}</span>
                  <span>{openIndexRight === index ? "➖" : "➕"}</span>
                </button>
                {openIndexRight === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    style={{ marginTop: "0.5rem", color: paraColor, fontSize: "0.875rem" }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MernRoadmap;
