import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function PrimaryButton({
  children,
  className = "",
  onClick,
  type = "button",
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        rounded-xl
        bg-emerald-600
        px-6
        py-3
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-emerald-700
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}