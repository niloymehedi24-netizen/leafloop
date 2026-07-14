import Image from "next/image";
import Link from "next/link";
import { FaLeaf } from "react-icons/fa";
import { Plant } from "@/services/plant.service";

interface PlantCardProps {
    plant: Plant;
}

export default function PlantCard({
    plant,
}: PlantCardProps) {
    return (
        <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={plant.image}
                    alt={plant.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                />
            </div>

            <div className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-slate-900">
                        {plant.title}
                    </h2>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                        {plant.category}
                    </span>
                </div>

                <p className="flex items-center gap-2 text-slate-600">
                    <FaLeaf className="text-emerald-600" />
                    {plant.careLevel} Care
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-emerald-600">
                        ${plant.price}
                    </span>

                    <span className="text-sm text-slate-500">
                        Stock: {plant.stock}
                    </span>
                </div>

                <Link
                    href={`/plants/${plant._id}`}
                    className="block rounded-xl bg-emerald-600 py-3 text-center font-semibold text-white transition hover:bg-emerald-700"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}