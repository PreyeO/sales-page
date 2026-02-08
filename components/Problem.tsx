"use client";

import { motion } from "framer-motion";
import { AlertCircle, Search, XCircle, UserX, CheckCircle2 } from "lucide-react";

export default function Problem() {
    const problems = [
        {
            icon: Search,
            text: "Customers ask for your website link",
        },
        {
            icon: UserX,
            text: "People want to check you out before paying",
        },
        {
            icon: XCircle,
            text: "If they can’t find you online, they move on",
        },
    ];

    return (
        <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        The Problem
                    </h2>
                    <p className="text-gray-600 text-lg">It happens every day.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <p className="text-lg font-medium text-gray-800">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-blue-50 border border-blue-100 p-4 rounded-xl inline-block"
                >
                    <p className="text-blue-700 font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        We explain everything in plain English.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
