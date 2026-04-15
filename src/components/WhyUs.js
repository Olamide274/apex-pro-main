import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// ICONS (professional set)
import {
  FaBriefcase,
  FaUserTie,
  FaChartLine,
  FaBalanceScale,
  FaHandshake,
} from "react-icons/fa";

const whyUsData = [
  {
    key: "experience",
    title: "Proven Experience, Focused Practice",
    desc: "Our firm is led by senior professionals with decades of hands-on experience in audit, tax, corporate finance, and advisory services.",
    icon: <FaBriefcase />,
  },
  {
    key: "partner",
    title: "Senior-Level Expertise",
    desc: "Every engagement is led by a senior consultant who understands the regulatory landscape and risk profile of your business.",
    icon: <FaUserTie />,
  },
  {
    key: "technical",
    title: "Technical Rigor with Commercial Insight",
    desc: "We apply recognised professional standards while ensuring our advice remains practical and aligned with real business conditions.",
    icon: <FaChartLine />,
  },
  {
    key: "independence",
    title: "Independence and Objectivity",
    desc: "Our work is anchored in independence, evidence, and professional judgement to strengthen governance and transparency.",
    icon: <FaBalanceScale />,
  },
  {
    key: "commitment",
    title: "Commitment to Long-Term Relationships",
    desc: "We see every engagement as the start of a long-term partnership supporting sustainable growth and resilience.",
    icon: <FaHandshake />,
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-3">
          Why Abax Professional Services
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience the difference through expertise, integrity, and a
          client-focused approach.
        </p>

        {/* SWIPER */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {whyUsData.map((item) => (
            <SwiperSlide key={item.key}>
              <div
                className="
                bg-white 
                border border-gray-200 
                rounded-lg 
                p-6 
                min-h-[260px] 
                flex flex-col 
                transition-all duration-300
                hover:border-blue-200 hover:-translate-y-1
              "
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-50 text-blue-900 text-xl mb-4">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
