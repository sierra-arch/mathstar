import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Donate — ShepherdXR" };

export default function DonatePage() {
  return (
    <main>
      <Nav />
      <PlaceholderPage
        title="Support MathSTAR"
        description="Help us bring the wonder of math to more kids. Donations page coming soon."
        emoji="💜"
      />
      <Footer />
    </main>
  );
}
