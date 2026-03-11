"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const testimonials = [
  {
    name: "Ariana K.",
    role: "Food critic",
    rating: 5,
    quote:
      "This feels like Linear for restaurants—fast, clean, and unexpectedly delightful. The AI recommendations are spot-on.",
  },
  {
    name: "Marcus T.",
    role: "Restaurant owner",
    rating: 5,
    quote:
      "We cut menu update time from days to minutes. The analytics helped us boost our top sellers immediately.",
  },
  {
    name: "Lina P.",
    role: "Frequent diner",
    rating: 4,
    quote:
      "Booking a table and ordering is effortless. The whole experience feels premium, like a modern tech product.",
  },
];

function Stars({ rating }: { rating: number }) {
  const stars = new Array(5).fill(0).map((_, i) => i < rating);
  return (
    <div className="flex items-center gap-1">
      {stars.map((filled, idx) => (
        <div
          key={idx}
          className={cn(
            "h-2.5 w-2.5 rounded-full",
            filled ? "bg-[var(--mm-secondary)]" : "bg-white/15",
          )}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = useMemo(() => testimonials[active], [active]);

  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-white/70">Testimonials</p>
            <h2 className="mm-heading mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Loved by customers—and by operators.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/70">
              A smooth, modern slider with premium motion and consistent card styles.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setActive((v) => (v - 1 + testimonials.length) % testimonials.length)}
            >
              Prev
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setActive((v) => (v + 1) % testimonials.length)}
            >
              Next
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,183,3,0.12),transparent_55%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[var(--mm-primary)]/30 to-[var(--mm-secondary)]/30" />
                      <div>
                        <p className="mm-heading text-base font-semibold text-white">
                          {current.name}
                        </p>
                        <p className="text-sm text-white/65">{current.role}</p>
                      </div>
                    </div>
                    <Stars rating={current.rating} />
                  </div>

                  <p className="mt-6 text-base leading-7 text-white/75">
                    “{current.quote}”
                  </p>

                  <div className="mt-8 flex items-center gap-2">
                    {testimonials.map((t, idx) => (
                      <button
                        key={t.name}
                        type="button"
                        className={cn(
                          "h-2.5 w-2.5 rounded-full transition-colors",
                          idx === active ? "bg-white" : "bg-white/20 hover:bg-white/35",
                        )}
                        onClick={() => setActive(idx)}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
