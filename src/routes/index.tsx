import { createFileRoute } from "@tanstack/react-router";
import heroGraph from "@/assets/hero-graph.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const NAV = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#modules", label: "Modules" },
  { href: "#rnd", label: "R&D" },
  { href: "#competitors", label: "Competitors" },
  { href: "#pricing", label: "Pricing" },
  { href: "#financials", label: "Financials" },
  { href: "#partnerships", label: "Partnerships" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#founder", label: "Founder" },
];

const RND = [
  {
    tag: "Scholarly Foundations",
    body: "Grounded in peer-reviewed research on supply-chain transparency, greenwashing detection, knowledge graphs and evidence-based compliance in SME contexts.",
  },
  {
    tag: "Independent Novelty Search",
    body: "Independent prior-art and novelty review confirmed no existing platform combines batch-level evidence graphs, SME sourcing ontologies and claim-to-evidence verification for UK independent brands.",
  },
  {
    tag: "Industry Validation",
    body: "180 UK SME decision-makers surveyed across fashion, accessories and lifestyle — validating the Verification Tax problem, willingness to pay and buyer-side demand for audit-ready evidence.",
  },
  {
    tag: "Prototype Development",
    body: "Working prototype of the Claim-to-Evidence Verification Engine, Batch-Level Ethical Proof Graph and Ethical Evidence Scoring System — tested against real fragmented SME supplier evidence samples.",
  },
  {
    tag: "Pilot Planning",
    body: "Structured 8-week Year 1 pilot programme with 8–12 UK independent brands, defined success metrics, evidence-model refinement loops and buyer-side validation checkpoints.",
  },
];

const COMPETITORS = [
  {
    name: "Enterprise traceability platforms",
    example: "TrusTrace, Sourcemap, Retraced",
    focus: "Tier-1/2 supplier mapping for large brands",
    gap: "Built for enterprise ERPs — inaccessible pricing and integration burden for SMEs; no support for informal WhatsApp/PDF/photo evidence.",
  },
  {
    name: "Digital product passport tools",
    example: "EON, Aware, Certilogo",
    focus: "Consumer-facing product passports",
    gap: "Publish claims without verifying them against underlying supplier evidence; no contradiction detection.",
  },
  {
    name: "Compliance & ESG software",
    example: "Worldly (Higg), Compliance & Risks",
    focus: "ESG scoring and questionnaires",
    gap: "Self-reported data, no batch-level evidence graph, no claim-safe rewording, not designed for founder-led SMEs.",
  },
];

const MOAT = [
  "Proprietary SME Sourcing Evidence Ontology built from real UK SME supplier evidence — not enterprise ERP schemas.",
  "Batch-Level Ethical Proof Graph and Cross-Document Ethical Contradiction Detection are original research outputs, not off-the-shelf components.",
  "Founder combines lived SME sourcing experience (Bhavi Arts) with UK regulatory experience (HM Revenue & Customs) — an unusually rare pairing.",
  "Pilot programme creates a defensible dataset of verified UK SME evidence patterns that compounds over time.",
];

const LEGAL = [
  {
    tag: "UK GDPR",
    body: "Data minimisation, lawful basis, UK-hosted processing, documented retention and supplier data-sharing agreements. DPIA completed before pilot onboarding.",
  },
  {
    tag: "CMA Green Claims Code",
    body: "Platform outputs are designed to help brands meet the six Green Claims Code principles — truthful, clear, substantiated, fair and considering the full life cycle.",
  },
  {
    tag: "DMCC Act Alignment",
    body: "Buyer-ready compliance reports produce the substantiation trail brands need under the Digital Markets, Competition and Consumers Act enforcement regime.",
  },
];

const RISKS = [
  { risk: "Slow SME adoption", mitigation: "Low-friction Shopify, Etsy and Xero onboarding; tiered pricing from £90/month; concierge pilot support." },
  { risk: "Supplier evidence quality varies", mitigation: "SME Sourcing Evidence Ontology and Ethical Evidence Scoring System explicitly model incomplete evidence and confidence." },
  { risk: "Regulatory change", mitigation: "Modular claim rules; ongoing regulatory horizon-scanning; alignment reviewed each release cycle." },
  { risk: "Larger competitors moving down-market", mitigation: "SME-native ontology, batch-level proof graph and founder credibility create a defensible niche." },
];

const FINANCIALS_BUDGET = [
  { label: "Product & engineering", value: "45%" },
  { label: "Pilot delivery & customer success", value: "20%" },
  { label: "Compliance, legal & IP", value: "15%" },
  { label: "Go-to-market & partnerships", value: "15%" },
  { label: "Operations & contingency", value: "5%" },
];

const FINANCIALS_REVENUE = [
  "Tiered monthly SaaS: £90 / £250 / £500",
  "One-time Ontology Onboarding & API Sync fee: £470",
  "One-time Sourcing Health Assessment fee: £520",
  "Future: anonymised benchmarking and buyer-side compliance reporting",
];

const FINANCIALS_PROJECTIONS = [
  { year: "Year 1", detail: "8–12 pilot brands · evidence-model validation · early recurring revenue" },
  { year: "Year 2", detail: "50–100 UK brands · full Shopify, Etsy & Xero rollout · scaling ARR" },
  { year: "Year 3–5", detail: "200+ UK brands · Scotland, Wales, Northern Ireland · Berlin & Paris entry" },
];

const PARTNERSHIPS = [
  { name: "Shopify", body: "Commerce integration for onboarding independent brands and syncing product and order data." },
  { name: "Xero", body: "Accounting integration for invoice-based supplier evidence capture." },
  { name: "Sustainability consultants", body: "Delivery partners providing sourcing audits and advisory alongside the platform." },
  { name: "Wholesale networks", body: "Buyer-side channels validating buyer-ready compliance reports for stockist onboarding." },
  { name: "Accelerator & innovation programmes", body: "UK innovation and RegTech programmes supporting research, IP and pilot delivery." },
];

const RECRUITMENT = [
  {
    year: "Year 1",
    hires: ["Founder & CEO", "CTO", "Founding engineer", "Pilot success lead", "Fractional compliance / legal advisor"],
  },
  {
    year: "Year 2",
    hires: ["2–3 additional engineers", "Product designer", "Customer success manager", "Partnerships lead", "Marketing lead"],
  },
  {
    year: "Year 3",
    hires: ["Head of Engineering", "Data & ML lead", "Enterprise / wholesale sales", "International expansion lead", "Operations & finance"],
  },
];

const MODULES = [
  {
    tag: "Element A",
    title: "Claim-to-Evidence Verification Engine",
    body: "Decomposes composite ethical claims into discrete, machine-testable claim atoms — production origin, labour practices, material sourcing, packaging — and matches each against invoices, supplier communications, shipping records and production photographs.",
  },
  {
    tag: "Element B",
    title: "Batch-Level Ethical Proof Graph",
    body: "A structured graph linking each product batch to its claims, suppliers, production stages, evidence items, contradiction indicators and confidence scores — with explainable, evidence-backed verification.",
  },
  {
    tag: "Element C",
    title: "Ethical Evidence Scoring System",
    body: "A multi-dimensional score per claim, calculated from evidence completeness, document freshness, source reliability, supplier traceability, contradiction severity and batch linkage strength.",
  },
  {
    tag: "Element D",
    title: "SME Sourcing Evidence Ontology",
    body: "A proprietary ontology built for informal SME supply chains — classifying WhatsApp messages, spreadsheets, photographs and PDF invoices into standardised evidence categories with defined evidential strength.",
  },
  {
    tag: "Element E",
    title: "Cross-Document Ethical Contradiction Detection",
    body: "Semantic consistency analysis across sourcing and logistics documents — flagging where an invoice for plastic materials contradicts a “plastic-free packaging” claim, or where timelines undermine a handmade-production claim.",
  },
  {
    tag: "Element F",
    title: "Claim-Safe Recommendation Engine",
    body: "Converts verification results into revised, evidence-aligned claim wording — reducing greenwashing exposure while preserving commercially usable sustainability messaging.",
  },
];

const CAPABILITIES = [
  {
    title: "Claim-to-Evidence Verification",
    body: "Automatically decomposes sustainability claims into machine-testable evidence requirements.",
  },
  {
    title: "Batch-Level Ethical Proof Graph",
    body: "Links every product batch to suppliers, claims, production stages and supporting evidence.",
  },
  {
    title: "Ethical Evidence Scoring System",
    body: "Calculates claim confidence using evidence completeness, freshness, reliability and contradiction severity.",
  },
  {
    title: "Cross-Document Ethical Contradiction Detection",
    body: "Identifies inconsistencies across invoices, shipping records, supplier communications and production evidence.",
  },
  {
    title: "SME Sourcing Evidence Ontology",
    body: "Standardises fragmented WhatsApp messages, spreadsheets, photographs and PDF invoices into structured evidence.",
  },
  {
    title: "Shopify, Etsy & Xero Integration",
    body: "Integrates with UK SME commerce and accounting platforms — Shopify, Etsy and Xero — for seamless onboarding and evidence collection.",
  },
];

const IMPACT = [
  { value: "58.4%", label: "Teams spend 3–5 hours weekly chasing supplier evidence." },
  { value: "80%+", label: "Brands admit publishing marketing claims without structured audit-ready proof." },
  { value: "41%", label: "Brands lose sourcing evidence when staff or suppliers change." },
  { value: "12.5%", label: "Have a fully standardised audit-ready evidence workflow." },
  { value: "30–45%", label: "Expected reduction in manual compliance time during Year 1 pilot (projected target).", projected: true },
  { value: "20–30%", label: "Expected improvement in claim accuracy through Cross-Document Ethical Contradiction Detection (projected target).", projected: true },
];

const INDUSTRIES = [
  "Founder-led independent fashion & accessories brands",
  "Boutique retailers & wholesale buyers",
  "Sustainability & sourcing consultants",
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

const WHY = [
  "Built for fragmented SME supplier evidence",
  "Claim-to-Evidence Verification Engine",
  "Batch-Level Ethical Proof Graph",
  "Ethical Evidence Scoring System",
  "Cross-Document Ethical Contradiction Detection",
  "Claim-Safe Recommendation Engine",
  "Aligned with UK CMA Green Claims Code & DMCC Act",
  "Shopify, Etsy & Xero integrations",
];

const ROADMAP = [
  {
    year: "Year 1",
    title: "UK Pilot",
    points: ["8–12 brands", "Evidence model validation"],
  },
  {
    year: "Year 2",
    title: "Full UK Rollout",
    points: ["50–100 brands", "Shopify, Etsy & Xero integrations"],
  },
  {
    year: "Year 3–5",
    title: "UK Expansion & Initial International Entry",
    points: [
      "200+ UK brands",
      "Scotland, Wales & Northern Ireland",
      "Berlin & Paris entry",
    ],
  },
];

const ESG = [
  { tag: "Environmental", body: "Supports evidence-backed sustainability claims verified against supplier evidence." },
  { tag: "Social", body: "Retains institutional sourcing knowledge across staff and supplier changes." },
  { tag: "Regulatory", body: "Supports compliance with the UK CMA Green Claims Code and the DMCC Act." },
];

const PILOT_METRICS = [
  "Reduction in manual compliance time",
  "Cross-document contradictions detected",
  "Ethical Evidence Scoring System improvement",
  "Buyer onboarding speed",
];

function Landing() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl grid place-items-center bg-primary text-primary-foreground font-display font-bold">
              T
            </div>
            <div className="leading-tight">
              <div className="font-display font-semibold">Tracekind AI</div>
              <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Evidence Intelligence
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#pilot"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Request a pilot
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs tracking-[0.18em] uppercase text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              RegTech · FashionTech · AI
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
              AI-Powered Ethical <br />
              Sourcing Intelligence{" "}
              <span className="text-gradient">& Evidence Verification Platform.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              UK independent brands pay a growing <span className="text-foreground font-medium">Verification Tax</span> —
              hours lost chasing WhatsApp messages, PDF invoices, spreadsheets and production photographs to defend a
              single sustainability claim. Tracekind AI verifies those claims against the supplier evidence you already
              hold, producing explainable, buyer-ready compliance reports <span className="text-foreground font-medium">before</span> claims are published.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pilot"
                className="inline-flex items-center rounded-full px-5 py-3 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                Request Pilot Access
              </a>
              <a
                href="#modules"
                className="inline-flex items-center rounded-full px-5 py-3 text-sm font-medium border border-border hover:bg-surface transition"
              >
                See the six modules
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              <Stat value="£62bn" label="UK fashion & textiles GVA" />
              <Stat value="£90–£500" label="Tiered monthly SaaS" />
              <Stat value="180" label="SME decision-makers surveyed" />
              <Stat value="8–12" label="Year 1 Pilot Programme brands" />
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <img
                src={heroGraph}
                alt="Tracekind AI evidence knowledge graph visualisation"
                width={1600}
                height={1100}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-background/70 backdrop-blur-md border border-border px-3 py-2 text-[11px] font-mono text-muted-foreground">
                Batch #TK-2026-A417 · Claim-to-Evidence graph resolved · 14 evidence items linked
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section id="problem" eyebrow="The Problem" title="The Verification Tax hitting independent brands">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <p className="text-lg text-muted-foreground leading-relaxed">
            UK SMEs in fashion, accessories and lifestyle are under growing pressure to make
            credible sustainability claims — but a significant transparency gap exists between what
            brands say and what they can prove. Independent brands rely on fragmented supplier
            evidence: WhatsApp messages, PDF invoices, spreadsheets and production photographs
            spread across multiple suppliers. The result is a <span className="text-foreground">Verification Tax</span> —
            the hidden hours, cost and risk brands absorb every time they try to defend a single
            sustainability claim.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Fact big="58.4%" small="of teams spend 3–5 hours a week chasing suppliers for missing documents." />
            <Fact big="80%+" small="admit making marketing claims without structured audit-ready proof." />
            <Fact big="41%" small="of brands lose critical sourcing evidence when staff or suppliers change." />
            <Fact big="92%" small="of businesses consider audit-ready proof critical for buyer and consumer trust." />
          </div>
        </div>
        <div className="mt-10 rounded-2xl surface-card p-6 md:p-8">
          <div className="text-xs tracking-[0.2em] uppercase text-primary">Regulatory Tipping Point</div>
          <div className="mt-4 grid md:grid-cols-3 gap-6 text-sm">
            <RegItem
              title="CMA Green Claims Code (Jan 2026)"
              body="Legal liability on brands for unverified claims — evidence required before publication."
            />
            <RegItem
              title="DMCC Act Enforcement"
              body="The Digital Markets, Competition and Consumers Act imposes fines up to 10% of global turnover for misleading green claims."
            />
            <RegItem
              title="EU Green Transition Directive (Sept 2026)"
              body="Restricts generic environmental claims without verifiable, batch-level substantiation."
            />
          </div>
        </div>
      </Section>

      {/* SOLUTION */}
      <Section id="solution" eyebrow="The Solution" title="An evidence layer between supplier records and public claims">
        <div className="grid md:grid-cols-2 gap-10">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tracekind AI sits between <span className="text-foreground">informal supplier records</span> and
            <span className="text-foreground"> public-facing sustainability claims</span>. The{" "}
            <span className="text-foreground">Claim-to-Evidence Verification Engine</span> tests whether the evidence a
            brand holds genuinely supports the claim it wants to make — feeding a{" "}
            <span className="text-foreground">Batch-Level Ethical Proof Graph</span>, the{" "}
            <span className="text-foreground">Ethical Evidence Scoring System</span>, the{" "}
            <span className="text-foreground">SME Sourcing Evidence Ontology</span>,{" "}
            <span className="text-foreground">Cross-Document Ethical Contradiction Detection</span> and a{" "}
            <span className="text-foreground">Claim-Safe Recommendation Engine</span> that returns
            evidence-aligned claim wording and buyer-ready compliance reports.
          </p>
          <ul className="space-y-3 text-sm">
            {[
              "Claim-to-Evidence Verification Engine — claims decomposed into machine-testable atoms",
              "Batch-Level Ethical Proof Graph with contradiction flags",
              "Ethical Evidence Scoring System — multi-dimensional score per claim",
              "SME Sourcing Evidence Ontology for WhatsApp, PDFs, spreadsheets, photographs",
              "Cross-Document Ethical Contradiction Detection across sourcing and logistics",
              "Claim-Safe Recommendation Engine for evidence-aligned wording",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* MODULES */}
      <Section id="modules" eyebrow="Six Modules" title="The proprietary technology stack">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES.map((m, i) => (
            <article key={m.tag} className="p-6 rounded-2xl surface-card hover:border-primary/40 transition group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-primary tracking-widest">{m.tag}</span>
                <span className="text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold leading-tight">{m.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* CAPABILITIES */}
      <Section eyebrow="Platform Capabilities" title="What the platform delivers">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="p-5 rounded-xl border border-border bg-surface/40">
              <div className="font-display font-semibold">{c.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* IMPACT */}
      <Section id="impact" eyebrow="Market Validation & Expected Pilot Impact" title="Evidence from the market — and expected pilot outcomes">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {IMPACT.map((s) => (
            <div key={s.label} className="p-5 rounded-xl surface-card text-left">
              <div className="flex items-center justify-between">
                <div className="font-display text-3xl font-semibold text-gradient">{s.value}</div>
                {s.projected && (
                  <span className="text-[9px] tracking-[0.18em] uppercase text-primary border border-primary/40 rounded-full px-2 py-0.5">
                    Expected Pilot
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Expected Pilot Outcomes are projected Year 1 pilot targets, not achieved results.
        </p>
      </Section>

      {/* WHY TRACEKIND */}
      <Section id="why" eyebrow="Why Tracekind AI?" title="Purpose-built for UK independent brands.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY.map((w) => (
            <div key={w} className="p-5 rounded-xl surface-card">
              <div className="flex gap-3 items-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm">{w}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section id="industries" eyebrow="Target Markets" title="Industries served">
        <div className="flex flex-wrap gap-3">
          {INDUSTRIES.map((i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full border border-border bg-surface/40 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition"
            >
              {i}
            </span>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" eyebrow="Pricing" title="Tiered SaaS built for SME reality">
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
              <ul className="mt-5 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 items-start">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl surface-card flex items-baseline justify-between">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-primary">One-time Fee</div>
              <div className="mt-1 font-display font-semibold">Ontology Onboarding & API Sync</div>
            </div>
            <div className="font-display text-2xl font-semibold">£470</div>
          </div>
          <div className="p-5 rounded-xl surface-card flex items-baseline justify-between">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-primary">One-time Fee</div>
              <div className="mt-1 font-display font-semibold">Sourcing Health Assessment</div>
            </div>
            <div className="font-display text-2xl font-semibold">£520</div>
          </div>
        </div>
      </Section>

      {/* R&D EVIDENCE */}
      <Section id="rnd" eyebrow="Evidence of Research & Development" title="Grounded in research, validated in the market">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {RND.map((r) => (
            <div key={r.tag} className="p-6 rounded-2xl surface-card">
              <div className="text-xs tracking-[0.2em] uppercase text-primary">{r.tag}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* COMPETITORS */}
      <Section id="competitors" eyebrow="Competitive Landscape" title="Why Tracekind AI is different — and hard to replicate">
        <div className="grid md:grid-cols-3 gap-5">
          {COMPETITORS.map((c) => (
            <div key={c.name} className="p-6 rounded-2xl surface-card">
              <div className="font-display font-semibold">{c.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">e.g. {c.example}</div>
              <div className="mt-4 text-xs tracking-[0.18em] uppercase text-primary">Focus</div>
              <p className="mt-1 text-sm text-muted-foreground">{c.focus}</p>
              <div className="mt-3 text-xs tracking-[0.18em] uppercase text-primary">Gap for UK SMEs</div>
              <p className="mt-1 text-sm text-muted-foreground">{c.gap}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 rounded-2xl surface-card">
          <div className="text-xs tracking-[0.2em] uppercase text-primary">Why competitors cannot easily replicate</div>
          <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm">
            {MOAT.map((m) => (
              <li key={m} className="flex gap-3 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FINANCIALS */}
      <Section id="financials" eyebrow="Financial Summary" title="Startup budget, revenue model & projections">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl surface-card">
            <div className="text-xs tracking-[0.2em] uppercase text-primary">Startup Budget Allocation</div>
            <ul className="mt-4 space-y-3 text-sm">
              {FINANCIALS_BUDGET.map((b) => (
                <li key={b.label} className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">{b.label}</span>
                  <span className="font-display font-semibold">{b.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl surface-card">
            <div className="text-xs tracking-[0.2em] uppercase text-primary">Revenue Model</div>
            <ul className="mt-4 space-y-2 text-sm">
              {FINANCIALS_REVENUE.map((r) => (
                <li key={r} className="flex gap-2 items-start">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl surface-card">
            <div className="text-xs tracking-[0.2em] uppercase text-primary">Financial Projections</div>
            <ul className="mt-4 space-y-3 text-sm">
              {FINANCIALS_PROJECTIONS.map((p) => (
                <li key={p.year}>
                  <div className="font-display font-semibold">{p.year}</div>
                  <div className="text-muted-foreground text-xs mt-1">{p.detail}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Figures reflect the initial business plan allocation and projected pilot trajectory; not audited results.
        </p>
      </Section>


      <Section id="roadmap" eyebrow="Growth Roadmap" title="From UK pilot to initial international entry">
        <div className="grid md:grid-cols-3 gap-5">
          {ROADMAP.map((r) => (
            <div key={r.year} className="p-6 rounded-2xl surface-card">
              <div className="text-xs tracking-[0.2em] uppercase text-primary">{r.year}</div>
              <div className="mt-2 font-display text-xl font-semibold">{r.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-2 items-start">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* PARTNERSHIPS */}
      <Section id="partnerships" eyebrow="Partnerships" title="Ecosystem partners powering the platform">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PARTNERSHIPS.map((p) => (
            <div key={p.name} className="p-5 rounded-xl surface-card">
              <div className="font-display font-semibold">{p.name}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* RECRUITMENT */}
      <Section id="team-growth" eyebrow="Recruitment & Team Growth" title="Hiring roadmap from Year 1 to Year 3">
        <div className="grid md:grid-cols-3 gap-5">
          {RECRUITMENT.map((r) => (
            <div key={r.year} className="p-6 rounded-2xl surface-card">
              <div className="text-xs tracking-[0.2em] uppercase text-primary">{r.year}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {r.hires.map((h) => (
                  <li key={h} className="flex gap-2 items-start">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* FOUNDER */}
      <Section id="founder" eyebrow="Founder" title="Bhavi Poladia — Founder & CEO">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Bhavi is the founder of <span className="text-foreground">Bhavi Arts</span>, a
              women-led hair accessories brand scaled across{" "}
              <span className="text-foreground">Amazon, Nykaa and Alibaba</span>, with supplier
              relationships across <span className="text-foreground">India, the UK, the UAE and
              South East Asia</span>.
            </p>
            <p>
              She combines that first-hand SME sourcing experience with regulatory and audit
              experience gained at <span className="text-foreground">HM Revenue & Customs</span> —
              spanning operational sourcing, regulatory compliance and digital marketing.
            </p>
            <p>
              This intersection of operational sourcing reality and regulatory fluency directly
              informs how Tracekind AI models evidence, contradictions and claim confidence for
              real UK independent brands.
            </p>
          </div>
          <blockquote className="p-6 rounded-2xl surface-card italic text-foreground">
            “Empowering businesses with intelligent traceability to build a transparent, trusted
            and better tomorrow.”
            <div className="not-italic mt-4 text-xs tracking-[0.18em] uppercase text-muted-foreground">
              Bhavi Poladia · Founder
            </div>
          </blockquote>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <div className="p-6 rounded-2xl surface-card">
            <div className="text-xs tracking-[0.2em] uppercase text-primary">CTO</div>
            <h3 className="mt-2 font-display text-xl font-semibold">Ananya Vishwakarma</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Technical, managerial and architecture leadership — responsible for platform
              engineering, evidence models and integration surface.
            </p>
          </div>
          <div className="p-6 rounded-2xl surface-card">
            <div className="text-xs tracking-[0.2em] uppercase text-primary">Core Values</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Evidence-Led Innovation · Integrity · Traceability · Accessibility · Empowerment.
            </p>
          </div>
        </div>
      </Section>

      {/* ESG */}
      <Section eyebrow="Sustainability & ESG Impact" title="How Tracekind AI contributes">
        <div className="grid md:grid-cols-3 gap-5">
          {ESG.map((e) => (
            <div key={e.tag} className="p-6 rounded-2xl surface-card">
              <div className="text-xs tracking-[0.2em] uppercase text-primary">{e.tag}</div>
              <p className="mt-3 text-sm text-muted-foreground">{e.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* LEGAL & RISK */}
      <Section id="legal" eyebrow="Legal Compliance & Risk Management" title="Regulatory alignment and risk mitigation">
        <div className="grid md:grid-cols-3 gap-5">
          {LEGAL.map((l) => (
            <div key={l.tag} className="p-6 rounded-2xl surface-card">
              <div className="text-xs tracking-[0.2em] uppercase text-primary">{l.tag}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{l.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 rounded-2xl surface-card">
          <div className="text-xs tracking-[0.2em] uppercase text-primary">Key business risks & mitigation</div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {RISKS.map((r) => (
              <div key={r.risk} className="p-4 rounded-xl border border-border bg-surface/40">
                <div className="font-display font-semibold text-sm">{r.risk}</div>
                <p className="mt-1 text-xs text-muted-foreground">{r.mitigation}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA / PILOT */}
      <section id="pilot" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl surface-card p-10 md:p-16 text-center relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{ background: "radial-gradient(ellipse at center, oklch(0.82 0.16 200 / 0.25), transparent 60%)" }}
          />
          <div className="relative">
            <div className="text-xs tracking-[0.2em] uppercase text-primary">Year 1 Pilot</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
              Join the 8-Week UK Pilot Programme
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Applications are now open for 8–12 UK independent brands participating in the Year 1
              pilot programme — digitally active brands in fashion, accessories and handmade goods
              sourcing from South Asia.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
              {PILOT_METRICS.map((m) => (
                <div key={m} className="p-3 rounded-lg border border-border bg-surface/40 text-xs text-muted-foreground">
                  {m}
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-muted-foreground">
              Pilot success metrics — targets to be measured during the programme, not achieved results.
            </p>
            <a
              href="mailto:hello@tracekind.ai"
              className="mt-8 inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Request Pilot Access
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg grid place-items-center bg-primary text-primary-foreground font-display font-bold text-xs">
              T
            </div>
            <span>Tracekind AI · Trace Every Action. Build Every Trust.</span>
          </div>
          <div>© 2026 Tracekind AI. UK-focused evidence intelligence.</div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-24 border-t border-border/40">
      <div className="max-w-3xl mb-12">
        <div className="text-xs tracking-[0.22em] uppercase text-primary">{eyebrow}</div>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold leading-tight">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Fact({ big, small }: { big: string; small: string }) {
  return (
    <div className="p-5 rounded-xl surface-card">
      <div className="font-display text-3xl font-semibold text-gradient">{big}</div>
      <div className="mt-2 text-sm text-muted-foreground">{small}</div>
    </div>
  );
}

function RegItem({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="font-display font-semibold">{title}</div>
      <p className="mt-2 text-muted-foreground">{body}</p>
    </div>
  );
}
