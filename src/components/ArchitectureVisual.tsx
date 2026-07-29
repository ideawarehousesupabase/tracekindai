import { ArrowRight, ArrowDown } from "lucide-react";

export function ArchitectureVisual() {
  const steps = [
    { title: "Marketing / Sourcing Claim", color: "border-blue-500/50 bg-blue-500/10 text-blue-400" },
    { title: "Claim Decomposition", color: "border-primary/50 bg-primary/10 text-primary" },
    { title: "SME Evidence Ontology", color: "border-primary/50 bg-primary/10 text-primary" },
    { title: "Batch-Level Ethical ProofGraph", color: "border-primary/50 bg-primary/10 text-primary" },
    { title: "Evidence Score & Contradiction Detection", color: "border-amber-500/50 bg-amber-500/10 text-amber-500" },
    { title: "Missing-Evidence Actions & Recommendations", color: "border-green-500/50 bg-green-500/10 text-green-500" },
  ];

  return (
    <div className="w-full bg-surface/30 border border-border/50 rounded-3xl p-8 overflow-hidden relative">
      <div className="text-xs tracking-[0.2em] uppercase text-primary font-bold mb-8">System Architecture Pipeline</div>
      
      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-between relative">
        <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-border -z-10 -translate-y-1/2"></div>
        
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4 relative group">
            <div className="text-[10px] text-muted-foreground font-mono tracking-wider absolute -top-8">0{idx + 1}</div>
            <div className={`w-32 h-32 rounded-2xl border ${step.color} p-4 flex items-center justify-center text-center shadow-lg backdrop-blur-sm transition-transform group-hover:scale-105`}>
              <span className="text-xs font-semibold leading-relaxed">{step.title}</span>
            </div>
            {idx < steps.length - 1 && (
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-muted-foreground/40">
                <ArrowRight className="h-5 w-5" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile / Tablet View */}
      <div className="flex lg:hidden flex-col items-center gap-6 relative">
        <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-border -z-10 -translate-x-1/2"></div>
        
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center relative w-full max-w-[280px]">
            <div className={`w-full rounded-2xl border ${step.color} p-5 text-center shadow-md backdrop-blur-sm`}>
              <div className="text-[10px] text-muted-foreground font-mono tracking-wider mb-2">0{idx + 1}</div>
              <span className="text-sm font-semibold">{step.title}</span>
            </div>
            {idx < steps.length - 1 && (
              <div className="h-6 flex items-center justify-center text-muted-foreground/40 my-2">
                <ArrowDown className="h-5 w-5 bg-surface/30 rounded-full" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
