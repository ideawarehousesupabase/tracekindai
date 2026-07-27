import { Link } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

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
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-foreground transition-colors outline-none">
              Menu <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-background border-border">
              <DropdownMenuItem asChild><a href="/#problem" className="cursor-pointer">Problem</a></DropdownMenuItem>
              <DropdownMenuItem asChild><a href="/#solution" className="cursor-pointer">Solution</a></DropdownMenuItem>
              <DropdownMenuItem asChild><a href="/#demo" className="cursor-pointer">Workflow / Demo</a></DropdownMenuItem>
              <DropdownMenuItem asChild><a href="/#capabilities" className="cursor-pointer">Capabilities (Modules)</a></DropdownMenuItem>
              <DropdownMenuItem asChild><a href="/#pricing" className="cursor-pointer">Pricing</a></DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem asChild><Link to="/company" hash="founder" className="cursor-pointer">Founder</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/company" hash="roadmap" className="cursor-pointer">Roadmap</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/company" hash="competitors" className="cursor-pointer">Competitors</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/company" hash="financials" className="cursor-pointer">Financials</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/company" hash="partnerships" className="cursor-pointer">Partnerships</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <a
          href="/#pilot"
          data-track="nav-pilot-cta"
          className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition shadow-sm"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          Join the Pilot
        </a>
      </div>
    </header>
  );
}
