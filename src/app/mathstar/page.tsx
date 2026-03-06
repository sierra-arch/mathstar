import type { Metadata } from "next";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import GameExperience from "@/components/GameExperience";
import LearningFeatures from "@/components/LearningFeatures";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The MathSTAR Experience — Step Inside the World",
  description:
    "An underwater VR universe where fish multiply, equations come alive, and kids go from arithmetic to algebra-confident in 8 hours. See what happens inside MathSTAR.",
};

export default function MathSTARPage() {
  return (
    <SmoothScroll>
      <main>
        <Nav />
        <GameExperience />
        <LearningFeatures dark />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
