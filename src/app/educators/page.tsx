import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EducatorsHero from "@/components/educators/EducatorsHero";
import EducatorsPilotData from "@/components/educators/EducatorsPilotData";
import EducatorsResults from "@/components/educators/EducatorsResults";
import HowItWorks from "@/components/HowItWorks";
import LearningFeatures from "@/components/LearningFeatures";
import EducatorsQuotes from "@/components/educators/EducatorsQuotes";
import EducatorsHowTo from "@/components/educators/EducatorsHowTo";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "For Educators — MathSTAR",
  description:
    "Bring MathSTAR to your school. See the pilot data, hear from teachers and administrators, and learn how to get your students access.",
};

export default function EducatorsPage() {
  return (
    <main>
      <Nav />
      <EducatorsHero />
      <EducatorsPilotData />
      <EducatorsResults />
      <HowItWorks compact />
      <LearningFeatures />
      <EducatorsQuotes />
      <EducatorsHowTo />
      <CTA />
      <Footer />
    </main>
  );
}
