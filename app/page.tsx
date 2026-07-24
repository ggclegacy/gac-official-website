import { Hero } from "@/components/hero/Hero";
import { AscendFrameworkScene } from "@/components/AscendFrameworkScene";
import { MiddleChaptersScene } from "@/components/MiddleChaptersScene";

export default function Home() {
  return (
    <main className="home-experience">
      <Hero />
      <AscendFrameworkScene />
      <MiddleChaptersScene />
    </main>
  );
}
