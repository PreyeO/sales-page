"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I own the website?",
    answer:
      "Yes, absolutely. You pay for the setup, but the website is 100% yours. We will hand over all accounts to you upon completion.",
  },
  {
    question: "Is there a monthly fee?",
    answer:
      "No. You pay a one-time fee of ₦45,000 for the design and setup. The only recurring cost is your domain/hosting (usually around ₦10k-15k/year) which you pay directly to the provider.",
  },
  {
    question: "What do I need to need to start?",
    answer:
      "Just your business name, a short description of what you do, your contact details, and any photos you want to include. We handle the rest.",
  },
  {
    question: "How long does it really take?",
    answer:
      "48 hours from the moment we receive your details. We work fast because we use a proven system.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="lg:py-24 py-10 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">Everything you need to know.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
