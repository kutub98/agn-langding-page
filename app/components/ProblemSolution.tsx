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
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Your Time Is Too Valuable</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        We provide affordable & skilled Virtual Assistants who take the workload
        off your plate.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-white shadow-sm rounded-xl border"
          >
            <item.icon className="w-10 h-10 mx-auto text-blue-600 mb-4" />
            <p className="text-gray-700">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
