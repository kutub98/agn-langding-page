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
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Trusted by fast-growing teams
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          {/* Client logos */}
          <div className="flex gap-6 items-center justify-center flex-wrap">
            <Image src="/logos/logo1.svg" width={120} height={40} alt="logo1" />
            <Image src="/logos/logo2.svg" width={120} height={40} alt="logo2" />
            <Image src="/logos/logo3.svg" width={120} height={40} alt="logo3" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={r.avatar}
                  alt={r.name}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div>
                  <strong>{r.name}</strong>
                  <div className="text-sm text-gray-500">CEO / Company</div>
                </div>
              </div>

              <p className="mt-4 text-gray-700">“{r.quote}”</p>
              <div className="mt-3 text-sm text-gray-500">
                Saved 40 hours/week (example metric)
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
