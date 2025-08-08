import React, { useState } from "react";
import { motion } from "framer-motion";

const digitalMarketingRoadmap = [
  { title: "Digital Marketing Basics", desc: "Understand what digital marketing is and why it's essential in today’s digital world." },
  { title: "SEO (Search Engine Optimization)", desc: "Learn how to optimize websites to rank higher in search engines organically." },
  { title: "Google Ads & PPC", desc: "Master Pay-Per-Click advertising with Google Ads, including bidding strategies and keyword research." },
  { title: "Social Media Marketing", desc: "Create impactful campaigns on Facebook, Instagram, LinkedIn, and other platforms." },
  { title: "Content Marketing", desc: "Plan, create, and distribute valuable content to attract and retain audiences." },
  { title: "Email Marketing", desc: "Understand how to build email lists, design newsletters, and automate campaigns." },
  { title: "Affiliate Marketing", desc: "Learn how to earn commission by promoting other people's products." },
  { title: "Analytics & Reporting", desc: "Track and analyze data using tools like Google Analytics to measure performance." },
  { title: "Tools & Platforms", desc: "Get hands-on with tools like SEMrush, Ahrefs, Canva, and Hootsuite." },
  { title: "Live Projects & Certification", desc: "Work on real campaigns and receive a digital marketing certification." }
];

const faqsLeft = [
  { question: "What is the duration of the Digital Marketing course?", answer: "Usually 3 to 6 months based on course depth and student pace." },
  { question: "Do I need prior experience in marketing?", answer: "No, this course is designed for absolute beginners as well as marketers." },
  { question: "Will there be practical projects?", answer: "Yes, live campaign projects are included in the course structure." },
];

const faqsRight = [
  { question: "Is certification provided?", answer: "Yes, certification is provided upon completion of the course." },
  { question: "Are classes online or offline?", answer: "We provide both online live classes and offline sessions at our center." },
  { question: "Do you offer placement support?", answer: "Yes, placement assistance is available after course completion." },
];

const DigitalMarketingRoadmap = ({ isDark }) => {
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
        Digital Marketing Course Roadmap
      </h1>

      <div style={{ maxWidth: "960px", margin: "0 auto", borderLeft: `4px solid ${textColor}`, paddingLeft: "1.5rem", marginBottom: "4rem" }}>
        {digitalMarketingRoadmap.map((step, index) => (
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
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" >
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

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" >
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

export default DigitalMarketingRoadmap;
