import type { Metadata } from "next";
import Nav from "@/components/Nav";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works — MathSTAR",
  description:
    "Put on the headset, enter the underwater world, and watch math click. Here's how MathSTAR takes kids from arithmetic to algebra-confident in 8 hours.",
};

export default function HowItWorksPage() {
  return (
    <main className="pt-20">
      <Nav />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
