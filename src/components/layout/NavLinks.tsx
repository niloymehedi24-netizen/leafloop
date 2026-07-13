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

  return (
    <>
      {navLinks.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              transition-all duration-300
              ${
                mobile
                  ? "block py-2 text-lg"
                  : ""
              }
              ${
                active
                  ? "text-emerald-600 font-semibold"
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