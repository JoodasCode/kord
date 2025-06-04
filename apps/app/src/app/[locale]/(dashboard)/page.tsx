import { getI18n } from "@/locales/server";
import { getUser } from "@kord/supabase/queries";
import { BarChartIcon, FileTextIcon, BriefcaseIcon, MailIcon, FolderIcon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Kord Dashboard",
};

export default async function Page() {
  const { data } = await getUser();
  const t = await getI18n();

  // Mock data for dashboard metrics
  const metrics = [
    { label: "Active Campaigns", value: "5" },
    { label: "Pending Tasks", value: "12" },
    { label: "Content Pieces", value: "24" },
    { label: "Avg. Open Rate", value: "32%" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome to Kord</h1>
        <p className="text-muted-foreground">Your AI Marketing Coordinator Dashboard</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, i) => (
          <div key={i} className="bg-card rounded-lg p-4 shadow-sm border">
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="text-2xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <QuickActionCard 
            href="/briefs"
            icon={<FileTextIcon className="h-6 w-6" />}
            title="Create Brief"
            description="Submit a new marketing brief for interpretation"
          />
          <QuickActionCard 
            href="/tasks"
            icon={<BriefcaseIcon className="h-6 w-6" />}
            title="View Tasks"
            description="Check on pending tasks and assignments"
          />
          <QuickActionCard 
            href="/content"
            icon={<MailIcon className="h-6 w-6" />}
            title="Generate Content"
            description="Create emails, posts, and other marketing content"
          />
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="bg-card rounded-lg border shadow-sm">
          <div className="divide-y">
            <ActivityItem 
              icon={<FileTextIcon className="h-4 w-4" />}
              title="EPTA Forum Promotion Brief"
              description="Brief interpreted and tasks created"
              timestamp="2 hours ago"
            />
            <ActivityItem 
              icon={<MailIcon className="h-4 w-4" />}
              title="Q2 Newsletter"
              description="Email draft generated and ready for review"
              timestamp="Yesterday"
            />
            <ActivityItem 
              icon={<BarChartIcon className="h-4 w-4" />}
              title="Campaign Report"
              description="March webinar performance report created"
              timestamp="2 days ago"
            />
            <ActivityItem 
              icon={<FolderIcon className="h-4 w-4" />}
              title="Knowledge Base Update"
              description="New brand guidelines uploaded and processed"
              timestamp="3 days ago"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickActionCard({ 
  href, 
  icon, 
  title, 
  description 
}: { 
  href: string; 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) {
  return (
    <Link href={href} className="block">
      <div className="bg-card hover:bg-accent hover:text-accent-foreground rounded-lg p-6 border shadow-sm transition-colors">
        <div className="flex items-center gap-4 mb-2">
          <div className="bg-primary/10 p-2 rounded-md">
            {icon}
          </div>
          <h3 className="font-medium">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}

function ActivityItem({ 
  icon, 
  title, 
  description, 
  timestamp 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  timestamp: string 
}) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 p-2 rounded-full">
          {icon}
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <span className="text-xs text-muted-foreground">{timestamp}</span>
    </div>
  );
}
