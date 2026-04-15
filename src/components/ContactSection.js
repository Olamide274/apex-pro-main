import React, { useState } from "react";
import { motion } from "framer-motion";


import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import contactHero from "../assets/contact2.jpg";

export default function ContactSection() {

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      detail: "No. 2, Ibeju Lekki Street, Dolphin Estate Ikoyi, Lagos",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      detail: "Mon - Fri: 9:00 AM - 5:00 PM",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      detail: "+234-911-010-8791",
      link: "tel:+2349110108791",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      detail: "info@abaxps.com",
      link: "mailto:info@abaxps.com",
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setStatus("Sending message...");

  try {
    const res = await fetch("http://localhost:5001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.log(data);
      setStatus("❌ Failed to send message.");
    }
  } catch (error) {
    console.log(error);
    setStatus("❌ Server error.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {/* HERO */}
      <div className="relative h-[280px] md:h-[380px] w-full overflow-hidden">
        <motion.img
          src={contactHero}
          alt="Contact Abax Professional Services"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide">
            Contact Us
          </h1>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-8">
              Reach out to us and our team will respond promptly to your inquiries.
            </p>

            <div className="space-y-4">
              {contactInfo.map((c, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg bg-white"
                >
                  <div className="text-blue-900 text-xl mt-1">{c.icon}</div>

                  <div>
                    <h4 className="font-semibold text-gray-800">{c.title}</h4>

                    {c.link ? (
                      <a href={c.link} className="text-gray-600 hover:text-blue-900">
                        {c.detail}
                      </a>
                    ) : (
                      <p className="text-gray-600">{c.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            className="bg-white border border-gray-200 p-6 md:p-8 rounded-xl space-y-4"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Send us a Message
            </h3>

            {/* ✅ IMPORTANT FIX: name attributes added */}

            <input
              name="name"
              className="w-full border border-gray-300 p-3 rounded-md"
              placeholder="Full Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              name="email"
              className="w-full border border-gray-300 p-3 rounded-md"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              name="message"
              className="w-full border border-gray-300 p-3 rounded-md h-32"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button
              type="submit"
              className={`w-full py-3 rounded-md font-medium ${
                loading
                  ? "bg-gray-400"
                  : "bg-blue-900 text-white hover:bg-blue-800"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-sm text-gray-700 font-medium pt-2">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </>
  );
}