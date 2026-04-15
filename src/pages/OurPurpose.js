import React from "react";
import { motion } from "framer-motion";

export default function OurPurpose() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading – Y Axis (Bottom → Up) */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
        >
          Our Purpose
        </motion.h1>

        {/* Animated Accent Line – X Axis (Left → Right) */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "150px" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="h-1 bg-blue-600 mx-auto rounded-full mb-10"
        />

        {/* Paragraph – X Axis (Right → Left) */}
        <motion.p
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed bg-white p-8 md:p-12 rounded-xl shadow-md hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2"
        >
          We believe that strong financial reporting, regulatory compliance, and
          independent advisory frameworks are not merely statutory obligations —
          they are essential to investor confidence, organisational resilience,
          and sustainable economic growth.
        </motion.p>
      </div>
    </section>
  );
}
