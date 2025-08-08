import React, { useState } from "react";
import { motion } from "framer-motion";

const rscitRoadmap = [
  { title: "Introduction to Computers", desc: "Understanding hardware, software, and input/output devices." },
  { title: "Operating System Basics", desc: "Learn to use Windows, file management, and control panel settings." },
  { title: "Internet & Web Browsing", desc: "Use browsers, search engines, email, and stay safe online." },
  { title: "MS Word", desc: "Typing, formatting, saving and editing documents professionally." },
  { title: "MS Excel", desc: "Basics of spreadsheets, formulas, and data tables." },
  { title: "MS PowerPoint", desc: "Creating interactive presentations with animation and transitions." },
  { title: "Digital Payments", desc: "Learn UPI, BHIM, e-wallets, mobile banking and secure payments." },
  { title: "Cyber Safety", desc: "Learn privacy settings, safe internet practices, and online security." },
  { title: "Online Exams & Quizzes", desc: "Practice quizzes and mock tests for exam preparation." },
  { title: "Final Certification Exam", desc: "Appear in RS-CIT government exam and get certified." },
];

const faqsLeft = [
  { question: "How long is the RS-CIT course?", answer: "The RS-CIT course typically lasts for 3 months with regular classes." },
  { question: "Is there any certification provided?", answer: "Yes, after passing the final exam, you will receive a government-recognized certificate." },
  { question: "Are classes available online?", answer: "Yes, both offline and online learning options are available." },
];

const faqsRight = [
  { question: "What is the daily class duration?", answer: "The daily class is for 1 hour from Monday to Saturday." },
  { question: "Is this course suitable for beginners?", answer: "Absolutely, it’s designed for students starting from zero level." },
  { question: "What are the topics covered in RS-CIT?", answer: "It includes basics of computers, MS Office, internet, digital payments, and cyber safety." },
];

const RSCITRoadmap = ({ isDark }) => {
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
        RS-CIT Course Roadmap
      </h1>

      <div style={{ maxWidth: "960px", margin: "0 auto", borderLeft: `4px solid ${textColor}`, paddingLeft: "1.5rem", marginBottom: "4rem" }}>
        {rscitRoadmap.map((step, index) => (
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

          <div className="col-12  col-md-6" style={{ flex: 1 }}>
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

export default RSCITRoadmap;
