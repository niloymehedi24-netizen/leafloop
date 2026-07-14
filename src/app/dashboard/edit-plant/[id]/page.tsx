"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { getPlantById, updatePlant } from "@/services/plant.service";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function EditPlantPage({ params }: PageProps) {
    const { id } = use(params);
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    // Form States
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [careLevel, setCareLevel] = useState("Beginner");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const fetchPlantDetails = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("Authentication missing.");
                return;
            }

            try {
                const plant = await getPlantById(id, token);
                setTitle(plant.title);
                setCategory(plant.category);
                setPrice(String(plant.price));
                setStock(String(plant.stock));
                setCareLevel(plant.careLevel);
                setImage(plant.image);
                setDescription(plant.description);
            } catch {
                toast.error("Failed to load plant details.");
            } finally {
                setLoading(false);
            }
        };

        fetchPlantDetails();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            const res = await updatePlant(id, token, {
                title,
                category,
                price: Number(price),
                stock: Number(stock),
                careLevel,
                image,
                description,
            });

            if (res.success) {
                toast.success("Plant updated successfully!");
                router.push("/dashboard/manage-plants");
            } else {
                toast.error(res.message || "Update failed.");
            }
        } catch {
            toast.error("Something went wrong updating the plant.");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return <h2 className="text-center text-2xl font-semibold py-12">Loading Plant Details...</h2>;
    }

    return (
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-md">
            <h1 className="mb-6 text-3xl font-bold text-slate-900">Edit Plant</h1>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-slate-700">Plant Title</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 w-full rounded-xl border p-3 focus:border-emerald-500 focus:outline-none"
                    />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700">Category</label>
                        <input
                            type="text"
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="mt-1 w-full rounded-xl border p-3 focus:border-emerald-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700">Care Level</label>
                        <select
                            value={careLevel}
                            onChange={(e) => setCareLevel(e.target.value)}
                            className="mt-1 w-full rounded-xl border bg-white p-3 focus:border-emerald-500 focus:outline-none"
                        >
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Expert">Expert</option>
                        </select>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700">Price ($)</label>
                        <input
                            type="number"
                            required
                            min="0"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="mt-1 w-full rounded-xl border p-3 focus:border-emerald-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700">Stock Quantity</label>
                        <input
                            type="number"
                            required
                            min="0"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            className="mt-1 w-full rounded-xl border p-3 focus:border-emerald-500 focus:outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700">Image URL</label>
                    <input
                        type="url"
                        required
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="mt-1 w-full rounded-xl border p-3 focus:border-emerald-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700">Description</label>
                    <textarea
                        required
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 w-full rounded-xl border p-3 focus:border-emerald-500 focus:outline-none"
                    />
                </div>

                <div className="flex gap-4 pt-4">
                    <button
                        type="button"
                        onClick={() => router.push("/dashboard/manage-plants")}
                        className="flex-1 rounded-xl border border-slate-3xl py-3 text-center font-medium text-slate-700 transition hover:bg-slate-50 cursor-pointer"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="flex-1 rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:bg-emerald-400 cursor-pointer"
                    >
                        {submitting ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </form>
        </div>
    );
}