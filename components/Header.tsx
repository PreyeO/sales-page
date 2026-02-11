"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-gray-900">
          2-Day<span className="text-blue-600">Setup</span>
        </a>

        <a
          href="https://wa.me/2348142474778" // REPLACE WITH YOUR PHONE NUMBER
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
            scrolled
              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
              : "bg-white text-blue-600 shadow-sm hover:shadow-md border border-gray-100"
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          <span className="">Get Started</span>
        </a>
      </div>
    </motion.header>
  );
}
