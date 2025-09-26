import ProjectCard from "@/components/portfolio/ProjectCard";
import Link from "next/link";

export default async function page() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Manage Projects</h1>
        <Link
          href="/admin"
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Add New Project
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))} */}
      </div>
    </div>
  );
}
