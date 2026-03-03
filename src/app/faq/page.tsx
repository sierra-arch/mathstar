import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "FAQ — MathSTAR" };

export default function FAQPage() {
  return (
    <main>
      <Nav />
      <PlaceholderPage
        title="Frequently Asked Questions"
        description="We're building out a full FAQ. In the meantime, reach out directly and we'll answer any questions you have."
        emoji="💬"
      />
      <Footer />
    </main>
  );
}
