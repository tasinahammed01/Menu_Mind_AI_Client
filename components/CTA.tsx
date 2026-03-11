"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,53,0.28),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,183,3,0.20),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_55%)]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-[var(--mm-border)] bg-[linear-gradient(90deg,rgba(255,107,53,0.16),rgba(255,183,3,0.10),rgba(124,58,237,0.14))] p-10 shadow-[var(--mm-shadow)] backdrop-blur-xl sm:p-12"
        >
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white/75">Final CTA</p>
              <h2 className="mm-heading mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Experience Smart Dining?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
                A premium, modern call-to-action designed to convert.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button type="button">Order Food</Button>
              <Button type="button" variant="secondary">
                Reserve Table
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
