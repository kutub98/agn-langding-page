import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";


export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <ProblemSolution />
      
    </main>
  );
}
