import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Categories from "../components/Categories";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Categories />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
