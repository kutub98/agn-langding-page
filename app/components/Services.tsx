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
    <section className="py-20 bg-blue-50 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our VAs Can Do
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-6 bg-white rounded-xl shadow-sm border text-center"
          >
            <s.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl">{s.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Short description about the service.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
