"use client";

import React, { useState } from "react";
import Link from "next/link";

// Import Midday components
import { Section } from "@kord/ui/section";
import { Avatar, AvatarFallback, AvatarImage } from "@kord/ui/avatar";
import { Button } from "@kord/ui/button";
import { Separator } from "@kord/ui/separator";
import { Badge } from "@kord/ui/badge";
import { MidIcon } from "@kord/ui/icons";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@kord/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@kord/ui/dropdown-menu";

interface MiddayDashboardLayoutProps {
  children: React.ReactNode;
  userData: any;
}

export function MiddayDashboardLayout({ children, userData }: MiddayDashboardLayoutProps) {
  // Get user initials for avatar
  const userEmail = userData?.user?.email || "";
  const userInitials = userEmail.charAt(0).toUpperCase();
  const userName = userData?.user?.user_metadata?.full_name || userEmail;
  
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - Fixed width, brutalist style */}
      <aside className="w-16 border-r border-border flex flex-col bg-background">
        <div className="p-4 flex items-center justify-center">
          <div className="w-8 h-8 bg-foreground rounded-md flex items-center justify-center text-background font-bold text-xl">
            K
          </div>
        </div>
        
        <Separator className="mb-4" />
        
        <nav className="flex-1 space-y-1 px-3">
          {/* Dashboard */}
          <SidebarLink 
            href="/" 
            icon={<MidIcon.Home size={20} />} 
            label="Dashboard" 
          />
          
          {/* Brief Interpreter */}
          <SidebarLink 
            href="/briefs" 
            icon={<MidIcon.Documents size={20} />} 
            label="Brief Interpreter" 
          />
          
          {/* Task Manager */}
          <SidebarLink 
            href="/tasks" 
            icon={<MidIcon.Tasks size={20} />} 
            label="Task Manager" 
          />
          
          {/* Analytics */}
          <SidebarLink 
            href="/reporting" 
            icon={<MidIcon.Analytics size={20} />} 
            label="Reporting" 
          />
          
          {/* Knowledge Base */}
          <SidebarLink 
            href="/knowledge" 
            icon={<MidIcon.FileText size={20} />} 
            label="Knowledge Base" 
          />
          
          {/* Content Generator */}
          <SidebarLink 
            href="/content" 
            icon={<MidIcon.Messages size={20} />} 
            label="Content Generator" 
          />
        </nav>
        
        <Separator className="my-4" />
        
        <div className="p-3 flex flex-col gap-3">
          {/* Settings */}
          <SidebarLink 
            href="/settings" 
            icon={<MidIcon.Settings size={20} />} 
            label="Settings" 
          />
          
          {/* User avatar in sidebar */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-center">
                  <Avatar className="h-8 w-8 border border-border">
                    <AvatarImage 
                      src={userData?.user?.user_metadata?.avatar_url} 
                      alt={userName} 
                    />
                    <AvatarFallback>{userInitials}</AvatarFallback>
                  </Avatar>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">{userName}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </aside>
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Brutalist style */}
        <header className="h-16 border-b border-border bg-background px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Workspace switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 h-9">
                  <div className="w-4 h-4 bg-foreground rounded-sm flex items-center justify-center text-background font-bold text-xs">
                    K
                  </div>
                  <span className="font-medium">Marketing Team</span>
                  <MidIcon.ChevronDown size={14} className="text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2">
                  <div className="w-4 h-4 bg-foreground rounded-sm flex items-center justify-center text-background font-bold text-xs">
                    K
                  </div>
                  <span>Marketing Team</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <div className="w-4 h-4 bg-muted rounded-sm flex items-center justify-center text-muted-foreground font-bold text-xs">
                    K
                  </div>
                  <span>Product Team</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Command bar */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-muted/40 rounded-md border border-border flex-1 min-w-[240px] max-w-md cursor-pointer hover:bg-muted/60 transition-colors">
              <MidIcon.Search size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Ask Kord anything...</span>
              <div className="ml-auto flex gap-1">
                <kbd className="inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground">
                  ⌘
                </kbd>
                <kbd className="inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground">
                  K
                </kbd>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* AI Status Indicator */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border border-border">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-medium">Your AI: Online</span>
            </div>
            
            {/* Theme toggle */}
            <Button variant="outline" size="icon" className="h-9 w-9">
              <MidIcon.Moon size={16} className="text-muted-foreground" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            {/* User dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-9 w-9 cursor-pointer border border-border">
                  <AvatarImage 
                    src={userData?.user?.user_metadata?.avatar_url} 
                    alt={userName} 
                  />
                  <AvatarFallback>{userInitials}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <MidIcon.User size={16} className="mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MidIcon.Settings size={16} className="mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <MidIcon.SignOut size={16} className="mr-2" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        {/* Main content with proper container */}
        <main className="flex-1 overflow-auto">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

// Sidebar link component with tooltip
function SidebarLink({ 
  href, 
  icon, 
  label 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link 
            href={href} 
            className="flex items-center justify-center h-10 w-10 rounded-md hover:bg-muted transition-colors group"
          >
            <div className="text-foreground group-hover:text-foreground/80">
              {icon}
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
