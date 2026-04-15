import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import footlogo from "../assets/ABAX logo_page-0001.jpg";
import msiBadge from "../assets/certifications/MSIMember_Logo_PNG.png";

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setShowModal(true);
    setEmail("");
  };

  const closeModal = () => setShowModal(false);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black mt-20 font-sans relative">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Fixed grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo + Description */}
          <div>
            <img
              src={footlogo}
              alt="Abax Logo"
              className="max-w-[170px] mb-5"
            />

            <p className="text-black/80 leading-relaxed mb-6">
              Providing professional services to businesses and individuals with
              integrity, excellence, and a client-first approach.
            </p>

            <a
              href="https://www.linkedin.com/company/abax-professional-services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-800 hover:bg-brandYellow hover:text-[#0B3A6E] transition duration-300"
            >
              <FaLinkedinIn size={14} className="text-white" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brandYellow text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-black/90">
              <li>
                <Link to="/" className="hover:text-brandYellow transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brandYellow transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/servicepage"
                  className="hover:text-brandYellow transition"
                >
                  Services
                </Link>
              </li>
              <li>Blogs</li>
              <li>
                <Link to="/team" className="hover:text-brandYellow transition">
                  Team
                </Link>
              </li>{" "}
              <li>
                <Link to="/FAQs" className="hover:text-brandYellow transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brandYellow transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-brandYellow text-lg font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-black/90">
              <li>Audit & Assurance</li>
              <li>Accountancy & Financial Reporting</li>
              <li>Tax Advisory & Compliance</li>
              <li>Advisory Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-brandYellow text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <ul className="space-y-3 text-black/90">
              <li>No. 2, Ibeju Lekki Street, Ikoyi, Lagos</li>
              <li>+234-911-010-8791</li>
            </ul>
          </div>

          {/* Certifications (NEW SECTION) */}
          <div>
            <h3 className="text-brandYellow text-lg font-semibold mb-5">
              Certifications
            </h3>

            <div className="flex flex-wrap items-center gap-4">
              <img
                src={msiBadge}
                alt="MSI Certified Partner"
                className="h-12 object-contain"
              />
            </div>

            <p className="text-sm text-black/70 mt-3">
              Verified professional certification and regulatory compliance.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-black/70 text-sm">
          © {currentYear} Abax Professional Services. All Rights Reserved.
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full text-center shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Subscription Successful
            </h2>
            <p className="text-gray-700 mb-6">
              Thank you for subscribing to our newsletter!
            </p>
            <button
              onClick={closeModal}
              className="bg-blue-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
