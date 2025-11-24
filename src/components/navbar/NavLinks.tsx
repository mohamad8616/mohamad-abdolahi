"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavLinks({
  link,
}: {
  link: {
    title: string;
    href: string;
  };
}) {
  const pathname = usePathname();
  const isActive = pathname === link.href;
  return (
    <Link
      href={link.href}
      className={` ${isActive ? "bg-slate-800 text-slate-100 hover:scale-105 hover:bg-slate-900 hover:text-stone-300 dark:bg-purple-600 dark:text-stone-700" : ""}text-stone-700 rounded p-1 transition-all duration-300 hover:bg-[#E0E1DD] hover:text-[#0D1B2A] dark:text-stone-200 dark:hover:text-stone-700`}
    >
      {link.title}
    </Link>
  );
}

export default NavLinks;
