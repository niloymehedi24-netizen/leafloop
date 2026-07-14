"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/constants/navigation";

interface NavLinksProps {
  mobile?: boolean;
}

// 1. Listen for storage changes
const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

// 2. Client snapshot: Read from localStorage
const getSnapshot = () => {
  return localStorage.getItem("user");
};

// 3. Server snapshot: Always return null during server-side rendering
const getServerSnapshot = () => {
  return null;
};

export default function NavLinks({
  mobile = false,
}: NavLinksProps) {
  const pathname = usePathname();

  // Safely read from localStorage without hydration mismatches or ESLint warnings
  const rawUser = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const user = rawUser ? JSON.parse(rawUser) : null;

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