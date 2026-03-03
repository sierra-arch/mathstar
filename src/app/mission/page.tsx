import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Mission — MathSTAR" };

export default function MissionPage() {
  return (
    <main>
      <Nav />
      <PlaceholderPage
        title="Our Mission"
        description="Gifting the wonder of math to every child, regardless of circumstance. Full page coming soon."
        emoji="🌟"
      />
      <Footer />
    </main>
  );
}
