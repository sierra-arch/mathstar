import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ResultsSlide from "@/components/ResultsSlide";
import StoryTeaser from "@/components/StoryTeaser";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
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
      <TestimonialsMarquee />
      <PhotoStrip />
      <PressTeaser />
      <CTA />
      <Footer />
    </main>
  );
}
