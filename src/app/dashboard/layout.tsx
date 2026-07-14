import { ReactNode } from "react";
import Link from "next/link";
import {
    FaLeaf,
    FaPlusCircle,
    FaList,
    FaHome,
} from "react-icons/fa";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    return (
        <section className="min-h-screen bg-slate-100">
            <div className="mx-auto flex max-w-7xl">

                {/* Sidebar */}

                <aside className="hidden min-h-screen w-72 bg-white shadow-lg lg:block">

                    <div className="border-b p-8">

                        <div className="flex items-center gap-2">

                            <FaLeaf className="text-3xl text-emerald-600" />

                            <h2 className="text-2xl font-bold">
                                LeafLoop
                            </h2>

                        </div>

                    </div>

                    <nav className="space-y-2 p-6">

                        <Link
                            href="/dashboard"
                            className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-emerald-50"
                        >
                            <FaHome />

                            Dashboard
                        </Link>

                        <Link
                            href="/dashboard/add-plant"
                            className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-emerald-50"
                        >
                            <FaPlusCircle />

                            Add Plant
                        </Link>

                        <Link
                            href="/dashboard/manage-plants"
                            className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-emerald-50"
                        >
                            <FaList />

                            Manage Plants
                        </Link>

                    </nav>

                </aside>

                {/* Main */}

                <main className="flex-1 p-8">
                    {children}
                </main>

            </div>
        </section>
    );
}