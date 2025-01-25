"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    text: "support@activemonitor.com",
    href: "mailto:support@activemonitor.com",
  },
  {
    icon: Phone,
    text: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    text: "123 Tech Street, Silicon Valley, CA 94025",
    href: "https://maps.google.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
          Get in Touch
        </h2>
      </div>
      <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
        {"Have questions? We're here to help you get started"}.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white/5 dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] backdrop-blur-sm border border-neutral-200 dark:border-neutral-800">
            <CardHeader>
              <CardTitle className="text-neutral-800 dark:text-neutral-100">
                Contact Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Name"
                    className="bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Message"
                    className="bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 min-h-[150px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white/5 dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] backdrop-blur-sm border border-neutral-200 dark:border-neutral-800">
            <CardHeader>
              <CardTitle className="text-neutral-800 dark:text-neutral-100">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm md:text-base">{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
