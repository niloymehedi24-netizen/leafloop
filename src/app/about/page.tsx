"use client";

import Container from "@/components/shared/Container";
import Link from "next/link";
import { FaLeaf, FaHandsHelping, FaGlobeAmericas } from "react-icons/fa";

export default function AboutPage() {
    const stats = [
        { label: "Healthy Plants Shipped", value: "15,000+" },
        { label: "Happy Plant Parents", value: "8,000+" },
        { label: "Sourced Local Nurseries", value: "45+" },
        { label: "Carbon Offset (lbs)", value: "12,500" },
    ];

    const values = [
        {
            icon: <FaLeaf className="text-3xl text-emerald-600" />,
            title: "Pure Sustainability",
            desc: "From biodegradable packaging to conscious shipping methods, we put mother earth at the center of every business decision.",
        },
        {
            icon: <FaHandsHelping className="text-3xl text-emerald-600" />,
            title: "Community Growth",
            desc: "We build direct bridges to local, family-owned nurseries, ensuring they get paid fairly while you get healthy, vibrant plants.",
        },
        {
            icon: <FaGlobeAmericas className="text-3xl text-emerald-600" />,
            title: "Nature Inside",
            desc: "We believe human environments thrive when paired with greenery. Our goal is to bring a breath of clean air to every workspace.",
        },
    ];

    return (
        <main className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-white py-20 border-b border-slate-100">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                                Our Story
                            </span>
                            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-none">
                                Connecting People Through Natural Greenery
                            </h1>
                            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                LeafLoop started with a simple belief: finding, caring for, and
                                living with plants should not be difficult. We work directly with
                                carefully vetted nurseries to bring beautiful, air-purifying, and
                                resilient plants straight to your doorstep.
                            </p>
                            <div className="mt-8">
                                <Link href="/explore">
                                    <span className="inline-block rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 cursor-pointer">
                                        Browse Our Collection
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="relative rounded-2xl bg-emerald-50 p-8 border border-emerald-100/40">
                            <div className="space-y-4">
                                <div className="h-4 w-1/3 rounded-md bg-emerald-200/50"></div>
                                <div className="h-10 w-3/4 rounded-md bg-emerald-200/40"></div>
                                <div className="h-24 rounded-md bg-emerald-100/30"></div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-emerald-100/60 blur-xl"></div>
                            <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-teal-100/40 blur-lg"></div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Statistics */}
            <section className="py-16">
                <Container>
                    <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-2xl border border-slate-200/60 text-center shadow-sm"
                            >
                                <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600">
                                    {stat.value}
                                </p>
                                <p className="mt-2 text-sm font-medium text-slate-500">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Values Section */}
            <section className="bg-white py-20 border-t border-slate-100">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                            Our Core Principles
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                            What Drives LeafLoop
                        </h2>
                    </div>

                    <div className="grid gap-10 md:grid-cols-3">
                        {values.map((val, idx) => (
                            <div
                                key={idx}
                                className="p-8 rounded-2xl bg-slate-50 border border-slate-200/50 transition hover:shadow-md"
                            >
                                <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-950 mb-3">
                                    {val.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}