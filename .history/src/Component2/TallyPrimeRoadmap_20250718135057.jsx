import React, { useState } from "react";
import { motion } from "framer-motion";

const tallyPrimeRoadmap = [
  { title: "Introduction to Tally Prime", desc: "Understand the Tally Prime interface, features, and basic navigation." },
  { title: "Company Creation & Configuration", desc: "Learn how to create companies, set up configurations, and manage security levels." },
  { title: "Accounting Masters", desc: "Create and manage ledger groups, ledgers, and understand accounting principles in Tally." },
  { title: "Voucher Entry", desc: "Enter transactions using various vouchers like Payment, Receipt, Contra, Journal, etc." },
  { title: "Inventory Management", desc: "Track stock items, units, Godowns, and stock categories effectively." },
  { title: "GST Setup & Implementation", desc: "Enable and configure GST settings, create tax ledgers, and record GST-compliant transactions." },
  { title: "Banking Features", desc: "Work with cheque printing, bank reconciliation, and e-payments." },
  { title: "Payroll Management", desc: "Set up employee groups, define salary structures, and manage attendance." },
  { title: "MIS Reports & Analysis", desc: "Generate reports like P&L, Balance Sheet, Ratio Analysis, and more for decision-making." },
  { title: "Project Work & Certification", desc: "Hands-on training with live company data and certification on completion." }
];

const faqsLeft = [
  { question: "What is the duration of the Tally Prime course?", answer: "Usually 2 to 3 months based on student pace and learning curve." },
  { question: "Do I need prior accounting knowledge?", answer: "No, we teach Tally Prime from scratch, assuming no prior experience." },
  { question: "Will Tally ERP 9 also be covered?", answer: "Yes, the transition from Tally ERP 9 to Tally Prime is discussed in detail." },
];

const faqsRight = [
  { question: "Is certification provided?", answer: "Yes, students receive a certificate after completing the course." },
  { question: "Are classes online or offline?", answer: "We provide both online and offline classes based on preference." },
  { question: "Is practical training included?", answer: "Yes, real company data and projects are part of the curriculum." },
];

const TallyPrimeRoadmap = ({ isDark }) => {
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
        Tally Prime Course Roadmap
      </h1>

      <div style={{ maxWidth: "960px", margin: "0 auto", borderLeft: `4px solid ${textColor}`, paddingLeft: "1.5rem", marginBottom: "4rem" }}>
        {tallyPrimeRoadmap.map((step, index) => (
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
        <div className="row" >
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

          <div className="col-12 col-md-6" >
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

export default TallyPrimeRoadmap;
