import type { ReactNode } from 'react';

type DocSectionProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  id: string;
};

export function DocSection({ title, icon, children, id }: DocSectionProps) {
  return (
    <section id={id} className="py-8 md:py-12 border-b last:border-b-0">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-primary/10 text-primary p-3 rounded-lg">
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground tracking-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}
