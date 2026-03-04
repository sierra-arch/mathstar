import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ReviewsHero from "@/components/ReviewsHero";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Reviews — MathSTAR",
  description:
    "What parents, teachers, and kids are saying about MathSTAR. Real stories from the Roxbury Library and Ellis School pilots.",
};

export default function ReviewsPage() {
  return (
    <main>
      <Nav />
      <ReviewsHero />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
