import type { Metadata } from "next";
import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Get MathSTAR — Gift the Wonder of Math",
  description:
    "Get MathSTAR for your child today. An 8-hour VR math adventure available at home and at participating libraries.",
};

export default function GetPage() {
  return (
    <main className="pt-20">
      <Nav />
      <div className="min-h-[40vh] bg-[#0F0620]" />
      <CTA />
      <Footer />
    </main>
  );
}
