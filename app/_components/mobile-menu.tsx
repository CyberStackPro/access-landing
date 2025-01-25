"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavItem {
  title: string;
  href: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  return (
    <div className="w-full mt-4 pb-4">
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <Button className="w-full mt-4 px-4 py-2 rounded-md bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
        Book a call
      </Button>
    </div>
  );
}
