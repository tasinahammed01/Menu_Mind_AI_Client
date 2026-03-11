"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const dishes = [
  {
    name: "Truffle Mushroom Pasta",
    description: "Creamy, earthy, and perfectly balanced with parmesan.",
    price: "$18",
    color: "from-[var(--mm-primary)]/35 to-[var(--mm-secondary)]/35",
  },
  {
    name: "Citrus Salmon Bowl",
    description: "Bright citrus glaze with quinoa + seasonal greens.",
    price: "$16",
    color: "from-[var(--mm-accent)]/30 to-[#4F46E5]/30",
  },
  {
    name: "Saffron Risotto",
    description: "Slow cooked rice with saffron and crisp shallots.",
    price: "$20",
    color: "from-[var(--mm-secondary)]/30 to-[var(--mm-primary)]/30",
  },
  {
    name: "Charred Steak & Chimichurri",
    description: "Juicy cut, flame char, herb sauce—classic perfection.",
    price: "$26",
    color: "from-white/10 to-white/5",
  },
  {
    name: "Spiced Veggie Ramen",
    description: "Umami broth with roasted veggies and chili oil.",
    price: "$15",
    color: "from-[var(--mm-primary)]/25 to-[var(--mm-accent)]/25",
  },
  {
    name: "Honey Citrus Cheesecake",
    description: "Silky, subtle sweetness with a bright finish.",
    price: "$9",
    color: "from-[var(--mm-secondary)]/25 to-white/10",
  },
];

export function Dishes() {
  return (
    <section id="dishes" className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-white/70">Featured dishes</p>
            <h2 className="mm-heading mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Crafted for taste. Curated by AI.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/70">
              A premium menu grid with hover interactions, quick order actions, and
              a refined, tech-forward feel.
            </p>
          </div>
          <Button type="button" variant="ghost" className="w-fit">
            View full menu
          </Button>
        </div>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <StaggerItem key={dish.name}>
              <Card className="group overflow-hidden">
                <div className="relative">
                  <div
                    className={`h-44 w-full rounded-xl bg-gradient-to-r ${dish.color} transition-transform duration-300 group-hover:scale-[1.06]`}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="mm-heading text-lg font-semibold text-white">
                      {dish.name}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {dish.description}
                    </p>
                  </div>
                  <div className="shrink-0 rounded-xl bg-white/10 px-3 py-1 text-sm font-semibold text-white">
                    {dish.price}
                  </div>
                </div>

                <div className="mt-6">
                  <Button type="button" className="w-full">
                    Order
                  </Button>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
