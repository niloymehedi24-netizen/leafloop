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
    Plant,
} from "@/services/plant.service";

export default function ManagePlantsPage() {
    const [plants, setPlants] = useState<Plant[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Moving the function inside useEffect satisfies the hook dependency rules perfectly
        const loadPlants = async () => {
            const token = localStorage.getItem("token");

            if (!token) return;

            try {
                const data = await getMyPlants(token);
                setPlants(data);
            } catch {
                toast.error("Failed to load plants.");
            } finally {
                setLoading(false);
            }
        };

        loadPlants();
    }, []);

    const handleDelete = async (id: string) => {
        const confirmDelete = window.confirm(
            "Delete this plant?"
        );

        if (!confirmDelete) return;

        const token = localStorage.getItem("token");

        if (!token) return;

        try {
            const res = await deletePlant(id, token);

            toast.success(res.message);

            setPlants((prev) =>
                prev.filter((plant) => plant._id !== id)
            );
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                toast.error(
                    error.response?.data?.message ||
                    "Delete failed."
                );
            } else {
                toast.error("Something went wrong.");
            }
        }
    };

    if (loading) {
        return (
            <h2 className="text-center text-2xl font-semibold">
                Loading...
            </h2>
        );
    }

    if (plants.length === 0) {
        return (
            <div className="py-24 text-center">
                <h2 className="text-3xl font-bold">
                    No Plants Added Yet
                </h2>

                <p className="mt-3 text-slate-500">
                    Start by adding your first plant.
                </p>

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
            <h1 className="mb-8 text-4xl font-bold">
                Manage Plants
            </h1>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {plants.map((plant) => (
                    <div
                        key={plant._id}
                        className="overflow-hidden rounded-3xl bg-white shadow-lg"
                    >
                        <Image
                            src={plant.image}
                            alt={plant.title}
                            width={500}
                            height={350}
                            className="h-60 w-full object-cover"
                        />

                        <div className="space-y-3 p-6">
                            <h2 className="text-2xl font-bold">
                                {plant.title}
                            </h2>

                            <p>
                                <strong>Category:</strong>{" "}
                                {plant.category}
                            </p>

                            <p>
                                <strong>Price:</strong> ${plant.price}
                            </p>

                            <p>
                                <strong>Stock:</strong> {plant.stock}
                            </p>

                            <p>
                                <strong>Care:</strong>{" "}
                                {plant.careLevel}
                            </p>

                            <div className="flex gap-3 pt-4">
                                <Link
                                    href={`/dashboard/edit-plant/${plant._id}`}
                                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700"
                                >
                                    <FaEdit />
                                    Edit
                                </Link>

                                <button
                                    onClick={() =>
                                        handleDelete(plant._id)
                                    }
                                    className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-white hover:bg-red-700"
                                >
                                    <FaTrash />
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}