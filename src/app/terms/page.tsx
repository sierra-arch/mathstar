import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Terms of Use — ShepherdXR" };

export default function TermsPage() {
  return (
    <main>
      <Nav />
      <PlaceholderPage
        title="Terms of Use"
        description="Our full terms of use are coming soon."
        emoji="📄"
      />
      <Footer />
    </main>
  );
}
