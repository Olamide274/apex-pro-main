import React from "react";
import { motion } from "framer-motion";
import purposeImage from "../assets/Abaxps6.webp"; // <-- replace with your image

export default function StoryPurposeSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ===================== */}
          {/* ABOUT US */}
          {/* ===================== */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              About Us
            </h2>

            <div className="h-1 w-20 bg-blue-600 rounded-full" />

            <p className="text-gray-700 text-lg leading-relaxed">
              Abax Professional Services is a firm of Chartered Accountants and
              Business Advisors committed to delivering high-quality assurance,
              advisory, and governance services across sectors.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Our work is grounded in technical rigour, professional integrity,
              and a deep understanding of evolving regulatory and business
              environments.
            </p>
          </motion.div>

          {/* ===================== */}
          {/* IMAGE SECTION */}
          {/* ===================== */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={purposeImage}
                alt="About Abax"
                className="w-full h-[400px] object-cover transform transition-transform duration-700 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
