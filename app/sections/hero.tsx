"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Activity, LineChart, AlertCircle } from "lucide-react";
import Image from "next/image";
// import { cn } from "@/lib/utils";
import { Ripple } from "../_components/ripple";
// import { Ripple } from "../_components/ripple";

// const Ripple = React.memo(function Ripple({
//   className,
//   ...props
// }: React.ComponentPropsWithoutRef<"div">) {
//   return (
//     <div
//       className={cn(
//         "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none",
//         className,
//       )}
//       {...props}
//     >
//       {Array.from({ length: 8 }, (_, i) => {
//         const size = 210 + i * 70;
//         const opacity = 0.24 - i * 0.03;

//         return (
//           <motion.div
//             key={i}
//             className="absolute rounded-full border"
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               delay: i * 0.2,
//               ease: "easeOut",
//             }}
//             style={{
//               width: size,
//               height: size,
//               borderStyle: i === 7 ? "dashed" : "solid",
//               borderWidth: "1px",
//               borderColor: `hsl(var(--primary) / ${0.1 + i * 0.02})`,
//               background: `hsl(var(--primary) / 0.03)`,
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// });

// Ripple.displayName = "Ripple";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Ripple
          mainCircleSize={300}
          // mainCircleOpacity={0.1}
          numCircles={10}
          className="scale-150 animate-pulse"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 pt-32 pb-24">
        <div className="flex flex-col items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-4xl"
          >
            <div className="flex flex-col items-center text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-sm"
              >
                <Activity className="mr-2 h-4 w-4" />
                Real-Time Monitoring Solution
              </motion.div>

              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight">
                Real-Time Monitoring{" "}
                <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                Track performance, detect anomalies, and ensure uptime with our
                advanced monitoring dashboard.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <LineChart className="mr-2 h-4 w-4" />
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Request a Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full"
          >
            <div className="relative mx-auto max-w-7xl rounded-[32px] border border-border bg-neutral-100/50 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 md:p-4 shadow-2xl">
              <div className="rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black overflow-hidden">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Image
                    alt="Dashboard Preview"
                    width={1920}
                    height={1080}
                    src="/images/dashboard2.png"
                    className="rounded-[20px] w-full h-auto"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
