import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "About — MathSTAR" };

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <PlaceholderPage
        title="About ShepherdXR"
        description="Meet the team behind MathSTAR. This page is coming soon."
        emoji="👋"
      />
      <Footer />
    </main>
  );
}
