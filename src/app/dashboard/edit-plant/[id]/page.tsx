"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import api from "@/services/api"; // Importing base instance to handle fallback verification safely
import { getPlantById, updatePlant } from "@/services/plant.service";

interface PageProps {
    params: Promise<{ id: string }>;
}

interface EditablePlantShape {
    title?: string;
    name?: string;
    category?: string;
    price?: number;
    stock?: number;
    careLevel?: string;
    image?: string;
    description?: string;
}

interface UpdateResponseShape {
    success?: boolean;
    message?: string;
    status?: string;
    data?: unknown;
}

export default function EditPlantPage({ params }: PageProps) {
    const resolvedParams = use(params);
    const id = resolvedParams?.id || "";

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
            if (!id || id === "undefined" || id === "[id]") {
                return;
            }

            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("Authentication missing.");
                setLoading(false);
                return;
            }

            try {
                let responseData: unknown = null;

                try {
                    // Try Route Option A: Standard CRUD Endpoint Path
                    responseData = await getPlantById(id, token);
                } catch (primaryError) {
                    const isAxios404 = primaryError instanceof AxiosError && primaryError.response?.status === 404;

                    if (isAxios404) {
                        console.warn(`Endpoint /plants/${id} returned 404. Attempting public path routing fallback...`);
                        // Try Route Option B: Public Path Endpoint Fallback matching backend structure
                        const publicRes = await api.get(`/public/plants/${id}`, {
                            headers: { Authorization: `Bearer ${token}` }
                        });
                        responseData = publicRes.data?.data || publicRes.data;
                    } else {
                        throw primaryError;
                    }
                }

                const data = (responseData as unknown) as EditablePlantShape;

                if (!data) {
                    throw new Error("No data returned from api endpoints.");
                }

                setTitle(data.title || data.name || "");
                setCategory(data.category || "");
                setPrice(String(data.price ?? 0));
                setStock(String(data.stock ?? 0));
                setCareLevel(data.careLevel || "Beginner");
                setImage(data.image || "");
                setDescription(data.description || "");
            } catch (error) {
                console.error("Error inside fetchPlantDetails:", error);
                toast.error("Failed to load plant details from server endpoints.");
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
        if (!token) {
            toast.error("Authentication token missing.");
            setSubmitting(false);
            return;
        }

        try {
            const rawRes = await updatePlant(id, token, {
                title,
                category,
                price: Number(price),
                stock: Number(stock),
                careLevel,
                image,
                description,
            });

            const res = (rawRes as unknown) as UpdateResponseShape;

            if (res && (res.success || res.status === "success" || res.data)) {
                toast.success("Plant updated successfully!");
                router.push("/dashboard/manage-plants");
            } else {
                toast.error(res?.message || "Update failed.");
            }
        } catch (error) {
            console.error("Error inside handleSubmit:", error);
            if (error instanceof AxiosError) {
                toast.error(error.response?.data?.message || "Update request failed.");
            } else {
                toast.error("Something went wrong updating the plant.");
            }
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-[40vh] items-center justify-center">
                <div className="text-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent mx-auto"></div>
                    <h2 className="mt-4 text-xl font-semibold text-slate-600">Loading Plant Details...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-md border border-slate-100">
            <h1 className="mb-6 text-3xl font-bold text-slate-900">Edit Plant</h1>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-semibold text-slate-700">Plant Title</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 w-full rounded-xl border p-3 focus:border-emerald-500 focus:outline-none text-slate-900"
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
                            className="mt-1 w-full rounded-xl border p-3 focus:border-emerald-500 focus:outline-none text-slate-900"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700">Care Level</label>
                        <select
                            value={careLevel}
                            onChange={(e) => setCareLevel(e.target.value)}
                            className="mt-1 w-full rounded-xl border bg-white p-3 focus:border-emerald-500 focus:outline-none text-slate-900"
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
                            className="mt-1 w-full rounded-xl border p-3 focus:border-emerald-500 focus:outline-none text-slate-900"
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
                            className="mt-1 w-full rounded-xl border p-3 focus:border-emerald-500 focus:outline-none text-slate-900"
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
                        className="mt-1 w-full rounded-xl border p-3 focus:border-emerald-500 focus:outline-none text-slate-900"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700">Description</label>
                    <textarea
                        required
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 w-full rounded-xl border p-3 focus:border-emerald-500 focus:outline-none text-slate-900"
                    />
                </div>

                <div className="flex gap-4 pt-4">
                    <button
                        type="button"
                        onClick={() => router.push("/dashboard/manage-plants")}
                        className="flex-1 rounded-xl border border-slate-200 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-50 cursor-pointer"
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