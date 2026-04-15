import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/Abaxps1.webp";
import img2 from "../assets/Abaxps2.webp";
import img3 from "../assets/Abaxps3.webp";

/* Move slides outside component (prevents dependency warnings) */
const slides = [
  {
    image: img1,
    title: "Trusted Insight & Sustainable Growth",
    text: "We bring together deep professional expertise and real-world experience, enabling us to provide solutions that are both technically sound and commercially relevant.",
  },
  {
    image: img2,
    title: "Professional Excellence & Strategic Advisory",
    text: "Delivering audit, tax and advisory services built on integrity, precision and measurable outcomes.",
  },
  {
    image: img3,
    title: "Building Governance & Financial Strength",
    text: "We help organisations strengthen governance, manage risk and unlock sustainable performance.",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [typedText, setTypedText] = useState("");

  const typingSpeed = 30;
  const typingInterval = useRef(null);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* TYPEWRITER */
  useEffect(() => {
    clearInterval(typingInterval.current);

    const fullTitle = slides[index].title;
    const fullText = slides[index].text;

    setTypedTitle("");
    setTypedText("");

    let currentTitle = "";
    let currentText = "";
    let charIndex = 0;
    let typingTitle = true;

    typingInterval.current = setInterval(() => {
      if (typingTitle) {
        currentTitle += fullTitle.charAt(charIndex);
        setTypedTitle(currentTitle);
        charIndex++;

        if (charIndex === fullTitle.length) {
          typingTitle = false;
          charIndex = 0;
        }
      } else {
        currentText += fullText.charAt(charIndex);
        setTypedText(currentText);
        charIndex++;

        if (charIndex === fullText.length) {
          clearInterval(typingInterval.current);
        }
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval.current);
  }, [index]);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden font-sans">
      {/* BACKGROUND FADE */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-linear ${
              i === index ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* DYNAMIC TEXT */}
      <div className="absolute z-20 bottom-20 left-6 sm:left-12 md:left-20 max-w-2xl text-white">
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          {typedTitle}
          <span className="animate-pulse">|</span>
        </h1>

        <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
          {typedText}
        </p>

        <div className="mt-8">
          <Link
            to="/servicepage"
            className="inline-flex items-center gap-2 
            bg-transparent hover:bg-gray-50 
            text-white hover:text-black px-8 py-3 rounded-full 
            font-semibold tracking-wide
            shadow-lg hover:shadow-xl 
            transition-all duration-300 
            hover:scale-105"
          >
            Our Services →
          </Link>
        </div>
      </div>

      {/* DOT NAVIGATION */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
