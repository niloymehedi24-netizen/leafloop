import { Category } from "@/types/category";

interface CategoryCardProps {
    category: Category;
}

export default function CategoryCard({
    category,
}: CategoryCardProps) {
    return (
        <div className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl">
            <div className="mb-5 text-5xl transition-transform duration-300 group-hover:scale-110">
                {category.icon}
            </div>

            <h3 className="text-xl font-bold text-slate-900">
                {category.name}
            </h3>

            <p className="mt-2 text-slate-500">
                {category.totalPlants} Plants
            </p>
        </div>
    );
}