import React from "react";
import { motion } from "framer-motion";

import VisionMissionSection from "../components/VisionMissionSection";
import ServicesSection from "../components/Services";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import WhyUs from "../components/WhyUs";
import Certifications from "./Certifications";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper>
        <WhyUs />
      </SectionWrapper>

      <SectionWrapper>
        <ServicesSection />
      </SectionWrapper>

      <SectionWrapper>
        <VisionMissionSection />
      </SectionWrapper>

      <SectionWrapper>
        <AboutSection />
      </SectionWrapper>

      <SectionWrapper>
        <TeamSection />
      </SectionWrapper>

      <SectionWrapper>
        <Certifications />
      </SectionWrapper>

      <SectionWrapper>
        <ContactSection />
      </SectionWrapper>
    </main>
  );
}

/**
 * Stable Section Wrapper
 * - Prevents layout shifts
 * - Ensures animation runs once
 * - Avoids shaky scroll behavior
 */
function SectionWrapper({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full"
    >
      {children}
    </motion.section>
  );
}
