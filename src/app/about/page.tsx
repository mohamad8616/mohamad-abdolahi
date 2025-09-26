"use client";
import AboutSkills from "@/components/AboutSkills";
import Experiences from "@/components/Experiences";
import Brain from "@/components/UI/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef(null);

  const isSkillRefInView = useInView(skillRef, {
    margin: "-100px",
    once: true,
  });

  const experienceRef = useRef(null);
  const isExperienceRefInView = useInView(experienceRef, {
    margin: "-100px",
    once: true,
  });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="relative h-screen w-full">
        {/* Changed container */}
        <div
          className="no-scrollbar h-full w-full gap-10 overflow-y-scroll lg:flex"
          ref={containerRef}
        >
          {/* TEXT CONTAINER */}
          <div className="flex flex-col gap-24 p-4 sm:p-8 md:gap-32 md:p-12 lg:w-2/3 lg:gap-32 lg:px-4 lg:py-20 lg:pr-0 xl:w-1/2 xl:gap-48 xl:p-24">
            {/* BIOGRAPHY CONTAINER */}
            <div className="flex flex-col justify-center gap-12">
              {/* BIOGRAPHY TITLE */}
              <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-300">
                BIOGRAPHY
              </h1>
              {/* BIOGRAPHY DESC */}
              <p className="text-lg/8 tracking-wide text-stone-700 dark:text-stone-300">
                Hi, I’m Mohamad—a passionate and motivated junior front-end
                developer with 1.5 experience with a keen eye for design and
                functionality. My journey into web development started with a
                curiosity for how websites are built, which quickly transformed
                into a love for crafting clean, responsive, and user-friendly
                interfaces. Though I’m still early in my career, I’ve built
                several projects that showcase my skills in Git, Tailwind, and
                JavaScript, as well as frameworks like React and Next. Each
                project I work on pushes me to refine my abilities and embrace
                the latest trends in web development. I thrive on solving
                problems, learning new technologies, and bringing creative ideas
                to life. Whether it’s optimizing performance, enhancing
                accessibility, or designing seamless user experiences, I’m eager
                to grow and contribute to meaningful projects. Let’s build
                something amazing together! Feel free to check out my work and
                connect with me.
              </p>
              {/* BIOGRAPHY QUOTE */}
              <span className="italic">
                {/* BIOGRAPHY QUOTE */}
                <span className="text-stone-700 italic dark:text-stone-300">
                  Programming is not about typing, it&apos;s about thinking.
                  Code is just a way to express our thoughts to the machine
                </span>{" "}
              </span>

              {/* BIOGRAPHY SIGN SVG*/}
              <div className="self-end">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 1025 459"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="1025" height="459" fill="none" />
                  <path
                    d="M524 192C495.931 186.018 468.782 174.466 443.778 160.556C401.705 137.15 359.311 101.546 341.444 55.2778C329.608 24.6254 354.2 8.78164 380.556 3.22222C385.922 2.09032 392.901 0.899371 398.222 2.88889C413.282 8.51977 410.927 27.6563 406.556 39.4444C394.286 72.5277 353.651 95.3668 353.444 132.889C353.237 170.661 414.954 134.071 428.111 126.667C460.552 108.411 493.487 92.7402 528.667 80.4444C550.876 72.682 573.903 66.2724 595.333 56.4444C598.996 54.7647 606.519 52.5843 609 49C611.56 45.3022 601.072 53.2772 597.333 55.7778C542.557 92.4186 488.871 131.005 435.556 169.722C324.923 250.064 221.068 338.621 114 423.5C99.5573 434.95 84.3788 445.497 70 457"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M535.206 433.606C457.773 431.923 380.851 420.173 305.016 404.967C225.257 388.975 145.808 367.221 73.142 329.882C49.2189 317.589 25.931 303.6 8.52522 282.713C6.86933 280.726 2.38843 271.202 2.38843 276.697C2.38843 294.243 3.81629 314.11 16.3466 327.476C36.0503 348.493 59.4591 353.467 87.8221 353.467C197.1 353.467 304.424 348.085 412.952 333.251C580.399 310.364 746.099 288.489 915.326 288.489C951.064 288.489 986.801 288.489 1022.54 288.489"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* BIOGRAPHY SCROLL SVG */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>

            {/* EXPERIENCE CONTAINER */}
            <Experiences
              experienceRef={experienceRef}
              isExperienceRefInView={isExperienceRefInView}
            />

            {/* SKILLS CONTAINER */}
            <div className="flex flex-col justify-center gap-12" ref={skillRef}>
              {/* SKILL TITLE */}
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold"
              >
                SKILLS
              </motion.h1>
              {/* SKILL LIST */}
              <AboutSkills skillRef={skillRef} />
              {/* SKILL SCROLL SVG */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>

          {/* SVG CONTAINER */}
          <div className="sticky top-0 z-30 hidden w-1/3 lg:block xl:w-1/2">
            <Brain scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
