"use client";

import ProtectedRoute from "@/components/ProtectedRoutes";

export default function WishlistPage() {
    return (
        <ProtectedRoute role="user">

            <div>

                <h1 className="mb-8 text-3xl font-bold">
                    Wishlist
                </h1>

                <div className="rounded-3xl bg-white p-16 text-center shadow">

                    <div className="text-6xl">
                        ❤️
                    </div>

                    <h2 className="mt-5 text-2xl font-bold">
                        Wishlist Empty
                    </h2>

                    <p className="mt-3 text-slate-500">
                        Save your favorite plants here.
                    </p>

                </div>

            </div>

        </ProtectedRoute>
    );
}