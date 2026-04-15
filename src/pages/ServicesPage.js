// src/pages/ServicesPage.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import services from "../components/ServicesData";
import heroImage from "../assets/Abaxps9.webp";
import CallToAction from "./CallToAction";

// Accordion Section
const AccordionSection = ({ section, isOpen, onClick }) => (
  <div className="border rounded-xl bg-white">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50"
    >
      {section.title}
      <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
        ⌄
      </span>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          layout
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          exit={{ scaleY: 0, opacity: 0 }}
          style={{ originY: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-5"
        >
          <ul className="space-y-2 text-gray-600">
            {section.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// Service Card
const ServiceCard = ({ service, active, setActive, index }) => {
  const Icon = service.icon;
  const [openSection, setOpenSection] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8 },
      });
    }
  }, [controls, inView]);

  const toggleCard = () => {
    setActive(active === service.id ? null : service.id);
    setOpenSection(null);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ x: index % 2 === 0 ? -120 : 120, opacity: 0 }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-md w-full"
    >
      {/* HEADER */}
      <div className="p-8 flex items-start gap-5">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl shrink-0">
          <Icon />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>

          <p className="text-gray-600 mt-2">{service.shortDesc}</p>

          <button
            onClick={toggleCard}
            className="mt-4 text-blue-700 font-semibold hover:underline text-sm"
          >
            {active === service.id ? "Close" : "Read More"}
          </button>
        </div>
      </div>

      {/* DROPDOWN */}
      <AnimatePresence>
        {active === service.id && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-8 pb-8 space-y-4 bg-gray-50"
          >
            {service.sections.map((section, idx) => (
              <AccordionSection
                key={idx}
                section={section}
                isOpen={openSection === idx}
                onClick={() => setOpenSection(openSection === idx ? null : idx)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <div className="overflow-x-hidden">
        {/* HERO */}
        <section className="relative w-full h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Our Professional Services"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-blue-900/40"></div>

          <div className="relative text-center px-6 max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              Our Service Catalogue
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Explore our comprehensive professional offerings designed to
              strengthen governance, compliance, and performance.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-gray-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                active={activeService}
                setActive={setActiveService}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>
      <CallToAction />
    </>
  );
}
