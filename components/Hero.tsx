"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2l1.2 6.1L19.3 9.3l-6.1 1.2L12 16.6l-1.2-6.1L4.7 9.3l6.1-1.2L12 2z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M19.7 14.6l.6 3 3 .6-3 .6-.6 3-.6-3-3-.6 3-.6.6-3z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

const floatTransition = {
  duration: 6,
  ease: "easeInOut" as const,
  repeat: Infinity,
  repeatType: "mirror" as const,
};

function FloatingCard({
  className,
  title,
  description,
  price,
}: {
  className?: string;
  title: string;
  description: string;
  price: string;
}) {
  return (
    <motion.div
      className={cn("absolute", className)}
      animate={{ y: [0, -10, 0] }}
      transition={floatTransition}
    >
      <Card className="w-[240px] bg-[var(--mm-card-solid)]">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="mm-heading text-sm font-semibold text-white">{title}</p>
            <p className="mt-1 text-xs text-white/70">{description}</p>
          </div>
          <div className="rounded-xl bg-white/10 px-2 py-1 text-xs font-semibold text-white">
            {price}
          </div>
        </div>
        <div className="mt-4 h-9 w-full rounded-xl bg-gradient-to-r from-[var(--mm-primary)]/20 to-[var(--mm-secondary)]/20" />
      </Card>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.28),transparent_60%)] blur-2xl" />
        <div className="absolute -right-52 top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,183,3,0.22),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.2),rgba(15,23,42,1))]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--mm-border)] bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
              <SparkleIcon className="h-4 w-4 text-[var(--mm-secondary)]" />
              AI-powered restaurant experience
            </div>

            <h1 className="mm-heading mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Experience the Future of Dining with AI
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Discover an AI-powered restaurant experience where smart technology helps
              you explore menus, order food, and reserve tables effortlessly.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button type="button">View Menu</Button>
              <Button type="button" variant="secondary">
                Reserve Table
              </Button>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6">
              {[
                { label: "Avg. order time", value: "-38%" },
                { label: "AI menu match", value: "94%" },
                { label: "Reservations", value: "Instant" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[var(--mm-border)] bg-white/5 p-4">
                  <p className="mm-heading text-xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/65">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl border border-[var(--mm-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[var(--mm-shadow)]">
                <div className="flex items-center justify-between">
                  <p className="mm-heading text-sm font-semibold text-white/85">
                    MenuMind Preview
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[var(--mm-primary)]" />
                    <div className="h-2 w-2 rounded-full bg-[var(--mm-secondary)]" />
                    <div className="h-2 w-2 rounded-full bg-[var(--mm-accent)]" />
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-[var(--mm-border)] bg-white/5 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-[var(--mm-primary)]/35 to-[var(--mm-secondary)]/35" />
                          <div>
                            <p className="text-sm font-semibold text-white">
                              Recommended Dish
                            </p>
                            <p className="text-xs text-white/65">AI picks for you</p>
                          </div>
                        </div>
                        <div className="rounded-xl bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                          {i === 0 ? "Top" : i === 1 ? "Trending" : "New"}
                        </div>
                      </div>
                      <div className="mt-4 h-2 w-full rounded-full bg-white/10" />
                      <div className="mt-2 h-2 w-[78%] rounded-full bg-white/10" />
                    </div>
                  ))}
                </div>
              </div>

              <FloatingCard
                className="-left-8 top-10 hidden lg:block"
                title="Truffle Mushroom Pasta"
                description="Chef’s AI pick"
                price="$18"
              />
              <FloatingCard
                className="-right-10 top-28 hidden lg:block"
                title="Citrus Salmon Bowl"
                description="High protein"
                price="$16"
              />
              <FloatingCard
                className="left-8 -bottom-10 hidden lg:block"
                title="Saffron Risotto"
                description="Popular tonight"
                price="$20"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
