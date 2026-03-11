import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ParentsHero from "@/components/parents/ParentsHero";
import ParentsWhy from "@/components/parents/ParentsWhy";
import HowItWorks from "@/components/HowItWorks";
import MathFearSpectrum from "@/components/parents/MathFearSpectrum";
import LearnerTypePicker from "@/components/parents/LearnerTypePicker";
import IsItRightQuiz from "@/components/how-it-works/IsItRightQuiz";
import MathIdentityQuiz from "@/components/parents/MathIdentityQuiz";
import ParentsQuotes from "@/components/parents/ParentsQuotes";
import ParentsHowToGet from "@/components/parents/ParentsHowToGet";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "For Parents — MathSTAR",
  description:
    "Gift your child the wonder of math. MathSTAR is an 8-hour VR adventure available at home or your local library — no school required.",
};

export default function ParentsPage() {
  return (
    <main>
      <Nav />
      <ParentsHero />
      <ParentsWhy />
      <HowItWorks compact />
      <MathFearSpectrum />
      <LearnerTypePicker />
      <IsItRightQuiz />
      <MathIdentityQuiz />
      <ParentsQuotes />
      <ParentsHowToGet />
      <CTA />
      <Footer />
    </main>
  );
}
