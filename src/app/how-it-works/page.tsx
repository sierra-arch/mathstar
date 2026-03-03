import type { Metadata } from "next";
import Nav from "@/components/Nav";
import GameExperience from "@/components/GameExperience";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The MathSTAR Experience — Step Inside the World",
  description:
    "An underwater VR universe where fish multiply, equations come alive, and kids go from arithmetic to algebra-confident in 8 hours. See what happens inside MathSTAR.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <Nav />
      <GameExperience />
      <Footer />
    </main>
  );
}
