export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row justify-between gap-8 text-sm text-muted-foreground">
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg grid place-items-center bg-primary text-primary-foreground font-display font-bold text-xs">
              T
            </div>
            <span className="font-semibold text-foreground">Tracekind AI</span>
          </div>
          <p>The evidence intelligence platform for UK independent brands. Trace Every Action. Build Every Trust.</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-500/10 text-green-600 text-xs font-medium border border-green-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              UK GDPR Compliant
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:gap-8">
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-xs uppercase tracking-wider">Product</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="/#demo" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="/#capabilities" className="hover:text-primary transition-colors">Capabilities</a></li>
              <li><a href="/#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-xs uppercase tracking-wider">Company</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="/company#founder" className="hover:text-primary transition-colors">Founder Story</a></li>
              <li><a href="/company#roadmap" className="hover:text-primary transition-colors">Roadmap</a></li>
              <li><a href="mailto:hello@tracekind.ai" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-semibold text-foreground mb-3 text-xs uppercase tracking-wider">Trust</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60">
        <div>© 2026 Tracekind AI. All rights reserved.</div>
        <div>Built for UK SME fashion & lifestyle.</div>
      </div>
    </footer>
  );
}
