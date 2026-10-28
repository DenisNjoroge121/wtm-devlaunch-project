
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToSection from "./components/ScrollToSection";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      {/* Handles scrolling to homepage sections */}
      <ScrollToSection />

      {/* Website navigation */}
      <Navbar />

      {/* Skip link for keyboard and screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-brand-800 focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Main page content */}
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* Displays when a page does not exist */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Website footer */}
      <Footer />
    </>
  );
}
