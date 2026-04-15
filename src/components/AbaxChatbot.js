import { useState } from "react";

export default function AbaxChatbot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("welcome");

  const reset = () => setStep("welcome");

  const services = {
    audit: {
      title: "Audit & Assurance",
      content:
        "We provide independent external audits, internal audit outsourcing, regulatory assurance, and grant audits. Our engagements are conducted in accordance with IFRS, GAAP, and applicable regulatory standards.",
    },
    tax: {
      title: "Tax Management & Advisory",
      content:
        "Our tax services include compliance filings, strategic tax planning, transfer pricing documentation, international structuring, and tax authority representation.",
    },
    grc: {
      title: "Governance, Risk & Internal Control",
      content:
        "We design and assess corporate governance frameworks, ERM systems, internal control environments (COSO/ICFR), and regulatory risk advisory structures.",
    },
    financial: {
      title: "Financial & Management Advisory",
      content:
        "We support business strategy, financial modeling, budgeting, operational performance improvement, and working capital optimisation.",
    },
    hr: {
      title: "Human Resources Advisory",
      content:
        "Our HR advisory services include workforce planning, recruitment support, performance frameworks, compensation structuring, and HR policy development.",
    },
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-6 bg-white hover:bg-blue-500 text-blue-900 hover:text-white shadow-md px-5 py-3 rounded-full shadow-lg hover:bg-blue-800 transition-all z-50"
      >
        {open ? "Close" : "Abaxps Assistant"}
      </button>

      {open && (
        <div className="fixed bottom-36 right-6 w-96 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-900 text-white p-4">
            <h3 className="font-semibold text-lg">
              ABAX Professional Services
            </h3>
            <p className="text-xs opacity-80">
              Trusted insight and sustainable growth
            </p>
          </div>

          {/* Body */}
          <div className="p-5 text-sm text-gray-700 space-y-4 min-h-[280px]">
            {step === "welcome" && (
              <>
                <p>Welcome. How may we support your organisation today?</p>

                <div className="space-y-2">
                  <button
                    onClick={() => setStep("audit")}
                    className="w-full text-left border rounded-lg px-3 py-2 hover:bg-gray-50"
                  >
                    Audit & Assurance
                  </button>

                  <button
                    onClick={() => setStep("tax")}
                    className="w-full text-left border rounded-lg px-3 py-2 hover:bg-gray-50"
                  >
                    Tax Management & Advisory
                  </button>

                  <button
                    onClick={() => setStep("grc")}
                    className="w-full text-left border rounded-lg px-3 py-2 hover:bg-gray-50"
                  >
                    Governance, Risk & Internal Control
                  </button>

                  <button
                    onClick={() => setStep("financial")}
                    className="w-full text-left border rounded-lg px-3 py-2 hover:bg-gray-50"
                  >
                    Financial & Management Advisory
                  </button>

                  <button
                    onClick={() => setStep("hr")}
                    className="w-full text-left border rounded-lg px-3 py-2 hover:bg-gray-50"
                  >
                    Human Resources Advisory
                  </button>
                </div>
              </>
            )}

            {Object.keys(services).includes(step) && (
              <>
                <h4 className="font-semibold text-blue-900">
                  {services[step].title}
                </h4>

                <p className="text-gray-600">{services[step].content}</p>

                <div className="pt-3 space-y-2">
                  <button
                    onClick={() => setStep("contact")}
                    className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800"
                  >
                    Contact a Consultant
                  </button>

                  <button
                    onClick={reset}
                    className="w-full border py-2 rounded-lg hover:bg-gray-50"
                  >
                    Back to Services
                  </button>
                </div>
              </>
            )}

            {step === "contact" && (
              <>
                <p>You may reach us directly through the following channels:</p>

                <div className="text-gray-600 space-y-1 text-sm">
                  <p>
                    <strong>Email:</strong> info@abaxps.com
                  </p>
                  <p>
                    <strong>Phone:</strong> 09110108791
                  </p>
                  <p>
                    <strong>Website:</strong> www.abaxps.com
                  </p>
                </div>

                <button
                  onClick={reset}
                  className="w-full mt-4 border py-2 rounded-lg hover:bg-gray-50"
                >
                  Return to Main Menu
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
