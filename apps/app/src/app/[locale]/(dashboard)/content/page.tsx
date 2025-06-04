import { getI18n } from "@/locales/server";
import { getUser } from "@kord/supabase/queries";
import {
  FileTextIcon,
  ImageIcon,
  InstagramIcon,
  LayoutIcon,
  LinkedinIcon,
  MailIcon,
  MicIcon,
  PlusIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Content Generator - Kord",
};

// Content type card component
function ContentTypeCard({ 
  icon, 
  title, 
  description, 
  href 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  href: string;
}) {
  return (
    <Link 
      href={href}
      className="bg-card rounded-lg border shadow-sm p-6 hover:border-primary transition-colors flex flex-col items-center text-center"
    >
      <div className="bg-primary/10 p-3 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}

// Recent content item component
function RecentContentItem({
  title,
  type,
  date,
  status,
  brief,
}: {
  title: string;
  type: string;
  date: string;
  status: string;
  brief: string;
}) {
  const getStatusStyles = () => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-success/20 text-success";
      case "in progress":
        return "bg-warning/20 text-warning";
      case "draft":
        return "bg-muted/50 text-muted-foreground";
      default:
        return "bg-muted/50 text-muted-foreground";
    }
  };

  return (
    <div className="p-4 flex items-center justify-between">
      <div>
        <h3 className="font-medium">{title}</h3>
        <div className="flex gap-2 text-sm text-muted-foreground">
          <span>{type}</span>
          <span>•</span>
          <span>{date}</span>
          <span>•</span>
          <Link href={`/briefs?id=${encodeURIComponent(brief)}`} className="text-primary">
            View Brief
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={`text-xs px-2 py-1 rounded-full ${getStatusStyles()}`}>
          {status}
        </span>
        <Link
          href={`/content/${encodeURIComponent(title)}`}
          className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default async function ContentGeneratorPage() {
  const { data } = await getUser();
  const t = await getI18n();

  // Mock recent content data
  const recentContent = [
    {
      title: "EPTA Forum Announcement Email",
      type: "Email",
      date: "June 3, 2025",
      status: "Completed",
      brief: "EPTA Forum Brief",
    },
    {
      title: "Q2 Financial Report - LinkedIn Post",
      type: "Social Media",
      date: "June 2, 2025",
      status: "Draft",
      brief: "Q2 Financial Report Brief",
    },
    {
      title: "Partnership Press Release",
      type: "Press Release",
      date: "June 1, 2025",
      status: "In Progress",
      brief: "Partnership Announcement Brief",
    },
    {
      title: "Summer Campaign Banner",
      type: "Website",
      date: "May 30, 2025",
      status: "Completed",
      brief: "Summer Campaign Brief",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Content Generator</h1>
          <p className="text-muted-foreground">
            Create AI-powered marketing content that matches your brand voice and guidelines.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
          <PlusIcon size={16} />
          <span>New Content</span>
        </button>
      </div>

      {/* Content type selection */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Select Content Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <ContentTypeCard
            icon={<MailIcon size={24} />}
            title="Email"
            description="Create email campaigns, newsletters, and announcements"
            href="/content/new?type=email"
          />
          <ContentTypeCard
            icon={<LinkedinIcon size={24} />}
            title="LinkedIn"
            description="Create posts optimized for LinkedIn engagement"
            href="/content/new?type=linkedin"
          />
          <ContentTypeCard
            icon={<TwitterIcon size={24} />}
            title="Twitter"
            description="Create tweet threads and Twitter announcements"
            href="/content/new?type=twitter"
          />
          <ContentTypeCard
            icon={<InstagramIcon size={24} />}
            title="Instagram"
            description="Create captions and content for Instagram posts"
            href="/content/new?type=instagram"
          />
          <ContentTypeCard
            icon={<FileTextIcon size={24} />}
            title="Press Release"
            description="Create professional press releases and announcements"
            href="/content/new?type=press-release"
          />
          <ContentTypeCard
            icon={<LayoutIcon size={24} />}
            title="Website"
            description="Create website copy, banners, and landing pages"
            href="/content/new?type=website"
          />
          <ContentTypeCard
            icon={<ImageIcon size={24} />}
            title="Image Prompts"
            description="Create prompts for AI image generation tools"
            href="/content/new?type=image-prompts"
          />
          <ContentTypeCard
            icon={<MicIcon size={24} />}
            title="Podcast Script"
            description="Create scripts and outlines for podcast episodes"
            href="/content/new?type=podcast"
          />
        </div>
      </div>

      {/* Recent content */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Content</h2>
        <div className="bg-card rounded-lg border shadow-sm">
          <div className="divide-y">
            {recentContent.map((content, i) => (
              <RecentContentItem
                key={i}
                title={content.title}
                type={content.type}
                date={content.date}
                status={content.status}
                brief={content.brief}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Knowledge base connection */}
      <div className="bg-card rounded-lg border shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Content Knowledge Base</h2>
          <Link
            href="/knowledge"
            className="text-sm text-primary hover:underline"
          >
            Manage Knowledge Base
          </Link>
        </div>
        <p className="text-muted-foreground mb-4">
          Kord uses your knowledge base to ensure content aligns with your brand voice, guidelines, and legal requirements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-md p-4">
            <h3 className="font-medium mb-2">Brand Guidelines</h3>
            <p className="text-sm text-muted-foreground mb-2">3 documents</p>
            <div className="flex justify-between items-center">
              <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full">
                Active
              </span>
              <button className="text-xs text-primary hover:underline">
                Update
              </button>
            </div>
          </div>
          <div className="border rounded-md p-4">
            <h3 className="font-medium mb-2">Legal Requirements</h3>
            <p className="text-sm text-muted-foreground mb-2">5 documents</p>
            <div className="flex justify-between items-center">
              <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full">
                Active
              </span>
              <button className="text-xs text-primary hover:underline">
                Update
              </button>
            </div>
          </div>
          <div className="border rounded-md p-4">
            <h3 className="font-medium mb-2">Campaign History</h3>
            <p className="text-sm text-muted-foreground mb-2">12 documents</p>
            <div className="flex justify-between items-center">
              <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full">
                Active
              </span>
              <button className="text-xs text-primary hover:underline">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
