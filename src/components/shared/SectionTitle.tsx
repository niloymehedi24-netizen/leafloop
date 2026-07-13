interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      {badge && (
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-4 text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}