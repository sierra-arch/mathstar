import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ImpactHero from "@/components/impact/ImpactHero";
import ImpactStats from "@/components/impact/ImpactStats";
import ImpactCharts from "@/components/impact/ImpactCharts";
import ImpactPilots from "@/components/impact/ImpactPilots";
import ImpactFindings from "@/components/impact/ImpactFindings";
import ImpactQuotes from "@/components/impact/ImpactQuotes";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Impact & Results — MathSTAR",
  description:
    "Pilot data, educator findings, and student outcomes from MathSTAR's Boston Public Library and Boston Public Schools programs.",
};

export default function ImpactPage() {
  return (
    <main>
      <Nav />
      <ImpactHero />
      <ImpactStats />
      <ImpactCharts />
      <ImpactPilots />
      <ImpactFindings />
      <ImpactQuotes />
      <CTA />
      <Footer />
    </main>
  );
}
