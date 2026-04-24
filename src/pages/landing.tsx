import About from "@/components/about";
import Branding from "@/components/branding";
import FullTemplate from "@/components/full-templates";
import Hero from "@/components/hero";
import ImageSection from "@/components/imagesection";

export default function LandingPage() {
  return (
    <div className="w-full py-10 relative">
      <Hero />
      <ImageSection />
      <Branding />
      <About />
      <FullTemplate />
    </div>
  );
}
