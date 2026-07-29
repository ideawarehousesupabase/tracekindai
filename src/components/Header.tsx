import { Link } from "@tanstack/react-router";


export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl grid place-items-center bg-primary text-primary-foreground font-display font-bold">
            T
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold">Tracekind AI</div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Evidence Intelligence
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <a href="/#product" className="hover:text-foreground transition-colors">Product</a>
          <a href="/#technology" className="hover:text-foreground transition-colors">Technology</a>
          <a href="/#use-cases" className="hover:text-foreground transition-colors">Use Cases</a>
          <a href="/#research" className="hover:text-foreground transition-colors">Research</a>
          <Link to="/company" className="hover:text-foreground transition-colors">Company</Link>
        </nav>
        <a
          href="/#pilot"
          data-track="nav-pilot-cta"
          className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition shadow-sm"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          Pilot Access
        </a>
      </div>
    </header>
  );
}
