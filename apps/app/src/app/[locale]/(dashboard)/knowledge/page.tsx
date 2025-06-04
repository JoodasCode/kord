import { getI18n } from "@/locales/server";
import { getUser } from "@kord/supabase/queries";
import {
  BookIcon,
  FileTextIcon,
  FolderIcon,
  GavelIcon,
  PlusIcon,
  SearchIcon,
  TagIcon,
  UploadIcon,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Knowledge Base - Kord",
};

// Document card component
function DocumentCard({
  title,
  type,
  date,
  tags,
  category,
}: {
  title: string;
  type: string;
  date: string;
  tags: string[];
  category: string;
}) {
  const getCategoryStyles = () => {
    switch (category.toLowerCase()) {
      case "brand":
        return "bg-primary/20 text-primary";
      case "legal":
        return "bg-warning/20 text-warning";
      case "campaign":
        return "bg-success/20 text-success";
      default:
        return "bg-muted/50 text-muted-foreground";
    }
  };

  return (
    <div className="bg-card rounded-lg border shadow-sm p-4 hover:border-primary transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-full ${getCategoryStyles()}`}>
          {category === "Brand" && <BookIcon size={16} />}
          {category === "Legal" && <GavelIcon size={16} />}
          {category === "Campaign" && <FileTextIcon size={16} />}
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${getCategoryStyles()}`}>
          {category}
        </span>
      </div>
      <h3 className="font-medium mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs bg-muted/50 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>{type}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

// Category card component
function CategoryCard({
  icon,
  title,
  count,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  count: number;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 p-4 bg-card rounded-lg border shadow-sm hover:border-primary transition-colors"
    >
      <div className="bg-primary/10 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{count} documents</p>
      </div>
    </Link>
  );
}

export default async function KnowledgeBasePage() {
  const { data } = await getUser();
  const t = await getI18n();

  // Mock documents data
  const documents = [
    {
      title: "Brand Voice Guidelines 2025",
      type: "PDF",
      date: "Updated May 15, 2025",
      tags: ["Brand Voice", "Guidelines", "Marketing"],
      category: "Brand",
    },
    {
      title: "Logo Usage and Color Palette",
      type: "PDF",
      date: "Updated April 2, 2025",
      tags: ["Logo", "Colors", "Design"],
      category: "Brand",
    },
    {
      title: "GDPR Compliance Requirements",
      type: "Word Document",
      date: "Updated January 10, 2025",
      tags: ["GDPR", "Compliance", "Legal"],
      category: "Legal",
    },
    {
      title: "Email Marketing Legal Guidelines",
      type: "PDF",
      date: "Updated March 5, 2025",
      tags: ["Email", "Legal", "Marketing"],
      category: "Legal",
    },
    {
      title: "Q1 2025 Campaign Results",
      type: "Spreadsheet",
      date: "Updated April 15, 2025",
      tags: ["Q1", "Results", "Analytics"],
      category: "Campaign",
    },
    {
      title: "EPTA Forum 2024 Campaign Review",
      type: "Presentation",
      date: "Updated December 10, 2024",
      tags: ["EPTA", "Event", "Review"],
      category: "Campaign",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Knowledge Base</h1>
          <p className="text-muted-foreground">
            Manage your brand guidelines, legal requirements, and campaign history for Kord to reference.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-muted/30 hover:bg-muted/50 px-3 py-2 rounded-md text-sm">
            <UploadIcon size={16} />
            <span>Upload</span>
          </button>
          <button className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-md text-sm">
            <PlusIcon size={16} />
            <span>Add Document</span>
          </button>
        </div>
      </div>

      {/* Search and filters */}
      <div className="flex flex-wrap gap-4 bg-card rounded-lg border shadow-sm p-4">
        <div className="relative flex-grow">
          <SearchIcon size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search knowledge base..."
            className="pl-9 w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </div>
        <div className="flex items-center gap-2">
          <TagIcon size={16} className="text-muted-foreground" />
          <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option value="">All Categories</option>
            <option value="brand">Brand</option>
            <option value="legal">Legal</option>
            <option value="campaign">Campaign</option>
          </select>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CategoryCard
            icon={<BookIcon size={24} />}
            title="Brand Guidelines"
            count={3}
            href="/knowledge?category=brand"
          />
          <CategoryCard
            icon={<GavelIcon size={24} />}
            title="Legal Requirements"
            count={5}
            href="/knowledge?category=legal"
          />
          <CategoryCard
            icon={<FileTextIcon size={24} />}
            title="Campaign History"
            count={12}
            href="/knowledge?category=campaign"
          />
        </div>
      </div>

      {/* Recent documents */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Documents</h2>
          <Link href="/knowledge/all" className="text-sm text-primary hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc, i) => (
            <DocumentCard
              key={i}
              title={doc.title}
              type={doc.type}
              date={doc.date}
              tags={doc.tags}
              category={doc.category}
            />
          ))}
        </div>
      </div>

      {/* Knowledge base stats */}
      <div className="bg-card rounded-lg border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Knowledge Base Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm text-muted-foreground mb-1">Total Documents</h3>
            <p className="text-3xl font-bold">20</p>
          </div>
          <div>
            <h3 className="text-sm text-muted-foreground mb-1">Last Updated</h3>
            <p className="text-3xl font-bold">Today</p>
          </div>
          <div>
            <h3 className="text-sm text-muted-foreground mb-1">Storage Used</h3>
            <p className="text-3xl font-bold">45 MB</p>
          </div>
        </div>
      </div>

      {/* Integration status */}
      <div className="bg-card rounded-lg border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Connected Sources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-3 border rounded-md">
            <div className="bg-primary/10 p-2 rounded-full">
              <FolderIcon size={20} />
            </div>
            <div>
              <h3 className="font-medium">Google Drive</h3>
              <p className="text-sm text-muted-foreground">Connected • 15 documents synced</p>
            </div>
            <button className="ml-auto text-xs px-2 py-1 bg-muted/30 rounded-md hover:bg-muted/50">
              Settings
            </button>
          </div>
          <div className="flex items-center gap-4 p-3 border rounded-md">
            <div className="bg-muted/30 p-2 rounded-full">
              <FileTextIcon size={20} />
            </div>
            <div>
              <h3 className="font-medium">SharePoint</h3>
              <p className="text-sm text-muted-foreground">Not connected</p>
            </div>
            <button className="ml-auto text-xs px-2 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
