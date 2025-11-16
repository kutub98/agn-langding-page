"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, CheckCircle, RefreshCw } from "lucide-react";

export default function ProblemSolution() {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      desc: "Hand off repetitive daily tasks.",
    },
    {
      icon: DollarSign,
      title: "Reduce Costs",
      desc: "Up to 70% cheaper than full-time.",
    },
    {
      icon: CheckCircle,
      title: "Pre-Trained VAs",
      desc: "3-step vetting + skill evaluation.",
    },
    {
      icon: RefreshCw,
      title: "Easy Replacement",
      desc: "Instant swap if not a perfect fit.",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30" />
      <div className="absolute top-[-150px] left-[-150px] w-[300px] h-[300px] bg-blue-400/30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[300px] h-[300px] bg-purple-400/30 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            {"You're Growing Fast — But Your Time Isn’t"}
          </h2>

          <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Too many tasks. Not enough time. Hiring locally is expensive and
            slow. Our trained Virtual Assistants take over your workload — so
            you stay focused on scaling.
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="relative group bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-8 text-center transition-all duration-300"
            >
              {/* Glow behind icon */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-400/20 blur-[50px] rounded-full"></div>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-5">
                <b.icon className="w-12 h-12 text-blue-600 group-hover:scale-110 transition duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {b.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 p-8 md:p-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white shadow-xl"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let Our VAs Handle the Busy Work — So You Can Focus on Growth
            </h3>
            <p className="text-white/90 text-lg">
              Hiring has never been this fast, affordable, or professional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
