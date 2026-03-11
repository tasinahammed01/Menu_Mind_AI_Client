import { CTA } from "@/components/CTA";
import { ChatPreview } from "@/components/ChatPreview";
import { Dishes } from "@/components/Dishes";
import { Experience } from "@/components/Experience";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Reservation } from "@/components/Reservation";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Dishes />
      <HowItWorks />
      <Experience />
      <Testimonials />
      <Reservation />
      <ChatPreview />
      <CTA />
      <Footer />
    </main>
  );
}
