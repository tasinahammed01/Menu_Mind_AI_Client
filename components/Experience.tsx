"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Container } from "@/components/ui/Container";

export function Experience() {
  const ref = useRef<HTMLElement>(null!);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} className="relative overflow-hidden py-20 sm:py-24">
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,53,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(124,58,237,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.3),rgba(2,6,23,0.85))]" />
      </motion.div>

      <Container className="relative">
        <div className="rounded-2xl border border-[var(--mm-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-10 shadow-[var(--mm-shadow)] backdrop-blur-xl sm:p-12">
          <p className="text-sm font-semibold text-white/70">Restaurant experience</p>
          <h2 className="mm-heading mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A full-stack dining experience—built for modern restaurants.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
            A premium, tech-forward atmosphere: fresh ingredients, AI-assisted kitchen
            workflow, and an unforgettable guest journey.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {["Fresh Ingredients", "AI Powered Kitchen", "Memorable Dining Experience"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--mm-border)] bg-white/5 p-6"
                >
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-[var(--mm-primary)]/25 to-[var(--mm-secondary)]/25" />
                  <p className="mm-heading mt-5 text-base font-semibold text-white">
                    {item}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    Designed to feel premium and effortless—every touchpoint aligned.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
