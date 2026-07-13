import Categories from "@/components/home/Categories";
import FeaturedPlants from "@/components/home/FeaturedPlants";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero></Hero>
      <FeaturedPlants></FeaturedPlants>
      <Categories></Categories>
    </main>
  );
}