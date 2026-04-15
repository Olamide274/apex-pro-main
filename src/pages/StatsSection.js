import React from "react";

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        <div>
          <h2 className="text-4xl font-bold text-blue-900">30+</h2>
          <p className="text-gray-600 mt-2">Years Experience</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-900">500+</h2>
          <p className="text-gray-600 mt-2">Clients Served</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-900">98%</h2>
          <p className="text-gray-600 mt-2">Client Retention</p>
        </div>
      </div>
    </section>
  );
}
