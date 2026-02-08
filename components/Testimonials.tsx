"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I finally had a proper link to send customers. It made my business look serious.",
      author: "Vendor",
    },
    {
      quote:
        "The process was fast and stress-free. I didn’t need to understand anything technical.",
      author: "Coach",
    },
    {
      quote: "Within two days, my business was online and ready to share.",
      author: "Small business owner",
    },
  ];

  return (
    <section className="lg:py-24 py-10 px-6 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            What business owners say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200 relative hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <div className="absolute -top-4 left-6 bg-blue-100 p-2 rounded-full text-blue-600">
                <Quote className="w-5 h-5 fill-current" />
              </div>

              <blockquote className="text-gray-700 text-lg font-medium mb-6 leading-relaxed">
                {"{item.quote}"}
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
                <p className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                  {item.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
