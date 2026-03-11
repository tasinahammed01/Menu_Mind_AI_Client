"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

function FeatureIcon({ variant }: { variant: number }) {
  const common = "h-10 w-10 rounded-2xl border border-[var(--mm-border)] bg-white/5";
  if (variant === 0) {
    return <div className={`${common} bg-gradient-to-r from-[var(--mm-primary)]/25 to-[var(--mm-secondary)]/25`} />;
  }
  if (variant === 1) {
    return <div className={`${common} bg-gradient-to-r from-[var(--mm-accent)]/25 to-[#4F46E5]/25`} />;
  }
  if (variant === 2) {
    return <div className={`${common} bg-white/5`} />;
  }
  return <div className={`${common} bg-white/5`} />;
}

const features = [
  {
    title: "AI Menu Generator",
    description: "Instantly craft a modern menu with pricing, dietary tags, and upsell logic.",
  },
  {
    title: "AI Chat Assistant",
    description: "Ask for recommendations, allergens, and pairings—like a concierge in your pocket.",
  },
  {
    title: "Online Food Ordering",
    description: "A frictionless checkout designed to convert, with real-time kitchen updates.",
  },
  {
    title: "Restaurant Smart Analytics",
    description: "See what sells, what doesn’t, and what to promote—powered by AI insights.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-white/70">Capabilities</p>
          <h2 className="mm-heading mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
            AI that feels like a premium product—because it is.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/70">
            Everything you need to power a modern restaurant experience: discovery,
            ordering, reservations, and optimization.
          </p>
        </div>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <StaggerItem key={feature.title}>
              <Card>
                <FeatureIcon variant={idx} />
                <p className="mm-heading mt-5 text-lg font-semibold text-white">
                  {feature.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {feature.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
