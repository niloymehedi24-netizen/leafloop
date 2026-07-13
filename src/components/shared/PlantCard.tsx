import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { Plant } from "@/types/plant";

interface PlantCardProps {
    plant: Plant;
}

export default function PlantCard({ plant }: PlantCardProps) {
    return (
        <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
                    {plant.category}
                </span>
            </div>

            {/* Content */}
            <div className="space-y-4 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                    {plant.name}
                </h3>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <FaStar className="text-amber-500" />

                        <span className="font-medium">
                            {plant.rating}
                        </span>
                    </div>

                    <span className="text-2xl font-bold text-emerald-600">
                        ${plant.price}
                    </span>
                </div>

                <Link
                    href={`/plants/${plant.id}`}
                    className="block rounded-xl bg-emerald-600 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}