"use client";
import { deleteProject } from "@/lib/db-action";
import Button from "../UI/Button";
import { useState } from "react";
import Modal from "../UI/Modal";
import FormEdit from "../Form-edit";

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Edit Project"
      >
        <FormEdit project={project} setIsOpen={setIsOpen} />
      </Modal>

      <div
        key={project.id}
        className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg"
      >
        {/* Project Image */}
        <div className="relative h-48 w-full">
          <img
            src={project.img}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Project Content */}
        <div className="flex flex-1 flex-col p-3">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            {project.title}
          </h2>

          <p className="mb-4 flex-1 text-sm text-gray-600">{project.desc}</p>

          {/* Technologies */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-auto flex items-center justify-between border-t pt-4">
            <div className="flex gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:text-blue-700"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  GitHub
                </a>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-around gap-1 p-2">
              <Button color="blue" type="edit" onOpen={setIsOpen}>
                Edit
              </Button>

              <Button
                onDelete={deleteProject}
                id={project.id}
                color="red"
                type="delete"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
