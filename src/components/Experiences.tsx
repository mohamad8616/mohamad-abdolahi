"use client";
import React from "react";
import { motion } from "framer-motion";
interface AboutSkillsProps {
  experienceRef?: React.RefObject<HTMLDivElement> | null;
  isExperienceRefInView?: boolean;
}
export default function Experiences({
  experienceRef,
  isExperienceRefInView,
}: AboutSkillsProps) {
  return (
    <div
      className="flex flex-col justify-center gap-12 pb-48"
      ref={experienceRef}
    >
      {/* EXPERIENCE TITLE */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isExperienceRefInView ? { x: "0" } : {}}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold"
      >
        EXPERIENCE
      </motion.h1>
      {/* EXPERIENCE LIST */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isExperienceRefInView ? { x: "0" } : {}}
        className=""
      >
        {/* EXPERIENCE LIST ITEM */}
        <div className="flex h-auto justify-between">
          {/* LEFT */}
          <div className="w-1/3">
            {/* JOB TITLE */}
            <div className="rounded-s-lg rounded-b-lg bg-sky-950 p-3 text-lg font-semibold text-stone-200 dark:bg-[var(--btn-ternary)] dark:text-[var(--primary)]">
              Junior Frontend Developer - remote
            </div>
            {/* JOB DESC */}
            <div className="p-3 text-sm text-stone-700 italic dark:text-stone-300">
              <p>
                Developed and maintained a fully responsive admin dashboard
                using React and TanStack Query
              </p>
              <p>
                Styled user interfaces using Tailwind CSS for performance and
                clarity
              </p>
              <p>
                Collaborated with remote teams to implement new features and
                optimize performance
              </p>
            </div>
            {/* JOB DATE */}
            <div className="p-3 text-sm font-semibold text-red-400">
              2023 - 2024
            </div>
            {/* JOB COMPANY */}
            <div className="w-fit rounded bg-sky-700 p-1 text-sm font-semibold text-[var(--primary)]">
              Tec-Rayaneh, Urmia
            </div>
          </div>
          {/* CENTER */}
          <div className="flex w-1/6 justify-center">
            {/* LINE */}
            <div className="relative h-full w-1 rounded bg-gray-600">
              {/* LINE CIRCLE */}
              <div className="absolute -left-2 h-5 w-5 rounded-full bg-white ring-4 ring-red-400"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3"></div>
        </div>
        {/* EXPERIENCE LIST ITEM */}
        <div className="flex h-48 justify-between">
          {/* LEFT */}
          <div className="w-1/3"></div>
          {/* CENTER */}
          <div className="flex w-1/6 justify-center">
            {/* LINE */}
            <div className="relative h-full w-1 rounded bg-gray-600">
              {/* LINE CIRCLE */}
              <div className="absolute -left-2 h-5 w-5 rounded-full bg-white ring-4 ring-red-400"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3">
            {/* JOB TITLE */}
            <div className="rounded-s-lg rounded-b-lg bg-sky-950 p-3 font-semibold text-sky-100 dark:bg-[var(--btn-ternary)] dark:text-[var(--primary)]">
              Junior React Developer
            </div>
            {/* JOB DESC */}
            <div className="p-3 text-sm text-stone-700 italic dark:text-stone-300">
              <p>
                Designed and developed modular, reusable UI components for
                internal business tools
              </p>
              <p>
                Implemented animations and transitions using Framer Motion for
                an enhanced UX
              </p>
            </div>
            {/* JOB DATE */}
            <div className="p-3 text-sm font-semibold text-red-400">
              2022 - 2023{" "}
            </div>
            {/* JOB COMPANY */}
            <div className="w-fit rounded bg-sky-700 p-1 text-sm font-semibold text-[var(--primary)] dark:bg-[var(--btn-ternary)]">
              Mahrad Ahan, Urmia
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
