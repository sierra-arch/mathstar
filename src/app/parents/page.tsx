import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ParentsHero from "@/components/parents/ParentsHero";
import ParentsWhy from "@/components/parents/ParentsWhy";
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
      <ParentsQuotes />
      <ParentsHowToGet />
      <CTA />
      <Footer />
    </main>
  );
}
