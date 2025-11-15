"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  ShoppingCart,
  Megaphone,
  Headphones,
  Book,
  Search,
} from "lucide-react";

const services = [
  { icon: Briefcase, title: "Admin Support" },
  { icon: ShoppingCart, title: "Ecommerce Support" },
  { icon: Megaphone, title: "Social Media Support" },
  { icon: Book, title: "Lead Gen & Data Entry" },
  { icon: Headphones, title: "Customer Support" },
  { icon: Search, title: "SEO Assistance" },
];

export default function Services() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative Background Blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-blue-200/30 blur-3xl animate-slow-pulse"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/3 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl animate-slow-pulse"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 z-10 relative">
        What Our VAs Can Do
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto z-10 relative">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            className="p-8 rounded-2xl backdrop-blur-md bg-white/60 border border-white/30 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-md"
            >
              <s.icon className="w-7 h-7" />
            </motion.div>
            <h3 className="font-semibold text-xl text-gray-900 mb-2">
              {s.title}
            </h3>
            <p className="text-gray-700 text-sm">
              Our skilled virtual assistants handle tasks efficiently so you can
              focus on growth.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
