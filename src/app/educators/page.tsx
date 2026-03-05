import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EducatorsHero from "@/components/educators/EducatorsHero";
import EducatorsPilotData from "@/components/educators/EducatorsPilotData";
import EducatorsResults from "@/components/educators/EducatorsResults";
import EducatorsQuotes from "@/components/educators/EducatorsQuotes";
import EducatorsHowTo from "@/components/educators/EducatorsHowTo";
import LearningFeatures from "@/components/LearningFeatures";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "For Educators — ShepherdXR",
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
      <LearningFeatures />
      <EducatorsQuotes />
      <EducatorsHowTo />
      <CTA />
      <Footer />
    </main>
  );
}
