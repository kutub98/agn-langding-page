"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <footer className="py-24 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
        >
          Elevate Your Productivity, Effortlessly
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Work with vetted, skilled Virtual Assistants to save time, scale
          faster, and focus on what matters most.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-6"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-lg hover:scale-105 transform transition-all duration-300"
            onClick={() =>
              document
                .getElementById("lead-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Free Consultation
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white shadow hover:scale-105 transform transition-all duration-300"
            onClick={() =>
              document
                .getElementById("calendly-embed")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a Call
          </Button>
        </motion.div>

        
      </div>
    </footer>
  );
}
