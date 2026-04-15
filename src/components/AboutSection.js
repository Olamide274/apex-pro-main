import React from "react";
import Img1 from "../assets/teamimage1.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-100 font-sans">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-700 font-sans">
            About Abax Professional Services
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 font-sans">
            Abax Professional Services is a firm of Chartered Accountants and
            Business Advisors providing Audit and Assurance, Tax, Financial and
            Management Advisory Services to growing and established
            organisations. Built on a foundation of deep professional expertise
            and years of hands-on practice, Abax Professional Services
            represents the future of dependable, thoughtful, and high-quality
            professionals.
          </p>
          <Link to="/about">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
              Learn More
            </button>
          </Link>
        </motion.div>

        <motion.img
          src={Img1}
          alt="Team"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}
