"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    FaLeaf,
    FaPlusCircle,
    FaList,
    FaHome,
    FaUser,
    FaHeart,
    FaBoxOpen,
    FaSignOutAlt,
} from "react-icons/fa";

interface DashboardLayoutProps {
    children: ReactNode;
}

interface LoggedUser {
    name: string;
    email: string;
    role: "admin" | "user";
}

export default function DashboardLayout({
    children,
}: DashboardLayoutProps) {

    const pathname = usePathname();

    const [user] = useState<LoggedUser | null>(() => {
        if (typeof window === "undefined") return null;

        const storedUser = localStorage.getItem("user");

        return storedUser ? JSON.parse(storedUser) : null;
    });

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href = "/";
    };

    const linkStyle = (href: string) =>
        `flex items-center gap-3 rounded-xl p-3 transition
        ${pathname === href
            ? "bg-emerald-600 text-white"
            : "hover:bg-emerald-50 text-slate-700"
        }`;

    return (
        <section className="min-h-screen bg-slate-100">

            <div className="mx-auto flex max-w-7xl">

                {/* ================= Sidebar ================= */}

                <aside className="hidden min-h-screen w-72 flex-col justify-between bg-white shadow-lg lg:flex">

                    <div>

                        {/* Logo */}

                        <div className="border-b p-8">

                            <div className="flex items-center gap-3">

                                <FaLeaf className="text-3xl text-emerald-600" />

                                <div>
                                    <h2 className="text-2xl font-bold">
                                        LeafLoop
                                    </h2>

                                    <p className="text-sm text-slate-500">
                                        Dashboard
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* User Info */}

                        <div className="border-b px-6 py-5">

                            <p className="font-semibold text-slate-900">
                                {user?.name}
                            </p>

                            <p className="text-sm text-slate-500">
                                {user?.email}
                            </p>

                            <span className="mt-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold capitalize text-emerald-700">
                                {user?.role}
                            </span>

                        </div>

                        {/* Navigation */}

                        <nav className="space-y-2 p-6">

                            <Link
                                href="/dashboard"
                                className={linkStyle("/dashboard")}
                            >
                                <FaHome />

                                Dashboard
                            </Link>

                            {/* ================= ADMIN ================= */}

                            {user?.role === "admin" && (
                                <>

                                    <Link
                                        href="/dashboard/add-plant"
                                        className={linkStyle("/dashboard/add-plant")}
                                    >
                                        <FaPlusCircle />

                                        Add Plant
                                    </Link>

                                    <Link
                                        href="/dashboard/manage-plants"
                                        className={linkStyle("/dashboard/manage-plants")}
                                    >
                                        <FaList />

                                        Manage Plants
                                    </Link>

                                </>
                            )}

                            {/* ================= USER ================= */}

                            {user?.role === "user" && (
                                <>

                                    <Link
                                        href="/dashboard/profile"
                                        className={linkStyle("/dashboard/profile")}
                                    >
                                        <FaUser />

                                        My Profile
                                    </Link>

                                    <Link
                                        href="/dashboard/orders"
                                        className={linkStyle("/dashboard/orders")}
                                    >
                                        <FaBoxOpen />

                                        My Orders
                                    </Link>

                                    <Link
                                        href="/dashboard/wishlist"
                                        className={linkStyle("/dashboard/wishlist")}
                                    >
                                        <FaHeart />

                                        Wishlist
                                    </Link>

                                </>
                            )}

                        </nav>

                    </div>

                    {/* Logout */}

                    <div className="border-t p-6">

                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600"
                        >
                            <FaSignOutAlt />

                            Logout
                        </button>

                    </div>

                </aside>

                {/* ================= Main Content ================= */}

                <main className="flex-1 p-8">

                    {children}

                </main>

            </div>

        </section>
    );
}