import CookieConsent from "react-cookie-consent";
import { useEffect } from "react";

export default function CookieBanner() {
  // Handle consent change globally
  useEffect(() => {
    const consent = localStorage.getItem("CookieConsent");

    if (consent === "true") {
      loadAnalytics();
    }
  }, []);

  const loadAnalytics = () => {
    if (window.gtag) return;

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-33ZY1HZJLR";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "YOUR_ID");
  };

  return (
    <CookieConsent
      location="bottom"
      enableDeclineButton
      buttonText="Accept All"
      declineButtonText="Reject"
      cookieName="CookieConsent"
      style={{
        background: "#ffffff",
        color: "#1f2937",
        borderTop: "1px solid #e5e7eb",
        padding: "16px",
      }}
      contentStyle={{
        margin: "0",
        fontSize: "14px",
      }}
      buttonStyle={{
        background: "#2563eb",
        color: "#fff",
        fontSize: "13px",
        borderRadius: "6px",
        padding: "8px 16px",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#374151",
        border: "1px solid #9ca3af",
        fontSize: "13px",
        borderRadius: "6px",
        padding: "8px 16px",
      }}
      expires={150}
      onAccept={() => {
        localStorage.setItem("CookieConsent", "true");
        loadAnalytics();
      }}
      onDecline={() => {
        localStorage.setItem("CookieConsent", "false");
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm leading-relaxed">
          We use cookies to improve your experience, analyze traffic, and
          support marketing. You can accept or reject non-essential cookies.{" "}
          <a href="/cookie-policy" className="text-blue-600 underline">
            Learn more
          </a>
        </p>
      </div>
    </CookieConsent>
  );
}
