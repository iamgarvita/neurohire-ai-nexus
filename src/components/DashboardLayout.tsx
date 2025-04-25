
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import {
  BriefcaseIcon,
  LayoutDashboardIcon,
  UserIcon,
  FileTextIcon,
  SettingsIcon,
  PieChartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LogOutIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const jobSeekerNav = [
    { name: "Dashboard", href: "/jobseeker/dashboard", icon: LayoutDashboardIcon },
    { name: "Applications", href: "/jobseeker/applications", icon: FileTextIcon },
    { name: "Resume Builder", href: "/jobseeker/resume-builder", icon: PenIcon },
  ];

  const adminNav = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboardIcon },
    { name: "Manage Jobs", href: "/admin/jobs", icon: BriefcaseIcon },
    { name: "Candidates", href: "/admin/candidates", icon: UserIcon },
    { name: "Analytics", href: "/admin/analytics", icon: PieChartIcon },
  ];

  const navItems = user?.role === "jobseeker" ? jobSeekerNav : adminNav;

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <div
        className={cn(
          "bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          {!collapsed && (
            <Link to="/" className="flex items-center">
              <div className="bg-neurohire-600 text-white p-1.5 rounded-md mr-2">
                <BriefcaseIcon className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-neurohire-800">NeuroHire</span>
            </Link>
          )}
          {collapsed && (
            <div className="bg-neurohire-600 text-white p-1.5 rounded-md mx-auto">
              <BriefcaseIcon className="h-5 w-5" />
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className={cn("p-0 h-8 w-8", collapsed && "mx-auto")}
          >
            {collapsed ? (
              <ChevronRightIcon className="h-4 w-4" />
            ) : (
              <ChevronLeftIcon className="h-4 w-4" />
            )}
          </Button>
        </div>

        <ScrollArea className="flex flex-col flex-1 py-4">
          <nav className="space-y-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all",
                  location.pathname === item.href
                    ? "bg-neurohire-100 text-neurohire-700"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <item.icon
                  className={cn(
                    "flex-shrink-0 h-5 w-5 mr-3",
                    location.pathname === item.href
                      ? "text-neurohire-600"
                      : "text-gray-500"
                  )}
                />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>
        </ScrollArea>

        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src={user?.avatar} />
              <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
            </Avatar>

            {!collapsed && (
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
              </div>
            )}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={logout}
            className={cn(
              "mt-3 text-red-600 hover:bg-red-50 hover:text-red-700 transition-all",
              collapsed ? "w-full justify-center" : "w-full justify-start"
            )}
          >
            <LogOutIcon className="h-4 w-4 mr-2" />
            {!collapsed && "Logout"}
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </div>
  );
};

// Add missing PenIcon definition
export const PenIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
};

export default DashboardLayout;
