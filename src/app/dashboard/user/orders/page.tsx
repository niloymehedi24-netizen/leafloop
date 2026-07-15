"use client";

import ProtectedRoute from "@/components/ProtectedRoutes";


export default function OrdersPage() {
    return (
        <ProtectedRoute role="user">
            <div>

                <h1 className="mb-8 text-3xl font-bold">
                    My Orders
                </h1>

                <div className="rounded-3xl bg-white p-16 text-center shadow">

                    <div className="text-6xl">
                        📦
                    </div>

                    <h2 className="mt-5 text-2xl font-bold">
                        No Orders Yet
                    </h2>

                    <p className="mt-3 text-slate-500">
                        You have not purchased any plants yet.
                    </p>

                </div>

            </div>
        </ProtectedRoute>
    );
}