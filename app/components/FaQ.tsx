"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
