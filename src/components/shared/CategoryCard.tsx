import { Category } from "@/types/category";

interface CategoryCardProps {
    category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
    // 1. Assign it to a capitalized variable name
    const IconComponent = category.icon;

    return (
        <div className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                {/* 2. Render it directly as a tag here */}
                <IconComponent className="text-3xl" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                {category.name}
            </h3>

            <p className="mt-2 text-sm font-medium text-slate-500">
                {category.totalPlants} Plants
            </p>
        </div>
    );
}