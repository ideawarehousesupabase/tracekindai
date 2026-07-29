import { CheckCircle2, ShieldAlert, AlertTriangle, MessageSquare, FileText, ArrowRight } from "lucide-react";

export function ProductExample() {
  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs tracking-wider uppercase text-primary mb-4 font-bold">
            Real-World Example
          </div>
          <h3 className="font-display text-3xl font-semibold mb-4">Detecting hidden compliance risks</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            You might hold a supplier declaration stating your packaging is plastic-free. But what if a casual WhatsApp message from that same supplier contradicts it?
            Tracekind AI finds these conflicts before they become a legal liability.
          </p>
          <ul className="space-y-4 text-sm text-muted-foreground mb-8">
            <li className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <span className="font-semibold text-foreground">Marketing Claim:</span> "100% Plastic-Free Packaging"
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-surface-elevated border border-border text-muted-foreground flex items-center justify-center shrink-0">
                <FileText className="h-4 w-4" />
              </div>
              <div>
                <span className="font-semibold text-foreground">Supplier Evidence:</span> Signed packaging spec sheet (Looks good)
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div>
                <span className="font-semibold text-foreground">Detected Conflict:</span> WhatsApp message: "Had to use regular tape for this batch"
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-border/40">
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Confidence Score</div>
              <div className="flex items-end gap-2">
                <div className="font-display text-4xl font-semibold text-amber-500 leading-none">64%</div>
                <div className="text-sm font-medium text-amber-500 mb-1">Medium Risk</div>
              </div>
            </div>
            <div className="h-16 w-16 rounded-full border-4 border-amber-500/20 border-t-amber-500 flex items-center justify-center">
              <ShieldAlert className="h-6 w-6 text-amber-500" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-surface-elevated border border-border/50">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                <MessageSquare className="h-4 w-4" /> Evidence Source: WhatsApp
              </div>
              <p className="text-sm italic text-foreground/80">
                "Hi, we ran out of the paper tape so we had to use regular tape for this batch (#SS26-004). Hope that's okay."
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 mb-1">
                Recommended Action
              </div>
              <p className="text-sm text-foreground">
                Pause "100% Plastic-Free" marketing for Batch #SS26-004. Contact supplier to verify tape material.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
