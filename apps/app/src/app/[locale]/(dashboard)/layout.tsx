import { SignOut } from "@/components/sign-out";
import { getUser } from "@kord/supabase/queries";
import { BriefcaseIcon, BarChartIcon, FolderIcon, MailIcon, FileTextIcon, HomeIcon } from "lucide-react";
import Link from "next/link";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const { data } = await getUser();

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-primary text-primary-foreground p-4 flex flex-col">
        <div className="mb-8 mt-4">
          <h1 className="text-2xl font-bold">KORD</h1>
          <p className="text-sm opacity-70">AI Marketing Coordinator</p>
        </div>
        
        <nav className="flex-1 space-y-1">
          <SidebarLink href="/" icon={<HomeIcon size={18} />} label="Dashboard" />
          <SidebarLink href="/briefs" icon={<FileTextIcon size={18} />} label="Brief Interpreter" />
          <SidebarLink href="/tasks" icon={<BriefcaseIcon size={18} />} label="Task Manager" />
          <SidebarLink href="/reports" icon={<BarChartIcon size={18} />} label="Reporting" />
          <SidebarLink href="/knowledge" icon={<FolderIcon size={18} />} label="Knowledge Base" />
          <SidebarLink href="/content" icon={<MailIcon size={18} />} label="Content Generator" />
        </nav>
        
        <div className="mt-auto pt-4 border-t border-primary-foreground/20">
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <p className="font-medium">{data?.user?.email}</p>
              <p className="text-xs opacity-70">Marketing Team</p>
            </div>
            <SignOut />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
