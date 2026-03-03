import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Impact & Results — MathSTAR" };

export default function ImpactPage() {
  return (
    <main>
      <Nav />
      <PlaceholderPage
        title="Impact & Results"
        description="Detailed pilot data, outcomes, and research from our Boston Public Library and Boston Public Schools pilots. Coming soon."
        emoji="📊"
      />
      <Footer />
    </main>
  );
}
