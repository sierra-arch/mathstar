import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StoryTeaser from "@/components/StoryTeaser";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsTeaser from "@/components/TestimonialsTeaser";
import PhotoStrip from "@/components/PhotoStrip";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <StoryTeaser />
      <HowItWorks />
      <TestimonialsTeaser />
      <PhotoStrip />
      <CTA />
      <Footer />
    </main>
  );
}
