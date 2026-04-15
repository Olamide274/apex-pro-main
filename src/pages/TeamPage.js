// src/pages/TeamPage.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroImg from "../assets/Abaxps7.webp";
import OlapejuImage from "../assets/Madam Sofowora.webp";
import AyoImage from "../assets/MsAlamutu.jpg";
import img3 from "../assets/Mr FusiAkinkungbe.jpg";
import img4 from "../assets/Babafunke .jpg";
import img5 from "../assets/Anthony Ebele.jpg";
import img6 from "../assets/Dare Osoneye.JPG";
import CallToAction from "./CallToAction";

/* ---------------- DATA ---------------- */
const principal = {
  name: "Olapeju Sofowora B.SC, FCA, FCIT",
  designation: "Principal Consultant",
  image: OlapejuImage,
  bio: `Olapeju E. Sofowora is the Principal Consultant of ABAX Professional Services, bringing about 40 years of experience across audit, tax, corporate finance, and professional advisory services. She began her career at Coopers & Lybrand (now PricewaterhouseCoopers), later held senior roles in the banking sector, and went on to establish and lead multiple professional services practices, including serving as Partner and Managing Partner at Abax-OOSA Professionals for over 17 years. Her passion for quality professional services led her to establish Binary Consulting Limited, a Human Resources Consulting firm specialising in recruitment, outsourcing  and training for clients across different industries. Olapeju is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Taxation of Nigeria (CITN), a Certified Information Systems Auditor (CISA), and holds a degree in Statistics from the University of Ilorin. She has served on corporate and institutional boards, including First City Monument Bank Group, Royal Trust Assurance Limited (Merged with Crusader Insurance), Olashore International School Association, the Educational Committee of the Chartered Institute of Taxation and as an Executive Committee Member of the Money Market Association of Nigeria, and remains active in governance, compliance, and professional development initiatives.`,
};

const teamMembers = [
  {
    name: "Ayo Alamutu",
    designation: "Senior Consultant Governance and Risk",
    image: AyoImage,
    bio: `Ms. Alamutu is a Governance, Risk, Audit, Assurance, and Compliance Executive with over 30 years of experience across the UK and Nigeria. She advises Boards and senior management on enterprise risk, operational resilience, business continuity, and internal audit, supporting organisations to strengthen performance, manage disruption, and preserve value across sectors including banking, insurance, manufacturing, investment, and fintech. She is a Fellow of the Institute of Chartered Accountants of Nigeria (FICAN), a Certified Member of the Institute of Risk Management (CIRM), holds a Certificate in Risk Governance from the DCRO Institute, and currently serves as Vice Chair of the IRM Nigeria Regional Group. She is also an Information Systems Auditor, Project Management Professional, and a Board member of the Institute of Internal Auditors.`,
  },
  {
    name: "Babafunke Ajibade",
    designation: "Senior Consultant Audit and Assurance",
    image: img4,
    bio: `A multi-skilled Governance, Financial Accounts, Risk, Audit, Assurance, and Compliance Executive across Private, Government and Third party (Charity) Sectors with over three decades of progressive experience across Nigeria and the United Kingdom. Her core strength lies in quality control on Assurance Audits advising Boards, Trustees and Senior Management on enterprise risk, strategy, compliance, business continuity, internal audit practice, helping organizations strengthen performance, compliance on accounting and auditing standards, sustain competitive advantage at industry level and respond proactively to disruption. She has worked on audits ranging from Nuclear decommissioning agencies, HMRC, Government departments and international charity audits, review of established audit and compliance systems, and supported risk-based strategy, compliance, and internal audit. She specializes in assessment of compliance with the relevant international standards. Mrs. Ajibade is a member of the Institute of Chartered Accountants of Nigeria, A Certified member of The Chartered Institute of Public Finance Accountants CIPFA.`,
  },
  {
    name: "Fusi Akinkugbe",
    designation: "Senior Consultant Financial Services",
    image: img3,
    bio: `Mr. Fusi Akinkugbe is a seasoned finance and assurance professional with nearly four decades of experience spanning professional practice, corporate leadership, consulting, and the public sector. He holds a degree in Economics and is a Chartered Accountant and Fellow of the Institute of Chartered Accountants of Nigeria (FCA). He has held senior executive roles including Treasury Controller at DHL International Nigeria Ltd and pioneer Managing Director/CEO of Chrysalis Ltd, a technology services company jointly owned by Accenture and two financial institutions. Mr. Akinkugbe has led high-profile audit, forensic, and advisory engagements, with strong expertise in governance, internal controls, and organisational effectiveness.`,
  },
  {
    name: "Anthony Ebele",
    designation: "Head, Tax Management and Advisory",
    image: img5,
    bio: `Anthony Ebele is a results-driven tax professional with strong expertise in tax compliance, advisory, and regulatory reporting. Experienced in providing end-to-end tax solutions, including corporate and personal income tax, VAT, withholding tax, Capital Gain Tax and tax audits for both Federal and State Revenue Services.

He is skilled in interpreting tax laws, identifying tax-saving opportunities, and ensuring full compliance with statutory requirements.

Anthony is also known for delivering practical, client-focused advice, maintaining strong relationships with tax authorities, and supporting businesses in managing tax risks efficiently while aligning with evolving regulatory frameworks.`,
  },
  {
    name: "Dare Osoneye",
    designation: "Head, Human Resource Consulting",
    image: img6,
    bio: `Dare Osoneye is a dedicated Human Resource professional with years of experience in talent acquisition, employee relations, performance management and organisational development. As an HR generalist and an HR Consultant, she is skilled at implementing HR strategies that enhance productivity, retention and compliance.

She holds an M.Sc. in Employment Relations and HR Management and a B.Sc. in Economics, both from the University of Lagos. She is a certified and licensed HR consultant with her CIPM HR practitioners license, a member of the Society for Human Resource Management (SHRM-CP) and an associate of the Chartered Institute of Personnel Management (ACIPM).

She is passionate about driving corporate efficiency through strategic HR initiatives.`,
  },
];

/* ---------------- COMPONENT ---------------- */
export default function TeamPage() {
  const [view, setView] = useState("principal");
  const [activeMember, setActiveMember] = useState(null);

  return (
    <>
      <div className="bg-gray-50 min-h-screen overflow-hidden font-sans">
        {/* NAVBAR placeholder */}
        {/* Ensure your actual Navbar component uses absolute and transparent top */}
        {/* <Navbar /> */}

        {/* HERO */}
        <section className="relative min-h-[55vh] flex items-center justify-center text-center text-white overflow-hidden">
          <img
            src={heroImg}
            alt="Team Background"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-blue-900/30"></div>

          <div className="relative z-10 px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our People
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Meet the team behind Abax Professional Services
            </p>
          </div>
        </section>

        {/* TOGGLE BUTTONS */}
        <div className="flex justify-center gap-6 py-10">
          <button
            onClick={() => setView("principal")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              view === "principal"
                ? "bg-blue-700 text-white"
                : "bg-white shadow hover:bg-gray-100"
            }`}
          >
            Principal Consultant
          </button>
          <button
            onClick={() => setView("team")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              view === "team"
                ? "bg-blue-700 text-white"
                : "bg-white shadow hover:bg-gray-100"
            }`}
          >
            Team Members
          </button>
        </div>

        {/* PRINCIPAL VIEW */}
        {view === "principal" && (
          <section className="max-w-6xl mx-auto px-6 pb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 shadow-xl rounded-xl">
              <img
                src={principal.image}
                alt={principal.name}
                className="rounded-xl w-full object-cover object-top"
              />
              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {principal.name}
                </h2>
                <p className="text-blue-700 font-semibold mt-2 mb-6">
                  {principal.designation}
                </p>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {principal.bio}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* TEAM GRID */}
        {view === "team" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {teamMembers.map((m, i) => {
                const isSenior = m.designation.includes("Senior Consultant");
                const isLead =
                  m.designation.includes("Team Lead") ||
                  m.designation.includes("Head");

                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    onClick={() => setActiveMember(m)}
                    className={`
              cursor-pointer group rounded-xl transition-all duration-500
              border
              ${
                isSenior
                  ? "bg-white shadow-2xl border-blue-300"
                  : isLead
                    ? "bg-white shadow-md border-gray-200"
                    : "bg-white shadow border-gray-100"
              }
              hover:border-blue-400
            `}
                  >
                    {/* CARD CONTENT */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-6 text-center sm:text-left">
                      {/* IMAGE */}
                      <div
                        className={`
                  w-24 h-24 sm:w-20 sm:h-20
                  flex-shrink-0 overflow-hidden rounded-full
                  transition-all duration-500
                  ${
                    isSenior
                      ? "ring-4 ring-blue-500"
                      : isLead
                        ? "ring-2 ring-gray-300"
                        : "ring-2 ring-transparent"
                  }
                `}
                      >
                        {m.image ? (
                          <img
                            src={m.image}
                            alt={m.name}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                            No Image
                          </div>
                        )}
                      </div>

                      {/* TEXT */}
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`
                    transition break-words
                    ${
                      isSenior
                        ? "text-xl font-extrabold text-gray-900"
                        : isLead
                          ? "text-lg font-semibold text-gray-800"
                          : "text-lg font-medium text-gray-700"
                    }
                  `}
                        >
                          {m.name}
                        </h3>

                        <p
                          className={`
                    mt-1 break-words
                    ${
                      isSenior
                        ? "text-blue-700 font-bold"
                        : isLead
                          ? "text-blue-600 font-semibold"
                          : "text-blue-600 font-medium"
                    }
                  `}
                        >
                          {m.designation}
                        </p>

                        <p className="text-gray-400 text-xs mt-2 italic opacity-0 sm:group-hover:opacity-100 transition">
                          Tap to view profile →
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* SIDE PANEL PROFILE */}
        <AnimatePresence>
          {activeMember && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 w-full md:w-[500px] h-full bg-white shadow-2xl z-50 overflow-y-auto p-8"
            >
              <button
                className="text-xl font-bold mb-6"
                onClick={() => setActiveMember(null)}
              >
                ✕
              </button>

              {activeMember.image && (
                <div className="mb-6 flex justify-center">
                  <img
                    src={activeMember.image}
                    alt={activeMember.name}
                    className="max-h-[400px] w-auto object-contain rounded-xl shadow-md"
                  />
                </div>
              )}

              <h2 className="text-2xl font-bold">{activeMember.name}</h2>
              <p className="text-blue-700 font-semibold mb-4">
                {activeMember.designation}
              </p>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {activeMember.bio || "No additional information available."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <CallToAction />
    </>
  );
}
