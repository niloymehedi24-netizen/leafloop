import Container from "@/components/shared/Container";
import CategoryCard from "@/components/shared/CategoryCard";
import { categories } from "@/constants/categories";

export default function Categories() {
    return (
        <section className="bg-emerald-50 py-24">
            <Container>
                <div className="mb-14 text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                        Browse Categories
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        Find Plants by Category
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        Explore our carefully organized plant categories and discover the
                        perfect greenery for your home, office, or garden.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}