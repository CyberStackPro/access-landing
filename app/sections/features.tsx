"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart2, Bell, Layout, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Real-Time Visualization",
    icon: BarChart2,
    description:
      "Monitor your systems with live data updates and interactive dashboards.",
    image: "/images/dashboard.png",
    span: "md:col-span-3",
  },
  {
    title: "Alerts & Notifications",
    icon: Bell,
    description:
      "Stay informed with intelligent alerts and customizable notifications.",
    image: "/images/dashboard2.png",
    span: "md:col-span-2",
  },
  {
    title: "Custom Dashboards",
    icon: Layout,
    description:
      "Create personalized dashboards that match your specific monitoring needs.",
    image: "/images/dashboard.png",
    span: "md:col-span-2",
  },
  {
    title: "Scalability",
    icon: Scale,
    description:
      "Grow with confidence knowing our platform scales seamlessly with your business.",
    image: "/images/dashboard2.png",
    span: "md:col-span-3",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="w-full mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8"
    >
      <div className="relative w-fit mx-auto p-4 flex items-center justify-center mb-12">
        <div className="absolute inset-0 h-full border border-neutral-200 dark:border-neutral-800 w-full">
          <div className="absolute -top-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"></div>
          <div className="absolute -top-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"></div>
          <div className="absolute -bottom-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"></div>
          <div className="absolute -bottom-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"></div>
        </div>
        <h2 className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
          Why Choose Us?
        </h2>
      </div>
      <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
        Empower your business with our cutting-edge monitoring solutions.
      </p>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-4 md:auto-rows-[25rem] max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`group isolate rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between ${feature.span}`}
          >
            <CardHeader className="p-6">
              <CardTitle className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-100">
                <feature.icon className="w-6 h-6 text-primary" />
                <span>{feature.title}</span>
              </CardTitle>
              <p className="font-sans max-w-xs text-base font-normal tracking-tight mt-2 text-neutral-500 dark:text-neutral-400">
                {feature.description}
              </p>
            </CardHeader>
            <CardContent className="p-0 overflow-hidden relative w-full h-full">
              <motion.div
                className="w-full h-full"
                initial={{ scale: 1.2, rotate: -5 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-b-2xl"
                />
              </motion.div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
