"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

export default function Pricing() {
  return (
    <section className="lg:py-24 py-10 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl relative overflow-hidden max-w-lg mx-auto"
        >
          {/* Promo Badge */}
          <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm">
            Limited Offer
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-gray-900">
            ₦45,000
          </h2>
          <p className="text-gray-500 mb-8">
            One-time payment. No hidden fees.
          </p>

          <div className="space-y-4 mb-8 text-left max-w-xs mx-auto">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-1 rounded-full text-green-600">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-gray-700">Complete 1-2 Page Website</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-1 rounded-full text-green-600">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-gray-700">WhatsApp Integration</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-1 rounded-full text-green-600">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-gray-700">Mobile & Desktop Friendly</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-1 rounded-full text-green-600">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-gray-700">2-Day Delivery</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-blue-50 border border-blue-100 p-4 rounded-xl mb-4"
          >
            <p className="text-blue-700 font-medium flex items-center justify-center gap-2">
              <Star className="w-4 h-4 fill-blue-700" />
              February promo — limited slots available
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
