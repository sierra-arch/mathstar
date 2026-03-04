import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ResultsSlide from "@/components/ResultsSlide";
import StoryTeaser from "@/components/StoryTeaser";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsTeaser from "@/components/TestimonialsTeaser";
import PhotoStrip from "@/components/PhotoStrip";
import PressTeaser from "@/components/PressTeaser";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ResultsSlide />
      <StoryTeaser />
      <HowItWorks />
      <TestimonialsTeaser />
      <PhotoStrip />
      <PressTeaser />
      <CTA />
      <Footer />
    </main>
  );
}
