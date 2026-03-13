import type { Metadata } from "next";
import Nav from "@/components/Nav";
import HowItWorksHero from "@/components/how-it-works/HowItWorksHero";
import HowItWorks from "@/components/HowItWorks";
import TheProblem from "@/components/how-it-works/TheProblem";
import OurAnswer from "@/components/how-it-works/OurAnswer";
import IsItRightQuiz from "@/components/how-it-works/IsItRightQuiz";
import LearnerProfiles from "@/components/how-it-works/LearnerProfiles";
import LearningFeatures from "@/components/LearningFeatures";
import ROICalculator from "@/components/how-it-works/ROICalculator";
import ResultsNumbers from "@/components/how-it-works/ResultsNumbers";
import ImpactCharts from "@/components/impact/ImpactCharts";
import TestimonialsTeaser from "@/components/TestimonialsTeaser";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works — MathSTAR",
  description:
    "Three simple steps from headset to algebra-confident. See the research, the method, and the results that are changing how kids feel about math.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <Nav />
      {/* <HowItWorksHero /> */}
      <HowItWorks scrollDriven />
      <TheProblem />
      <OurAnswer />
      <IsItRightQuiz />
      <LearnerProfiles />
      <LearningFeatures />
      <ROICalculator />
      <ResultsNumbers />
      <ImpactCharts />
      <TestimonialsTeaser />
      <CTA />
      <Footer />
    </main>
  );
}
