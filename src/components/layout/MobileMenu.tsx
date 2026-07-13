"use client";

import NavLinks from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({
  isOpen,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t bg-white">
      <div className="flex flex-col gap-3 px-4 py-5">
        <NavLinks mobile />

        <button className="rounded-xl bg-emerald-600 px-4 py-2 text-white">
          Login
        </button>

        <button className="rounded-xl border border-emerald-600 px-4 py-2 text-emerald-600">
          Register
        </button>
      </div>
    </div>
  );
}