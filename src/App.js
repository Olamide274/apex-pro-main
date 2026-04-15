import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";

import Navbar from "./components/Navbar";
import Certifications from "./pages/Certifications";
import CookiePolicy from "./pages/CookiePolicy";
import CookieBanner from "./components/CookieBanner";
import FooterSection from "./components/FooterSection";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AbaxChatbot from "./components/AbaxChatbot";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactSection from "./components/ContactSection";
import TeamPage from "./pages/TeamPage";
import ServicesPage from "./pages/ServicesPage";
import FAQsPage from "./pages/FAQsPage";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ReactGA.initialize("G-33ZY1HZJLR");
  }, []);

  useEffect(() => {
    setLoading(true);

    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  const seoMap = {
    "/": {
      title: "AbaxPS - Home",
      description:
        "Abax Professional Services: Accounting, Audit, Tax and HR Consulting.",
    },
    "/about": {
      title: "About AbaxPS",
      description:
        "Learn more about Abax Professional Services and our expertise.",
    },
    "/contact": {
      title: "Contact AbaxPS",
      description: "Contact Abax Professional Services today.",
    },
    "/team": {
      title: "Our Team - AbaxPS",
      description: "Meet the team behind Abax Professional Services.",
    },
    "/servicepage": {
      title: "Our Services - AbaxPS",
      description: "Explore accounting, auditing, tax and HR services.",
    },
    "/faqs": {
      title: "FAQs - AbaxPS",
      description:
        "Frequently asked questions about Abax Professional Services.",
    },
  };

  const currentSeo = seoMap[location.pathname] || {
    title: "AbaxPS",
    description: "Abax Professional Services Website",
  };

  return (
    <>
      <Helmet>
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://www.abaxps.com${location.pathname}`}
        />
      </Helmet>

      {loading && <PageLoader />}

      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/servicepage" element={<ServicesPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
      </Routes>

      <FooterSection />
      <ScrollToTopButton />
      <AbaxChatbot />
      <CookieBanner />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
