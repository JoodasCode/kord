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
import { KeyboardShortcut } from "@/components/keyboard-shortcut";

export default function Page() {
  let userName = "there";
  
  // Use mock data for now to avoid server component issues
  userName = "Marketing Demo User";
  
  // Use client-side i18n instead
  // const t = await getI18n();
  
  // Additional metrics and data will be defined below
  
  // Define metrics with monochrome styling
  const metrics = [
    { 
      label: "Active Campaigns", 
      value: "5", 
      icon: <MidIcon.Briefcase size={18} />,
      trend: "up",
      change: "+2"
    },
    { 
      label: "Pending Tasks", 
      value: "12", 
      icon: <MidIcon.Clock size={18} />,
      trend: "down",
      change: "-3"
    },
    { 
      label: "Content Pieces", 
      value: "24", 
      icon: <MidIcon.FileText size={18} />,
      trend: "up",
      change: "+8"
    },
    { 
      label: "Avg. Open Rate", 
      value: "32%", 
      icon: <MidIcon.TrendingUp size={18} />,
      trend: "up",
      change: "+5%"
    },
  ];
  
  // Define recent activity items with monochrome styling
  const activityItems = [
    {
      title: "Brief Interpreted",
      description: "Q3 Campaign Brief processed and tasks created",
      time: "2 hours ago",
      icon: <MidIcon.Documents size={16} />,
      status: "completed",
      shortcut: ["B", "I"]
    },
    {
      title: "Content Generated",
      description: "Email newsletter draft created for review",
      time: "4 hours ago",
      icon: <MidIcon.Messages size={16} />,
      status: "in-progress",
      shortcut: ["C", "G"]
    },
    {
      title: "Task Updated",
      description: "Social media calendar updated with new posts",
      time: "Yesterday",
      icon: <MidIcon.FileText size={16} />,
      status: "completed",
      shortcut: ["T", "U"]
    },
  ];
  
  // Define quick action items
  const quickActions = [
    {
      title: "Create Brief",
      description: "Start a new marketing brief for Kord to process",
      href: "/briefs/new",
      icon: <MidIcon.Plus size={16} />,
      shortcut: ["⌘", "B"]
    },
    {
      title: "Generate Content",
      description: "Create new content based on your brand guidelines",
      href: "/content/new",
      icon: <MidIcon.FileText size={16} />,
      shortcut: ["⌘", "G"]
    },
    {
      title: "View Reports",
      description: "Check performance metrics and campaign analytics",
      href: "/reports",
      icon: <MidIcon.Analytics size={16} />,
      shortcut: ["⌘", "R"]
    },
    {
      title: "Manage Tasks",
      description: "View and update your marketing task list",
      href: "/tasks",
      icon: <MidIcon.Tasks size={16} />,
      shortcut: ["⌘", "T"]
    }
  ];
  
  // Weekly summary data
  const weeklySummary = {
    timeSaved: 4.5,
    tasksCompleted: 18,
    contentGenerated: 7,
    efficiency: 76
  };
  
  // Campaign timeline data
  const campaignTimeline = [
    {
      name: "Q3 Product Launch",
      date: "Jun 15, 2025",
      status: "on-track",
      completion: 45
    },
    {
      name: "Summer Promotion",
      date: "Jun 28, 2025",
      status: "at-risk",
      completion: 30
    },
    {
      name: "Partner Webinar",
      date: "Jul 10, 2025",
      status: "on-track",
      completion: 15
    }
  ];
  
  // Suggested actions
  const suggestedActions = [
    {
      title: "Review Q3 Campaign Brief",
      priority: "high",
      icon: <MidIcon.AlertCircle size={16} />
    },
    {
      title: "Approve email newsletter draft",
      priority: "medium",
      icon: <MidIcon.Mail size={16} />
    },
    {
      title: "Update social media calendar",
      priority: "low",
      icon: <MidIcon.FileText size={16} />
    }
  ];
  
  return (
    <div className="space-y-8 w-full px-4 sm:px-6">
      {/* Welcome Section with profile dropdown */}
      <Section>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-foreground animate-pulse"></div>
            <h1 className="text-2xl font-medium">Welcome back, {userName}</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-muted/40 px-3 py-1.5 rounded-md border cursor-pointer hover:bg-muted transition-colors">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-sm">Your AI: Online</span>
              <MidIcon.ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-2 bg-muted/40 px-3 py-1.5 rounded-md border cursor-pointer hover:bg-muted transition-colors">
              <span className="text-sm">Marketing Team</span>
              <MidIcon.ChevronDown size={14} />
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <MidIcon.User size={14} />
              <span>Profile</span>
              <MidIcon.ChevronDown size={14} />
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground">
          Kord has processed 3 briefs and drafted 1 newsletter since your last visit.
        </p>
      </Section>

      {/* Key Metrics - Using neutral colors with subtle accents */}
      <Section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Key Metrics</h2>
          <Button variant="outline" size="sm" className="h-8 gap-1.5">
            <MidIcon.Clock size={14} />
            <span>This Week</span>
            <MidIcon.ChevronDown size={14} />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-muted rounded-md">
                    {metric.icon}
                  </div>
                  <span className="text-3xl font-mono font-medium">{metric.value}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <div className="flex items-center gap-1">
                    {metric.trend === "up" && (
                      <span className="text-xs text-emerald-500 flex items-center gap-0.5">
                        <MidIcon.TrendingUp size={12} />
                        {metric.change}
                      </span>
                    )}
                    {metric.trend === "down" && (
                      <span className="text-xs text-rose-500 flex items-center gap-0.5">
                        <span className="rotate-180 inline-block">
                          <MidIcon.TrendingUp size={12} />
                        </span>
                        {metric.change}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Main Dashboard Grid - 2x2 layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
          
          <Card className="h-full">
            <CardContent className="p-0 divide-y divide-border">
              {activityItems.map((item, index) => (
                <div key={index} className="p-4 hover:bg-muted/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-muted rounded-md">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{item.title}</p>
                          <KeyboardShortcut keys={item.shortcut} />
                        </div>
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
                        <Button variant="ghost" size="sm" className="h-7 text-xs px-2 hover:bg-muted">
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

        {/* Weekly Summary - New section */}
        <Section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Weekly Summary</h2>
            <Button variant="outline" size="sm" className="h-8 gap-1.5">
              <MidIcon.Analytics size={14} />
              <span>Details</span>
            </Button>
          </div>
          
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-muted stroke-current"
                      strokeWidth="10"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    />
                    <circle
                      className="text-emerald-500 stroke-current"
                      strokeWidth="10"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 * (1 - weeklySummary.efficiency / 100)}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-3xl font-mono font-medium">{weeklySummary.efficiency}%</span>
                    <span className="text-xs text-muted-foreground">Efficiency</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-md">
                  <span className="text-2xl font-mono font-medium">{weeklySummary.timeSaved}h</span>
                  <span className="text-xs text-muted-foreground text-center">Time Saved</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-md">
                  <span className="text-2xl font-mono font-medium">{weeklySummary.tasksCompleted}</span>
                  <span className="text-xs text-muted-foreground text-center">Tasks Done</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-md">
                  <span className="text-2xl font-mono font-medium">{weeklySummary.contentGenerated}</span>
                  <span className="text-xs text-muted-foreground text-center">Content</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-2">Productivity Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Your team is 23% more efficient this week compared to last week. Content generation has improved significantly.
                </p>
                <Button variant="ghost" size="sm" className="mt-2 h-7 text-xs px-2 hover:bg-muted">
                  View Full Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* Action Center - Merged Quick Actions and Notifications */}
        <Section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Action Center</h2>
            <Button variant="outline" size="sm" className="h-8 gap-1.5">
              <MidIcon.Plus size={14} />
              <span>New Action</span>
            </Button>
          </div>
          
          <Card className="h-full">
            <CardContent className="p-4 space-y-4">
              <Tabs defaultValue="actions" className="w-full">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="actions">Quick Actions</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                
                <TabsContent value="actions" className="space-y-4">
                  {quickActions.map((action, index) => (
                    <Card key={index} className="border hover:shadow-md transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-muted rounded-md">
                              {action.icon}
                            </div>
                            <h3 className="font-medium">{action.title}</h3>
                          </div>
                          {action.shortcut && (
                            <KeyboardShortcut keys={action.shortcut} />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                        <Link href={action.href} className="inline-block w-full">
                          <Button variant="ghost" size="sm" className="w-full justify-start gap-2 hover:bg-muted">
                            Start <MidIcon.ExternalLink size={14} />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="notifications" className="space-y-3">
                  <Card className="bg-muted/30 border shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-3 flex items-start gap-3">
                      <div className="p-2 bg-muted rounded-md">
                        <MidIcon.AlertCircle size={16} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Campaign plan for Q3 is due soon</p>
                        <p className="text-xs text-muted-foreground">Kord can help you draft one based on Q2 performance</p>
                        <div className="flex items-center justify-between mt-2">
                          <Button variant="ghost" size="sm" className="h-7 text-xs px-2 hover:bg-muted">
                            Start Draft
                          </Button>
                          <span className="text-xs text-muted-foreground">2 days ago</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-muted/30 border shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-3 flex items-start gap-3">
                      <div className="p-2 bg-muted rounded-md">
                        <MidIcon.CheckCircle size={16} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Kord has saved you 4.5 hours this week</p>
                        <p className="text-xs text-muted-foreground">Through automated content generation and brief interpretation</p>
                        <div className="flex items-center justify-end mt-2">
                          <span className="text-xs text-muted-foreground">Today</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </Section>

        {/* Campaign Timeline */}
        <Section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Campaign Timeline</h2>
            <Button variant="outline" size="sm" className="h-8 gap-1.5">
              <MidIcon.Clock size={14} />
              <span>View Calendar</span>
            </Button>
          </div>
          
          <Card className="h-full">
            <CardContent className="p-4 space-y-4">
              {campaignTimeline.map((campaign, index) => (
                <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{campaign.name}</h3>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${campaign.status === 'at-risk' ? 'bg-rose-500/10 text-rose-500 border-rose-200' : 'bg-emerald-500/10 text-emerald-500 border-emerald-200'}`}
                    >
                      {campaign.status === 'at-risk' ? 'At Risk' : 'On Track'}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-muted-foreground">Due: {campaign.date}</p>
                    <p className="text-xs font-medium">{campaign.completion}% Complete</p>
                  </div>
                  <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${campaign.status === 'at-risk' ? 'bg-rose-500' : 'bg-emerald-500'}`} 
                      style={{ width: `${campaign.completion}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              
              <div className="pt-2">
                <h3 className="text-sm font-medium mb-2">Suggested Actions</h3>
                <div className="space-y-2">
                  {suggestedActions.map((action, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-muted/40 rounded-md transition-colors cursor-pointer">
                      <div className="flex items-center gap-2">
                        <div className={`p-1 rounded-full ${action.priority === 'high' ? 'bg-rose-500/10' : action.priority === 'medium' ? 'bg-amber-500/10' : 'bg-emerald-500/10'}`}>
                          {action.icon}
                        </div>
                        <p className="text-sm">{action.title}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-7 text-xs px-2 hover:bg-muted">
                        Start
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>
      </div>
    </div>
  );
}
