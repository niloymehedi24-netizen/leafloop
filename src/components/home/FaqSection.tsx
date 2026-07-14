"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import { HiMinus, HiPlus } from "react-icons/hi";

interface FaqItem {
    question: string;
    answer: string;
}

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs: FaqItem[] = [
        {
            question: "How do you ensure plants survive during shipping?",
            answer: "We use specially designed, biodegradable packaging that secures the pot and root ball in place, preventing soil spillage even if the box is turned upside down. Most packages include moisture-retaining wraps to keep your plant hydrated for up to 7 days in transit.",
        },
        {
            question: "What happens if my plant arrives damaged?",
            answer: "Don't worry! We offer a 30-day Guarantee. If your plant arrives damaged, unhealthy, or dead, simply snap a picture and email it to support@leafloop.com or contact us within 30 days of arrival. We will ship out a fresh replacement immediately at zero extra cost.",
        },
        {
            question: "I am a beginner. Which plants do you recommend?",
            answer: "We highly recommend starting with our 'Easy' care level categories. Plants like the Snake Plant, ZZ Plant, or Pothos are incredibly resilient, clean your air efficiently, and can easily bounce back even if you occasionally forget to water them.",
        },
        {
            question: "Do you source your plants locally?",
            answer: "Yes! LeafLoop partners directly with family-owned local nurseries around Bangladesh. This ensures that you receive fresh, healthy plants that are already well-acclimated to our climate, while directly supporting local growers.",
        },
        {
            question: "How often should I water my new plant?",
            answer: "Watering frequencies depend heavily on the plant species and your room's light/humidity. As a golden rule: it is safer to underwater than to overwater. You should always stick your finger about 2 inches into the soil; if it feels completely dry, it's time to water!",
        },
    ];

    return (
        <section className="bg-slate-50 py-24 border-t border-slate-200/50">
            <Container>
                <div className="mx-auto max-w-3xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                            Questions & Answers
                        </span>
                        <h2 className="mt-3 text-4xl font-bold text-slate-900 tracking-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-slate-600">
                            Got questions about shipping, care guides, or plant returns? We have got answers.
                        </p>
                    </div>

                    {/* Accordion List */}
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition shadow-sm"
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="flex w-full items-center justify-between p-6 text-left font-semibold text-slate-900 outline-none transition hover:bg-slate-50/50"
                                    >
                                        <span className="pr-4 text-base sm:text-lg">{faq.question}</span>
                                        <span
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-transform duration-200`}
                                        >
                                            {isOpen ? <HiMinus /> : <HiPlus />}
                                        </span>
                                    </button>

                                    <div
                                        className={`transition-all duration-300 ease-in-out ${isOpen
                                                ? "max-h-60 border-t border-slate-100 opacity-100"
                                                : "max-h-0 opacity-0 pointer-events-none"
                                            }`}
                                    >
                                        <div className="p-6 text-sm sm:text-base leading-relaxed text-slate-600">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}