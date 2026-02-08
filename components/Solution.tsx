"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Smartphone, CreditCard, LayoutTemplate } from "lucide-react";

export default function Solution() {
    const benefits = [
        {
            icon: Smartphone,
            title: "One-page mobile-friendly website",
            description: "Looks perfect on any device, from iPhone to Android.",
        },
        {
            icon: LayoutTemplate,
            title: "Clear description of your service",
            description: "We write simple copy that sells what you do.",
        },
        {
            icon: CheckCircle2,
            title: "WhatsApp contact button",
            description: "One click for customers to chat with you directly.",
        },
        {
            icon: CreditCard,
            title: "Booking or payment link",
            description: "Make it easy for people to pay you instantly.",
        },
    ];

    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">
            {/* Subtle background blob */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 blur-[100px] rounded-full -z-10" />

            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
                    >
                        What you get in the <span className="text-blue-600">2-Day Setup</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600 border border-gray-100"
                    >
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>Zero Technical Knowledge Needed</span>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
