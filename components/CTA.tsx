"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="lg:py-24 py-10 px-6 relative overflow-hidden bg-white">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-100 blur-[100px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900"
        >
          Ready to get your <br /> business online?
        </motion.h2>

        <motion.a
          href="https://wa.me/2348142474778" // REPLACE WITH YOUR PHONE NUMBER
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-3 bg-blue-600 text-white hover:bg-blue-700 px-10 py-5 rounded-xl text-xl font-bold transition-all shadow-xl shadow-blue-200 cursor-pointer"
        >
          <MessageCircle className="w-6 h-6" />
          <span>Chat on WhatsApp</span>
        </motion.a>
      </div>
    </section>
  );
}
