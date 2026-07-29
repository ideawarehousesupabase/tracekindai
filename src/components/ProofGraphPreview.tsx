import { FileText, Factory, ShieldAlert, CheckCircle, Search, ArrowRight, ShieldCheck } from "lucide-react";

export function ProofGraphPreview() {
  return (
    <div className="relative p-6 rounded-2xl border border-border bg-surface/30 surface-card">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Claim Node */}
        <div className="flex-1 min-w-[200px] p-4 rounded-xl border border-primary/40 bg-primary/5 text-center shadow-sm">
          <div className="text-xs uppercase tracking-wider text-primary font-bold mb-2">Marketing Claim</div>
          <div className="font-display font-semibold">"100% Organic Cotton"</div>
          <div className="mt-2 text-xs text-muted-foreground flex items-center justify-center gap-1">
            <CheckCircle className="w-3 h-3 text-green-500" /> Confidence: 92%
          </div>
        </div>

        {/* Connection Line */}
        <div className="hidden md:flex flex-col items-center">
          <div className="h-[2px] w-12 bg-border relative">
            <ArrowRight className="absolute -right-2 -top-2 text-border w-4 h-4" />
          </div>
        </div>

        {/* Product Batch Node */}
        <div className="flex-1 min-w-[200px] p-4 rounded-xl border border-border bg-background text-center shadow-sm">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Product Batch</div>
          <div className="font-mono text-sm font-semibold">BATCH-2026-XQ</div>
          <div className="mt-2 flex justify-center">
             <Factory className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Connection Line */}
        <div className="hidden md:flex flex-col items-center">
          <div className="h-[2px] w-12 bg-border relative">
            <ArrowRight className="absolute -right-2 -top-2 text-border w-4 h-4" />
          </div>
        </div>

        {/* Evidence Nodes */}
        <div className="flex-1 min-w-[200px] flex flex-col gap-3">
          <div className="p-3 rounded-lg border border-border bg-background flex items-start gap-3 shadow-sm">
            <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="text-left">
              <div className="text-xs font-bold">Supplier Invoice</div>
              <div className="text-[10px] text-muted-foreground">Cotton Corp UK</div>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-border bg-background flex items-start gap-3 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            <div className="text-left">
              <div className="text-xs font-bold">GOTS Certificate</div>
              <div className="text-[10px] text-muted-foreground">Valid till 2027</div>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-orange-500/30 bg-orange-500/5 flex items-start gap-3 shadow-sm">
            <ShieldAlert className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <div className="text-left">
              <div className="text-xs font-bold">WhatsApp Log</div>
              <div className="text-[10px] text-orange-600/80">Missing dye cert</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-border/40 text-center">
        <a href="#technology" className="inline-flex justify-center items-center gap-2 rounded-full px-5 py-2 text-sm font-medium border border-border hover:bg-surface transition">
          <Search className="w-4 h-4" /> Explore Technology
        </a>
      </div>
    </div>
  );
}
