"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Browse Jobs", href: "/jobs" },
  { name: "Companies", href: "/companies" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-white/10 bg-[#0B0F19]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold text-lg shadow-lg">
            PH
          </div>

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-white">
              Programming Hero
            </h1>
            <p className="text-xs text-gray-400 -mt-1">
              Hiring Platform
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login">
            <Button
              variant="light"
              className="text-sm font-medium text-white"
            >
              Sign In
            </Button>
          </Link>

          <Link href="/register">
            <Button
              className="rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-gray-200"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B0F19] md:hidden">
          <div className="flex flex-col gap-5 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col gap-3 pt-2">
              <Link href="/login">
                <Button
                  fullWidth
                  variant="light"
                  className="text-white"
                >
                  Sign In
                </Button>
              </Link>

              <Link href="/register">
                <Button
                  fullWidth
                  className="bg-white font-semibold text-black"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}