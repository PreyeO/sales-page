"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Timeline() {
  return (
    <section className="lg:py-24 py-10 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-gray-900"
        >
          How it works
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent -z-10" />

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 w-full md:w-1/3 relative shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
              DAY 1
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              Send Details
            </h3>
            <p className="text-gray-600">
              You send us your content and basic details.
            </p>
          </motion.div>

          {/* Arrow Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-blue-50 p-3 rounded-full text-blue-600"
          >
            <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl border border-blue-200 w-full md:w-1/3 relative shadow-lg shadow-blue-100 hover:shadow-xl hover:shadow-blue-200 transition-all duration-300"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
              DAY 2
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              Live Website
            </h3>
            <p className="text-gray-600">
              Your site is ready, live, and working perfectly.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-xl font-medium text-blue-700"
        >
          Speed = Confidence.
        </motion.p>
      </div>
    </section>
  );
}
