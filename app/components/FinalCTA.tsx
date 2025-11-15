"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <footer className="py-16 px-6 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Save Time and Grow Faster?
        </motion.h2>
        <p className="mb-6">
          Start with a free consultation & find the perfect VA match for your
          business.
        </p>

        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("lead-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              document
                .getElementById("calendly-embed")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a Call Now
          </Button>
        </div>

        <p className="text-sm mt-6 opacity-80">
          © {new Date().getFullYear()} Your Company — Trusted by 150+ Businesses
        </p>
      </div>
    </footer>
  );
}
