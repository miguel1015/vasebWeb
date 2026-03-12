import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import FeaturedSection from "./FeaturedSection";
import PromoBanner from "./PromoBanner";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <div className="h-16" />
      <CategoriesSection />
      <div className="h-16" />
      <FeaturedSection />
      <div className="h-16" />
      <PromoBanner />
    </div>
  );
}
