import Link from "next/link";
import { Suspense } from "react";
import { TypeAnimation } from "react-type-animation";

const heroBtnStyle = "rounded-lg p-4 dark:ring-1 dark:ring-black";

export default function Hero() {
  return (
    <div className="gap-y-16px flex h-auto min-h-screen flex-col items-center gap-10 px-8 py-20 sm:gap-y-6 sm:px-8 md:mt-32 md:flex-row md:px-12 lg:px-20 xl:px-48">
      <div className="h-10/12 w-10/12 rounded-md rounded-b-xl md:w-1/2">
        <Suspense fallback={<div>Loading...</div>}>
          <img
            alt="Hero illustration"
            src="/SnapBG.ai_1746638530893.png "
            className="hidden w-full object-top grayscale transition-all duration-300 hover:grayscale-0 dark:block"
          />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <img
            alt="Hero illustration"
            src="/ligh-mohamad.jpg "
            className="w-full object-top dark:hidden"
          />
        </Suspense>
      </div>
      {/* TEXT CONTAINER */}
      <div className="relative flex h-1/2 flex-col items-center justify-center gap-8 font-semibold md:h-full md:w-1/2">
        {/* TITLE */}
        <div className="z-20 transform text-start text-4xl font-medium text-yellow-600 md:absolute md:-top-28 md:w-[700px] md:-translate-x-20 md:text-7xl lg:-translate-x-10">
          {/* Hi, I&apos;m Mohammad. */}
          <TypeAnimation
            sequence={["I'm Mohamad", 1000, "Front-end Dev", 1000]}
            wrapper="h1"
            speed={200}
            repeat={Infinity}
          />
        </div>
        {/* DESC */}
        <p className="tracking-wide md:mt-30 md:text-xl/7 dark:text-yellow-100">
          A passionate front-end developer on a journey to craft beautiful and
          functional web experiences. I’m constantly learning and experimenting
          to bring ideas to life through code.
        </p>
        <p className="tracking-wide md:text-xl/7 dark:text-yellow-100">
          While I may be new to the field, I’ve already built several projects
          that showcase my ability to turn concepts into reality. Every
          challenge I tackle teaches me something new, and I’m excited to grow
          with every line of code I write.
        </p>
        <p className="tracking-wide md:text-xl/7 dark:text-yellow-100">
          I focus on clean, responsive design and intuitive user experiences. My
          goal is to create websites that not only look great but feel great to
          use.
        </p>
        <p className="tracking-wide md:text-xl/7 dark:text-yellow-100">
          If you want to collaborate, chat, or simply geek out over front-end
          development, feel free to connect!
        </p>
        <div className="flex w-full gap-4">
          <Link
            href="https://server17.serverha.net:2083/cpsess7009697154/download?skipencode=1&file=%2fhome%2fcoffeede%2fMohamadAbdolahiResume%20%283%29.pdf"
            className={`${heroBtnStyle} transition-[background-color, color] duration-200ms bg-[#415A77] font-semibold text-[#fff] transition duration-200 ease-in-out hover:bg-[#E0E1DD] hover:text-[#415A77]`}
          >
            Download CV (resume)
          </Link>
          <Link
            href="/contact"
            className={`${heroBtnStyle} border-none bg-[#415A77] font-semibold text-[#fff] transition duration-200 ease-in-out outline-none hover:bg-[#E0E1DD] hover:text-[#415A77]`}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
