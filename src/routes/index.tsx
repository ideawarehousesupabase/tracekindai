import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import heroGraph from "@/assets/hero-graph.jpg";
import productPrototype from "@/assets/product-prototype.jpg";
import { CheckCircle2, ArrowRight, ShieldCheck, FileSearch, CheckCircle, Database, SearchCode, ShieldAlert, Activity } from "lucide-react";
import { ProofGraphPreview } from "../components/ProofGraphPreview";
import { ProductExample } from "../components/ProductExample";

export const Route = createFileRoute("/")({
  component: Landing,
});

const CAPABILITIES = [
  {
    icon: <FileSearch className="h-6 w-6 text-primary mb-3" />,
    title: "AI Evidence Extraction",
    body: "Automatically extracts data from messy WhatsApps, handwritten invoices, and supplier spreadsheets.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary mb-3" />,
    title: "Claim Verification Engine",
    body: "Cross-checks your sustainability marketing claims against your actual supplier evidence to detect greenwashing risks.",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary mb-3" />,
    title: "Batch-Level Proof",
    body: "Creates an auditable, batch-level proof graph ready for wholesale buyers and evidence substantiation.",
  }
];

const PRICING = [
  {
    tier: "Compliance Core",
    price: "£90",
    audience: "Solo founders & boutique brands",
    features: [
      "Batch-level passport creation",
      "Document upload",
      "Basic evidence tracking",
    ],
  },
  {
    tier: "Evidence Architect",
    price: "£250",
    audience: "SME fashion brands & wholesale buyers",
    features: [
      "Claim-to-evidence scoring",
      "Cross-document contradiction alerts",
      "Shopify, Etsy & Xero sync",
    ],
    highlighted: true,
  },
  {
    tier: "Supply Chain Sovereign",
    price: "£500",
    audience: "Multi-site retailers & consultancies",
    features: [
      "Full contradiction forensics",
      "Buyer-ready compliance reports",
      "Anonymised benchmarking",
      "Dedicated support",
    ],
  },
];

function Landing() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs tracking-[0.18em] uppercase text-muted-foreground mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              For UK Independent Brands
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1]">
              Turn messy supplier records into <span className="text-gradient">evidence-backed claims.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
              Tracekind AI is the evidence verification platform that eliminates the "Verification Tax". We connect to Shopify and Xero, extract data from informal WhatsApps and PDFs, and prove your sustainability claims to meet the CMA Green Claims Code.
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
                className="inline-flex justify-center items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium border border-border hover:bg-surface transition"
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
              <p>Built for UK SMEs.<br/>Integrates with Shopify & Xero (In Development).</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative w-full aspect-square lg:aspect-auto lg:h-[600px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden glow-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <img
                src={heroGraph}
                alt="Tracekind AI evidence knowledge graph visualisation"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-background/80 backdrop-blur-md border border-border p-4 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="h-5 w-5 text-green-500" />
                  <span className="font-medium text-sm">Claim Verified</span>
                </div>
                <div className="text-[11px] font-mono text-muted-foreground">
                  Batch #TK-2026-A417<br/>
                  14 evidence items linked across WhatsApp & PDF invoices.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* PROTOTYPE IMAGE SECTION */}
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-8">
          <div className="text-center mb-6">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-semibold">Illustrative Workflow</span>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-2xl relative">
            <img 
              src={productPrototype} 
              alt="Tracekind AI Product Prototype" 
              className="w-full object-cover aspect-[16/9] opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* REGULATORY TIPPING POINT & PROBLEM */}
      <Section id="problem" eyebrow="The Verification Tax" title="Unsubstantiated claims are now a legal liability">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              UK SMEs spend 3-5 hours a week chasing suppliers for evidence. The CMA's Green Claims Code and the DMCC Act now require environmental claims to be truthful, clear, and substantiated before publication. Tracekind AI automates this, ensuring your claims are structured for compliance review.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Stop relying on fragmented spreadsheets.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Prevent accidental greenwashing fines.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Accelerate wholesale buyer onboarding.</li>
            </ul>
          </div>
          <div className="grid gap-4">
            <div className="p-5 rounded-xl border border-border bg-surface/30">
              <div className="font-display font-semibold text-primary">CMA Green Claims Code</div>
              <p className="mt-2 text-sm text-muted-foreground">Legal liability on brands for unverified claims - evidence required before publication.</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-surface/30">
              <div className="font-display font-semibold text-primary">DMCC Act Enforcement</div>
              <p className="mt-2 text-sm text-muted-foreground">The CMA has enforcement powers including fines up to 10% of global turnover for misleading claims.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SOLUTION */}
      <Section id="product" eyebrow="The Solution" title="An evidence layer between records and claims">
        <div className="grid md:grid-cols-2 gap-10">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tracekind AI sits securely between your <span className="text-foreground">informal supplier records</span> and your
            <span className="text-foreground"> public-facing sustainability claims</span>. By testing whether the evidence you hold genuinely supports the claims you want to make, we provide an automated proof layer that protects your brand from greenwashing accusations.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Validates claims against unstructured supplier data.</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Generates batch-level proof graphs.</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Calculates multi-dimensional confidence scores.</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Recommends evidence-aligned claim wording.</li>
          </ul>
        </div>
      </Section>

      {/* HOW IT WORKS / DEMO */}
      <Section id="how-it-works" eyebrow="Workflow" title="How Tracekind AI Works">
        <div className="grid sm:grid-cols-4 gap-4 relative">
          <div className="hidden sm:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-border -z-10" />
          
          <div className="bg-background border border-border rounded-2xl p-6 text-center relative shadow-sm">
            <div className="w-10 h-10 mx-auto bg-surface border border-border text-foreground rounded-full flex items-center justify-center mb-4">
              <Database className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-2">Ingest</h3>
            <p className="text-xs text-muted-foreground">Connect systems and upload raw unstructured documents.</p>
          </div>
          
          <div className="bg-background border border-border rounded-2xl p-6 text-center relative shadow-sm">
            <div className="w-10 h-10 mx-auto bg-surface border border-border text-foreground rounded-full flex items-center justify-center mb-4">
              <SearchCode className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-2">Structure</h3>
            <p className="text-xs text-muted-foreground">Extract data points and build relationships between records.</p>
          </div>
          
          <div className="bg-background border border-border rounded-2xl p-6 text-center relative shadow-sm">
            <div className="w-10 h-10 mx-auto bg-surface border border-border text-foreground rounded-full flex items-center justify-center mb-4">
              <ShieldAlert className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-2">Verify</h3>
            <p className="text-xs text-muted-foreground">Cross-check claims against structured evidence and flag contradictions.</p>
          </div>
          
          <div className="bg-background border border-border rounded-2xl p-6 text-center relative shadow-sm">
            <div className="w-10 h-10 mx-auto bg-surface border border-border text-foreground rounded-full flex items-center justify-center mb-4">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-2">Act</h3>
            <p className="text-xs text-muted-foreground">Receive confidence scores and recommended claim wording.</p>
          </div>
        </div>
      </Section>

      {/* TECHNOLOGY / PROOFGRAPH */}
      <Section id="technology" eyebrow="Core Technology" title="The Ethical ProofGraph">
        <div className="mb-10 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our proprietary Ethical ProofGraph maps the complex web of relationships between your marketing claims, product batches, and supplier evidence. It automatically detects contradictions across isolated documents to provide a unified confidence score.
          </p>
        </div>
        <ProofGraphPreview />
      </Section>

      {/* USE CASES / EXAMPLES */}
      <Section id="use-cases" eyebrow="In Action" title="Real-World Evidence Verification">
        <ProductExample />
      </Section>

      {/* CORE CAPABILITIES */}
      <Section id="capabilities" eyebrow="Core Capabilities" title="Supports evidence substantiation">
        <div className="grid sm:grid-cols-3 gap-6">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl border border-border bg-surface/40 hover:border-primary/40 transition">
              {c.icon}
              <div className="font-display font-semibold text-lg">{c.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" eyebrow="Pricing" title="Indicative Post-Pilot Pricing">
        <div className="grid md:grid-cols-3 gap-5">
          {PRICING.map((p) => (
            <div
              key={p.tier}
              className={`p-6 rounded-2xl border ${p.highlighted ? "border-primary/60" : "border-border"} surface-card relative`}
              style={p.highlighted ? { boxShadow: "var(--shadow-glow)" } : undefined}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-6 text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground rounded-full px-3 py-1">
                  Most requested
                </div>
              )}
              <div className="text-sm text-muted-foreground">{p.tier}</div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold">{p.price}</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">{p.audience}</div>
              <ul className="mt-5 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 items-start">
                     <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                     <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA / PILOT */}
      <section id="pilot" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="rounded-3xl bg-surface/60 border border-primary/20 p-8 sm:p-16 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{ background: "radial-gradient(ellipse at center, oklch(0.82 0.16 200 / 0.25), transparent 60%)" }}
          />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="text-xs tracking-[0.2em] uppercase text-primary font-bold">Year 1 Pilot Programme</div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold">
              Ready to eliminate the Verification Tax?
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground mx-auto">
              Applications are now open for 8–12 UK independent brands. Cut manual compliance time by 45% and ensure your claims are structured for review.
            </p>
            
            <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
              <div className="bg-background/80 backdrop-blur rounded-xl p-5 border border-border">
                <div className="font-semibold text-sm mb-2 text-foreground">Who is it for?</div>
                <div className="text-sm text-muted-foreground">UK SMEs making sustainability claims, seeking to substantiate their supply chain evidence.</div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-xl p-5 border border-border">
                <div className="font-semibold text-sm mb-2 text-foreground">Duration & Focus</div>
                <div className="text-sm text-muted-foreground">3-6 month pilot focusing on validating your core product batches against supplier data.</div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-xl p-5 border border-border">
                <div className="font-semibold text-sm mb-2 text-foreground">What you receive</div>
                <div className="text-sm text-muted-foreground">Early access to the Ethical ProofGraph, dedicated onboarding, and priority feature requests.</div>
              </div>
            </div>

            <a
              href="mailto:hello@tracekind.ai"
              data-track="footer-pilot-cta"
              className="mt-12 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium bg-primary text-primary-foreground hover:opacity-90 transition shadow-xl hover:scale-105 active:scale-95"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Apply for Pilot Access <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
