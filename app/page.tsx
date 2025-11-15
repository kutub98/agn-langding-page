import BookingCTA from "./components/BookingCTA";
import FAQ from "./components/FaQ";
import FinalCTA from "./components/FinalCTA";
import Hero from "./components/Hero";
import LeadForm from "./components/LeadForm";
import Pricing from "./components/Pricing";
import ProblemSolution from "./components/ProblemSolution";
import Services from "./components/Services";
import SocialProof from "./components/SocialProof";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex flex-col w-full scroll-smooth">
      <section id="hero">
        <Hero />
      </section>

      <section id="problem">
        <ProblemSolution />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="why-us">
        <WhyChooseUs />
      </section>

      <section id="social-proof">
        <SocialProof />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="lead-form">
        <LeadForm />
      </section>

      <section id="booking">
        <BookingCTA />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="final-cta">
        <FinalCTA />
      </section>
    </main>
  );
}
