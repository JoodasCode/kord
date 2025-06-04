import { getI18n } from "@/locales/server";
import { getUser } from "@kord/supabase/queries";
import { 
  CheckCircleIcon, 
  ClockIcon, 
  FilterIcon, 
  ListIcon, 
  PlusIcon, 
  RefreshCwIcon, 
  TagIcon 
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Task Manager - Kord",
};

// Task status component with appropriate colors
function TaskStatus({ status }: { status: string }) {
  const getStatusStyles = () => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-success/20 text-success";
      case "in progress":
        return "bg-warning/20 text-warning";
      case "pending":
        return "bg-muted/50 text-muted-foreground";
      case "review":
        return "bg-primary/20 text-primary";
      default:
        return "bg-muted/50 text-muted-foreground";
    }
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full ${getStatusStyles()}`}>
      {status}
    </span>
  );
}

export default async function TasksPage() {
  const { data } = await getUser();
  const t = await getI18n();

  // Mock tasks data - would be fetched from Asana API in production
  const tasks = [
    {
      id: "1",
      title: "Write EPTA Forum email announcement",
      dueDate: "June 10, 2025",
      status: "In Progress",
      assignedTo: "Kord AI",
      source: "Asana",
      tags: ["Email", "Event"],
      brief: "EPTA Forum Brief",
    },
    {
      id: "2",
      title: "Create social media posts for Q2 Financial Report",
      dueDate: "June 15, 2025",
      status: "Pending",
      assignedTo: "Kord AI",
      source: "Asana",
      tags: ["Social Media", "Finance"],
      brief: "Q2 Financial Report Brief",
    },
    {
      id: "3",
      title: "Draft press release for new partnership",
      dueDate: "June 5, 2025",
      status: "Review",
      assignedTo: "Kord AI",
      source: "Asana",
      tags: ["PR", "Partnership"],
      brief: "Partnership Announcement Brief",
    },
    {
      id: "4",
      title: "Update website banner for summer campaign",
      dueDate: "May 30, 2025",
      status: "Completed",
      assignedTo: "Kord AI",
      source: "Asana",
      tags: ["Website", "Campaign"],
      brief: "Summer Campaign Brief",
    },
    {
      id: "5",
      title: "Create newsletter template for monthly updates",
      dueDate: "June 20, 2025",
      status: "Pending",
      assignedTo: "Kord AI",
      source: "Asana",
      tags: ["Email", "Template"],
      brief: "Monthly Newsletter Brief",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Task Manager</h1>
          <p className="text-muted-foreground">
            Monitor and manage tasks from Asana and other connected platforms.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-muted/30 hover:bg-muted/50 px-3 py-2 rounded-md text-sm">
            <RefreshCwIcon size={16} />
            <span>Sync</span>
          </button>
          <button className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-md text-sm">
            <PlusIcon size={16} />
            <span>Create Task</span>
          </button>
        </div>
      </div>

      {/* Filters and search */}
      <div className="flex flex-wrap gap-4 bg-card rounded-lg border shadow-sm p-4">
        <div className="flex items-center gap-2">
          <FilterIcon size={16} className="text-muted-foreground" />
          <span className="text-sm font-medium">Filter:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {["All", "Pending", "In Progress", "Review", "Completed"].map((filter) => (
            <button
              key={filter}
              className={`text-sm px-3 py-1 rounded-md ${
                filter === "All" ? "bg-primary text-primary-foreground" : "bg-muted/30 hover:bg-muted/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="ml-auto">
          <input
            type="text"
            placeholder="Search tasks..."
            className="text-sm rounded-md border border-input bg-background px-3 py-1 w-64"
          />
        </div>
      </div>

      {/* Tasks list */}
      <div className="bg-card rounded-lg border shadow-sm">
        <div className="grid grid-cols-[1fr,auto,auto,auto] gap-4 p-4 border-b font-medium text-sm">
          <div>Task</div>
          <div>Due Date</div>
          <div>Status</div>
          <div>Actions</div>
        </div>
        <div className="divide-y">
          {tasks.map((task) => (
            <div key={task.id} className="grid grid-cols-[1fr,auto,auto,auto] gap-4 p-4 items-center">
              <div>
                <h3 className="font-medium">{task.title}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <ListIcon size={12} />
                    <span>Source: {task.source}</span>
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TagIcon size={12} />
                    <span>{task.tags.join(", ")}</span>
                  </span>
                  <Link 
                    href={`/briefs?id=${encodeURIComponent(task.brief)}`}
                    className="flex items-center gap-1 text-xs text-primary"
                  >
                    <span>View Brief</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <ClockIcon size={14} className="text-muted-foreground" />
                <span>{task.dueDate}</span>
              </div>
              <div>
                <TaskStatus status={task.status} />
              </div>
              <div className="flex gap-2">
                <button className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                  View
                </button>
                {task.status !== "Completed" && (
                  <button className="text-xs px-2 py-1 bg-muted/30 rounded-md hover:bg-muted/50 flex items-center gap-1">
                    <CheckCircleIcon size={12} />
                    <span>Complete</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task integration status */}
      <div className="bg-card rounded-lg border shadow-sm p-4">
        <h2 className="text-lg font-medium mb-4">Connected Task Sources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-3 border rounded-md">
            <div className="bg-primary/10 p-2 rounded-full">
              <img src="/asana-logo.svg" alt="Asana" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium">Asana</h3>
              <p className="text-sm text-muted-foreground">Connected • Last synced 5 minutes ago</p>
            </div>
            <button className="ml-auto text-xs px-2 py-1 bg-muted/30 rounded-md hover:bg-muted/50">
              Settings
            </button>
          </div>
          <div className="flex items-center gap-4 p-3 border rounded-md">
            <div className="bg-muted/30 p-2 rounded-full">
              <img src="/google-tasks-logo.svg" alt="Google Tasks" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium">Google Tasks</h3>
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
