import type { Metadata } from "next";
import Nav from "@/components/Nav";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works — MathSTAR",
  description:
    "Three simple steps from headset to algebra-confident. Learn how MathSTAR works at home and at your local library.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <Nav />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
