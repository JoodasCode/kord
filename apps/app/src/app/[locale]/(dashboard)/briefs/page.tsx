import { getI18n } from "@/locales/server";
import { getUser } from "@kord/supabase/queries";
import { FileUpIcon } from "lucide-react";

export const metadata = {
  title: "Brief Interpreter - Kord",
};

export default async function BriefsPage() {
  const { data } = await getUser();
  const t = await getI18n();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Brief Interpreter</h1>
        <p className="text-muted-foreground">
          Submit a marketing brief and Kord will interpret it into actionable tasks and content.
        </p>
      </div>

      {/* Brief submission form */}
      <div className="bg-card rounded-lg border shadow-sm p-6">
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="brief-title" className="text-sm font-medium">
              Brief Title
            </label>
            <input
              id="brief-title"
              type="text"
              placeholder="e.g., Q3 Product Launch Campaign"
              className="w-full rounded-md border border-input bg-background px-3 py-2"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="brief-description" className="text-sm font-medium">
              Brief Description
            </label>
            <textarea
              id="brief-description"
              rows={6}
              placeholder="Describe your marketing campaign or initiative in detail. Include goals, target audience, timeline, and any specific requirements."
              className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[150px]"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Campaign Type</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Email", "Social Media", "Event", "Website"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`type-${type.toLowerCase()}`}
                    className="rounded border-input"
                  />
                  <label htmlFor={`type-${type.toLowerCase()}`}>{type}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Context Documents</label>
            <div className="border border-dashed border-input rounded-md p-6 text-center">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <FileUpIcon className="h-6 w-6" />
                </div>
                <p className="text-sm">
                  Drag & drop files here or <span className="text-primary font-medium">browse</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Upload brand guidelines, legal requirements, or previous campaign materials
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
            >
              Submit Brief
            </button>
          </div>
        </form>
      </div>

      {/* Previous briefs */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Briefs</h2>
        <div className="bg-card rounded-lg border shadow-sm">
          <div className="divide-y">
            {[
              {
                title: "EPTA Forum Promotion",
                date: "June 2, 2025",
                status: "Completed",
                type: "Email, Social Media",
              },
              {
                title: "Q2 Financial Newsletter",
                date: "May 15, 2025",
                status: "In Progress",
                type: "Email",
              },
              {
                title: "Webinar Series Promotion",
                date: "April 28, 2025",
                status: "Completed",
                type: "Email, Website",
              },
            ].map((brief, i) => (
              <div key={i} className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{brief.title}</h3>
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span>{brief.date}</span>
                    <span>•</span>
                    <span>{brief.type}</span>
                  </div>
                </div>
                <div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      brief.status === "Completed"
                        ? "bg-success/20 text-success"
                        : "bg-warning/20 text-warning"
                    }`}
                  >
                    {brief.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
