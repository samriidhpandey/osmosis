import React, { useState } from "react";
import { motion } from "framer-motion";

const graphicsDesigningRoadmap = [
  { title: "Introduction to Graphic Designing", desc: "Understand the basics of graphic designing, its importance, and various career paths." },
  { title: "Design Principles & Color Theory", desc: "Learn key design principles like contrast, alignment, and balance along with color psychology." },
  { title: "Typography", desc: "Master font pairing, readability, and the role of typography in design aesthetics." },
  { title: "Adobe Photoshop", desc: "Explore photo editing, retouching, and creative compositions using Photoshop." },
  { title: "Adobe Illustrator", desc: "Learn to create vector designs, logos, icons, and illustrations with Illustrator." },
  { title: "CorelDRAW", desc: "Understand vector designing and layout creation in CorelDRAW (if used in training)." },
  { title: "UI/UX Basics", desc: "Get introduced to user interface and user experience design fundamentals." },
  { title: "Portfolio Design", desc: "Start building your own design portfolio with real projects and case studies." },
  { title: "Freelancing & Jobs", desc: "Explore how to get freelance clients, job-ready skills, and build a resume." },
  { title: "Live Projects & Certification", desc: "Work on practical designs and earn a certificate upon completion." }
];

const faqsLeft = [
  { question: "What is the duration of the Graphic Designing course?", answer: "It typically lasts 3 to 6 months depending on the curriculum and practice time." },
  { question: "Do I need to be good at drawing?", answer: "No, graphic design focuses more on creativity and software skills than freehand drawing." },
  { question: "Will I get to work on real projects?", answer: "Yes, live and client-based project practice is included in the training." },
];

const faqsRight = [
  { question: "Is certification available?", answer: "Yes, you will receive a course completion certificate." },
  { question: "Are tools like Photoshop and Illustrator taught?", answer: "Yes, these are core tools of the curriculum and are covered in-depth." },
  { question: "Is placement support provided?", answer: "Yes, we provide assistance with job opportunities and freelancing guidance." },
];

const GraphicsDesigningRoadmap = ({ isDark }) => {
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
        Graphic Designing Course Roadmap
      </h1>

      <div style={{ maxWidth: "960px", margin: "0 auto", borderLeft: `4px solid ${textColor}`, paddingLeft: "1.5rem", marginBottom: "4rem" }}>
        {graphicsDesigningRoadmap.map((step, index) => (
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

export default GraphicsDesigningRoadmap;
