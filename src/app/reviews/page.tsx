import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Reviews — ShepherdXR",
  description:
    "What parents, teachers, and kids are saying about MathSTAR. Real stories from the Roxbury Library and Ellis School pilots.",
};

export default function ReviewsPage() {
  return (
    <main>
      <Nav />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
