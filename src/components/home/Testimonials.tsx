"use client";

import Container from "@/components/shared/Container";
import { HiStar } from "react-icons/hi";

interface Testimonial {
    name: string;
    role: string;
    location: string;
    comment: string;
    stars: number;
    initials: string;
}

export default function Testimonials() {
    const reviews: Testimonial[] = [
        {
            name: "Anika Rahman",
            role: "Verified Buyer",
            location: "Gulshan, Dhaka",
            comment: "I was extremely worried about ordering a delicate Monstera online, but the packaging was absolutely incredible! It arrived completely secure, moist, and without a single bent leaf. Truly impressive service.",
            stars: 5,
            initials: "AR",
        },
        {
            name: "Sajid Hasan",
            role: "First-time Plant Parent",
            location: "Uttara, Dhaka",
            comment: "The lifetime support they promise is real. When my Snake Plant started getting spots, I contacted their customer service. They walked me through shifting my watering schedule, and now it is thriving again!",
            stars: 5,
            initials: "SH",
        },
        {
            name: "Farhana Yasmin",
            role: "Office Manager",
            location: "Dhanmondi, Dhaka",
            comment: "We ordered 12 low-light office plants for our meeting rooms. The LeafLoop team delivered them and shared simple printouts on watering guides for our housekeeping staff. Highly recommend for corporate setups.",
            stars: 5,
            initials: "FY",
        },
    ];

    return (
        <section className="bg-slate-50 py-24 border-t border-slate-200/50">
            <Container>
                {/* Title */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                        Reviews
                    </span>
                    <h2 className="mt-3 text-4xl font-bold text-slate-900 tracking-tight">
                        Loved by Plant Parents
                    </h2>
                    <p className="mt-4 text-slate-600">
                        Read stories and experiences from real community members who brought LeafLoop greenery into their spaces.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col justify-between bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm relative hover:shadow-md transition duration-300"
                        >
                            <div>
                                {/* Stars */}
                                <div className="flex gap-1 text-amber-400 mb-6 text-lg">
                                    {Array.from({ length: review.stars }).map((_, i) => (
                                        <HiStar key={i} />
                                    ))}
                                </div>

                                <p className="text-slate-600 leading-relaxed text-sm sm:text-base italic">
                                    {review.comment}
                                </p>
                            </div>

                            {/* Author Details */}
                            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-700 border border-emerald-100">
                                    {review.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                        {review.role} • <span className="text-slate-400">{review.location}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}