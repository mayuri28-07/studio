import { Users, ShieldAlert, Zap, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const statsData = [
    {
      title: "Current Patients",
      value: "125",
      icon: <Users className="h-4 w-4 text-accent" />,
      hoverClass: "hover:border-accent",
    },
    {
      title: "High-Risk Alerts",
      value: "42",
      icon: <ShieldAlert className="h-4 w-4 text-destructive" />,
      hoverClass: "hover:border-destructive",
    },
    {
      title: "Anomalies Detected (3 mo)",
      value: "1,289",
      icon: <Zap className="h-4 w-4 text-primary" />,
      hoverClass: "hover:border-primary",
    },
];

export function ProjectOverview() {
    return (
        <section id="overview" className="py-8 md:py-12 border-b last:border-b-0">
            <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground tracking-tight">
                    Platform Overview
                </h2>
            </div>
            <div className="space-y-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                    HealthSense AI is a platform designed to enhance patient care through real-time monitoring and intelligent analysis of vital signs. It provides healthcare professionals with timely insights to enable quicker interventions.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                    {statsData.map((stat) => (
                        <Card key={stat.title} className={cn("transition-all duration-300 hover:shadow-lg", stat.hoverClass)}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {stat.title}
                                </CardTitle>
                                {stat.icon}
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
