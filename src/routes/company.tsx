import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";

export const Route = createFileRoute("/company")({
  component: Company,
});

const FINANCIALS_BUDGET = [
  { label: "Product & engineering", value: "45%" },
  { label: "Pilot delivery & customer success", value: "20%" },
  { label: "Compliance, legal & IP", value: "15%" },
  { label: "Go to market & partnerships", value: "15%" },
  { label: "Operations & contingency", value: "5%" },
];

const FINANCIALS_REVENUE = [
  "Tiered monthly SaaS: £90 / £250 / £500",
  "One time Ontology Onboarding & API Sync fee: £470",
  "One time Sourcing Health Assessment fee: £520",
  "Future: anonymised benchmarking and buyer side compliance reporting",
];

const FINANCIALS_PROJECTIONS = [
  { year: "Year 1", detail: "8 to 12 pilot brands · evidence model validation · early recurring revenue" },
  { year: "Year 2", detail: "50 to 100 UK brands · full Shopify, Etsy & Xero rollout · scaling ARR" },
  { year: "Years 3 to 5", detail: "200+ UK brands · Scotland, Wales, Northern Ireland · Berlin & Paris entry" },
];

const ROADMAP = [
  {
    year: "Year 1",
    title: "UK Pilot",
    points: ["8 to 12 brands", "Evidence model validation"],
  },
  {
    year: "Year 2",
    title: "Full UK Rollout",
    points: ["50 to 100 brands", "Shopify, Etsy & Xero integrations"],
  },
  {
    year: "Years 3 to 5",
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
  { name: "Xero (In Development)", body: "Accounting integration for invoice based supplier evidence capture." },
  { name: "Shopify & Etsy", body: "Direct integrations to auto verify product claims at the point of sale." },
  { name: "Wholesale networks", body: "Buyer side channels validating structured evidence reports for stockist onboarding." },
  { name: "Accelerator & innovation programmes", body: "UK innovation and RegTech programmes supporting research, IP and pilot delivery." },
];

const RECRUITMENT = [
  {
    year: "Year 1",
    hires: ["Founder & CEO", "CTO", "Founding engineer", "Pilot success lead", "Fractional compliance / legal advisor"],
  },
  {
    year: "Year 2",
    hires: ["2 to 3 additional engineers", "Product designer", "Customer success manager", "Partnerships lead", "Marketing lead"],
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
    </div>
  );
}
