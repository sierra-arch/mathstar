import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Volunteer — MathSTAR" };

export default function VolunteerPage() {
  return (
    <main>
      <Nav />
      <PlaceholderPage
        title="Volunteer with MathSTAR"
        description="Want to help bring math wonder to your community? Volunteer opportunities and sign-up form coming soon."
        emoji="🙌"
      />
      <Footer />
    </main>
  );
}
