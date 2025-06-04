'use client';

import { MidIcon } from "@kord/ui/icons";
import Link from "next/link";

// Import Midday components
import { Button } from "@kord/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@kord/ui/card";
import { Badge } from "@kord/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@kord/ui/tabs";
import { Separator } from "@kord/ui/separator";
import { Section } from "@kord/ui/section";

export default function Page() {
  let userName = "there";
  
  // Use mock data for now to avoid server component issues
  userName = "Marketing Demo User";
  
  // Use client-side i18n instead
  // const t = await getI18n();
  
  // Define metrics with monochrome styling
  const metrics = [
    { 
      label: "Active Campaigns", 
      value: "5", 
      icon: <MidIcon.Briefcase size={18} />
    },
    { 
      label: "Pending Tasks", 
      value: "12", 
      icon: <MidIcon.Clock size={18} />
    },
    { 
      label: "Content Pieces", 
      value: "24", 
      icon: <MidIcon.FileText size={18} />
    },
    { 
      label: "Avg. Open Rate", 
      value: "32%", 
      icon: <MidIcon.TrendingUp size={18} />
    },
  ];
  
  // Define recent activity items with monochrome styling
  const activityItems = [
    {
      title: "Brief Interpreted",
      description: "Q3 Campaign Brief processed and tasks created",
      time: "2 hours ago",
      icon: <MidIcon.Documents size={16} />,
      status: "completed"
    },
    {
      title: "Content Generated",
      description: "Email newsletter draft created for review",
      time: "4 hours ago",
      icon: <MidIcon.Messages size={16} />,
      status: "in-progress"
    },
    {
      title: "Task Updated",
      description: "Social media calendar updated with new posts",
      time: "Yesterday",
      icon: <MidIcon.FileText size={16} />,
      status: "completed"
    },
  ];
  
  // Define quick action items
  const quickActions = [
    {
      title: "Create Brief",
      description: "Start a new marketing brief for Kord to process",
      href: "/briefs/new",
      icon: <MidIcon.Plus size={16} />
    },
    {
      title: "Generate Content",
      description: "Create new content based on your brand guidelines",
      href: "/content/new",
      icon: <MidIcon.FileText size={16} />
    },
    {
      title: "View Reports",
      description: "Check performance metrics and campaign analytics",
      href: "/reports",
      icon: <MidIcon.Analytics size={16} />
    }
  ];
  
  return (
    <div className="space-y-8">
      {/* Welcome Section - Clean, minimalist */}
      <Section>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 rounded-full bg-foreground animate-pulse"></div>
          <h1 className="text-2xl font-medium">Welcome back, {userName}</h1>
        </div>
        <p className="text-muted-foreground">
          Kord has processed 3 briefs and drafted 1 newsletter since your last visit.
        </p>
      </Section>

      {/* Key Metrics - Using neutral colors with subtle accents */}
      <Section>
        <h2 className="text-lg font-medium mb-4">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <Card key={index} className="border shadow-sm hover:bg-muted/40 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-muted rounded-md">
                    {metric.icon}
                  </div>
                  <span className="text-3xl font-mono font-medium">{metric.value}</span>
                </div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Recent Activity - Brutalist grid with consistent cards */}
      <Section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Recent Activity</h2>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mr-1.5"></span>
              Updated just now
            </Badge>
            <Button variant="outline" size="sm" className="h-8 gap-1.5">
              <MidIcon.RefreshCw size={14} />
              <span>Refresh</span>
            </Button>
          </div>
        </div>
        
        <Card>
          <CardContent className="p-0 divide-y divide-border">
            {activityItems.map((item, index) => (
              <div key={index} className="p-4 hover:bg-muted/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-muted rounded-md">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{item.title}</p>
                      <div className="flex items-center gap-2">
                        {item.status === "completed" && (
                          <Badge variant="outline" className="text-xs border-border bg-muted/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                            Completed
                          </Badge>
                        )}
                        {item.status === "in-progress" && (
                          <Badge variant="outline" className="text-xs border-border bg-muted/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></span>
                            In Progress
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">{item.time}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="ghost" size="sm" className="h-7 text-xs px-2">
                        View Details
                      </Button>
                      <span className="text-xs text-muted-foreground">
                        <span className="text-muted-foreground/60">Processed by</span> Kord AI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </Section>
      
      {/* Quick Actions - Clean, minimal cards */}
      <Section>
        <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Card key={index} className="border hover:bg-muted/40 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-muted rounded-md">
                    {action.icon}
                  </div>
                  <h3 className="font-medium">{action.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                <Link href={action.href} className="inline-block w-full">
                  <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                    Start <MidIcon.ExternalLink size={14} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Notifications - Subtle card with consistent styling */}
      <Section>
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Notifications</CardTitle>
              <Button variant="outline" size="sm" className="h-8 px-3">
                <MidIcon.Bell size={16} className="mr-2" />
                <span>Manage</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 pt-4">
            <Card className="bg-muted/30 border shadow-sm">
              <CardContent className="p-3 flex items-start gap-3">
                <div className="p-2 bg-muted rounded-md">
                  <MidIcon.AlertCircle size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium">Campaign plan for Q3 is due soon</p>
                  <p className="text-xs text-muted-foreground">Kord can help you draft one based on Q2 performance</p>
                  <Button variant="ghost" size="sm" className="h-7 mt-2 text-xs px-2">
                    Start Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/30 border shadow-sm">
              <CardContent className="p-3 flex items-start gap-3">
                <div className="p-2 bg-muted rounded-md">
                  <MidIcon.CheckCircle size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium">Kord has saved you 4.5 hours this week</p>
                  <p className="text-xs text-muted-foreground">Through automated content generation and brief interpretation</p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
