"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Server,
  ShoppingCart,
  Cloud,
  BarChart2,
  Shield,
  Users,
} from "lucide-react";

const useCases = [
  {
    title: "IT Teams",
    icon: Server,
    description: "Monitor network performance and server health in real-time.",
    benefits: ["24/7 Monitoring", "Instant Alerts", "Performance Metrics"],
  },
  {
    title: "E-commerce",
    icon: ShoppingCart,
    description: "Ensure smooth operations during peak traffic times.",
    benefits: ["Traffic Analysis", "Cart Monitoring", "Payment Processing"],
  },
  {
    title: "SaaS Business",
    icon: Cloud,
    description: "Track user engagement and service availability.",
    benefits: ["User Analytics", "API Monitoring", "Resource Usage"],
  },
  {
    title: "Enterprise",
    icon: BarChart2,
    description: "Comprehensive monitoring for large-scale operations.",
    benefits: ["Custom Metrics", "Team Reports", "SLA Tracking"],
  },
  {
    title: "Security Teams",
    icon: Shield,
    description: "Monitor and respond to security events instantly.",
    benefits: ["Threat Detection", "Access Logs", "Security Metrics"],
  },
  {
    title: "DevOps Teams",
    icon: Users,
    description: "Streamline development and operations workflow.",
    benefits: ["CI/CD Metrics", "Deployment Tracking", "Error Monitoring"],
  },
];

export default function UseCases() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              Who <span className="text-primary">Benefits?</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {
                " Our monitoring solution serves diverse industries with specialized features tailored to each sector's unique needs."
              }
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full transition-colors hover:border-primary/50 bg-card">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                      <useCase.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefitIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + benefitIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                        <span className="text-sm text-muted-foreground">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center rounded-full border border-muted bg-muted/50 px-4 py-1.5">
            <span className="text-sm text-muted-foreground">
              {" Don't see your use case?"}
              <span className="ml-1 text-primary font-medium cursor-pointer hover:underline">
                Contact us
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
