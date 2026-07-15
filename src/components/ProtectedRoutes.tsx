"use client";

import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

interface Props {
    children: ReactNode;
    role?: "admin" | "user";
}

export default function ProtectedRoute({
    children,
    role,
}: Props) {

    const router = useRouter();

    useEffect(() => {

        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user") || "{}");

        // Not logged in
        if (!token) {
            router.replace("/login");
            return;
        }

        // Wrong role
        if (role && user.role !== role) {
            router.replace("/");
            return;
        }

    }, [router, role]);

    const token =
        typeof window !== "undefined"
            ? localStorage.getItem("token")
            : null;

    if (!token) {

        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent"></div>
            </div>
        );

    }

    return <>{children}</>;
}