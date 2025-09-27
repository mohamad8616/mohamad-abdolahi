"use client";

import { logOut } from "@/app/lib/actions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiFolder, FiPlus } from "react-icons/fi";

const SideNav = ({ userName }: { userName: string }) => {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin", label: "Create Project", icon: FiPlus },
    { href: "/admin/projects", label: "Projects", icon: FiFolder },
  ];

  return (
    <aside className="hidden h-auto max-h-screen w-3/12 flex-col items-start justify-between px-6 py-32 md:flex">
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-400">Manage your projects</p>
          <p>Welcome {userName}</p>
        </div>

        <nav className="w-full">
          <ul className="flex w-full flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <li key={item.href} className="w-full">
                  <Link
                    href={item.href}
                    className={`flex w-full items-center space-x-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <form action={logOut}>
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-red-500 px-8 py-2 text-white transition-all duration-200 hover:bg-red-600 focus:ring-2 focus:ring-red-200 focus:ring-offset-2 focus:outline-none"
        >
          <p>logout</p>
        </button>
      </form>
    </aside>
  );
};

export default SideNav;
