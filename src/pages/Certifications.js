// src/pages/Certifications.js
import React from "react";
import { motion } from "framer-motion";

import ican from "../assets/certifications/ICAN.webp";
import citn from "../assets/certifications/CITN.webp";
import frcn from "../assets/certifications/FRC.webp";
import ndpc from "../assets/certifications/NDPC.webp";
import msi from "../assets/certifications/MSIMember_Logo_PNG.png";

export default function Certifications() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="bg-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">
            Certifications, Memberships & Regulatory Affiliations
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            Our certifications and professional affiliations demonstrate our
            commitment to global standards, regulatory compliance, and trusted
            advisory services.
          </p>
        </div>
      </section>

      {/* MOVING CERTIFICATIONS ROW */}
      <section className="py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We operate in full compliance with global and Nigerian regulatory
            bodies, backed by internationally recognized affiliations and
            professional standards.
          </p>
          {/* FADE EDGES */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* MARQUEE */}
            <motion.div
              className="flex items-center gap-12 md:gap-20"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            >
              {[
                { img: msi, name: "MSI Global Alliance" },
                { img: ican, name: "ICAN" },
                { img: citn, name: "CITN" },
                { img: frcn, name: "FRCN" },
                { img: ndpc, name: "NDPC" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-[120px] md:min-w-[160px]"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="
                      h-12 md:h-16 object-contain
                      transition-all duration-300
                      hover:scale-105 hover:-translate-y-1 hover:opacity-90
                    "
                  />
                  <p className="text-xs md:text-sm text-gray-600 mt-2 text-center">
                    {item.name}
                  </p>
                </div>
              ))}

              {/* CLONE FOR LOOP */}
              {[
                { img: msi, name: "MSI Global Alliance" },
                { img: ican, name: "ICAN" },
                { img: citn, name: "CITN" },
                { img: frcn, name: "FRCN" },
                { img: ndpc, name: "NDPC" },
              ].map((item, index) => (
                <div
                  key={`clone-${index}`}
                  className="flex flex-col items-center min-w-[120px] md:min-w-[160px]"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-12 md:h-16 object-contain"
                  />
                  <p className="text-xs md:text-sm text-gray-600 mt-2 text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
