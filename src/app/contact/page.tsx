import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Contact — MathSTAR" };

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <PlaceholderPage
        title="Contact Us"
        description="Have a question, want to set up a pilot, or just want to say hi? We'd love to hear from you. This page is coming very soon — reach out directly in the meantime."
        emoji="✉️"
      />
      <Footer />
    </main>
  );
}
