"use client";

import Container from "@/components/shared/Container";
import { HiOutlineShieldCheck, HiOutlineTruck, HiOutlineHeart, HiOutlineSparkles } from "react-icons/hi";

export default function WhyChooseUs() {
    const features = [
        {
            icon: <HiOutlineShieldCheck className="text-3xl text-emerald-600" />,
            title: "Secure Delivery Guarantee",
            desc: "If your plant gets damaged or dies during delivery, we will replace it for free. No long processing periods or complicated questions asked.",
        },
        {
            icon: <HiOutlineTruck className="text-3xl text-emerald-600" />,
            title: "Eco-Friendly Logistics",
            desc: "Our custom plant packaging is 100% biodegradable and designed to keep root systems intact and hydrated throughout transit.",
        },
        {
            icon: <HiOutlineHeart className="text-3xl text-emerald-600" />,
            title: "Handpicked Premium Quality",
            desc: "We don't do mass-production. Every single plant is inspected individually by our botanical partners before being packaged for you.",
        },
        {
            icon: <HiOutlineSparkles className="text-3xl text-emerald-600" />,
            title: "Lifetime Plant Care Support",
            desc: "Access detailed digital care sheets and consult directly with our plant care specialists anytime you notice yellowing leaves.",
        },
    ];

    return (
        <section className="bg-white py-24 border-t border-slate-200/50">
            <Container>
                <div className="grid gap-16 lg:grid-cols-12 lg:items-center">

                    {/* Sticky Left Intro */}
                    <div className="lg:col-span-5 space-y-6">
                        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                            Why LeafLoop
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                            A Better Way to Grow Your Urban Jungle
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                            We started LeafLoop to bridge the gap between quality-focused local growers and busy plant parents. We do not just ship plants; we guarantee they thrive in their new home.
                        </p>

                        <div className="pt-4">
                            <div className="inline-flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <div className="text-3xl">🌱</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Locally Sourced</h4>
                                    <p className="text-xs text-slate-500">Supporting growers across Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Features Grid */}
                    <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-2xl border border-slate-200/60 bg-white p-8 transition hover:border-emerald-500/30 hover:shadow-lg hover:-translate-y-1 duration-300"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 transition group-hover:bg-emerald-600 group-hover:text-white text-emerald-600">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition">
                                    {feature.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}