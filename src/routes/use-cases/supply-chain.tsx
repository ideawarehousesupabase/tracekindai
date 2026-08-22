import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../../components/Section";
import { FileSearch, ArrowRight, Network } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/use-cases/supply-chain")({
  component: SupplyChain,
});

function SupplyChain() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs tracking-[0.18em] uppercase text-primary mb-6 font-bold">
          Use Case
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
          Supply Chain Intelligence
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          SME supply chains run on WhatsApp and PDFs. Tracekind AI parses this unstructured reality to map relationships and detect supply chain risks at the batch level.
        </p>
      </div>

      <Section id="overview" eyebrow="The Problem" title="Informal evidence is impossible to scale">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Independent brands don't use enterprise ERPs. When a wholesale buyer asks for proof of origin, it usually means hours spent searching through supplier chat histories, hunting down unsigned PDFs, and manually matching invoices to batches.
          </p>
          <div className="p-6 rounded-2xl surface-card border-amber-500/30 bg-amber-500/5">
            <h4 className="font-display font-semibold text-amber-500 mb-2">The Risk</h4>
            <p className="text-sm text-muted-foreground">
              Missing one critical supplier message, like a temporary substitution of materials, can lead to false public claims, regulatory fines, and damaged buyer trust.
            </p>
          </div>
        </div>
      </Section>

      <Section id="solution" eyebrow="How we solve it" title="From unstructured chat to structured proof">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl surface-card">
            <FileSearch className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold mb-3">AI Parsing</h3>
            <p className="text-sm text-muted-foreground">Automatically extracts entities, dates, and materials from supplier photos, handwritten notes, and WhatsApps.</p>
          </div>
          <div className="p-8 rounded-2xl surface-card">
            <Network className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold mb-3">Batch Mapping</h3>
            <p className="text-sm text-muted-foreground">Links every piece of extracted evidence directly to the specific production batch it belongs to.</p>
          </div>
          <div className="p-8 rounded-2xl surface-card bg-primary/5 border-primary/20">
            <div className="text-xs tracking-[0.18em] uppercase text-primary font-bold mb-4">Result</div>
            <h3 className="font-display text-xl font-semibold mb-3">Audit-Ready</h3>
            <p className="text-sm text-muted-foreground">A complete, searchable evidence graph ready to be shared with wholesale compliance teams.</p>
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
