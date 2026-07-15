"use client";

import ProtectedRoute from "@/components/ProtectedRoutes";


export default function ProfilePage() {
    const user =
        typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("user") || "{}")
            : {};

    return (
        <ProtectedRoute role="user">
            <div className="max-w-3xl">

                <h1 className="mb-8 text-3xl font-bold">
                    My Profile
                </h1>

                <div className="rounded-3xl bg-white p-8 shadow">

                    <div className="flex items-center gap-6">

                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-4xl font-bold text-emerald-600">
                            {user.name?.charAt(0)}
                        </div>

                        <div>

                            <h2 className="text-2xl font-bold">
                                {user.name}
                            </h2>

                            <p className="text-slate-500">
                                {user.email}
                            </p>

                            <span className="mt-3 inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700 capitalize">
                                {user.role}
                            </span>

                        </div>

                    </div>

                </div>

            </div>
        </ProtectedRoute>
    );
}