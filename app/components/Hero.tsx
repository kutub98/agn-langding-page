"use client";

import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  // Mouse-based parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const x1 = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const y1 = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);
  const x2 = useTransform(mouseX, [0, window.innerWidth], [20, -20]);
  const y2 = useTransform(mouseY, [0, window.innerHeight], [20, -20]);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Layer 1: Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

      {/* Moving Glow Blobs */}
      <motion.div
        style={{ x: x1, y: y1 }}
        className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-purple-300/30 blur-3xl animate-slow-pulse"
      />
      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-pink-300/30 blur-3xl animate-slow-pulse"
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-blue-300/20 blur-2xl animate-slow-pulse"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Foreground Content */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight max-w-4xl z-10 relative"
      >
        Hire a Skilled Virtual Assistant
        <span className="text-blue-600">. Save Time. Grow Faster.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl z-10 relative"
      >
        Affordable, trained, and reliable VAs ready to support your business
        today. Focus on growth while we handle the rest.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-10 grid grid-cols-2 gap-4 z-10 relative"
      >
        <Button
          size="lg"
          className="w-full text-[12px] sm:text-base rounded-full px-5 sm:px-10 shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 hover:shadow-xl transition-transform duration-300 flex items-center justify-center gap-2"
        >
          Book a Free Consultation
          <ArrowRight size={10} className="ml-1" />
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="w-full rounded-full px-10 border-blue-500 text-blue-600 hover:bg-blue-50 hover:scale-105 transition-transform duration-300 flex items-center justify-center"
        >
          Get Pricing
        </Button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-8 text-sm text-gray-500 z-10 relative"
      >
        Trusted by <strong className="text-gray-900">150+ Businesses</strong>{" "}
        worldwide
      </motion.p>
    </section>
  );
}
