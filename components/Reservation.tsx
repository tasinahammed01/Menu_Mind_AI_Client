"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function Field({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-white/70">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-[var(--mm-border)] bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-[var(--mm-accent)]/30"
      />
    </label>
  );
}

export function Reservation() {
  return (
    <section id="reservation" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,107,53,0.18),transparent_60%)]" />
      </div>

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold text-white/70">Table reservation</p>
            <h2 className="mm-heading mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Book a table in seconds.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
              A glassmorphism reservation card with a blur background and a premium
              CTA button.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-[var(--mm-border)] bg-white/5 p-8 shadow-[var(--mm-shadow)] backdrop-blur-xl"
          >
            <form className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" type="text" placeholder="Your name" />
                <Field label="Email" type="email" placeholder="you@company.com" />
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <Field label="Guests" type="number" placeholder="2" />
                <Field label="Date" type="date" />
                <Field label="Time" type="time" />
              </div>

              <Button type="submit" className="w-full">
                Reserve Table
              </Button>

              <p className="text-xs text-white/50">
                This is a UI-only form for the homepage. Connect it to your backend
                endpoint when ready.
              </p>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
