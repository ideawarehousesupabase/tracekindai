import React from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-24 border-t border-border/40">
      <div className="max-w-3xl mb-12">
        <div className="text-xs tracking-[0.22em] uppercase text-primary">{eyebrow}</div>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold leading-tight">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
