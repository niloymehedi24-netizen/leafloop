"use client";

import Link from "next/link";
import React from "react";

export default function NotFound() {
    return (
        <div className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 py-12 text-center">
            {/* Visual Ambient Background Decor */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-50/60 blur-3xl" />
                <div className="absolute left-[40%] top-[35%] h-62.5 w-62.5 rounded-full bg-teal-50/40 blur-2xl" />
            </div>

            <div className="max-w-md w-full space-y-6">
                {/* Modern Stylized Botanical Plant Pot SVG Illustration */}
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-3xl bg-emerald-50/40 p-4 border border-emerald-100/50 backdrop-blur-sm shadow-inner animate-pulse">
                    <svg
                        className="h-24 w-24 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {/* Left Leaf Stem */}
                        <path d="M12 22V12M12 12C9.5 9.5 5 10 5 10C5 10 6 7 9.5 7C12 7 12 12 12 12Z" fill="currentColor" fillOpacity="0.1" />
                        {/* Right Leaf Stem */}
                        <path d="M12 12C14.5 9.5 19 10 19 10C19 10 18 7 14.5 7C12 7 12 12 12 12Z" fill="currentColor" fillOpacity="0.1" />
                        {/* Top Center Leaf Sprouts */}
                        <path d="M12 7C10.5 5 12 2 12 2C12 2 13.5 5 12 7Z" fill="currentColor" fillOpacity="0.2" />
                        {/* Plant Pot Bottom Structure */}
                        <path d="M7 16L8.5 21H15.5L17 16H7Z" stroke="currentColor" strokeWidth="2" />
                        <path d="M6 16H18" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </div>

                {/* Status Identifiers */}
                <div className="space-y-2">
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 tracking-wider uppercase">
                        Error 404
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        This plot is empty
                    </h1>
                    <p className="mt-2 text-base text-slate-500 leading-relaxed">
                        The plant profile or dashboard workspace node you are looking for has been uprooted, moved, or never sprouted here.
                    </p>
                </div>

                {/* Clean Navigational Quick-Paths Actions Panel */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/dashboard"
                        className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/10 hover:bg-emerald-700 active:scale-[0.98] transition-all duration-200"
                    >
                        Return to Dashboard
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 active:scale-[0.98] transition-all duration-200"
                    >
                        Go to Homepage
                    </Link>
                </div>

                {/* Helpful Footnote Support Hint */}
                <div className="pt-8 text-xs text-slate-400">
                    Think this is a system error? Please notify{" "}
                    <span className="font-medium text-slate-600 underline cursor-pointer hover:text-emerald-600 transition">
                        LeafLoop Botanicals Support
                    </span>
                </div>
            </div>
        </div>
    );
}