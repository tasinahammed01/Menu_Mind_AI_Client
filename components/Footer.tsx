import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function SocialIcon({ label }: { label: string }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--mm-border)] bg-white/5 text-xs font-semibold text-white/70">
      {label}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--mm-border)] py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="mm-heading text-lg font-bold text-white">MenuMind AI</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
              A premium AI-powered restaurant experience for menus, ordering, and
              reservations.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <SocialIcon label="X" />
              <SocialIcon label="IG" />
              <SocialIcon label="IN" />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              <p>hello@menumind.ai</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Startup Ave, San Francisco</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Opening hours</p>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              <p>Mon–Thu: 11:00–22:00</p>
              <p>Fri–Sat: 11:00–23:30</p>
              <p>Sun: 12:00–21:00</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Newsletter</p>
            <p className="mt-4 text-sm text-white/70">
              Product updates and dining insights.
            </p>

            <div className="mt-4 grid gap-3">
              <input
                type="email"
                placeholder="you@company.com"
                className="h-11 rounded-xl border border-[var(--mm-border)] bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-[var(--mm-accent)]/30"
              />
              <Button type="button" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--mm-border)] pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MenuMind AI. All rights reserved.</p>
          <p>Privacy · Terms · Security</p>
        </div>
      </Container>
    </footer>
  );
}
