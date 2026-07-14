"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import Image from "next/image";
import { AxiosError } from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

import {
    deletePlant,
    getMyPlants,
} from "@/services/plant.service";

interface ExtendedPlant {
    _id?: string;
    id?: string;
    title?: string;
    name?: string;
    category?: string;
    price?: number;
    stock?: number;
    careLevel?: string;
    image?: string;
    description?: string;
}

// Define the shape of a backend response object that might nest the plants array inside a key
interface NestedPlantContainer {
    plants: ExtendedPlant[];
    [key: string]: unknown;
}

export default function ManagePlantsPage() {
    const [plants, setPlants] = useState<ExtendedPlant[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPlants = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;

            try {
                const data = await getMyPlants(token);
                console.log("👉 CLEAN BACKEND DATA:", data);

                if (Array.isArray(data)) {
                    setPlants(data as ExtendedPlant[]);
                } else if (data && typeof data === "object") {
                    // Safe typecast using unknown first to meet ESLint requirements
                    const structuredData = (data as unknown) as NestedPlantContainer;
                    if ("plants" in structuredData && Array.isArray(structuredData.plants)) {
                        setPlants(structuredData.plants);
                    } else {
                        setPlants([]);
                    }
                } else {
                    setPlants([]);
                }
            } catch (error) {
                console.error("Error loading plants:", error);
                toast.error("Failed to load plants.");
            } finally {
                setLoading(false);
            }
        };

        loadPlants();
    }, []);

    const handleDelete = async (targetId: string) => {
        if (!targetId || targetId === "undefined" || targetId === "[id]") {
            toast.error("Invalid dynamic plant identifier code.");
            return;
        }

        const confirmDelete = window.confirm("Delete this plant?");
        if (!confirmDelete) return;

        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            const res = await deletePlant(targetId, token);
            toast.success(res?.message || "Plant deleted successfully!");

            setPlants((prev) =>
                prev.filter((p) => {
                    const currentId = p._id || p.id || "";
                    return currentId !== targetId;
                })
            );
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data?.message || "Delete failed.");
            } else {
                toast.error("Something went wrong.");
            }
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-[40vh] items-center justify-center">
                <h2 className="text-2xl font-semibold text-slate-600">Loading your garden...</h2>
            </div>
        );
    }

    if (plants.length === 0) {
        return (
            <div className="py-24 text-center">
                <h2 className="text-3xl font-bold">No Plants Added Yet</h2>
                <p className="mt-3 text-slate-500">Start by adding your first plant.</p>
                <Link
                    href="/dashboard/add-plant"
                    className="mt-8 inline-block rounded-xl bg-emerald-600 px-6 py-3 text-white hover:bg-emerald-700"
                >
                    Add Plant
                </Link>
            </div>
        );
    }

    return (
        <>
            <h1 className="mb-8 text-4xl font-bold">Manage Plants</h1>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {plants.map((plant, index) => {
                    const plantId = plant._id || plant.id || "";
                    const plantTitle = plant.title || plant.name || `Unnamed Plant ${index + 1}`;

                    return (
                        <div
                            key={plantId || String(index)}
                            className="overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-100"
                        >
                            <Image
                                src={plant.image || "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=500"}
                                alt={plantTitle}
                                width={500}
                                height={350}
                                className="h-60 w-full object-cover"
                            />

                            <div className="space-y-3 p-6">
                                <h2 className="text-2xl font-bold text-slate-800">{plantTitle}</h2>
                                <p className="text-slate-600"><strong>Category:</strong> {plant.category || "Uncategorized"}</p>
                                <p className="text-slate-600"><strong>Price:</strong> ${plant.price ?? 0}</p>
                                <p className="text-slate-600"><strong>Stock:</strong> {plant.stock ?? 0}</p>
                                <p className="text-slate-600"><strong>Care:</strong> {plant.careLevel || "Beginner"}</p>

                                <div className="flex gap-3 pt-4">
                                    <Link
                                        href={`/dashboard/edit-plant/${plantId}`}
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700 transition"
                                    >
                                        <FaEdit /> Edit
                                    </Link>

                                    <button
                                        onClick={() => handleDelete(plantId)}
                                        className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-white hover:bg-red-700 transition"
                                    >
                                        <FaTrash /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}