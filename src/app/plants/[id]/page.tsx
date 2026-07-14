"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
    FaLeaf,
    FaArrowLeft,
    FaBoxOpen,
    FaDollarSign,
    FaUser,
} from "react-icons/fa";

import { Plant, getPlant } from "@/services/plant.service";
import Container from "@/components/shared/Container";

export default function PlantDetailsPage() {
    const { id } = useParams();

    console.log("Route ID:", id);

    const [plant, setPlant] = useState<Plant | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPlant() {
            try {
                const data = await getPlant(id as string);
                setPlant(data);
            } finally {
                setLoading(false);
            }
        }

        loadPlant();
    }, [id]);

    if (loading) {
        return (
            <div className="py-32 text-center text-2xl font-bold">
                Loading...
            </div>
        );
    }

    if (!plant) {
        return (
            <div className="py-32 text-center text-2xl font-bold">
                Plant Not Found
            </div>
        );
    }

    return (
        <section className="bg-slate-50 py-20">
            <Container>

                <Link
                    href="/explore"
                    className="mb-10 inline-flex items-center gap-2 text-emerald-600 hover:underline"
                >
                    <FaArrowLeft />

                    Back to Explore
                </Link>

                <div className="grid gap-14 lg:grid-cols-2">

                    <div className="overflow-hidden rounded-3xl shadow-xl">
                        <Image
                            src={plant.image}
                            alt={plant.title}
                            width={700}
                            height={800}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>

                        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                            {plant.category}
                        </span>

                        <h1 className="mt-5 text-5xl font-bold">
                            {plant.title}
                        </h1>

                        <p className="mt-8 leading-8 text-slate-600">
                            {plant.description}
                        </p>

                        <div className="mt-10 space-y-5">

                            <div className="flex items-center gap-3">
                                <FaDollarSign className="text-emerald-600" />

                                <span className="text-xl font-semibold">
                                    ${plant.price}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaLeaf className="text-emerald-600" />

                                {plant.careLevel} Care
                            </div>

                            <div className="flex items-center gap-3">
                                <FaBoxOpen className="text-emerald-600" />

                                {plant.stock} In Stock
                            </div>

                            <div className="flex items-center gap-3">
                                <FaUser className="text-emerald-600" />

                                Seller: {plant.sellerName}
                            </div>

                        </div>

                        <button className="mt-12 w-full rounded-xl bg-emerald-600 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700">
                            Buy Now
                        </button>

                    </div>

                </div>

            </Container>
        </section>
    );
}