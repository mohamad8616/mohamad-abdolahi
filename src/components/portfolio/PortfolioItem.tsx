"use client";
import React, { useEffect } from "react";
import { Project } from "@/app/lib/definitions";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import { TbListDetails } from "react-icons/tb";

const getTechIcon = (tech) => {
  const techIcons = {
    JavaScript: <SiJavascript className="text-yellow-400" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    React: <SiReact className="text-cyan-400" />,
    "Next.js": <SiNextdotjs className="text-white" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    MongoDB: <SiMongodb className="text-green-600" />,
    Express: <SiExpress className="text-gray-400" />,
    PostgreSQL: <SiPostgresql className="text-blue-400" />,
    Docker: <SiDocker className="text-blue-600" />,
  };
  return techIcons[tech] || null;
};
export default function PortfolioItem({ item }: { item: Project }) {
  const { id, title, img, desc, link, createdAt, technologies, github } = item;
  const createTime = Number(createdAt);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      // Prevent scrolling on the body
      document.body.style.overflow = "hidden";

      //  also prevent scroll on touch devices (iOS Safari fix)
      document.body.style.touchAction = "none";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    // Cleanup function 
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isModalOpen]);
  return (
    <div
      className={`flex h-screen w-screen items-center justify-center`}
      key={id}
    >
      <div className="flex h-4/5 w-11/12 items-center justify-center gap-2 bg-gradient-to-r from-sky-200 to-purple-200 px-4 text-white dark:bg-none">
        <div className="relative mt-16 flex h-full w-full flex-col items-center justify-between gap-y-5 overflow-hidden rounded-lg py-20 sm:w-3/4 md:w-10/12">
          <h1 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex h-full flex-col place-content-start items-center justify-around gap-8 p-6 md:flex-row"
          >
            {/* Image Container */}
            <div className="group relative w-full md:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[var(--btn-primary)]/20">
                <img
                  onClick={handleModalOpen}
                  src={img}
                  alt={title}
                  className="aspect-video h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                <div className="absolute right-0 bottom-0 left-0 p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="flex flex-wrap gap-2">
                    {technologies.split(",").map((tech, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Large screen */}
            <div className="hidden w-full space-y-8 md:block md:w-1/2">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="h-1 w-1 rounded-full bg-gray-400"></span>
                  Created at:{" "}
                  {createTime && !isNaN(new Date(createTime).getTime())
                    ? format(new Date(createTime), "MMMM d, yyyy")
                    : "Date not available"}
                </div>
                <p className="text-sm leading-relaxed text-stone-700 lg:text-lg dark:text-stone-300">
                  {desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {!item.link.includes("coffeedev.ir") && (
                  <a
                    href={item.link}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[var(--btn-primary)] px-4 py-1.5 text-[var(--btn-ternary)] transition-all duration-300 hover:bg-[var(--btn-ternary)] hover:text-[var(--primary)] lg:px-6 lg:py-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10 font-semibold">
                      Live Demo
                    </span>
                    <FaExternalLinkAlt className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0"></div>
                  </a>
                )}
                <a
                  href={item.github}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[var(--btn-primary)] px-4 py-1.5 text-[var(--btn-ternary)] transition-all duration-300 hover:bg-[var(--btn-ternary)] hover:text-[var(--primary)] lg:px-6 lg:py-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 font-semibold">
                    Source Code
                  </span>
                  <FaGithub className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0"></div>
                </a>
              </div>
            </div>

            <button
              onClick={handleModalOpen}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 sm:py-0.5 md:hidden"
            >
              <span className="relative z-10 flex items-center gap-2 rounded-lg bg-black px-6 py-3 font-semibold text-white transition-all duration-300 group-hover:bg-transparent">
                View Project Details
                <TbListDetails className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </motion.div>

          {/* Small screen modal*/}
          <div
            className={`absolute inset-0 z-50 flex h-full w-full transform items-center justify-center bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-sm transition-all duration-500 ${!isModalOpen ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"} lg:hidden`}
          >
            <div className="flex h-full w-full flex-col items-center justify-start gap-8 overflow-y-auto p-8">
              <div className="z-10 flex w-full items-center justify-between bg-black/50 p-4 backdrop-blur-md">
                <h1 className="text-1xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-bold text-transparent md:text-4xl lg:text-5xl">
                  {title}
                </h1>
                <button
                  onClick={handleModalClose}
                  className="rounded-full bg-white/10 p-2 text-white transition-all duration-300 hover:bg-white/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex w-full flex-col gap-6 rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Created at:{" "}
                  {createTime && !isNaN(new Date(createTime).getTime())
                    ? format(new Date(createTime), "MM/dd/yyyy")
                    : "Date not available"}
                </div>

                <div className="flex flex-wrap gap-2">
                  {technologies.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-1 text-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                    >
                      {getTechIcon(tech)}
                      <span className="text-gray-200">{tech}</span>
                    </span>
                  ))}
                </div>

                <p className="text-base leading-relaxed text-gray-300 lg:text-lg">
                  {item.desc}
                </p>
                {/* modal links */}
                <div className="flex flex-wrap gap-4 pt-4 text-base md:text-lg">
                  {!link.includes("coffeedev.ir") && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <span className="relative z-10 flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-semibold text-white transition-all duration-300 group-hover:bg-transparent">
                        Live Demo
                        <FaExternalLinkAlt className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </a>
                  )}
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 p-[2px] transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25"
                  >
                    <span className="relative z-10 flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-semibold text-white transition-all duration-300 group-hover:bg-transparent">
                      Source Code
                      <FaGithub className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
