import { Link } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="h-10 w-10 rounded-xl grid place-items-center bg-primary text-primary-foreground font-display font-bold shadow-sm group-hover:scale-105 transition-transform">
            T
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold tracking-tight text-[15px]">TRACEKIND AI</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-[13px] font-medium text-muted-foreground">
          <Link to="/" hash="product" className="hover:text-foreground transition-colors">Product</Link>
          <Link to="/" hash="technology" className="hover:text-foreground transition-colors">Technology</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground transition-colors outline-none cursor-pointer">
              Use Cases <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-background/95 backdrop-blur-md border-border/60 rounded-xl p-1.5 shadow-lg">
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-2.5 px-3 hover:bg-surface text-sm">
                <a href="/#use-cases-supply-chain">Supply Chain Intelligence</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-2.5 px-3 hover:bg-surface text-sm">
                <a href="/#use-cases-commercial">Commercial Evidence</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-2.5 px-3 hover:bg-surface text-sm">
                <a href="/#use-cases-marketing">Marketing & Claims</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/" hash="research" className="hover:text-foreground transition-colors">Research</Link>
          <Link to="/company" className="hover:text-foreground transition-colors">Company</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="/#pilot"
            data-track="nav-pilot-cta"
            className="inline-flex items-center rounded-full px-5 py-2.5 text-xs font-bold tracking-[0.1em] uppercase bg-primary text-primary-foreground hover:opacity-90 transition shadow-sm hover:shadow-md"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Pilot Access <span className="ml-2 font-serif text-lg leading-none">&rarr;</span>
          </a>
        </div>
      </div>
    </header>
  );
}
