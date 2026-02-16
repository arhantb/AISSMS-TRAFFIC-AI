"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Ready to Transform Your City's Traffic?
          </h2>
          <p
            className="text-xl text-green-100 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Join thousands of cities that are using our AI-powered traffic control system to reduce congestion and improve mobility.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
