import React, { useEffect, useRef, useState } from "react";

export default function VisionMissionSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const Card = ({ icon, title, text, accent, delay }) => (
    <div
      className={`group relative flex items-center justify-center transition-all duration-1000
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      style={{ transitionDelay: delay }}
    >
      {/* Rotating Gradient Ring */}
      <div
        className={`absolute w-[340px] h-[340px] rounded-full blur-md opacity-60
        bg-gradient-to-r ${accent}
        animate-spin-slow group-hover:opacity-100`}
      />

      {/* Main Circle */}
      <div
        className="relative w-[300px] h-[300px] rounded-full bg-white shadow-xl
        flex flex-col items-center justify-center text-center p-10
        transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
      >
        {/* Floating Icon Badge */}
        <div
          className={`absolute -top-10 w-20 h-20 rounded-full flex items-center justify-center
          text-white text-3xl shadow-lg ${accent} group-hover:scale-110 transition`}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-blue-700 mt-6 mb-4">{title}</h3>

        {/* Divider */}
        <div className="w-16 h-1 bg-yellow-400 mb-4 rounded-full group-hover:w-24 transition-all"></div>

        {/* Text */}
        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition">
          {text}
        </p>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          className={`text-center mb-20 transition-all duration-1000
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-blue-800">
            Our Vision & Mission
          </h2>
          <p className="text-gray-500 font-medium mt-4">
            Trusted insight and sustainable growth
          </p>
        </div>

        {/* Circles */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-24">
          <Card
            title="Vision"
            delay="0.2s"
            accent="from-yellow-100 to-gray-200"
            text="To build a resilient, high-performing professional services firm that consistently delivers measurable value and supports sustainable organisational growth."
          />

          <Card
            title="Mission"
            delay="0.4s"
            accent="from-blue-100 to-indigo-200"
            text="To deliver high-quality assurance and advisory services that strengthen governance, enhance transparency, and create measurable value."
          />
        </div>
      </div>
    </section>
  );
}
