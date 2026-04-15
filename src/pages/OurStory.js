import React from "react";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Animated Container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8 text-gray-700 text-lg leading-relaxed"
        >
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Our Story
            </h2>

            {/* Animated Accent Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="h-1 bg-blue-600 mx-auto rounded-full"
            />
          </div>

          {/* Story Content */}
          <div className="space-y-6 bg-white p-8 md:p-12 rounded-xl shadow-md hover:shadow-xl transition-all duration-700">
            <p className="hover:text-gray-900 transition-colors duration-500">
              Abax Professional Services is a firm of Chartered Accountants and
              Business Advisors committed to delivering high-quality assurance,
              advisory, and governance services to organisations across sectors.
            </p>

            <p className="hover:text-gray-900 transition-colors duration-500">
              With years of experience, our work is grounded in technical
              rigour, professional integrity, and a strong understanding of
              evolving regulatory and business landscapes.
            </p>

            <p className="hover:text-gray-900 transition-colors duration-500">
              Our mission is to empower organisations to achieve sustainable
              leadership in highly competitive markets through strategic
              insight, risk management, and value-driven advisory support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
