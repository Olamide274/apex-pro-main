import React from "react";

const values = [
  {
    title: "Integrity",
    desc: "We uphold the highest ethical standards in every engagement.",
  },
  {
    title: "Excellence",
    desc: "We are committed to delivering work that meets the highest technical and professional standards.",
  },
  {
    title: "Objectivity",
    desc: "We provide independent, unbiased opinions and advice based on evidence, professional scepticism and sound judgement.",
  },
  {
    title: "Confidentiality",
    desc: "Client information is protected with the utmost discretion, security, and professionalism.",
  },
  {
    title: "Client Centric Partnership",
    desc: "We work closely with clients as long-term partners, tailoring solutions to their context, goals, and evolving needs.",
  },
  {
    title: "Continuous Improvement",
    desc: "We embrace modern tools, evolving standards, and emerging best practices to remain ahead of regulatory, technological, and industry developments.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Core Values
          </h1>
          <div className="h-1 w-24 bg-yellow-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg">
            The principles that guide everything we do
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="
                relative
                group
                bg-white
                p-8
                rounded-2xl
                shadow-md
                transition-all
                duration-700
                transform
                hover:-translate-y-3
                hover:shadow-2xl
                cursor-pointer
                border
                border-blue-100
                overflow-hidden
              "
            >
              {/* Top Accent Bar */}
              <div
                className="
                absolute top-0 left-0 w-full h-1
                bg-gradient-to-r from-blue-700 via-yellow-400 to-blue-700
                transform scale-x-0
                group-hover:scale-x-100
                transition-transform duration-700 origin-left
              "
              />

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="
                  text-xl font-semibold text-blue-900 mb-4
                  transition-colors duration-500
                  group-hover:text-yellow-500
                "
                >
                  {value.title}
                </h3>

                <p
                  className="
                  text-gray-600
                  transition-colors duration-500
                  group-hover:text-gray-800
                "
                >
                  {value.desc}
                </p>
              </div>

              {/* Hover Background Effect */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-br
                from-blue-900/5 via-yellow-400/10 to-transparent
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-700
              "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
