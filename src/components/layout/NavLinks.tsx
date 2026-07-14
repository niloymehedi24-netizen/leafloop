"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/constants/navigation";

interface NavLinksProps {
  mobile?: boolean;
}

export default function NavLinks({
  mobile = false,
}: NavLinksProps) {
  const pathname = usePathname();

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;

  const filteredLinks = navLinks.filter((link) => {
    if (link.private && !user) return false;
    return true;
  });

  return (
    <>
      {filteredLinks.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              transition-all duration-300
              ${mobile ? "block py-2 text-lg" : ""}
              ${active
                ? "font-semibold text-emerald-600"
                : "text-slate-700 hover:text-emerald-600"
              }
            `}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}