import {
  FaBalanceScale,
  FaCalculator,
  FaFileInvoiceDollar,
  FaChartLine,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "AUDIT & ASSURANCE SERVICES",
    icon: FaBalanceScale,
    shortDesc:
      "Delivering confidence, credibility, and clarity through independent, high-quality assurance engagements.",

    sections: [
      {
        title: "External Audit & Financial Statement Assurance",
        points: [
          "Independent audits of financial statements",
          "IFRS, GAAP, and local-standard reporting assurance",
          "Group audit and component auditor support",
        ],
      },
      {
        title: "Internal Audit & Assurance",
        points: [
          "Full outsourcing or co-sourcing of internal audit functions",
          "Annual audit planning & risk based audit execution",
          "Operational, financial, and compliance audits",
          "Quality assurance reviews of internal audit functions",
        ],
      },
      {
        title: "Regulatory & Compliance Assurance",
        points: [
          "Assurance over regulatory reporting",
          "Compliance audits for industry‑specific requirements",
          "Grant audits and donor‑funded project audits",
        ],
      },
    ],
  },

  {
    id: 2,
    title: "FINANCIAL REPORTING & COMPLIANCE CONSULTING",
    icon: FaCalculator,
    shortDesc:
      "Strengthening transparency, accuracy, and trust in every aspect of your financial reporting.",

    sections: [
      {
        title: "Financial Reporting",
        points: [
          "Preparation of GAAP/IFRS‑aligned financial statements",
          "Monthly, quarterly, and annual close support",
          "Consolidation and group reporting",
          "Management reporting & technical accounting advisory",
          "Audit preparation and liaison support",
        ],
      },
      {
        title: "Compliance & Regulatory Support",
        points: [
          "Internal controls design, testing and documentation",
          "Accounting policy and procedure development",
          "Financial reporting risk assessments",
          "Compliance monitoring and regulatory updates",
          "Governance and ethics program enhancement",
        ],
      },
      {
        title: "Specialized Support",
        points: [
          "ERP and financial systems implementation support",
          "Finance team training and development",
        ],
      },
    ],
  },

  {
    id: 3,
    title: "TAX MANAGEMENT & ADVISORY",
    icon: FaFileInvoiceDollar,
    shortDesc:
      "Helping organizations navigate complexity, optimize tax positions, and stay ahead of regulatory change.",

    sections: [
      {
        title: "Tax Compliance",
        points: [
          "Corporate, partnership and individual tax filings",
          "Indirect tax compliance (VAT, WHT, etc)",
          "Payroll tax reporting",
        ],
      },
      {
        title: "Tax Advisory & Planning",
        points: [
          "Strategic tax planning and structuring",
          "International tax advisory and cross‑border planning",
          "State and local tax advisory",
          "Tax governance and risk management",
        ],
      },
      {
        title: "Specialized Tax Services",
        points: [
          "Transfer pricing documentation & policy design",
          "Property tax advisory",
        ],
      },
      {
        title: "Representation & Ongoing Support",
        points: [
          "Tax authority audit support",
          "Controversy and dispute resolution",
        ],
      },
    ],
  },

  {
    id: 4,
    title: "GOVERNANCE, RISK & INTERNAL CONTROL (GRC)",
    icon: FaChartLine,
    shortDesc:
      "Building resilient organizations through strong governance, proactive risk management, and effective controls.",

    sections: [
      {
        title: "Governance",
        points: [
          "Corporate governance frameworks and board advisory",
          "Policy and procedure development",
          "Governance maturity assessments",
          "Ethics and compliance program design",
        ],
      },
      {
        title: "Risk Management",
        points: [
          "Enterprise Risk Management (ERM) frameworks",
          "Comprehensive risk assessments",
          "Regulatory risk advisory",
          "Scenario planning and stress testing",
          "Business continuity and resilience planning",
        ],
      },
      {
        title: "Internal Controls",
        points: [
          "Internal control framework design (COSO, ICFR)",
          "Design, testing, and remediation",
          "Operational controls review across key business cycles",
          "Control optimization and automation",
          "Internal audit co‑sourcing and outsourcing",
        ],
      },
    ],
  },

  {
    id: 5,
    title: "MANAGEMENT & FINANCIAL ADVISORY",
    icon: FaBriefcase,
    shortDesc:
      "Driving performance, growth, and financial clarity through strategic, operational, and people‑focused excellence.",

    sections: [
      {
        title: "Management Advisory",
        points: [
          "Business strategy development",
          "Operational performance improvement",
          "Organizational design and change management",
          "Cost optimization and efficiency programs",
          "Strategic planning facilitation",
        ],
      },
      {
        title: "Financial Advisory",
        points: [
          "Financial planning & analysis (FP&A)",
          "Budgeting, forecasting and financial modeling",
          "Working capital optimization",
        ],
      },
    ],
  },

  {
    id: 6,
    title: "HUMAN RESOURCE ADVISORY",
    icon: FaUsers,
    shortDesc:
      "Empowering organizations to build strong, capable, and engaged workforces.",

    sections: [
      {
        title: "HR Strategy",
        points: [
          "HR strategy and workforce planning",
          "Talent acquisition and recruitment support",
          "Performance management frameworks",
          "Compensation and benefits structuring",
          "Employee engagement and culture development",
          "Learning and development program design",
          "HR policy development and compliance",
          "HR process optimization and digital HR transformation",
          "Outsourced HR advisory and interim HR leadership",
        ],
      },
    ],
  },
];

export default services;
