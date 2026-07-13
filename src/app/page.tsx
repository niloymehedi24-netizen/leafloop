import Categories from "@/components/home/Categories";
import FeaturedPlants from "@/components/home/FeaturedPlants";
import Hero from "@/components/home/Hero";
import PlantCareTips from "@/components/home/PlantCareTips";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <Hero></Hero>
      <FeaturedPlants></FeaturedPlants>
      <Categories></Categories>
      <WhyChooseUs></WhyChooseUs>
      <PlantCareTips></PlantCareTips>
    </main>
  );
}