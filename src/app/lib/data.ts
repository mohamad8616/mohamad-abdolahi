type Project = {
  title: string;
  desc: string;
  link: string;
  img: string;
  createdAt: number;
  github: string;
  technologies: string;
};

export const items: Project[] = [
  {
    title: "Next Casablanca Hotel",
    desc: "A full-stack CRUD application built with Next.js, showcasing a modern hotel management system. Features include real-time booking, room management, and an intuitive admin dashboard for effortless content updates. Leverages server-side rendering and API routes for optimal performance and seamless data handling.",
    link: "https://casablanca-hotel.vercel.app",
    img: "/casablanca-hotel.webp",
    createdAt: new Date(2024, 11, 1).getTime(),
    github: "https://github.com/mohamad8616/casablanca-hotel",
    technologies:
      "Next.js, Tailwind CSS, TypeScript, React, Supabase, Framer Motion",
  },
  {
    title: "Restaurant Website",
    desc: "A restaurant website built with HTML, CSS, and JavaScript. It features a modern and responsive design, a menu section with a gallery of dishes, and a contact form for customers to get in touch with the restaurant.",
    link: "https://html-css-restaurant-flax.vercel.app/",
    img: "/html-css1.jpg",
    createdAt: new Date(2022, 1, 1).getTime(),
    github: "https://github.com/mohamad8616/html-css-restaurant",
    technologies: "HTML, CSS, JavaScript",
  },
  {
    title: "Portfolio",
    desc: "A portfolio website built with Next.js, Tailwind CSS, and Framer Motion. It features a modern and responsive design, a portfolio section with a gallery of projects, and a contact form for customers to get in touch with the developer.",
    link: "https://coffeedev.ir",
    img: "/coffeedev-v2.jpg",
    createdAt: new Date(2025, 4, 14).getTime(),
    github: "https://github.com/mohamad8616/portfolio",
    technologies: "JavaScript, React, Next.js, Tailwind CSS, Framer motions",
  },
  {
    title: "Issue-tracker",
    desc: "A full-stack issue tracking application built with Next.js, Tailwind CSS, and Prisma. It allows users to create, update, and manage issues in a collaborative environment.",
    link: "https://issue-tracker-gfsk.vercel.app/",
    img: "/track-issue.png",
    createdAt: new Date(2025, 9, 28).getTime(),
    github: "https://github.com/mohamad8616/Issue-tracker",
    technologies:
      "JavaScript, React, Next.js, Tailwind CSS, Framer motions, Prisma, radix ui, react form hook",
  },
];
export const experiences = [
  {
    jobTitle: "Junior Frontend Developer - remote",
    jobDesc:
      "Developed and maintained a fully responsive admin dashboard using React and TanStack Query, and styled user interfaces using Tailwind CSS for performance and clarity, collaborated with remote teams to implement new features and optimize performance",
    jobDate: "2023 - 2024",
    jobCompany: "Tec-Rayaneh, Urmia",
  },
  {
    jobTitle: "Junior React Developer",
    jobDesc:
      "Designed and developed modular, reusable UI components for internal business tools, implemented animations and transitions using Framer Motion for an enhanced UX",
    jobDate: "2022 - 2023",
    jobCompany: "Tec-Rayaneh, Urmia",
  },
];
