"use client";

import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 px-6 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size[4rem_4rem] [mask-radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-2"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
          Accepting New Clients for February
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]"
        >
          No website? <br className="hidden md:block" />
          Let’s fix that in{" "}
          <span className="text-blue-600 underline decoration-4 decoration-blue-200 underline-offset-4">
            2 days.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-600 max-w-2xl text-balance font-medium"
        >
          I help small businesses get a professional online presence that makes
          it easy for customers to contact or pay them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4"
        >
          <a
            href="https://wa.me/2348142474778" // REPLACE WITH YOUR PHONE NUMBER (e.g., https://wa.me/2348012345678)
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Claim Your Spot</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-6 text-sm text-gray-500 pt-4"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>One-time payment</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>No monthly fees</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
