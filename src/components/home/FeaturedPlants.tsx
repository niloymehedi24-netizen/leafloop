import Link from "next/link";
import Container from "@/components/shared/Container";
import PlantCard from "@/components/shared/PlantCard";
import { featuredPlants } from "@/data/plants";

export default function FeaturedPlants() {
    return (
        <section className="py-24">
            <Container>
                {/* Header */}
                <div className="mb-12 flex items-center justify-between">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                            Featured Collection
                        </span>

                        <h2 className="mt-2 text-4xl font-bold text-slate-900">
                            Featured Plants
                        </h2>

                        <p className="mt-3 max-w-2xl text-slate-600">
                            Discover our hand-picked collection of beautiful plants that are
                            perfect for your home and workspace.
                        </p>
                    </div>

                    <Link
                        href="/explore"
                        className="hidden font-semibold text-emerald-600 transition hover:text-emerald-700 md:block"
                    >
                        View All →
                    </Link>
                </div>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {featuredPlants.map((plant) => (
                        <PlantCard
                            key={plant.id}
                            plant={plant}
                        />
                    ))}
                </div>

                {/* Mobile Button */}
                <div className="mt-10 text-center md:hidden">
                    <Link
                        href="/explore"
                        className="font-semibold text-emerald-600"
                    >
                        View All →
                    </Link>
                </div>
            </Container>
        </section>
    );
}