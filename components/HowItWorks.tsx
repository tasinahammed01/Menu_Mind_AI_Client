"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const steps = [
  {
    title: "AI generates menu",
    description: "Optimized pricing, dietary tags, and seasonal suggestions.",
  },
  {
    title: "Customer explores",
    description: "Smart recommendations based on taste and preferences.",
  },
  {
    title: "Order or reserve",
    description: "A seamless checkout and instant table booking.",
  },
  {
    title: "Enjoy your meal",
    description: "Delightful dining with modern, frictionless service.",
  },
];

function StepDot({ active }: { active?: boolean }) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--mm-border)] bg-white/5",
        active &&
          "bg-gradient-to-r from-[var(--mm-primary)]/25 to-[var(--mm-secondary)]/25",
      )}
    >
      <div className="h-2.5 w-2.5 rounded-full bg-white/80" />
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-white/70">How it works</p>
          <h2 className="mm-heading mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
            A modern AI workflow from menu to meal.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/70">
            Four clear steps, designed like a premium product flow with subtle motion.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-6 right-6 top-6 hidden h-px bg-white/10 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 0.05}>
                <div className="relative">
                  <StepDot active={idx === 0} />
                  <h3 className="mm-heading mt-5 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
