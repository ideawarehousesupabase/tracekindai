import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import heroGraph from "@/assets/product-prototype.jpg";
import { CheckCircle2, ArrowRight, ShieldCheck, FileSearch, Network, Database, BrainCircuit, ExternalLink } from "lucide-react";

import { ProofGraphPreview } from "@/components/ProofGraphPreview";
import { ProductExample } from "@/components/ProductExample";
import { EvidenceLayer } from "@/components/EvidenceLayer";

export const Route = createFileRoute("/")({
  component: Landing,
});

const HOW_IT_WORKS = [
  { step: "INGEST", desc: "Connect Shopify/Xero and upload raw supplier WhatsApps, specs, and PDFs." },
  { step: "STRUCTURE", desc: "AI extracts entities and maps them into a searchable, relational knowledge graph." },
  { step: "VERIFY", desc: "The engine cross-checks evidence against claims, detecting contradictions across all records." },
  { step: "ACT", desc: "Receive confidence scores and actionable recommendations to resolve evidence gaps." },
];

const DIFFERENTIATION = [
  "Proprietary SME Sourcing Evidence Ontology built from real UK SME supplier evidence - not enterprise ERP schemas.",
  "Batch-Level Ethical Proof Graph and Cross-Document Ethical Contradiction Detection to handle unstructured reality.",
  "Built specifically for the informal workflows (WhatsApp, photos, PDFs) of founder-led businesses.",
];

function Landing() {
  return (
    <div className="min-h-screen">
      {/* 1. HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs tracking-[0.18em] uppercase text-muted-foreground mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              For UK Independent Brands
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1]">
              Turn messy supplier records into <span className="text-gradient">claims you can substantiate.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
              Tracekind AI is an evidence-intelligence platform that connects supplier records, commercial evidence and public-facing sustainability claims. It helps SMEs understand what their evidence supports, where it conflicts, what is missing and what action should be taken next.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#pilot"
                data-track="hero-pilot-cta"
                className="inline-flex justify-center items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition shadow-lg"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                Apply for Pilot Access <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#technology"
                data-track="hero-demo-cta"
                className="inline-flex justify-center items-center rounded-full px-6 py-3.5 text-sm font-medium border border-border hover:bg-surface transition"
              >
                Explore the Technology
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-surface/80 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                ))}
              </div>
              <p>Built for UK SMEs.<br/>Shopify & Xero integrations in development.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative w-full aspect-square lg:aspect-auto lg:h-[600px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden glow-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <img
                src={heroGraph}
                alt="Illustrative Workflow"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-border text-[10px] uppercase tracking-wider text-muted-foreground">
                Product Prototype
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <Section id="problem" eyebrow="The Problem" title="The Verification Tax">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            UK SMEs spend 3-5 hours a week chasing suppliers for evidence (Tracekind SME Evidence Survey 2026, n=180). This fragmented supplier evidence, trapped in WhatsApps and PDFs, makes it incredibly difficult to substantiate marketing claims, leading to time lost and increasing buyer and compliance pressure.
          </p>
          <ul className="space-y-4 text-sm text-foreground">
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-primary rounded-full" /> Fragmented, informal supplier records.</li>
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-primary rounded-full" /> Hundreds of hours lost chasing proof manually.</li>
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-primary rounded-full" /> Rising pressure from wholesale buyers & regulators.</li>
          </ul>
        </div>
      </Section>

      {/* 3. WHAT TRACEKIND DOES */}
      <Section id="solution" eyebrow="The Solution" title="What Tracekind AI does">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl border border-border bg-surface/40 hover:border-primary/40 transition">
            <FileSearch className="h-6 w-6 text-primary mb-4" />
            <h4 className="font-semibold mb-2">Converts Claims</h4>
            <p className="text-sm text-muted-foreground">Translates your public marketing claims into specific, actionable evidence requirements.</p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-surface/40 hover:border-primary/40 transition">
            <Network className="h-6 w-6 text-primary mb-4" />
            <h4 className="font-semibold mb-2">Links Evidence</h4>
            <p className="text-sm text-muted-foreground">Connects fragmented WhatsApp messages, PDFs, and invoices directly to the product batch.</p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-surface/40 hover:border-primary/40 transition">
            <BrainCircuit className="h-6 w-6 text-primary mb-4" />
            <h4 className="font-semibold mb-2">Detects Contradictions</h4>
            <p className="text-sm text-muted-foreground">Scans across all linked documents to surface hidden conflicts before they become a liability.</p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-surface/40 hover:border-primary/40 transition">
            <ShieldCheck className="h-6 w-6 text-primary mb-4" />
            <h4 className="font-semibold mb-2">Scores Strength</h4>
            <p className="text-sm text-muted-foreground">Calculates a confidence score indicating whether the evidence adequately substantiates the claim.</p>
          </div>
        </div>
      </Section>

      {/* 4. HOW IT WORKS */}
      <Section id="how-it-works" eyebrow="Workflow" title="How it works">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-border -z-10" />
          
          {HOW_IT_WORKS.map((step, idx) => (
            <div key={step.step} className="bg-background border border-border rounded-2xl p-6 text-center relative shadow-sm">
              <div className="w-10 h-10 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-4">{idx + 1}</div>
              <h3 className="font-display font-semibold mb-2">{step.step}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. ETHICAL PROOFGRAPH PREVIEW */}
      <Section id="technology">
        <ProofGraphPreview />
      </Section>

      {/* 6. PRODUCT EXAMPLE */}
      <Section id="product-example">
        <ProductExample />
      </Section>

      {/* 7. ONE EVIDENCE LAYER */}
      <Section id="evidence-layer">
        <EvidenceLayer />
      </Section>

      {/* 8. DIFFERENTIATION */}
      <Section id="differentiation" eyebrow="Differentiation" title="Built for SME reality, not enterprise ERPs">
        <div className="grid md:grid-cols-2 gap-10">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most traceability platforms are built for enterprise ERPs—meaning inaccessible pricing and a heavy integration burden. They assume perfectly structured data. Tracekind AI is uniquely designed for the messy, informal evidence systems of independent brands.
          </p>
          <ul className="space-y-4">
            {DIFFERENTIATION.map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 9. REGULATORY CONTEXT */}
      <Section id="regulatory" eyebrow="Regulatory Context" title="The changing legal landscape">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl surface-card">
            <div className="font-display font-semibold text-lg text-primary mb-3">CMA Green Claims Code</div>
            <p className="text-sm text-muted-foreground mb-4">
              "Claims must be backed up by robust, credible, and up-to-date evidence... Businesses must hold the evidence to support their claims before they make them."
            </p>
            <a href="https://www.gov.uk/government/publications/green-claims-code-making-environmental-claims" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:underline">
              Read GOV.UK Guidance <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="p-8 rounded-2xl surface-card">
            <div className="font-display font-semibold text-lg text-primary mb-3">DMCC Act Enforcement</div>
            <p className="text-sm text-muted-foreground">
              The Digital Markets, Competition and Consumers (DMCC) Act grants the CMA enhanced enforcement powers, including the ability to levy direct fines of up to 10% of global turnover for misleading environmental claims. Tracekind AI is structured for compliance review and evidence substantiation in this new era.
            </p>
          </div>
        </div>
      </Section>

      {/* 10. FOUNDING PILOT */}
      <Section id="pilot" eyebrow="Pilot Programme" title="The Year 1 Founding Pilot">
        <div className="rounded-3xl bg-surface/60 border border-primary/20 p-8 sm:p-12 relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at center, oklch(0.82 0.16 200 / 0.15), transparent 60%)" }} />
          <div className="relative z-10 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-4">Who is it for?</h3>
              <p className="text-muted-foreground mb-6">Applications are open for 8–12 UK independent fashion and lifestyle brands dealing with complex, informal supplier records.</p>
              
              <h3 className="font-display text-2xl font-semibold mb-4">Duration & Cost</h3>
              <p className="text-muted-foreground mb-6">6-month structured engagement. Access to the platform is provided at early-stage pilot rates, which are significantly below the indicative post-pilot pricing.</p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold mb-4">What you receive</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Early access to the AI Evidence Engine</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Hands-on onboarding & data structuring</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Direct input into the product roadmap</li>
              </ul>
              
              <h3 className="font-display text-2xl font-semibold mb-4">What we measure</h3>
              <p className="text-muted-foreground mb-8">Our primary pilot target is demonstrating an up to 45% reduction in manual evidence-management time, alongside improved substantiation metrics.</p>
              
              <a href="mailto:hello@tracekind.ai" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition shadow-lg" style={{ boxShadow: "var(--shadow-glow)" }}>
                Apply for Pilot Access <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 11. FOUNDER */}
      <Section id="founder" eyebrow="Leadership" title="The Founder Story">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-lg text-foreground font-medium">
              Tracekind AI was born from the intersection of first-hand SME sourcing frustration and rigorous government regulatory experience.
            </p>
            <p>
              As the founder of <span className="text-foreground font-semibold">Bhavi Arts</span>, a rapidly scaling women-led brand, Bhavi Poladia experienced the "Verification Tax" firsthand. Managing complex supply chains across multiple continents meant relying on fragmented WhatsApp messages and scattered PDFs to substantiate claims to wholesale buyers.
            </p>
            <p>
              She later took on a role at <span className="text-foreground font-semibold">HM Revenue & Customs (HMRC)</span>, gaining deep exposure to strict regulatory compliance, audit frameworks, and evidential rigour.
            </p>
            <div className="p-5 mt-4 rounded-xl border border-primary/20 bg-primary/5">
              <p className="text-sm text-foreground">
                This unusually rare pairing—understanding the messy, informal reality of SME supply chains, while knowing exactly what government regulators require to substantiate claims—drove the research and product development behind Tracekind AI.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-2xl surface-card italic text-foreground flex flex-col justify-center">
            "We are empowering businesses with intelligent traceability to build a transparent, trusted and better tomorrow - without the administrative burden."
            <div className="not-italic mt-6 text-xs tracking-[0.18em] uppercase text-primary font-bold">
              Bhavi Poladia · Founder & CEO
            </div>
          </div>
        </div>
      </Section>

    </div>
  );
}
