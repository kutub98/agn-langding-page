"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#hero" },
    { name: "Services", link: "#services" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className="
          fixed top-0 left-0 w-full
          bg-white/70 backdrop-blur-xl
          shadow-[0_2px_12px_rgba(0,0,0,0.08)]
          border-b border-white/20
          z-30
        "
      >
        <nav className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              MyLogo
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item.name} className="group">
                <Link
                  href={item.link}
                  className="relative hover:text-primary transition"
                >
                  {item.name}

                  <span
                    className="
                      absolute left-0 -bottom-0.5 h-[2px] w-0 
                      bg-gradient-to-r from-primary to-purple-500
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </Button>
        </nav>
      </header>

      {/* MOBILE MENU OUTSIDE HEADER (IMPORTANT) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sliding Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 160, damping: 22 }}
              className="
                fixed top-0 right-0 h-full w-72 
                bg-white shadow-2xl z-50
                border-l border-gray-200
                p-6 flex flex-col
              "
            >
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  <X size={28} />
                </Button>
              </div>

              {/* Menu Items */}
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.12 },
                  },
                }}
                className="flex flex-col gap-6 text-xl font-semibold"
              >
                {menuItems.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, x: 25 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className="hover:text-primary transition block"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Drawer CTA Button */}
              <Button
                className="
                  mt-auto w-full text-lg font-medium 
                  bg-gradient-to-r from-primary to-purple-500
                  hover:opacity-90 transition
                "
              >
                Book Now
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
