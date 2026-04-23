import Hero from "@/components/hero";
import ImageSection from "@/components/imagesection";

export default function LandingPage() {
  return (
    <div className="h-auto w-full py-10 relative">
      <Hero />
      <ImageSection />
      {/* another section */}
      <div className="w-full h-screen bg-red-300"></div>
    </div>
  );
}
