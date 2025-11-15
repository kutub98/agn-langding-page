import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <ProblemSolution />
      <Services />
      <WhyChooseUs />
    </main>
  );
}
