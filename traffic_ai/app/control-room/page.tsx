"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
import { HeroSection } from "./components/hero";
import { SystemTimeline } from "./components/system_timeline";
import { CTASection } from "./components/cta-section";

export default function ControlRoom() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Timeline Section */}
      <section id="system-timeline" className="py-20 bg-white">
        <SystemTimeline />
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Google Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");
      `}</style>
    </div>
  );
}
