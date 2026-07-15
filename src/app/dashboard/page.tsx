"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardRedirect() {
    const router = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");

        if (user.role === "admin") {
            router.replace("/dashboard/admin");
        } else {
            router.replace("/dashboard/user");
        }
    }, [router]);

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent"></div>
        </div>
    );
}