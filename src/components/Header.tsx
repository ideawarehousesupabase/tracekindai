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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--brand-navy)]/95 border-b border-[var(--brand-navy)]/40 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3.5 group text-white">
          <div className="h-10 w-10 rounded-xl grid place-items-center bg-primary text-primary-foreground font-display font-bold shadow-sm group-hover:scale-105 transition-transform">
            T
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold tracking-tight text-[15px] tracking-widest uppercase">TRACEKIND <span className="text-primary font-normal opacity-70">AI</span></div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-white/70">
          <Link to="/" hash="product" className="hover:text-white transition-colors">Product</Link>
          <Link to="/technology" className="hover:text-white transition-colors">Technology</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-white transition-colors outline-none cursor-pointer text-[0.92rem]">
              Use Cases <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-background/95 backdrop-blur-md border-border/60 rounded-xl p-1.5 shadow-lg">
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-2.5 px-3 hover:bg-surface text-sm">
                <Link to="/use-cases/supply-chain">Supply Chain Intelligence</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-2.5 px-3 hover:bg-surface text-sm">
                <Link to="/use-cases/commercial">Commercial Evidence</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-2.5 px-3 hover:bg-surface text-sm">
                <Link to="/use-cases/marketing">Marketing & Claims</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/research" className="hover:text-white transition-colors">Research</Link>
          <Link to="/company" className="hover:text-white transition-colors">Company</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="/#pilot"
            data-track="nav-pilot-cta"
            className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition shadow-sm hover:shadow-md"
          >
            Pilot Access
          </a>
        </div>
      </div>
    </header>
  );
}
