"use client";
import ThemeToggle from "@/app/theme-toggle";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import ResponsiveMenu from "./ResponsiveMenu";
import NavLinks from "./NavLinks";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Contact", href: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 top-0 z-[100]">
      <nav className="mx-auto flex h-16 w-full max-w-[1350px] items-center justify-between gap-x-3 bg-stone-100/70 px-4 text-xl text-slate-800 shadow-sm backdrop-blur-md sm:px-8 md:px-12 lg:px-20 xl:px-48 dark:bg-black/80 dark:text-slate-200">
        <ThemeToggle />

        <div className="hidden w-full flex-auto justify-end gap-4 md:flex">
          {/* LINK ITEMS */}
          {links.map((link) => (
            <NavLinks key={link.title} link={link} />
          ))}
        </div>
        <div className="justify-center md:hidden lg:flex xl:w-1/3"></div>
        <div className="hidden w-1/3 justify-end gap-4 md:flex">
          <a
            href="https://www.github.com/mohamad8616"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my GitHub profile"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub
              className="text-[#415A77] transition-all duration-300 hover:text-[#E0E1DD]"
              width={30}
              height={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/mohamad-abdolahi"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my LinkedIn profile"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin
              className="text-blue-600 transition-all duration-300 hover:text-[#E0E1DD]"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow me on Instagram for more updates and behind-the-scenes content"
            aria-label="Visit my Instagram profile"
          >
            <FaInstagram
              className="text-red-600 transition-all duration-300 hover:text-[#E0E1DD]"
              width={30}
              height={30}
            />
          </a>
        </div>
        {/* RESPOSIVE MENU */}
        <ResponsiveMenu open={open} setOpen={setOpen} links={links} />
      </nav>
    </div>
  );
}

export default Navbar;
