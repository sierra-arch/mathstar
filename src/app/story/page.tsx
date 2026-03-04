import type { Metadata } from "next";
import Nav from "@/components/Nav";
import StoryHero from "@/components/StoryHero";
import FounderStory from "@/components/FounderStory";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Story — MathSTAR",
  description:
    "From expelled to Oxford: how our founder was gifted the wonder of math, and why he built MathSTAR so every child gets the same gift.",
};

export default function StoryPage() {
  return (
    <main>
      <Nav />
      <StoryHero />
      <FounderStory />
      <CTA />
      <Footer />
    </main>
  );
}
