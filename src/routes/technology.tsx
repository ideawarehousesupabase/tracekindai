import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { ArchitectureVisual } from "../components/ArchitectureVisual";
import { FileSearch, Database, Network, ShieldCheck, AlertTriangle, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/technology")({
  component: Technology,
});

const FRAMEWORK = [
  {
    num: "01",
    title: "Claim-to-Evidence Verification Engine",
    desc: "Break broad sustainability/sourcing claims into testable claim components and map each component to relevant evidence classes.",
    icon: <FileSearch className="h-6 w-6 text-primary" />
  },
  {
    num: "02",
    title: "SME Sourcing Evidence Ontology",
    desc: "Structure informal SME evidence such as invoices, WhatsApp messages, spreadsheets, supplier photos and PDFs into standardised evidence categories.",
    icon: <Database className="h-6 w-6 text-primary" />
  },
  {
    num: "03",
    title: "Batch-Level Ethical ProofGraph",
    desc: "Link claim ↔ product batch ↔ supplier ↔ evidence ↔ production stage ↔ contradiction ↔ confidence.",
    icon: <Network className="h-6 w-6 text-primary" />
  },
  {
    num: "04",
    title: "Ethical Evidence Score",
    desc: "Assess evidential strength using factors such as completeness, freshness, source reliability, traceability, contradiction severity and batch linkage.",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />
  },
  {
    num: "05",
    title: "Cross-Document Contradiction Detection",
    desc: "Detect inconsistent information across marketing claims, invoices, supplier records, shipping/origin evidence and packaging information.",
    icon: <AlertTriangle className="h-6 w-6 text-primary" />
  },
  {
    num: "06",
    title: "Claim-Safe Recommendation Engine",
    desc: "Turn findings into missing-evidence actions and wording aligned with the evidence actually available.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />
  }
];

function Technology() {
  return (
    <div className="pb-24">
      {/* HEADER SPACE */}
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs tracking-[0.18em] uppercase text-primary mb-6 font-bold">
          Core Innovation
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
          The Ethical ProofGraph Framework
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Our proprietary six-element architecture doesn't just store documents. It parses unstructured, informal reality and builds a mathematically rigorous network of evidence designed for strict compliance review.
        </p>
      </div>

      <Section id="framework" eyebrow="The 6 Elements" title="How the engine verifies claims">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FRAMEWORK.map((f) => (
            <div key={f.num} className="p-8 rounded-2xl surface-card hover:border-primary/40 transition-colors group relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-[120px] font-display font-bold text-border/30 group-hover:text-primary/5 transition-colors select-none pointer-events-none">
                {f.num}
              </div>
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="architecture" eyebrow="Data Pipeline" title="End-to-End Verification Flow">
        <p className="text-muted-foreground max-w-3xl mb-12">
          From the moment a claim is registered, Tracekind AI automatically decomposes it, structures the unstructured evidence, links it via the ProofGraph, and outputs a confidence score with actionable recommendations.
        </p>
        <ArchitectureVisual />
      </Section>
    </div>
  );
}
