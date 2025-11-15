"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, Users } from "lucide-react";

export default function ProblemSolution() {
  const items = [
    { icon: Clock, text: "Too many tasks & not enough time?" },
    { icon: DollarSign, text: "Hiring full-time staff too expensive?" },
    { icon: Users, text: "Need trained support you can trust?" },
  ];

  return (
    <section className="relative py-24 px-6 text-center overflow-hidden bg-white">
      {/* Decorative Background Blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-blue-300/10 blur-3xl animate-slow-pulse"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/3 w-80 h-80 rounded-full bg-purple-300/30 blur-3xl animate-slow-pulse"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 z-10 relative">
        Your Time Is Too Valuable
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-16 z-10 relative">
        We provide affordable & skilled Virtual Assistants who take the workload
        off your plate. Focus on growth, while we handle the rest.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto z-10 relative">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            className="p-8 rounded-2xl backdrop-blur-md bg-white/60 border border-white/30 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-white/30 rounded-full shadow-md"
            >
              <item.icon className="w-6 h-6 text-blue-600" />
            </motion.div>
            <p className="text-gray-800 font-medium text-lg">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
