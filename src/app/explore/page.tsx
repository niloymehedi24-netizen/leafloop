"use client";

import { useEffect, useState } from "react";

import Container from "@/components/shared/Container";
import PlantCard from "@/components/plants/PlantCard";

import { getPlants, Plant } from "@/services/plant.service";

export default function ExplorePage() {
    const [plants, setPlants] = useState<Plant[]>([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        async function loadPlants() {
            setLoading(true);

            try {
                const data = await getPlants(
                    search,
                    category,
                    sort
                );

                setPlants(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadPlants();
    }, [search, category, sort]);

    return (
        <section className="bg-slate-50 py-20">
            <Container>
                <div className="mb-12 text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                        Explore
                    </span>

                    <h1 className="mt-3 text-5xl font-bold text-slate-900">
                        Discover Beautiful Plants
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-slate-600">
                        Browse our growing collection of healthy indoor and
                        outdoor plants.
                    </p>
                </div>

                {/* Filters */}

                <div className="mb-12 grid gap-5 md:grid-cols-3">
                    <input
                        type="text"
                        placeholder="Search plants..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-500"
                    />

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-500"
                    >
                        <option value="">All Categories</option>
                        <option value="Indoor">Indoor</option>
                        <option value="Outdoor">Outdoor</option>
                        <option value="Succulent">Succulent</option>
                        <option value="Flowering">Flowering</option>
                        <option value="Air Purifying">
                            Air Purifying
                        </option>
                    </select>

                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-500"
                    >
                        <option value="">Newest</option>
                        <option value="low">Price: Low → High</option>
                        <option value="high">Price: High → Low</option>
                    </select>
                </div>

                {/* Content */}

                {loading ? (
                    <div className="py-20 text-center text-xl font-semibold">
                        Loading Plants...
                    </div>
                ) : plants.length === 0 ? (
                    <div className="py-20 text-center">
                        <h2 className="text-3xl font-bold text-slate-900">
                            No Plants Found
                        </h2>

                        <p className="mt-3 text-slate-600">
                            Try another search or category.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                        {plants.map((plant) => (
                            <PlantCard
                                key={plant._id}
                                plant={plant}
                            />
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
}