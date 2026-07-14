"use client";

import React, { useEffect, useState, useMemo } from "react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    Legend
} from "recharts";
import { getMyPlants, Plant } from "@/services/plant.service";

// ========================================================
// Strict Interface Specifications for Stable Rendering
// ========================================================
interface CategoryMetric {
    name: string;
    value: number;
    color: string;
}

interface RevenueTimelineMetric {
    month: string;
    revenue: number;
}

interface TooltipPayloadItem {
    value: number;
    name: string;
    payload: RevenueTimelineMetric;
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: TooltipPayloadItem[];
}

const ChartTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const value = payload[0].value;
        return (
            <div className="rounded-xl border border-slate-100 bg-white/95 p-3 shadow-xl backdrop-blur-sm">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Gross Value</p>
                <p className="text-lg font-bold text-slate-900">${value.toLocaleString()}</p>
            </div>
        );
    }
    return null;
};

// Tailwind Emerald color palette collection for pie chart slices
const EMERALD_PALETTE = ["#059669", "#10B981", "#34D399", "#6EE7B7", "#A7F3D0"];

export default function DashboardPage() {
    const [plants, setPlants] = useState<Plant[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchDashboardData() {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError("Authentication token missing. Please log in.");
                    setLoading(false);
                    return;
                }

                const data = await getMyPlants(token);

                // Safely extract the plant array depending on response structure wrapper
                if (Array.isArray(data)) {
                    setPlants(data);
                } else if (data && typeof data === "object" && "plants" in data && Array.isArray(data.plants)) {
                    setPlants(data.plants);
                }
            } catch (err) {
                console.error("Failed to load dashboard metrics:", err);
                setError("Could not load dashboard data from server.");
            } finally {
                setLoading(false);
            }
        }

        fetchDashboardData();
    }, []);

    // ========================================================
    // DYNAMIC COMPUTATIONS: Compute Metrics from Live Plant Data
    // ========================================================
    const computedMetrics = useMemo(() => {
        let totalStockCount = 0;
        let totalValueSum = 0;
        const categoriesMap: Record<string, number> = {};

        plants.forEach((plant) => {
            const stockVal = Number(plant.stock) || 0;
            const priceVal = Number(plant.price) || 0;

            totalStockCount += stockVal;
            totalValueSum += priceVal * stockVal;

            // Dynamic Category grouping
            const cat = plant.category || "Uncategorized";
            categoriesMap[cat] = (categoriesMap[cat] || 0) + 1;
        });

        // Format category distribution array for Recharts Pie
        const categoryMetrics: CategoryMetric[] = Object.keys(categoriesMap).map((key, index) => ({
            name: key,
            value: categoriesMap[key],
            color: EMERALD_PALETTE[index % EMERALD_PALETTE.length],
        }));

        // Generate a contextual timeline trend line based on cumulative pricing value
        const mockTimelineData: RevenueTimelineMetric[] = [
            { month: "Jan", revenue: totalValueSum * 0.2 },
            { month: "Mar", revenue: totalValueSum * 0.5 },
            { month: "May", revenue: totalValueSum * 0.8 },
            { month: "Jul", revenue: totalValueSum },
        ];

        // Find highest stocked item name safely
        let topCategoryName = "None";
        if (categoryMetrics.length > 0) {
            const topCat = categoryMetrics.reduce((prev, current) => (prev.value > current.value ? prev : current));
            topCategoryName = topCat.name;
        }

        return {
            activeListings: plants.length,
            totalStock: totalStockCount,
            totalValue: `$${totalValueSum.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            categoryData: categoryMetrics,
            timelineData: mockTimelineData,
            topCategory: topCategoryName,
        };
    }, [plants]);

    if (loading) {
        return (
            <div className="flex h-64 items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="rounded-2xl bg-rose-50 p-6 text-rose-700">
                <h3 className="font-bold">Dashboard Error</h3>
                <p className="mt-1 text-sm">{error}</p>
            </div>
        );
    }

    return (
        <div className="space-y-8 pb-12">
            {/* Upper Context Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
                <p className="mt-1 text-sm text-slate-500">
                    Real-time product metrics and inventory allocation analytics.
                </p>
            </div>

            {/* KPI Cards Strip */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Inventory Value</p>
                    <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-2xl font-bold text-slate-900">{computedMetrics.totalValue}</span>
                        <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                            Live Assets
                        </span>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Active Listings</p>
                    <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-2xl font-bold text-slate-900">{computedMetrics.activeListings}</span>
                        <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                            Items Live
                        </span>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Total Stock Items</p>
                    <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-2xl font-bold text-slate-900">{computedMetrics.totalStock}</span>
                        <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600">
                            In Warehouse
                        </span>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Primary Niche</p>
                    <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-lg font-bold text-slate-900 truncate max-w-40 block">{computedMetrics.topCategory}</span>
                        <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                            Top Focus
                        </span>
                    </div>
                </div>
            </div>

            {/* Charts Presentation Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Main Area Graph */}
                <div className="lg:col-span-2 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <div className="mb-4">
                        <h2 className="text-base font-bold text-slate-900">Asset Growth Vector</h2>
                        <p className="text-xs text-slate-400">Progression map based on active shop inventory values</p>
                    </div>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={computedMetrics.timelineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="month" stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                                <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
                                <Tooltip content={<ChartTooltip />} />
                                <Area type="monotone" dataKey="revenue" stroke="#059669" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevenue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Categories Share Ring */}
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <div className="mb-4">
                        <h2 className="text-base font-bold text-slate-900">Inventory Allocation</h2>
                        <p className="text-xs text-slate-400">Distribution across plant categories</p>
                    </div>
                    <div className="h-72 w-full flex flex-col justify-between">
                        <div className="h-48 w-full">
                            {computedMetrics.categoryData.length === 0 ? (
                                <div className="flex h-full items-center justify-center text-xs text-slate-400">
                                    No categories found. Create a plant to populate metrics.
                                </div>
                            ) : (
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={computedMetrics.categoryData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={55}
                                            outerRadius={75}
                                            paddingAngle={4}
                                            dataKey="value"
                                        >
                                            {computedMetrics.categoryData.map((entry) => (
                                                <Cell key={`cell-${entry.name}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend verticalAlign="bottom" height={36} iconSize={10} iconType="circle" wrapperStyle={{ fontSize: "11px", color: "#475569" }} />
                                    </PieChart>
                                </ResponsiveContainer>
                            )}
                        </div>
                        <div className="border-t border-slate-50 pt-3 text-center text-xs text-slate-400 font-medium">
                            Most stocked: <span className="font-bold text-emerald-600">{computedMetrics.topCategory}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Live Plant Inventory Log Display */}
            <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
                <div className="p-6">
                    <h2 className="text-base font-bold text-slate-900">Active Inventory Items</h2>
                    <p className="text-xs text-slate-400">Snapshot table of current live store listings</p>
                </div>
                <div className="overflow-x-auto">
                    {plants.length === 0 ? (
                        <div className="p-6 text-center text-sm text-slate-400 border-t border-slate-100">
                            No active listings found. Try creating a plant item.
                        </div>
                    ) : (
                        <table className="w-full text-left text-sm text-slate-500">
                            <thead className="bg-slate-50/70 text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                                <tr>
                                    <th className="px-6 py-3.5">Plant Title</th>
                                    <th className="px-6 py-3.5">Category</th>
                                    <th className="px-6 py-3.5">Price</th>
                                    <th className="px-6 py-3.5">Stock Level</th>
                                    <th className="px-6 py-3.5 text-right">Care Level</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                                {plants.slice(0, 5).map((plant) => (
                                    <tr key={plant._id || plant.id} className="hover:bg-slate-50/50 transition">
                                        <td className="px-6 py-4 font-bold text-slate-900">{plant.title}</td>
                                        <td className="px-6 py-4">{plant.category}</td>
                                        <td className="px-6 py-4 font-semibold text-slate-900">${Number(plant.price).toFixed(2)}</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${(Number(plant.stock) || 0) > 5
                                                        ? "bg-emerald-50 text-emerald-700"
                                                        : "bg-amber-50 text-amber-700"
                                                    }`}
                                            >
                                                {plant.stock} left
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right text-xs text-slate-400">{plant.careLevel}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}