"use client";

import { useState } from "react";
import Link from "next/link";
import { FaLeaf } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Container from "@/components/shared/Container";

import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  type NavbarUser = {
    name: string;
    email: string;
  };

  const [user, setUser] = useState<NavbarUser | null>(() => {
    if (typeof window === "undefined") return null;

    const storedUser = localStorage.getItem("user");

    return storedUser ? (JSON.parse(storedUser) as NavbarUser) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <FaLeaf className="text-3xl text-emerald-600" />

            <span className="text-2xl font-bold text-slate-900">
              LeafLoop
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLinks />
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 md:flex">

            {user ? (
              <>
                <span className="font-medium text-slate-700">
                  Hi, {user.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="rounded-xl border border-red-500 px-5 py-2 text-red-500 transition hover:bg-red-50 cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="cursor-pointer rounded-xl border border-emerald-600 px-5 py-2 text-emerald-600 transition hover:bg-emerald-50">
                    Login
                  </button>
                </Link>

                <Link href="/register">
                  <button className="cursor-pointer rounded-xl bg-emerald-600 px-5 py-2 text-white transition hover:bg-emerald-700">
                    Register
                  </button>
                </Link>
              </>
            )}

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-slate-700 md:hidden"
          >
            {isOpen ? (
              <HiOutlineX />
            ) : (
              <HiOutlineMenuAlt3 />
            )}
          </button>
        </div>
      </Container>

      <MobileMenu isOpen={isOpen} />
    </header>
  );
}