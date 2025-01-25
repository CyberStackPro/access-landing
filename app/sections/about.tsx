"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Shield, Database, Server } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Uptime", value: "99.99%", description: "Guaranteed reliability" },
    { label: "Response Time", value: "<100ms", description: "Average latency" },
    { label: "Data Points", value: "1B+", description: "Processed daily" },
  ];

  const features = [
    {
      icon: Activity,
      title: "Advanced Analytics Integration",
      description: "Deep insights with powerful analytics tools",
    },
    {
      icon: Database,
      title: "Real-time Data Processing",
      description: "Process millions of events in milliseconds",
    },
    {
      icon: Shield,
      title: "Enterprise-grade Security",
      description: "Bank-level encryption and security protocols",
    },
    {
      icon: Server,
      title: "Scalable Infrastructure",
      description: "Grows seamlessly with your business needs",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-foreground">
                Monitoring Platform
                <span className="text-primary"> Built for Scale</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We are committed to providing the most reliable and innovative
                monitoring solution in the industry. Our platform empowers
                businesses with real-time insights and proactive management
                capabilities.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 overflow-hidden rounded-lg bg-card"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 translate-x-6 -translate-y-6 bg-primary/10 rounded-full" />
                  <div className="relative space-y-2">
                    <div className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="font-medium text-foreground">
                        {stat.label}
                      </div>
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-3xl blur-3xl" />
            <Card className="relative border-2 border-muted bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Platform Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="rounded-lg bg-primary/10 p-2">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-medium leading-none text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
