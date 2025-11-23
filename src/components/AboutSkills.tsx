"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
const skillItemStyles =
  "cursor-pointer rounded dark:bg-[var(--btn-ternary)] p-2 text-sm dark:text-[var(--primary)] hover:bg-white hover:text-black bg-stone-800 text-stone-200 duration-200 transition-colors";

interface AboutSkillsProps {
  skillRef?: React.RefObject<Element> | null;
}

function AboutSkills({ skillRef }: AboutSkillsProps) {
  const isSkillRefInView = useInView(skillRef, {
    margin: "-100px",
    once: true,
  });
  return (
    <motion.div
      initial={{ x: "-300px" }}
      animate={isSkillRefInView ? { x: 0 } : {}}
      className="flex flex-wrap gap-4"
    >
      <div className={skillItemStyles}>JavaScript</div>
      <div className={skillItemStyles}>TypeScript</div>
      <div className={skillItemStyles}>React.js</div>
      <div className={skillItemStyles}>Next.js</div>
      <div className={skillItemStyles}>SCSS</div>
      <div className={skillItemStyles}>Tailwind CSS</div>
      <div className={skillItemStyles}>Node.js</div>
      <div className={skillItemStyles}>GraphQL</div>
      <div className={skillItemStyles}>Apollo</div>
      <div className={skillItemStyles}>Redux</div>
      <div className={skillItemStyles}>Framer Motion</div>
      <div className={skillItemStyles}>Three.js</div>

      <div className={skillItemStyles}>Webpack</div>
      <div className={skillItemStyles}>Vite</div>
      <div className={skillItemStyles}>Docker</div>
      <div className={skillItemStyles}>Git</div>
      <div className={skillItemStyles}>Figma</div>
    </motion.div>
  );
}

export default AboutSkills;
