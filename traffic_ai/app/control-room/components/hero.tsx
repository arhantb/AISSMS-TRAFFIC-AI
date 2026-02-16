"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-16 py-20 pt-32">
      <div className="max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6"
        >
          Control Room Dashboard
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 mb-6"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Welcome to the AI Traffic Control System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Discover how our intelligent system manages traffic flow, reduces congestion, and improves mobility across Indian cities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/landing"
            className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            ← Back to Home
          </Link>
          <Link
            href="#system-timeline"
            className="px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            View How It Works ↓
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
