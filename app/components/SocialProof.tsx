"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "Aisha, Founder",
    quote: "Saved 40 hours/week — our ops are 10x smoother.",
    avatar: "/avatars/aisha.jpg",
  },
  {
    name: "Mark, eCommerce",
    quote: "Our conversion increased after our VA took over listings.",
    avatar: "/avatars/mark.jpg",
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative floating blobs */}
      <motion.div
        className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-blue-200/30 blur-3xl animate-slow-pulse"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/3 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl animate-slow-pulse"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-12"
        >
          Trusted by fast-growing teams
        </motion.h2>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex gap-6 items-center justify-center flex-wrap mb-16"
        >
          <Image src="/logos/logo1.svg" width={120} height={40} alt="logo1" />
          <Image src="/logos/logo2.svg" width={120} height={40} alt="logo2" />
          <Image src="/logos/logo3.svg" width={120} height={40} alt="logo3" />
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="p-6 rounded-2xl backdrop-blur-md bg-white/60 border border-white/30 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500 shadow-md">
                  <Image
                    src={r.avatar}
                    alt={r.name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-left">
                  <strong className="text-gray-900">{r.name}</strong>
                  <div className="text-sm text-gray-500">CEO / Company</div>
                </div>
              </div>

              <p className="mt-4 text-gray-800 italic text-lg">“{r.quote}”</p>
              <div className="mt-3 text-sm text-gray-500">
                Example metric: saved 40 hours/week
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
