import { Network, FileText, AlertCircle, FileSearch, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ProofGraphPreview() {
  return (
    <div className="w-full">
      <div className="p-8 rounded-3xl bg-surface/50 border border-border/60 shadow-sm relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs tracking-wider uppercase text-primary mb-4 font-bold">
              Core Technology
            </div>
            <h3 className="font-display text-3xl font-semibold mb-4">The Ethical ProofGraph</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our proprietary architecture doesn't just store documents. It extracts entities, connects claims to raw evidence, and runs contradiction detection across your entire batch history.
            </p>
            <Link 
              to="/" 
              hash="technology"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              Explore the Technology <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="relative">
            <div className="flex flex-col gap-3">
              {/* Top Row */}
              <div className="flex justify-between items-end gap-3 relative">
                {/* 1. Marketing Claim */}
                <div className="flex-1 bg-surface border border-border rounded-xl p-4 shadow-sm z-10 relative">
                  <div className="text-[10px] tracking-wider uppercase text-muted-foreground mb-1">1. Claim</div>
                  <div className="flex items-center gap-2 font-medium text-sm">
                    <FileText className="h-4 w-4 text-blue-400" />
                    "100% Recycled Cotton"
                  </div>
                </div>
                
                {/* 2. Product Batch */}
                <div className="flex-1 bg-surface border border-border rounded-xl p-4 shadow-sm z-10 relative">
                  <div className="text-[10px] tracking-wider uppercase text-muted-foreground mb-1">2. Batch</div>
                  <div className="flex items-center gap-2 font-medium text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Batch #SS26-004
                  </div>
                </div>
              </div>
              
              {/* Connecting Lines */}
              <div className="flex justify-center -my-1 relative z-0">
                <div className="h-6 w-px bg-border"></div>
              </div>
              
              {/* Middle Row */}
              <div className="flex justify-between items-center gap-3 relative">
                {/* 3. Supplier Evidence */}
                <div className="flex-1 bg-surface border border-border rounded-xl p-4 shadow-sm z-10 relative">
                  <div className="text-[10px] tracking-wider uppercase text-muted-foreground mb-1">3. Evidence</div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <FileSearch className="h-3 w-3" /> WhatsApp (April 4)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <FileSearch className="h-3 w-3" /> Mill Certificate PDF
                  </div>
                </div>
                
                {/* 4. Contradiction Engine */}
                <div className="flex-[1.2] bg-primary/10 border border-primary/30 rounded-xl p-4 shadow-inner z-10 relative">
                  <div className="text-[10px] tracking-wider uppercase text-primary mb-1">4. Engine</div>
                  <div className="flex items-start gap-2 text-xs text-foreground">
                    <Network className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Mapping entities & detecting conflicts across 14 points.</span>
                  </div>
                </div>
              </div>
              
              {/* Connecting Lines */}
              <div className="flex justify-center -my-1 relative z-0">
                <div className="h-6 w-px bg-border"></div>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between gap-3 relative">
                {/* 5. Score */}
                <div className="flex-1 bg-surface border border-border rounded-xl p-4 shadow-sm z-10 relative">
                  <div className="text-[10px] tracking-wider uppercase text-muted-foreground mb-1">5. Score</div>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-display font-semibold text-amber-500 leading-none">64%</div>
                    <div className="text-xs text-muted-foreground mb-1">Substantiated</div>
                  </div>
                </div>
                
                {/* 6. Action */}
                <div className="flex-1 bg-surface border border-border rounded-xl p-4 shadow-sm z-10 relative">
                  <div className="text-[10px] tracking-wider uppercase text-muted-foreground mb-1">6. Action</div>
                  <div className="flex items-start gap-2 text-xs text-foreground">
                    <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Missing dye cert for batch. Request from supplier.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
