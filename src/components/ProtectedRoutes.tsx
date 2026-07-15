"use client";

import { ReactNode, useMemo } from "react";
import { useRouter } from "next/navigation";

interface Props {
    children: ReactNode;
    role?: "admin" | "user";
}

export default function ProtectedRoute({ children, role }: Props) {
    const router = useRouter();

    const authStatus = useMemo(() => {
        if (typeof window === "undefined") return { loading: true, authorized: false };

        const token = localStorage.getItem("token");
        const userStr = localStorage.getItem("user");

        if (!token || !userStr) {
            router.replace("/login");
            return { loading: false, authorized: false };
        }

        try {
            const user = JSON.parse(userStr);
            if (role && user?.role !== role) {
                router.replace("/");
                return { loading: false, authorized: false };
            }
            return { loading: false, authorized: true };
        } catch (e) {
            router.replace("/login");
            return { loading: false, authorized: false };
        }
    }, [router, role]);

    if (authStatus.loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent"></div>
            </div>
        );
    }

    return authStatus.authorized ? <>{children}</> : null;
}