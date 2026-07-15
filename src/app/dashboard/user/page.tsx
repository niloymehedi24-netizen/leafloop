"use client";

import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoutes";

export default function UserDashboard() {
    const user =
        typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("user") || "{}")
            : {};

    return (
        <ProtectedRoute role="user">
            <div className="space-y-8">

                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">
                        Welcome back 👋
                    </h1>

                    <p className="mt-2 text-lg text-slate-500">
                        {user.name}
                    </p>
                </div>

                {/* Statistics */}
                <div className="grid gap-6 md:grid-cols-3">

                    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                        <p className="text-sm font-medium text-slate-500">
                            Total Orders
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-emerald-600">
                            0
                        </h2>

                        <p className="mt-2 text-sm text-slate-400">
                            Purchased plants
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                        <p className="text-sm font-medium text-slate-500">
                            Wishlist
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-pink-500">
                            0
                        </h2>

                        <p className="mt-2 text-sm text-slate-400">
                            Saved plants
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                        <p className="text-sm font-medium text-slate-500">
                            Account Type
                        </p>

                        <h2 className="mt-3 text-2xl font-bold capitalize text-slate-900">
                            {user.role}
                        </h2>

                        <p className="mt-2 text-sm text-slate-400">
                            Current access level
                        </p>
                    </div>

                </div>

                {/* Quick Actions */}
                <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">

                    <h2 className="mb-6 text-2xl font-bold text-slate-900">
                        Quick Actions
                    </h2>

                    <div className="grid gap-5 md:grid-cols-3">

                        <Link
                            href="/explore"
                            className="rounded-2xl border border-slate-200 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-md"
                        >
                            <div className="text-4xl">
                                🌿
                            </div>

                            <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                Browse Plants
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                Explore all available indoor and outdoor plants.
                            </p>
                        </Link>

                        <Link
                            href="/dashboard/user/orders"
                            className="rounded-2xl border border-slate-200 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-md"
                        >
                            <div className="text-4xl">
                                📦
                            </div>

                            <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                My Orders
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                Track your purchased plants and order history.
                            </p>
                        </Link>

                        <Link
                            href="/dashboard/user/profile"
                            className="rounded-2xl border border-slate-200 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-md"
                        >
                            <div className="text-4xl">
                                👤
                            </div>

                            <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                My Profile
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                View and manage your account information.
                            </p>
                        </Link>

                    </div>

                </div>

            </div>
        </ProtectedRoute>
    );
}