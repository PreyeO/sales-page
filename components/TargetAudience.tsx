"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function TargetAudience() {
  const checklist = [
    "You don’t have a website yet",
    "Customers ask for your link",
    "You want to look more professional",
    "You want something simple that works",
  ];

  return (
    <section className="lg:py-24 py-10 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold lg:mb-6 leading-tight text-gray-900">
              This is for you if...
            </h2>
            <p className="text-xl text-gray-600 mb-8 lg:flex hidden">
              {`We don't work with everyone. This service is specifically designed for serious business owners who value speed.`}
            </p>
          </motion.div>

          <div className="space-y-4">
            {checklist.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="bg-green-100 p-1.5 rounded-full text-green-700">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium text-gray-800">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-xl text-gray-600 mb-8">
            {`We don't work with everyone. This service is specifically designed for serious business owners who value speed.`}
          </p>
        </div>
      </div>
    </section>
  );
}
