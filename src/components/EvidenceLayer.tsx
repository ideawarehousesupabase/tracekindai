import { Database, FileSearch, Network, Megaphone, ArrowRight } from "lucide-react";

export function EvidenceLayer() {
  const steps = [
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Commercial Records",
      desc: "Invoices & POs via Xero/Shopify",
    },
    {
      icon: <FileSearch className="h-6 w-6 text-primary" />,
      title: "Supply-Chain Evidence",
      desc: "WhatsApps, PDFs & declarations",
    },
    {
      icon: <Network className="h-6 w-6 text-primary" />,
      title: "Ethical ProofGraph",
      desc: "Linked evidence & conflict detection",
    },
    {
      icon: <Megaphone className="h-6 w-6 text-primary" />,
      title: "Public Claims",
      desc: "Substantiated marketing & ESG",
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h3 className="font-display text-3xl font-semibold mb-4">One evidence layer across the business</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tracekind AI breaks down silos, creating a unified intelligence layer that connects financial data, raw supplier communications, and your public-facing marketing.
        </p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 -z-10" />
        
        <div className="grid lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-muted-foreground/30 z-0">
                  <ArrowRight className="h-6 w-6" />
                </div>
              )}
              <div className="bg-surface border border-border/60 hover:border-primary/50 transition-colors rounded-2xl p-6 text-center h-full shadow-sm relative z-10 group-hover:-translate-y-1 duration-300">
                <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h4 className="font-display font-semibold mb-2">{step.title}</h4>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
