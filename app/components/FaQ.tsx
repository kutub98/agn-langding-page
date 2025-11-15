"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How do you train the VAs?",
      a: "We run a training program covering tools, SOPs, and communication expectations before matching.",
    },
    {
      q: "What’s the guarantee?",
      a: "We provide a replacement guarantee and a satisfaction window after onboarding.",
    },
    {
      q: "What time zones do you support?",
      a: "We support most time zones; tell us your preferred hours and we’ll match accordingly.",
    },
    {
      q: "How fast can I get started?",
      a: "Typical match time is 3–7 business days.",
    },
    {
      q: "Is there a contract?",
      a: "Flexible month-to-month or discounted longer-term plans are available.",
    },
    {
      q: "How do replacements work?",
      a: "If the match isn’t a fit, we’ll replace the VA at no extra cost within the guarantee period.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Answers to the questions we get most often about our services.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="space-y-4 max-w-3xl mx-auto"
      >
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} asChild>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <AccordionTrigger className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-blue-50 transition-colors duration-200 font-semibold text-gray-800 text-lg rounded-2xl">
                {f.q}
                {/* <ChevronDown className="w-5 h-5 text-blue-500 transition-transform duration-300" /> */}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600 text-sm border-t border-gray-100">
                {f.a}
              </AccordionContent>
            </motion.div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
