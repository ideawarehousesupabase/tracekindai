import { CheckCircle2, AlertTriangle, FileCheck2, FileWarning } from "lucide-react";

export function ProductExample() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="p-6 rounded-2xl border border-border bg-surface/30 surface-card">
        <div className="text-xs tracking-[0.2em] uppercase text-primary font-bold mb-4">Target Claim</div>
        <h3 className="font-display text-2xl font-semibold mb-6">"100% Plastic-Free Packaging"</h3>
        
        <div className="space-y-4">
          <div className="text-sm font-medium text-muted-foreground border-b border-border/40 pb-2">Supplier Evidence Evaluated</div>
          
          <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-background border border-border">
            <div className="flex items-center gap-3">
              <FileCheck2 className="w-5 h-5 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Supplier Declaration</div>
                <div className="text-xs text-muted-foreground">PDF Document</div>
              </div>
            </div>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>

          <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-background border border-border">
            <div className="flex items-center gap-3">
              <FileCheck2 className="w-5 h-5 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Invoice #INV-992</div>
                <div className="text-xs text-muted-foreground">Line item: Kraft mailers</div>
              </div>
            </div>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>

          <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-background border border-border">
            <div className="flex items-center gap-3">
              <FileCheck2 className="w-5 h-5 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Packaging Spec</div>
                <div className="text-xs text-muted-foreground">Material composition</div>
              </div>
            </div>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>

          <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <div className="flex items-center gap-3">
              <FileWarning className="w-5 h-5 text-orange-500" />
              <div>
                <div className="text-sm font-medium text-orange-700/90 dark:text-orange-400">Supplier WhatsApp</div>
                <div className="text-xs text-orange-600/70 dark:text-orange-400/70">"We used regular tape for the last batch."</div>
              </div>
            </div>
            <AlertTriangle className="w-5 h-5 text-orange-500" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
          <div className="text-xs tracking-[0.2em] uppercase text-primary font-bold mb-2">Verification Result</div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-4xl font-bold">64%</span>
            <span className="text-sm font-medium text-orange-600 dark:text-orange-400">Review Required</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            The primary documents support the claim, but unstructured communications indicate a contradiction regarding the sealing tape used in recent batches.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-border bg-surface/30">
          <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-bold mb-4">Recommended Action</div>
          <div className="flex gap-3 items-start">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Request updated packaging composition evidence.</div>
              <div className="text-xs text-muted-foreground mt-1">
                Ask the supplier to confirm if the tape is plastic-free or if the claim should be amended to "95% Plastic-Free Packaging".
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
