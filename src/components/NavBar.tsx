
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BriefcaseIcon, MenuIcon, PenIcon, UserIcon, LogOutIcon } from "lucide-react";

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center">
            <div className="bg-neurohire-600 text-white p-2 rounded-md mr-2">
              <BriefcaseIcon className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-neurohire-800">NeuroHire</span>
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:gap-8">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 transition hover:text-neurohire-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#jobs"
                  className="text-gray-700 transition hover:text-neurohire-600"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="text-gray-700 transition hover:text-neurohire-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="text-gray-700 transition hover:text-neurohire-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {user.role === "jobseeker" ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/jobseeker/dashboard" className="flex w-full cursor-pointer items-center">
                        <UserIcon className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/jobseeker/applications" className="flex w-full cursor-pointer items-center">
                        <BriefcaseIcon className="mr-2 h-4 w-4" />
                        My Applications
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/jobseeker/resume-builder" className="flex w-full cursor-pointer items-center">
                        <PenIcon className="mr-2 h-4 w-4" />
                        Resume Builder
                      </Link>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link to="/admin/dashboard" className="flex w-full cursor-pointer items-center">
                        <UserIcon className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/admin/jobs" className="flex w-full cursor-pointer items-center">
                        <BriefcaseIcon className="mr-2 h-4 w-4" />
                        Manage Jobs
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/admin/candidates" className="flex w-full cursor-pointer items-center">
                        <UserIcon className="mr-2 h-4 w-4" />
                        Candidates
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={logout}
                  className="cursor-pointer text-destructive"
                >
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="sm:flex sm:gap-4">
              <Link
                to="/login"
                className="block rounded-md bg-neurohire-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neurohire-700"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-neurohire-600 transition hover:text-neurohire-700 sm:block"
              >
                Register
              </Link>
            </div>
          )}

          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
