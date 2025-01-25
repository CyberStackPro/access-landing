"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Logo from "@/components/logo";

const navItems = [
  { title: "Home", href: "/#" },
  { title: "Features", href: "#features" },
  { title: "About", href: "#about" },
  { title: "Testimonial", href: "#testimonial" },
  { title: "Contact", href: "#contact" },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="w-full fixed top-0 inset-x-0 z-50">
      {/* Desktop Header */}
      <div
        className="hidden lg:flex flex-row items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full bg-white/80 dark:bg-neutral-950/80"
        style={{
          willChange: "auto",
          backdropFilter: "blur(10px)",
          boxShadow:
            "rgba(34, 42, 53, 0.06) 0px 0px 24px, rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(34, 42, 53, 0.04) 0px 0px 0px 1px, rgba(34, 42, 53, 0.08) 0px 0px 4px, rgba(47, 48, 55, 0.05) 0px 16px 68px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset",
          width: "40%",
          transform: "translateY(20px)",
        }}
      >
        <Link href="/" className="flex items-center space-x-2 text-sm">
          <Logo />
          <span className="font-bold text-black dark:text-white">
            Nexoro Pro
          </span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="lg:flex flex-row space-x-4 text-sm text-zinc-600 dark:text-neutral-300">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  href={item.href}
                  className="relative px-4 py-2"
                >
                  <span className="relative z-20">{item.title}</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <button
            className="p-2 flex text-neutral-500 dark:text-neutral-500"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>
          <Button className="hidden md:block px-4 py-2 bg-white text-black text-sm font-bold">
            Book a call
          </Button>
        </div>
      </div>

      {/* Mobile Header */}
      <div
        className="lg:hidden flex flex-col w-full py-2 px-4 bg-white/80 dark:bg-neutral-950/80"
        style={{
          backdropFilter: "blur(10px)",
          boxShadow:
            "rgba(34, 42, 53, 0.06) 0px 0px 24px, rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(34, 42, 53, 0.04) 0px 0px 0px 1px, rgba(34, 42, 53, 0.08) 0px 0px 4px, rgba(47, 48, 55, 0.05) 0px 16px 68px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset",
          borderRadius: "2rem",
        }}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-sm">
            <Logo />
            <span className="font-bold text-black dark:text-white">
              Nexoro Pro
            </span>
          </Link>
          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black dark:text-white p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
        {mobileMenuOpen && (
          <div className="flex flex-col mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="py-2 px-4 rounded-md bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
