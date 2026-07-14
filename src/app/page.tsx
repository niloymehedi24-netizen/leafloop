import Hero from "@/components/home/Hero";
import FeaturedPlants from "@/components/home/FeaturedPlants";
import Categories from "@/components/home/Categories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PlantCareTips from "@/components/home/PlantCareTips";
import Testimonials from "@/components/home/Testimonials";
import NewsletterSection from "@/components/home/NewsletterSection";
import FaqSection from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <FeaturedPlants />
      <Categories />
      <WhyChooseUs />
      <PlantCareTips />
      <Testimonials />
      <NewsletterSection />
      <FaqSection />
    </main>
  );
}