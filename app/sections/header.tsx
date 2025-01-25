"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from "@/components/logo";

const navItems = [
  { title: "Home", href: "/#" },
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "#pricing" },
  { title: "Contact", href: "#contact" },
];

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full fixed top-0 inset-x-0 z-50">
      {/* Desktop Header */}
      <div
        className="hidden lg:flex flex-row self-start items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full bg-white/80 dark:bg-neutral-950/80"
        style={{
          minWidth: "800px",
          willChange: "auto",
          backdropFilter: "blur(10px)",
          boxShadow:
            "rgba(34, 42, 53, 0.06) 0px 0px 24px, rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(34, 42, 53, 0.04) 0px 0px 0px 1px, rgba(34, 42, 53, 0.08) 0px 0px 4px, rgba(47, 48, 55, 0.05) 0px 16px 68px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset",
          width: "40%",
          transform: "translateY(20px)",
        }}
      >
        <Link
          href="/"
          className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
        >
          {/* <Image src="/images/logo.png" alt="logo" width={30} height={30} /> */}
          <Logo />
          <span className="font-medium text-black dark:text-white">
            ActiveMonitor
          </span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  href={item.href}
                  className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2"
                >
                  <span className="relative z-20">{item.title}</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <button
            className="relative flex cursor-pointer items-center justify-center rounded-xl p-2 text-neutral-500 hover:shadow-input dark:text-neutral-500"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>
          <Button className="px-4 py-2 rounded-md bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hidden md:block">
            Book a call
          </Button>
        </div>
      </div>

      {/* Mobile Header */}
      <div
        className="flex relative flex-col lg:hidden w-full justify-between items-center max-w-[calc(100vw-2rem)] mx-auto px-0 py-2 z-50 bg-white/80 dark:bg-neutral-950/80"
        style={{
          willChange: "auto",
          backdropFilter: "blur(10px)",
          boxShadow:
            "rgba(34, 42, 53, 0.06) 0px 0px 24px, rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(34, 42, 53, 0.04) 0px 0px 0px 1px, rgba(34, 42, 53, 0.08) 0px 0px 4px, rgba(47, 48, 55, 0.05) 0px 16px 68px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset",
          width: "90%",
          borderRadius: "2rem",
          paddingRight: "12px",
          paddingLeft: "12px",
          transform: "translateY(20px)",
        }}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Link
            href="/"
            className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
          >
            <Image src="/images/logo.png" alt="logo" width={30} height={30} />
            <span className="font-medium text-black dark:text-white">
              ActiveMonitor
            </span>
          </Link>
          <Menu className="text-black dark:text-white" />
        </div>
      </div>
    </div>
  );
}
