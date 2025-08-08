import React, { useState } from "react";
import { motion } from "framer-motion";

const rscitRoadmap = [
  {
    title: "Introduction to Computers",
    desc: "Understanding hardware, software, and input/output devices.",
  },
  {
    title: "Operating System Basics",
    desc: "Learn to use Windows, file management, and control panel settings.",
  },
  {
    title: "Internet & Web Browsing",
    desc: "Use browsers, search engines, email, and stay safe online.",
  },
  {
    title: "MS Word",
    desc: "Typing, formatting, saving and editing documents professionally.",
  },
  {
    title: "MS Excel",
    desc: "Basics of spreadsheets, formulas, and data tables.",
  },
  {
    title: "MS PowerPoint",
    desc: "Creating interactive presentations with animation and transitions.",
  },
  {
    title: "Digital Payments",
    desc: "Learn UPI, BHIM, e-wallets, mobile banking and secure payments.",
  },
  {
    title: "Cyber Safety",
    desc: "Learn privacy settings, safe internet practices, and online security.",
  },
  {
    title: "Online Exams & Quizzes",
    desc: "Practice quizzes and mock tests for exam preparation.",
  },
  {
    title: "Final Certification Exam",
    desc: "Appear in RS-CIT government exam and get certified.",
  },
];

const faqsLeft = [
  {
    question: "How long is the RS-CIT course?",
    answer: "The RS-CIT course typically lasts for 3 months with regular classes."
  },
  {
    question: "Is there any certification provided?",
    answer: "Yes, after passing the final exam, you will receive a government-recognized certificate."
  },
  {
    question: "Are classes available online?",
    answer: "Yes, both offline and online learning options are available."
  },
];

const faqsRight = [
  {
    question: "What is the daily class duration?",
    answer: "The daily class is for 1 hour from Monday to Saturday."
  },
  {
    question: "Is this course suitable for beginners?",
    answer: "Absolutely, it’s designed for students starting from zero level."
  },
  {
    question: "What are the topics covered in RS-CIT?",
    answer: "It includes basics of computers, MS Office, internet, digital payments, and cyber safety."
  },
];

const RSCITRoadmap = () => {
  const [openIndexLeft, setOpenIndexLeft] = useState(null);
  const [openIndexRight, setOpenIndexRight] = useState(null);

  const toggleFAQLeft = (index) => {
    setOpenIndexLeft(openIndexLeft === index ? null : index);
  };

  const toggleFAQRight = (index) => {
    setOpenIndexRight(openIndexRight === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-red-800 mb-12">
        RS-CIT Course Roadmap
      </h1>

      <div className="max-w-5xl mx-auto border-l-4 border-red-700 pl-6 space-y-8 mb-16">
        {rscitRoadmap.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-300 hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold text-red-700">
              Step {index + 1}: {step.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left FAQs */}
          <div className="space-y-4">
            {faqsLeft.map((faq, index) => (
              <div
                key={index}
                className="border border-red-200 rounded-xl bg-white shadow-md p-4"
              >
                <button
                  className="w-full text-left font-semibold text-red-700 focus:outline-none flex justify-between items-center"
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
                    className="mt-2 text-gray-600 text-sm"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>

          {/* Right FAQs */}
          <div className="space-y-4">
            {faqsRight.map((faq, index) => (
              <div
                key={index}
                className="border border-red-200 rounded-xl bg-white shadow-md p-4"
              >
                <button
                  className="w-full text-left font-semibold text-red-700 focus:outline-none flex justify-between items-center"
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
                    className="mt-2 text-gray-600 text-sm"
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
