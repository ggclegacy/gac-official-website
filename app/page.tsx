import { Hero } from "@/components/hero/Hero";
import { AscendFrameworkScene } from "@/components/AscendFrameworkScene";
import { OperationalComplexity } from "@/components/OperationalComplexity";
import { TransformationScene } from "@/components/TransformationScene";

export default function Home() {
  return (
    <main className="home-experience">
      <Hero />
      <AscendFrameworkScene />
      <OperationalComplexity />
      <TransformationScene />
    </main>
  );
}
