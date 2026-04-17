import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import heroImage from "../assets/splash4.jpg";
import {
  FaBalanceScale,
  FaCalculator,
  FaFileInvoiceDollar,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    id: "audit",
    title: "Audit & Assurance",
    icon: <FaBalanceScale />,
    desc: "Delivering confidence, credibility, and clarity through independent, high-quality assurance engagements.",
    color: "#0b63ff",
    hoverBg: "linear-gradient(135deg, #0b63ff, #0747d9)",
  },
  {
    id: "accountancy",
    title: "Financial Reporting & Compliance Consulting",
    icon: <FaCalculator />,
    desc: "Strengthening transparency, accuracy, and trust in every aspect of your financial reporting.",
    color: "#0747d9",
    hoverBg: "linear-gradient(135deg, #0747d9, #0b63ff)",
  },
  {
    id: "tax",
    title: "Tax Management & Advisory",
    icon: <FaFileInvoiceDollar />,
    desc: "Helping organizations navigate complexity, optimize tax positions, and stay ahead of regulatory change.",
    color: "#ffb703",
    hoverBg: "linear-gradient(135deg, #ffb703, #f59e0b)",
  },
  {
    id: "grc",
    title: "Governance, Risk & Internal Control (GRC)",
    icon: <FaChartLine />,
    desc: "Building resilient organizations through strong governance and effective controls.",
    color: "#0b63ff",
    hoverBg: "linear-gradient(135deg, #0b63ff, #ffb703)",
  },
];

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="w-full py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full"
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4] rounded-sm overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Professional Services"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="text-blue-700 text-4xl font-serif font-bold leading-tight">
            Professional Services
          </h2>
          <p className="text-gray-600 font-medium max-w-xl mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg">
            Comprehensive financial and advisory solutions designed to
            strengthen governance, compliance, and organizational performance.
          </p>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 2 },
            }}
          >
            {services.map((s) => {
              const isActive = activeCard === s.id;
              return (
                <SwiperSlide key={s.id}>
                  <Tilt
                    glareEnable={false}
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    scale={1.03}
                    onEnter={() => setActiveCard(s.id)}
                    onLeave={() => setActiveCard(null)}
                  >
                    <div
                      className="rounded-2xl p-5 sm:p-6 shadow-lg cursor-pointer h-full flex flex-col text-left transition-all duration-500"
                      style={
                        isActive
                          ? { background: s.hoverBg, color: "#fff" }
                          : { background: "#fff" }
                      }
                    >
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 transition-all duration-500"
                        style={{
                          background: isActive
                            ? "rgba(255,255,255,0.2)"
                            : "rgba(11,99,255,0.08)",
                          color: isActive ? "#fff" : s.color,
                        }}
                      >
                        {s.icon}
                      </div>

                      <h3
                        className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 transition-all duration-500"
                        style={{ color: isActive ? "#fff" : s.color }}
                      >
                        {s.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm leading-relaxed transition-all duration-500"
                        style={{ color: isActive ? "#fff" : "#334155" }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </Tilt>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
