import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { BookOpen, Network, FileSearch, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/research")({
  component: Research,
});

function Research() {
  return (
    <div className="pb-24">
      {/* HEADER SPACE */}
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs tracking-[0.18em] uppercase text-primary mb-6 font-bold">
          Research & Data
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
          The Science of Substantiation
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Tracekind AI is built on rigorous research into regulatory compliance, ontological engineering, and the informal reality of SME supply chains.
        </p>
      </div>

      {/* VERIFICATION TAX STUDY */}
      <Section id="study" eyebrow="The Verification Tax" title="Tracekind SME Evidence Survey 2026">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our foundational research focused on quantifying the burden placed on independent fashion and lifestyle brands when attempting to verify origin and sustainability claims.
            </p>
            <div className="space-y-4">
              <div className="p-5 rounded-xl surface-card">
                <div className="text-3xl font-display font-semibold text-primary mb-1">3-5 hours</div>
                <div className="text-sm text-muted-foreground">Average time lost per week chasing suppliers for unstructured evidence.</div>
              </div>
              <div className="p-5 rounded-xl surface-card">
                <div className="text-3xl font-display font-semibold text-primary mb-1">n=180</div>
                <div className="text-sm text-muted-foreground">UK SMEs participated in the benchmark study.</div>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-surface/30 border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <BookOpen className="h-32 w-32" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-4 relative z-10">The Core Finding</h3>
            <p className="text-muted-foreground relative z-10">
              Enterprise solutions assume perfectly structured, EDI-compliant data. The reality for 90% of UK independent brands is that vital proof of origin exists entirely in fragmented WhatsApps, images, and non-standard PDFs. This gap forms the basis for Tracekind's SME Evidence Ontology.
            </p>
          </div>
        </div>
      </Section>

      {/* NOVELTY & ONTOLOGY */}
      <Section id="ontology" eyebrow="Data Science" title="The SME Evidence Ontology">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl surface-card hover:border-primary/40 transition">
            <FileSearch className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-lg font-semibold mb-2">Unstructured Parsing</h3>
            <p className="text-sm text-muted-foreground">
              Our models are specifically tuned to identify entities (materials, volumes, dates, certifications) within the noisy environment of supplier chat histories and informal receipts.
            </p>
          </div>
          <div className="p-8 rounded-2xl surface-card hover:border-primary/40 transition">
            <Network className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-lg font-semibold mb-2">Batch-Level Graph</h3>
            <p className="text-sm text-muted-foreground">
              Traditional ERPs track items. The Ethical ProofGraph is a novel architecture that maps the relational matrix between a specific marketing claim and a specific physical batch.
            </p>
          </div>
          <div className="p-8 rounded-2xl surface-card hover:border-primary/40 transition">
            <ShieldCheck className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-lg font-semibold mb-2">Contradiction Detection</h3>
            <p className="text-sm text-muted-foreground">
              By structuring the unstructured, we enable cross-document consistency checks—identifying when a supplier's invoice contradicts a subsequent WhatsApp promise.
            </p>
          </div>
        </div>
      </Section>

      {/* REGULATORY FRAMEWORK */}
      <Section id="regulatory" eyebrow="Regulatory Alignment" title="Bridging the gap to HMRC & CMA standards">
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-12 text-center max-w-4xl mx-auto">
          <p className="text-lg text-foreground leading-relaxed mb-8">
            The platform's architecture was directly informed by deep, practical exposure to HMRC regulatory compliance, audit frameworks, and the evidential rigour demanded by the CMA Green Claims Code.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-background p-6 rounded-2xl border border-border">
              <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-primary">CMA Mandate</h4>
              <p className="text-sm text-muted-foreground">"Businesses must hold the evidence to support their claims before they make them." Our graph guarantees this condition is mathematically met.</p>
            </div>
            <div className="bg-background p-6 rounded-2xl border border-border">
              <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-primary">DMCC Enforcement</h4>
              <p className="text-sm text-muted-foreground">With fines up to 10% of global turnover, our Evidence Score provides a quantifiable metric of risk exposure before a claim goes public.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
