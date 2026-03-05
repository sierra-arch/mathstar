import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Privacy Policy — ShepherdXR" };

export default function PrivacyPage() {
  return (
    <main>
      <Nav />
      <PlaceholderPage
        title="Privacy Policy"
        description="Our full privacy policy is coming soon."
        emoji="🔒"
      />
      <Footer />
    </main>
  );
}
