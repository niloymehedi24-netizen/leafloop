"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import { HiOutlineMail, HiOutlinePhone, HiOutlineMap } from "react-icons/hi";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Contact submission:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <main className="bg-slate-50 min-h-screen py-20">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                        Support
                    </span>
                    <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                        We would Love to Hear From You
                    </h1>
                    <p className="mt-4 text-slate-600">
                        Have questions about care instructions, order delivery, or selecting the perfect plant? Drop us a message.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
                    {/* Informational Left Sidebar */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm space-y-8">
                            <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>

                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
                                    <HiOutlineMail />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800">Email Us</h3>
                                    <p className="text-sm text-slate-500 mt-1">Our support team replies within 24 hours.</p>
                                    <a href="mailto:support@leafloop.com" className="text-sm font-semibold text-emerald-600 hover:underline mt-2 inline-block">
                                        support@leafloop.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
                                    <HiOutlinePhone />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800">Call Us</h3>
                                    <p className="text-sm text-slate-500 mt-1">Mon-Fri from 9am to 6pm.</p>
                                    <p className="text-sm font-semibold text-slate-800 mt-2">+880 1700-000000</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
                                    <HiOutlineMap />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800">Our HQ Location</h3>
                                    <p className="text-sm text-slate-500 mt-1">Come say hi or schedule pick-ups.</p>
                                    <p className="text-sm font-semibold text-slate-800 mt-2">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Right Contact Form */}
                    <div className="lg:col-span-3 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/60 shadow-sm">
                        {submitted ? (
                            <div className="py-12 text-center">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-3xl mb-4">
                                    ✓
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully</h3>
                                <p className="mt-2 text-slate-600 max-w-sm mx-auto">
                                    Thank you for reaching out! Our botanical experts will get back to you shortly.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 font-semibold text-emerald-600 hover:underline cursor-pointer"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-slate-700">Your Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 bg-slate-50/50"
                                            placeholder="Jane Doe"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-slate-700">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 bg-slate-50/50"
                                            placeholder="jane@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-slate-700">Subject</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 bg-slate-50/50"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-slate-700">Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 bg-slate-50/50 resize-none"
                                        placeholder="Describe your inquiry in detail..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-emerald-600 px-5 py-4 font-semibold text-white transition hover:bg-emerald-700 cursor-pointer text-center"
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </Container>
        </main>
    );
}