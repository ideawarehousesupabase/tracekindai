import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../../components/Section";
import { Megaphone, ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/use-cases/marketing")({
  component: Marketing,
});

function Marketing() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs tracking-[0.18em] uppercase text-primary mb-6 font-bold">
          Use Case
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
          Marketing & Claims
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Safely substantiate your public-facing ESG and sustainability claims, avoiding greenwashing accusations and regulatory fines under the CMA code.
        </p>
      </div>

      <Section id="overview" eyebrow="The Problem" title="Marketing is out of sync with reality">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Marketing teams often publish broad sustainability claims ("100% Sustainable", "Eco-Friendly") without knowing if the underlying supply chain evidence actually supports those statements at the batch level.
          </p>
          <div className="p-6 rounded-2xl surface-card border-amber-500/30 bg-amber-500/5">
            <h4 className="font-display font-semibold text-amber-500 mb-2">The Risk</h4>
            <p className="text-sm text-muted-foreground">
              The CMA's Green Claims Code now places legal liability on brands for unverified claims. The DMCC Act gives regulators powers to fine brands up to 10% of their global turnover for greenwashing.
            </p>
          </div>
        </div>
      </Section>

      <Section id="solution" eyebrow="How we solve it" title="Evidence-aligned claim wording">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl surface-card">
            <Megaphone className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold mb-3">Claim Decomposition</h3>
            <p className="text-sm text-muted-foreground">The AI breaks down marketing copy into testable evidence requirements.</p>
          </div>
          <div className="p-8 rounded-2xl surface-card">
            <AlertTriangle className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold mb-3">Claim-Safe Rewording</h3>
            <p className="text-sm text-muted-foreground">If evidence is weak, the Recommendation Engine suggests alternative, lower-risk phrasing that aligns with the evidence you actually hold.</p>
          </div>
          <div className="p-8 rounded-2xl surface-card bg-primary/5 border-primary/20">
            <div className="text-xs tracking-[0.18em] uppercase text-primary font-bold mb-4">Result</div>
            <h3 className="font-display text-xl font-semibold mb-3">Protected Brand</h3>
            <p className="text-sm text-muted-foreground">Publish sustainability marketing with absolute confidence, knowing every word is backed by a structured proof graph.</p>
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
