"use client";

import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { editProject } from "@/app/lib/actions";
import { EditOrCreateInput, Project } from "@/app/lib/definitions";
import { toast } from "react-toastify";
import { Project } from "@prisma/client";

const inputStyle =
  "mt-1 block w-full text-stone-800 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm";
const labelStyle = "block text-sm font-medium text-gray-700 dark:text-gray-300";

type editFormType = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  project: Project;
};

export default function FormEdit({ project, setIsOpen }: editFormType) {
  const { id, title, img, desc, technologies, link, github } = project;
  const {
    register,
    setError,
    formState: { isSubmitSuccessful, isSubmitting },
    handleSubmit,
  } = useForm<EditOrCreateInput>();
  const onSubmit: SubmitHandler<EditOrCreateInput> = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    // Handle form submission
    const editProjectWithId = editProject.bind(null, id);
    try {
      const result = await editProjectWithId(formData);

      if (!result?.success) {
        // server returned an error object instead of throwing
        setError("root", { message: result?.message ?? "Update failed" });
        return;
      }

      toast.success("Project updated!");
      setIsOpen(false);
    } catch (err) {
      console.error(err);
      setError("root", {
        message:
          err instanceof Error ? err.message : "Unexpected error occurred",
      });
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Title */}
      <div>
        <label htmlFor="title" className={labelStyle}>
          Project Title
        </label>
        <input
          defaultValue={title}
          type="text"
          id="title"
          name="title"
          className={inputStyle}
          {...register("title", { required: "Title is required" })}
        />
      </div>

      {/* Image URL */}
      <div>
        <label htmlFor="img" className={labelStyle}>
          Image URL
        </label>
        <input
          type="text"
          id="img"
          name="img"
          defaultValue={img as string}
          className={inputStyle}
          {...register("img", { required: "Image URL is required" })}
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="desc" className={labelStyle}>
          Description
        </label>
        <textarea
          id="desc"
          defaultValue={desc}
          name="desc"
          className={inputStyle}
          {...register("desc", { required: "Description is required" })}
        />
      </div>

      {/* Technologies */}
      <div>
        <label htmlFor="technologies" className={labelStyle}>
          Technologies (comma-separated)
        </label>
        <input
          defaultValue={technologies}
          type="text"
          id="technologies"
          name="technologies"
          placeholder="React, Node.js, MongoDB"
          className={inputStyle}
          {...register("technologies", {
            required: "Technologies are required",
          })}
        />
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="link" className={labelStyle}>
            Live Demo URL
          </label>
          <input
            type="url"
            id="link"
            name="link"
            defaultValue={link}
            className={inputStyle}
            {...register("link", { required: "Live Demo URL is required" })}
          />
        </div>

        <div>
          <label htmlFor="github" className={labelStyle}>
            GitHub URL
          </label>
          <input
            type="url"
            id="github"
            defaultValue={github}
            name="github"
            className={inputStyle}
            {...register("github", { required: "GitHub URL is required" })}
          />
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:bg-gray-400 dark:focus:ring-offset-gray-800"
        >
          {isSubmitting
            ? "Saving..."
            : isSubmitSuccessful
              ? "Saved!"
              : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
