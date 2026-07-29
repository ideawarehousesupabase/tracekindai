import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";

export const Route = createFileRoute("/company")({
  component: Company,
});

const COMPETITORS = [
  {
    name: "Enterprise traceability platforms",
    example: "TrusTrace, Sourcemap, Retraced",
    focus: "Tier-1/2 supplier mapping for large brands",
    gap: "Built for enterprise ERPs - inaccessible pricing and integration burden for SMEs; no support for informal WhatsApp/PDF/photo evidence.",
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
  "Proprietary SME Sourcing Evidence Ontology built from real UK SME supplier evidence - not enterprise ERP schemas.",
  "Batch-Level Ethical Proof Graph and Cross-Document Ethical Contradiction Detection are original research outputs, not off-the-shelf components.",
  "Founder combines lived SME sourcing experience (Bhavi Arts) with UK regulatory experience (HM Revenue & Customs) - an unusually rare pairing.",
  "Pilot programme creates a defensible dataset of verified UK SME evidence patterns that compounds over time.",
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
  { year: "Year 1", detail: "8-12 pilot brands · evidence-model validation · early recurring revenue" },
  { year: "Year 2", detail: "50-100 UK brands · full Shopify, Etsy & Xero rollout · scaling ARR" },
  { year: "Year 3-5", detail: "200+ UK brands · Scotland, Wales, Northern Ireland · Berlin & Paris entry" },
];

const ROADMAP = [
  {
    year: "Year 1",
    title: "UK Pilot",
    points: ["8-12 brands", "Evidence model validation"],
  },
  {
    year: "Year 2",
    title: "Full UK Rollout",
    points: ["50-100 brands", "Shopify, Etsy & Xero integrations"],
  },
  {
    year: "Year 3-5",
    title: "UK Expansion & Initial International Entry",
    points: [
      "200+ UK brands",
      "Scotland, Wales & Northern Ireland",
      "Berlin & Paris entry",
    ],
  },
];

const PARTNERSHIPS = [
  { name: "Shopify (In Development)", body: "Commerce integration for onboarding independent brands and syncing product and order data." },
  { name: "Xero (In Development)", body: "Accounting integration for invoice-based supplier evidence capture." },
  { name: "Sustainability consultants", body: "Delivery partners providing sourcing audits and advisory alongside the platform." },
  { name: "Wholesale networks", body: "Buyer-side channels validating structured evidence reports for stockist onboarding." },
  { name: "Accelerator & innovation programmes", body: "UK innovation and RegTech programmes supporting research, IP and pilot delivery." },
];

const RECRUITMENT = [
  {
    year: "Year 1",
    hires: ["Founder & CEO", "CTO", "Founding engineer", "Pilot success lead", "Fractional compliance / legal advisor"],
  },
  {
    year: "Year 2",
    hires: ["2-3 additional engineers", "Product designer", "Customer success manager", "Partnerships lead", "Marketing lead"],
  },
  {
    year: "Year 3",
    hires: ["Head of Engineering", "Data & ML lead", "Enterprise / wholesale sales", "International expansion lead", "Operations & finance"],
  },
];

function Company() {
  return (
    <div className="pb-24">
      {/* HEADER SPACE */}
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
          Company Overview
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          Learn more about Tracekind AI's roadmap, team, partnerships, and market positioning.
        </p>
      </div>

      {/* COMPETITORS */}
      <Section id="competitors" eyebrow="Competitive Landscape" title="Why Tracekind AI is different - and hard to replicate">
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
      <Section id="founder" eyebrow="Leadership" title="The Founder Story: Bhavi Poladia">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-lg text-foreground font-medium">
              Tracekind AI was born from the intersection of first-hand SME sourcing frustration and rigorous government regulatory experience.
            </p>
            <p>
              As the founder of <span className="text-foreground font-semibold">Bhavi Arts</span>, a rapidly scaling women-led brand, Bhavi experienced the "Verification Tax" firsthand. Managing complex manufacturing supply chains across India, the UK, the UAE, and Southeast Asia meant relying on fragmented WhatsApp messages and scattered PDFs to prove claims to wholesale buyers like Nykaa and Amazon.
            </p>
            <p>
              Bhavi then took on a role at <span className="text-foreground font-semibold">HM Revenue & Customs (HMRC)</span>, where she gained deep, practical exposure to strict regulatory compliance, audit frameworks, and evidential rigour.
            </p>
            <div className="p-5 mt-4 rounded-xl border border-primary/20 bg-primary/5">
              <p className="text-sm text-foreground">
                This incredibly rare pairing - understanding the messy, informal reality of SME supply chains, while knowing exactly what government regulators require for an audit - is what makes Tracekind AI uniquely positioned to solve the verification problem for UK independent brands.
              </p>
            </div>
          </div>
          <blockquote className="p-6 rounded-2xl surface-card italic text-foreground flex flex-col justify-center">
            "We are empowering businesses with intelligent traceability to build a transparent, trusted and better tomorrow - without the administrative burden."
            <div className="not-italic mt-6 text-xs tracking-[0.18em] uppercase text-primary font-bold">
              Bhavi Poladia · Founder & CEO
            </div>
          </blockquote>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <div className="p-6 rounded-2xl surface-card">
            <div className="text-xs tracking-[0.2em] uppercase text-primary">CTO</div>
            <h3 className="mt-2 font-display text-xl font-semibold">Ananya Vishwakarma</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Technical, managerial and architecture leadership - responsible for platform
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
    </div>
  );
}
