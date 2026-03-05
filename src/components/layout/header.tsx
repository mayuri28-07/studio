'use client';
import { HeartPulse, Network } from 'lucide-react';
import { ThemeToggle } from '../theme-toggle';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function Header() {
  return (
    <header className="bg-card/80 border-b backdrop-blur-lg sticky top-0 z-20">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <SidebarTrigger className="md:hidden"/>
          <div className="p-2 bg-primary/10 rounded-lg">
            <HeartPulse className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-primary tracking-tight font-headline">
              HealthSense AI
            </h1>
            <p className="text-sm text-muted-foreground hidden sm:block">
              AI-Driven Healthcare Anomaly Detection System
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Network className="h-8 w-8 text-accent" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
