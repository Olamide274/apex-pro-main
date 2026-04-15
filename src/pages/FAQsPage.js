// src/pages/FAQsPage.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "What services does Abax Professional Service offer?",
    answer:
      "Abax Professional Service provides professional services across accounting, auditing, tax management, human resources, and business consulting. Each service is tailored to meet the specific operational and compliance needs of businesses.",
  },
  {
    question:
      "Is Abax Professional Service registered with Nigerian regulatory bodies?",
    answer:
      "Yes. Abax Professional Service is a member of the MSI Global Alliance and operates in full compliance with Nigerian regulatory and professional standards, including ICAN, CITN, FRCN, and NDPC.",
  },
  {
    question:
      "How does Abax Professional Service help businesses navigate Nigeria's 2025 Tax Reform Acts?",
    answer:
      "Our tax specialists continuously monitor legislative updates, including the 2025 Tax Reform Acts. We provide tailored advisory services that help businesses understand and comply with Companies Income Tax, Value Added Tax, Withholding Tax, and Personal Income Tax obligations.",
  },
  {
    question: "What does your auditing service cover?",
    answer:
      "Our auditing services include statutory audits, internal audits, and forensic audits. We deliver independent and objective evaluations of financial records to ensure transparency, accuracy, and regulatory compliance.",
  },
  {
    question:
      "Can Abax Professional Service help with HR management for my business?",
    answer:
      "Yes. Our HR consulting services include workforce planning, recruitment support, HR policy development, payroll administration, and compliance with Nigerian labour laws.",
  },
  {
    question:
      "Does Abax Professional Service offer ongoing support or one-time engagements?",
    answer:
      "We offer both engagement models. Clients can work with us on specific projects such as tax filings or audits, or retain us for ongoing support covering accounting, HR management, and strategic advisory services.",
  },
  {
    question: "Why should I choose Abax Professional Service?",
    answer:
      "Abax Professional Service combines years of professional expertise with a strong commitment to excellence, integrity, and client satisfaction. Our track record demonstrates consistent delivery of reliable and high-quality services that support business growth and compliance.",
  },
];

const FAQItem = ({ faq, isOpen, onClick, index }) => (
  <div className="border border-gray-200 rounded-xl bg-white shadow-sm">
    <button
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={`faq-${index}`}
      className="w-full flex justify-between items-center px-6 py-5 text-left"
    >
      <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
      <span
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        ⌄
      </span>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={`faq-${index}`}
          role="region"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6 text-gray-600 leading-relaxed"
        >
          {faq.answer}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function FAQsPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>FAQs | Abax Professional Services</title>
        <meta
          name="description"
          content="Frequently asked questions about Abax Professional Services, including accounting, auditing, tax advisory, and HR consulting."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="bg-blue-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Find answers to common questions about our services, compliance
            standards, and how we support businesses.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              faq={faq}
              isOpen={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Still have questions?
          </h2>
          <p className="mt-3 text-gray-600">
            Contact our team and we will be happy to assist you.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
