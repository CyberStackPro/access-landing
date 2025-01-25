"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart2,
  Bell,
  Layout,
  Scale,
  Activity,
  // LineChart,
  // BarChart,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Metric {
  label: string;
  value: number;
}

interface Stat {
  label: string;
  value: string;
  icon: React.ElementType;
}

interface TemplateContent {
  metrics?: Metric[];
  stats?: Stat[];
}

interface Feature {
  title: string;
  icon: React.ElementType;
  description: string;
  type: "image" | "template";
  image?: string;
  span: string;
  templateContent?: TemplateContent;
}
const features: Feature[] = [
  {
    title: "Real-Time Visualization",
    icon: BarChart2,
    description:
      "Monitor your systems with live data updates and interactive dashboards.",
    type: "image",
    image: "/images/dashboard.png",
    span: "md:col-span-3",
  },
  {
    title: "Alerts & Notifications",
    icon: Bell,
    description:
      "Stay informed with intelligent alerts and customizable notifications.",
    type: "template",
    templateContent: {
      stats: [
        { label: "Uptime", value: "99.9%", icon: Activity },
        { label: "Response", value: "0.3s", icon: TrendingUp },
        { label: "Alerts", value: "24/7", icon: Bell },
      ],
    },
    span: "md:col-span-2",
  },
  {
    title: "Custom Dashboards",
    icon: Layout,
    description:
      "Create personalized dashboards that match your specific monitoring needs.",
    type: "template",
    templateContent: {
      metrics: [
        { label: "CPU", value: 45 },
        { label: "Memory", value: 72 },
        { label: "Storage", value: 28 },
      ],
    },
    span: "md:col-span-2",
  },
  {
    title: "Scalability",
    icon: Scale,
    description:
      "Grow with confidence knowing our platform scales seamlessly with your business.",
    type: "image",
    image: "/images/dashboard2.png",
    span: "md:col-span-3",
  },
];

const TemplateMetrics = ({ metrics }: { metrics: Metric[] }) => (
  <div className="grid grid-cols-3 gap-4 p-6 bg-accent/40 rounded-xl h-full">
    {metrics.map((metric, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center justify-center space-y-2"
      >
        <div className="w-full h-24 bg-accent rounded-lg relative overflow-hidden">
          <motion.div
            className="absolute bottom-0 w-full bg-primary/20"
            initial={{ height: 0 }}
            animate={{ height: `${metric.value}%` }}
            transition={{ duration: 1, delay: idx * 0.2 }}
          />
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          {metric.label}
        </span>
        <span className="text-lg font-bold text-foreground">
          {metric.value}%
        </span>
      </div>
    ))}
  </div>
);

const TemplateStats = ({ stats }: { stats: Stat[] }) => (
  <div className="grid gap-4 p-6 bg-accent/40 rounded-xl h-full">
    {stats.map((stat, idx) => {
      const Icon = stat.icon;
      return (
        <motion.div
          key={idx}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="flex items-center justify-between p-4 rounded-lg bg-background/50 backdrop-blur-sm"
        >
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-full bg-primary/10">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="font-medium text-foreground">{stat.label}</span>
          </div>
          <span className="text-lg font-bold text-primary">{stat.value}</span>
        </motion.div>
      );
    })}
  </div>
);

export function Features() {
  return (
    <section
      id="features"
      className="w-full mx-auto bg-background py-20 px-4 md:px-8"
    >
      <div className="relative w-fit mx-auto p-4 flex items-center justify-center mb-12">
        <div className="absolute inset-0 border border-border">
          <div className="absolute -top-1 -left-1 h-2 w-2 bg-border"></div>
          <div className="absolute -top-1 -right-1 h-2 w-2 bg-border"></div>
          <div className="absolute -bottom-1 -left-1 h-2 w-2 bg-border"></div>
          <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-border"></div>
        </div>
        <h2 className="text-xl md:text-4xl font-bold tracking-tight">
          Why Choose Us?
        </h2>
      </div>

      <p className="max-w-lg text-sm text-muted-foreground text-center mx-auto mt-4">
        Empower your business with our cutting-edge monitoring solutions.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-4 md:auto-rows-[25rem] max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`group overflow-hidden flex flex-col justify-between ${feature.span}`}
          >
            <CardHeader className="p-6">
              <CardTitle className="flex items-center space-x-2">
                <feature.icon className="w-6 h-6 text-primary" />
                <span>{feature.title}</span>
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                {feature.description}
              </p>
            </CardHeader>
            <CardContent className="p-0 relative flex-1">
              {feature.type === "image" ? (
                <div className="w-full h-full p-4 rounded-lg bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 ml-6 mt-2">
                  <motion.div
                    className="w-full h-full"
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={500}
                      height={500}
                      className="w-full object-cover rounded-lg"
                    />
                  </motion.div>
                </div>
              ) : feature.templateContent?.metrics ? (
                <TemplateMetrics metrics={feature.templateContent.metrics} />
              ) : feature.templateContent?.stats ? (
                <TemplateStats stats={feature.templateContent.stats} />
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
