"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const fullAIMessage = "Our chef recommends the truffle mushroom pasta.";

export function ChatPreview() {
  const [typed, setTyped] = useState("");

  const reduced = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (reduced) {
      setTyped(fullAIMessage);
      return;
    }

    const id = window.setInterval(() => {
      setTyped((prev) => {
        if (prev.length >= fullAIMessage.length) return prev;
        return fullAIMessage.slice(0, prev.length + 1);
      });
    }, 28);

    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold text-white/70">AI chat preview</p>
            <h2 className="mm-heading mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Your AI concierge—always on.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
              A lightweight mock conversation with a typing animation, crafted to
              feel premium and product-like.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="bg-[var(--mm-card-solid)]">
              <div className="flex items-center justify-between">
                <p className="mm-heading text-sm font-semibold text-white/85">
                  MenuMind Assistant
                </p>
                <div className="rounded-xl bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  Online
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="max-w-[90%] rounded-2xl border border-[var(--mm-border)] bg-white/5 p-4 text-sm text-white/80">
                  What is the best dish today?
                </div>

                <div className="ml-auto max-w-[90%] rounded-2xl border border-[var(--mm-border)] bg-gradient-to-r from-[var(--mm-accent)]/20 to-[#4F46E5]/20 p-4 text-sm text-white">
                  {typed}
                  {!reduced && typed.length < fullAIMessage.length ? (
                    <span className="ml-1 inline-block h-4 w-2 align-middle bg-white/60" />
                  ) : null}
                </div>
              </div>

              <div className="mt-6 h-11 w-full rounded-xl border border-[var(--mm-border)] bg-white/5" />
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
