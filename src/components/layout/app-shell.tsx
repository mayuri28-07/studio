import * as React from 'react';
import { Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { SidebarNav } from './sidebar-nav';
import { Header } from './header';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Sidebar>
            <SidebarNav />
        </Sidebar>
        <SidebarInset>
            <Header />
            <main className="max-w-5xl mx-auto p-4 sm:p-8 md:p-12 w-full flex-1">
                {children}
            </main>
            <footer className="text-center p-6 text-muted-foreground text-sm border-t">
                <p>HealthSense AI &copy; {new Date().getFullYear()}</p>
            </footer>
        </SidebarInset>
    </>
  );
}
