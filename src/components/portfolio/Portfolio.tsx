"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";
import PortfolioHire from "./PortfolioHire";
import PortfolioItem from "./PortfolioItem";
import { Project } from "@/app/lib/definitions";

const Portfolio = () => {
  const [dbItems, setDbItems] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const { safeData, success } = await res.json();

        setDbItems(safeData);

        if (!success) {
          throw new Error("Failed to fetch projects");
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
      <div
        className={`relative mt-20 h-[200vh] bg-gradient-to-br from-slate-100 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950`}
        ref={ref}
      >
        <div className="sticky top-0 flex h-screen w-full items-center gap-2 overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex h-full items-center"
            id="portfolio"
          >
            <Suspense>
              {dbItems &&
                dbItems.map((item) => (
                  <PortfolioItem key={item.id} item={item} />
                ))}
            </Suspense>
          </motion.div>
        </div>
      </div>
      <PortfolioHire />
    </>
  );
};

export default Portfolio;
