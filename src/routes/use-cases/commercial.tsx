import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../../components/Section";
import { Database, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/use-cases/commercial")({
  component: Commercial,
});

function Commercial() {
  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs tracking-[0.18em] uppercase text-primary mb-6 font-bold">
          Use Case
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
          Commercial Evidence
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Link financial and purchasing records directly to physical product batches to ensure quantities and materials perfectly match your sustainability claims.
        </p>
      </div>

      <Section id="overview" eyebrow="The Problem" title="Financial data is disconnected from claims">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Many brands make claims about material percentages based on supplier promises, but fail to reconcile those promises against the actual commercial invoices for the raw materials purchased.
          </p>
          <div className="p-6 rounded-2xl surface-card border-amber-500/30 bg-amber-500/5">
            <h4 className="font-display font-semibold text-amber-500 mb-2">The Risk</h4>
            <p className="text-sm text-muted-foreground">
              If a brand claims "100k units of Organic Cotton", but their Xero records show they only purchased enough certified organic yarn for 50k units, that is a critical compliance violation.
            </p>
          </div>
        </div>
      </Section>

      <Section id="solution" eyebrow="How we solve it" title="Reconciling money and materials">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl surface-card">
            <Database className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold mb-3">Finance Sync</h3>
            <p className="text-sm text-muted-foreground">Integrates with accounting software to pull raw invoice data, POs, and transaction records.</p>
          </div>
          <div className="p-8 rounded-2xl surface-card">
            <ShieldCheck className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold mb-3">Volume Reconciliation</h3>
            <p className="text-sm text-muted-foreground">The AI cross-checks the volume of certified materials purchased against the volume of products sold.</p>
          </div>
          <div className="p-8 rounded-2xl surface-card bg-primary/5 border-primary/20">
            <div className="text-xs tracking-[0.18em] uppercase text-primary font-bold mb-4">Result</div>
            <h3 className="font-display text-xl font-semibold mb-3">Mathematical Proof</h3>
            <p className="text-sm text-muted-foreground">Your claims are backed not just by supplier promises, but by the hard commercial reality of your ledger.</p>
          </div>
        </div>
      </Section>

      <div className="mx-auto max-w-7xl px-6 mt-12">
        <Link to="/technology" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-border hover:bg-surface transition">
          See the underlying technology <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
