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
    <main className="flex flex-col w-full">
      <Hero />
      <ProblemSolution />
      <Services />
      <WhyChooseUs />
      <SocialProof />
      <Pricing />
      <LeadForm />
      <BookingCTA />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
