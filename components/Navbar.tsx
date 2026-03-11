"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Dishes", href: "#dishes" },
  { label: "How it works", href: "#how" },
  { label: "Reviews", href: "#testimonials" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-[var(--mm-border)]",
        "bg-[rgba(15,23,42,0.72)] backdrop-blur-xl",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl border border-[var(--mm-border)] bg-white/5 shadow-md">
              <Image
                src="/logo.png"
                alt="MenuMind AI logo"
                width={48}
                height={48}
                priority
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="mm-heading text-sm font-bold text-white">MenuMind AI</p>
              <p className="text-[11px] font-medium text-white/55">Smart dining</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#reservation" className="hidden sm:block">
              <Button type="button" variant="ghost">
                Reserve
              </Button>
            </a>
            <a href="#dishes">
              <Button type="button">Order</Button>
            </a>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
