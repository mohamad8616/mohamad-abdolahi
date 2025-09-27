"use client";
import Portfolio from "@/components/portfolio/Portfolio";
import { motion } from "framer-motion";
import { GoArrowDown } from "react-icons/go";

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex h-[calc(100vh-6rem)] w-screen flex-col items-center justify-center text-center text-6xl md:text-8xl">
        <h1 className="text-stone-700 dark:text-stone-300">My Works</h1>
        <p>
          <GoArrowDown className="mt-20 text-[var(--btn-primary)]" />
        </p>
      </div>
      <Portfolio />
    </motion.div>
  );
};

export default PortfolioPage;
