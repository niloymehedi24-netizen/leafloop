"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface Props {
    children: ReactNode;
    role?: "admin" | "user";
}

export default function ProtectedRoute({
    children,
    role,
}: Props) {
    const router = useRouter();

    if (typeof window === "undefined") {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent"></div>
            </div>
        );
    }

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (!token) {
        router.replace("/login");

        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent"></div>
            </div>
        );
    }

    if (role && user.role !== role) {
        router.replace("/");

        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent"></div>
            </div>
        );
    }

    return <>{children}</>;
}