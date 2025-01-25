"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    content:
      "The real-time monitoring capabilities have transformed how we manage our infrastructure. The instant alerts and detailed analytics have helped us reduce downtime by 75%.",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    content:
      "The customizable dashboards are incredible. We've been able to create perfect monitoring solutions for each of our teams. The scalability is impressive!",
  },
  {
    name: "Emily Rodriguez",
    role: "DevOps Engineer",
    content:
      "ActiveMonitor has streamlined our operations significantly. The intuitive interface and powerful features have made our job much easier.",
  },
  {
    name: "Alex Thompson",
    role: "IT Manager",
    content:
      "The reliability and performance of ActiveMonitor have exceeded our expectations. It's become an indispensable tool for our team.",
  },
];

const TestimonialCard = ({
  name,
  role,
  content,
}: {
  name: string;
  role: string;
  content: string;
}) => (
  <Card className="w-[350px] h-full bg-card hover:bg-accent transition-colors">
    <CardHeader className="pb-2">
      <div className="rounded-xl bg-primary/10 p-2 w-fit">
        <Quote className="w-4 h-4 text-primary" />
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-muted-foreground line-clamp-3">{content}</p>
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Testimonials() {
  return (
    <section id="testimonial" className="py-24 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            What Our <span className="text-primary">Users</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who trust our platform for their
            monitoring needs
          </p>
        </motion.div>

        <div className="relative">
          {/* First row */}
          <div className="flex space-x-6 animate-marquee">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>

          {/* Second row */}
          <div className="flex space-x-6 mt-6 animate-marquee-reverse">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center rounded-full border border-muted bg-muted/50 px-4 py-1.5">
            <span className="text-sm text-muted-foreground">
              Want to share your experience?
              <span className="ml-1 text-primary font-medium cursor-pointer hover:underline">
                Leave a review
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
