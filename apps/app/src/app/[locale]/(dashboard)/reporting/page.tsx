import { getI18n } from "@/locales/server";
import { getUser } from "@kord/supabase/queries";
import {
  BarChart3Icon,
  CalendarIcon,
  DownloadIcon,
  LineChartIcon,
  MailIcon,
  PieChartIcon,
  RefreshCwIcon,
  ShareIcon,
  SlidersHorizontalIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Reporting - Kord",
};

// Metric card component
function MetricCard({
  title,
  value,
  change,
  icon,
}: {
  title: string;
  value: string;
  change: { value: string; positive: boolean };
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-card rounded-lg border shadow-sm p-4">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="bg-primary/10 p-1.5 rounded-full">{icon}</div>
      </div>
      <div className="flex items-end gap-2">
        <p className="text-2xl font-bold">{value}</p>
        <span
          className={`text-xs px-1.5 py-0.5 rounded-sm ${
            change.positive ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"
          }`}
        >
          {change.value}
        </span>
      </div>
    </div>
  );
}

// Chart placeholder component
function ChartPlaceholder({
  title,
  description,
  icon,
  height = "h-64",
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  height?: string;
}) {
  return (
    <div className="bg-card rounded-lg border shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">{title}</h3>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-muted/50 rounded-md">
            <SlidersHorizontalIcon size={16} />
          </button>
          <button className="p-1 hover:bg-muted/50 rounded-md">
            <DownloadIcon size={16} />
          </button>
        </div>
      </div>
      <div className={`${height} flex items-center justify-center border border-dashed rounded-md`}>
        <div className="text-center p-4">
          <div className="bg-primary/10 p-3 rounded-full mx-auto mb-3">
            {icon}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Campaign performance card component
function CampaignPerformanceCard({
  title,
  date,
  metrics,
}: {
  title: string;
  date: string;
  metrics: { name: string; value: string }[];
}) {
  return (
    <div className="bg-card rounded-lg border shadow-sm p-4">
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{date}</p>
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric, i) => (
          <div key={i}>
            <p className="text-xs text-muted-foreground">{metric.name}</p>
            <p className="font-medium">{metric.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t flex justify-between">
        <Link href="#" className="text-xs text-primary hover:underline">
          View Details
        </Link>
        <Link href="#" className="text-xs text-primary hover:underline">
          Export
        </Link>
      </div>
    </div>
  );
}

export default async function ReportingPage() {
  const { data } = await getUser();
  const t = await getI18n();

  // Mock campaign performance data
  const campaigns = [
    {
      title: "EPTA Forum Promotion",
      date: "May 15 - June 2, 2025",
      metrics: [
        { name: "Open Rate", value: "32.5%" },
        { name: "Click Rate", value: "12.8%" },
        { name: "Conversions", value: "156" },
        { name: "ROI", value: "3.2x" },
      ],
    },
    {
      title: "Q2 Financial Newsletter",
      date: "May 1 - May 15, 2025",
      metrics: [
        { name: "Open Rate", value: "28.7%" },
        { name: "Click Rate", value: "9.5%" },
        { name: "Conversions", value: "87" },
        { name: "ROI", value: "2.1x" },
      ],
    },
    {
      title: "Webinar Series Promotion",
      date: "April 10 - April 30, 2025",
      metrics: [
        { name: "Open Rate", value: "35.2%" },
        { name: "Click Rate", value: "14.3%" },
        { name: "Registrations", value: "243" },
        { name: "Attendance", value: "178" },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Reporting</h1>
          <p className="text-muted-foreground">
            Track performance metrics and get insights on your marketing campaigns.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-muted/30 hover:bg-muted/50 px-3 py-2 rounded-md text-sm">
            <RefreshCwIcon size={16} />
            <span>Refresh</span>
          </button>
          <button className="flex items-center gap-2 bg-muted/30 hover:bg-muted/50 px-3 py-2 rounded-md text-sm">
            <DownloadIcon size={16} />
            <span>Export</span>
          </button>
          <button className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-md text-sm">
            <ShareIcon size={16} />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Date range selector */}
      <div className="flex items-center gap-3 bg-card rounded-lg border shadow-sm p-4">
        <CalendarIcon size={18} className="text-muted-foreground" />
        <span className="font-medium">Date Range:</span>
        <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
          <option value="last-30-days">Last 30 Days</option>
          <option value="last-90-days">Last 90 Days</option>
          <option value="year-to-date">Year to Date</option>
          <option value="custom">Custom Range</option>
        </select>
        <span className="text-muted-foreground">May 4 - June 4, 2025</span>
      </div>

      {/* Key metrics */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Email Open Rate"
            value="32.8%"
            change={{ value: "+2.4%", positive: true }}
            icon={<MailIcon size={18} />}
          />
          <MetricCard
            title="Click-Through Rate"
            value="12.5%"
            change={{ value: "+1.8%", positive: true }}
            icon={<LineChartIcon size={18} />}
          />
          <MetricCard
            title="Conversion Rate"
            value="3.2%"
            change={{ value: "-0.5%", positive: false }}
            icon={<BarChart3Icon size={18} />}
          />
          <MetricCard
            title="Audience Growth"
            value="1,245"
            change={{ value: "+12%", positive: true }}
            icon={<UsersIcon size={18} />}
          />
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartPlaceholder
          title="Email Performance Trends"
          description="Chart showing open rates, click rates, and conversions over time"
          icon={<LineChartIcon size={24} />}
        />
        <ChartPlaceholder
          title="Audience Engagement by Channel"
          description="Chart showing engagement metrics across different channels"
          icon={<PieChartIcon size={24} />}
        />
      </div>

      {/* Campaign performance */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Campaign Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {campaigns.map((campaign, i) => (
            <CampaignPerformanceCard
              key={i}
              title={campaign.title}
              date={campaign.date}
              metrics={campaign.metrics}
            />
          ))}
        </div>
      </div>

      {/* AI insights */}
      <div className="bg-card rounded-lg border shadow-sm p-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 16h5v5" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">AI-Generated Insights</h2>
            <div className="space-y-3 text-sm">
              <p>
                <strong>Email Performance:</strong> Open rates have increased by 2.4% compared to the previous period, likely due to improved subject line optimization in the EPTA Forum campaign.
              </p>
              <p>
                <strong>Audience Engagement:</strong> The Webinar Series campaign showed the highest engagement with a 14.3% click-through rate, suggesting that educational content is resonating well with your audience.
              </p>
              <p>
                <strong>Recommendation:</strong> Consider expanding the webinar series format to other topics based on its strong performance metrics.
              </p>
            </div>
            <button className="mt-4 text-sm text-primary hover:underline">
              Generate More Insights
            </button>
          </div>
        </div>
      </div>

      {/* Connected data sources */}
      <div className="bg-card rounded-lg border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Connected Data Sources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-3 border rounded-md">
            <div className="bg-primary/10 p-2 rounded-full">
              <MailIcon size={20} />
            </div>
            <div>
              <h3 className="font-medium">Adestra</h3>
              <p className="text-sm text-muted-foreground">Connected • Last synced 30 minutes ago</p>
            </div>
            <button className="ml-auto text-xs px-2 py-1 bg-muted/30 rounded-md hover:bg-muted/50">
              Settings
            </button>
          </div>
          <div className="flex items-center gap-4 p-3 border rounded-md">
            <div className="bg-primary/10 p-2 rounded-full">
              <BarChart3Icon size={20} />
            </div>
            <div>
              <h3 className="font-medium">Google Analytics</h3>
              <p className="text-sm text-muted-foreground">Connected • Last synced 1 hour ago</p>
            </div>
            <button className="ml-auto text-xs px-2 py-1 bg-muted/30 rounded-md hover:bg-muted/50">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
