"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { addPlant } from "@/services/plant.service";

export default function AddPlantPage() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");
    const [careLevel, setCareLevel] = useState("Easy");
    const [description, setDescription] = useState("");

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (
            !title ||
            !category ||
            !price ||
            !stock ||
            !image ||
            !description
        ) {
            return toast.error("Please fill in all fields.");
        }

        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");

        if (!token || !user) {
            return toast.error("Please login first.");
        }

        const parsedUser = JSON.parse(user);

        try {
            setLoading(true);

            const res = await addPlant(
                {
                    title,
                    category,
                    price: Number(price),
                    stock: Number(stock),
                    image,
                    description,
                    careLevel: careLevel as "Easy" | "Medium" | "Hard",
                    sellerName: parsedUser.name,
                },
                token
            );

            toast.success(res.message);

            setTimeout(() => {
                router.push("/dashboard/manage-plants");
            }, 1200);
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                toast.error(
                    error.response?.data?.message || "Failed to add plant."
                );
            } else {
                toast.error("Something went wrong.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="mx-auto max-w-5xl">
            <div className="rounded-3xl bg-white p-10 shadow-xl">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-slate-900">
                        Add New Plant
                    </h1>

                    <p className="mt-3 text-slate-600">
                        Add a healthy plant to your LeafLoop marketplace.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid gap-6 md:grid-cols-2"
                >
                    {/* Title */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Plant Title
                        </label>

                        <input
                            type="text"
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)
                            }
                            placeholder="Monstera Deliciosa"
                            className="w-full rounded-xl border p-3 outline-none focus:border-emerald-500"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Category
                        </label>

                        <select
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                            className="w-full rounded-xl border p-3 outline-none focus:border-emerald-500"
                        >
                            <option value="">Select Category</option>

                            <option>Indoor</option>

                            <option>Outdoor</option>

                            <option>Succulent</option>

                            <option>Flowering</option>

                            <option>Air Purifying</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Price ($)
                        </label>

                        <input
                            type="number"
                            value={price}
                            onChange={(e) =>
                                setPrice(e.target.value)
                            }
                            placeholder="25"
                            className="w-full rounded-xl border p-3 outline-none focus:border-emerald-500"
                        />
                    </div>

                    {/* Stock */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Stock
                        </label>

                        <input
                            type="number"
                            value={stock}
                            onChange={(e) =>
                                setStock(e.target.value)
                            }
                            placeholder="10"
                            className="w-full rounded-xl border p-3 outline-none focus:border-emerald-500"
                        />
                    </div>

                    {/* Image */}
                    <div className="md:col-span-2">
                        <label className="mb-2 block font-medium">
                            Image URL
                        </label>

                        <input
                            type="text"
                            value={image}
                            onChange={(e) =>
                                setImage(e.target.value)
                            }
                            placeholder="https://..."
                            className="w-full rounded-xl border p-3 outline-none focus:border-emerald-500"
                        />
                    </div>

                    {/* Care Level */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Care Level
                        </label>

                        <select
                            value={careLevel}
                            onChange={(e) =>
                                setCareLevel(e.target.value)
                            }
                            className="w-full rounded-xl border p-3 outline-none focus:border-emerald-500"
                        >
                            <option>Easy</option>

                            <option>Medium</option>

                            <option>Hard</option>
                        </select>
                    </div>

                    {/* Seller */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Seller
                        </label>

                        <input
                            type="text"
                            disabled
                            value={
                                typeof window !== "undefined"
                                    ? JSON.parse(
                                        localStorage.getItem("user") || "{}"
                                    ).name || ""
                                    : ""
                            }
                            className="w-full cursor-not-allowed rounded-xl bg-slate-100 p-3"
                        />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="mb-2 block font-medium">
                            Description
                        </label>

                        <textarea
                            rows={6}
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                            placeholder="Write about the plant..."
                            className="w-full rounded-xl border p-3 outline-none focus:border-emerald-500"
                        />
                    </div>

                    {/* Button */}
                    <div className="md:col-span-2">
                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full cursor-pointer rounded-xl bg-emerald-600 py-4 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-300"
                        >
                            {loading ? "Adding Plant..." : "Add Plant"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}