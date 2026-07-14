"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import { HiOutlineMail, HiOutlineSparkles, HiCheck } from "react-icons/hi";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1200));

        setStatus("success");
        setEmail("");
    };

    return (
        <section className="bg-slate-900 py-20 relative overflow-hidden">
            {/* Decorative ambient gradient spots */}
            <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />

            <Container>
                <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">

                    {/* Left Column: Value Proposition */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                            <HiOutlineSparkles className="text-sm" /> Join the LeafLoop Club
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                            Get Seasonal Plant Care Tips & Special Offers
                        </h2>

                        <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
                            No spam. Just professional seasonal watering schedules, propagation guides, and occasional early-bird discounts exclusive to our email list.
                        </p>

                        {/* Quick Benefits list */}
                        <div className="grid gap-4 sm:grid-cols-2 pt-2">
                            <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                                    <HiCheck />
                                </span>
                                Weekly Botanical Care Guides
                            </div>
                            <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                                    <HiCheck />
                                </span>
                                10% Off Your First Purchase
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interaction Form */}
                    <div className="lg:col-span-5">
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
                            {status === "success" ? (
                                <div className="text-center py-6">
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-2xl mb-4">
                                        <HiCheck />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Check Your Inbox!</h3>
                                    <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                                        You have successfully subscribed to our newsletter. Check your email to grab your 10% discount code!
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-6 text-sm font-semibold text-emerald-400 hover:underline cursor-pointer"
                                    >
                                        Subscribe another email
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="space-y-4">
                                    <h3 className="text-lg font-bold text-white mb-1">
                                        Subscribe to our Newsletter
                                    </h3>
                                    <p className="text-xs text-slate-400 mb-4">
                                        Enter your email to receive weekly updates on care and arrivals.
                                    </p>

                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-xl text-slate-500">
                                            <HiOutlineMail />
                                        </div>
                                        <input
                                            type="email"
                                            required
                                            disabled={status === "loading"}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email address"
                                            className="w-full rounded-xl border border-slate-800 bg-slate-900/60 py-4 pl-12 pr-4 text-white placeholder-slate-500 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 disabled:opacity-60"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="relative w-full rounded-xl bg-emerald-600 py-4 font-semibold text-white transition hover:bg-emerald-500 disabled:bg-emerald-700/60 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center"
                                    >
                                        {status === "loading" ? (
                                            <span className="flex items-center gap-2">
                                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                                Subscribing...
                                            </span>
                                        ) : (
                                            "Subscribe Now"
                                        )}
                                    </button>

                                    <p className="text-center text-[10px] text-slate-500 mt-3 leading-relaxed">
                                        By clicking subscribe, you agree to our Terms of Service. We respect your privacy and you can unsubscribe at any time.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}