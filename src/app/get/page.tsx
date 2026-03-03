import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PathwaySelector from "@/components/PathwaySelector";

export const metadata: Metadata = {
  title: "Get MathSTAR — Gift the Wonder of Math",
  description:
    "Get MathSTAR for your child or school. Choose your path — parents and educators each have a dedicated experience.",
};

export default function GetPage() {
  return (
    <main>
      <Nav />
      <PathwaySelector />
      <Footer />
    </main>
  );
}
