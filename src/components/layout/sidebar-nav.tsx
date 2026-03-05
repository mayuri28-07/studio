'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';
import { HeartPulse, Home, FileCheck, BarChart3, ShieldAlert } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Home, matchExact: true },
  { href: '/validation', label: 'Validation', icon: FileCheck },
  { href: '/analysis', label: 'Analysis', icon: BarChart3 },
  { href: '/patients', label: 'Patients', icon: ShieldAlert },
];

export function SidebarNav() {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  const isActive = (href: string, matchExact = false) => {
    if (matchExact) {
      return pathname === href;
    }
    return pathname.startsWith(href) && (href !== '/' || pathname === '/');
  };

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-3 p-2">
            <div className="p-2 bg-sidebar-primary/10 rounded-lg">
                <HeartPulse className="h-8 w-8 text-sidebar-primary" />
            </div>
            <div className="group-data-[collapsible=icon]:hidden">
                <h1 className="text-lg font-bold text-sidebar-primary tracking-tight font-headline">
                    HealthSense AI
                </h1>
            </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive(item.href, item.matchExact)}
                  tooltip={item.label}
                  onClick={() => setOpenMobile(false)}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}
