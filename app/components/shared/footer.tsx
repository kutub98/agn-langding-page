"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-sky-600 text-white py-8">
      <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 */}
        <div>
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight">
            My Website
          </h2>
          <p className="text-gray-50 max-w-xs">
            The ultimate platform to learn, grow, and level up your skills.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-50">
            {["Home", "About", "Courses", "Contact"].map((link) => (
              <li
                key={link}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 tracking-wide">Contact</h3>
          <p className="text-gray-50">
            Email:{" "}
            <a
              href="mailto:support@website.com"
              className="hover:text-white transition-colors"
            >
              support@website.com
            </a>
          </p>
          <p className="text-gray-50">
            Phone:{" "}
            <a
              href="tel:+880123456789"
              className="hover:text-white transition-colors"
            >
              +880 1234 56789
            </a>
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center text-white text-sm mt-12 border-t border-gray-800 pt-6"
      >
        © {new Date().getFullYear()} My Website — Trusted by 150+ Businesses
        Worldwide
      </motion.div>
    </footer>
  );
}
