"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/shared/Container";

export default function Hero() {
    return (
        <section className="bg-linear-to-b from-emerald-50 to-white">
            <Container>
                <div className="grid min-h-[85vh] items-center gap-16 py-16 lg:grid-cols-2">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                            🌱 🌿 Trusted by 10,000+ Plant Lovers
                        </span>

                        <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
                            Bring Nature Into Your Home
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Discover healthy indoor and outdoor plants carefully selected for
                            every home. Whether you are just starting your plant journey or
                            already a plant enthusiast, LeafLoop helps you find your perfect
                            green companion.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/explore"
                                className="rounded-xl bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
                            >
                                Explore Plants
                            </Link>

                            <Link
                                href="/about"
                                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-600"
                            >
                                Learn More
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        className="relative flex justify-center"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        <Image
                            src="/images/hero-plant.jpg"
                            alt="Indoor plant"
                            width={550}
                            height={650}
                            priority
                            className="rounded-[40px] object-cover shadow-2xl"
                        />

                        <motion.div
                            className="absolute bottom-6 left-0 rounded-2xl bg-white p-5 shadow-xl"
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                delay: 0.4,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <p className="text-sm text-slate-500">
                                🌿 Plants Available
                            </p>

                            <h3 className="text-3xl font-bold text-emerald-600">
                                500+
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                Healthy plants ready to grow
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}