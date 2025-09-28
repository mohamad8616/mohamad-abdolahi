"use client";
import React from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { EditOrCreateInput } from "@/app/lib/definitions";
import { toast } from "react-toastify";
import { createProject } from "@/app/lib/actions";

const labelStyle = "mb-2 block text-sm font-medium text-gray-500";
const inputStyles =
  "w-full rounded-lg border-2 border-gray-200 bg-gray-200 px-4 py-3 text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200";

const CreateProjectForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<EditOrCreateInput>();

  const onSubmit: SubmitHandler<EditOrCreateInput> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("img", data.img);
      formData.append("desc", data.desc);
      formData.append("technologies", data.technologies);
      formData.append("link", data.link);
      formData.append("github", data.github);

      await createProject(formData);
      toast.success("Project created successfully!");
    } catch (error) {
      console.error("Failed to create project:", error);
      toast.error("Failed to create project");
    }
    // console.log(data.img[0]);
  };
  return (
    <form
      className="space-y-6 rounded-xl p-2 shadow-lg md:p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Title Input */}
      <div>
        <label htmlFor="title" className={labelStyle}>
          Project Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter project title"
          className={inputStyles}
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <p className="text-sm text-red-400">{errors.title.message}</p>
        )}
      </div>

      {/* Description Input */}
      <div>
        <label htmlFor="desc" className={labelStyle}>
          Description
        </label>
        <textarea
          id="desc"
          placeholder="Describe your project"
          className={inputStyles}
          {...register("desc", {
            required: "Description is required",
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters long",
            },
            maxLength: {
              value: 1000,
              message: "Description must be at most 1000 characters long",
            },
          })}
        />
        {errors.desc && (
          <p className="text-sm text-red-400">{errors.desc.message}</p>
        )}
      </div>

      {/* Image URL Input */}
      <div>
        <label htmlFor="img" className={labelStyle}>
          Image URL
        </label>
        <div className="relative">
          <input
            type="text"
            id="img"
            accept=".jpg,.jpeg,.png, webp"
            className={`${inputStyles} cursor-pointer placeholder:cursor-pointer`}
            {...register("img", { required: "Select a picture" })}
          />
          <p className="mt-1 text-xs text-gray-500">
            Upload your image to imageKit and paste the direct link here
          </p>
          {errors.img && (
            <p className="text-sm text-red-400">{errors.img.message}</p>
          )}
        </div>
      </div>

      {/* Live Demo Link */}
      <div>
        <label htmlFor="link" className={labelStyle}>
          Live Demo URL
        </label>
        <input
          type="url"
          id="link"
          placeholder="https://your-project.com"
          className={inputStyles}
          {...register("link", { required: "Live Demo URL is required" })}
        />
        {errors.link && (
          <p className="text-sm text-red-400">{errors.link.message}</p>
        )}
      </div>

      {/* GitHub Link */}
      <div>
        <label htmlFor="github" className={labelStyle}>
          GitHub Repository
        </label>
        <input
          type="url"
          id="github"
          placeholder="https://github.com/username/repo"
          className={inputStyles}
          {...register("github", { required: "GitHub URL is required" })}
        />
        {errors.github && (
          <p className="text-sm text-red-400">{errors.github.message}</p>
        )}
      </div>

      {/* Technologies Input */}
      <div>
        <label htmlFor="technologies" className={labelStyle}>
          Technologies
        </label>
        <input
          type="text"
          id="technologies"
          placeholder="React, Node.js, MongoDB (comma separated)"
          className={inputStyles}
          {...register("technologies", {
            required: "Technologies are required",
          })}
        />
        <p className="mt-1 text-xs text-gray-500">
          Separate technologies with commas
        </p>
        {errors.technologies && (
          <p className="text-sm text-red-400">{errors.technologies.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="space-y-4 pt-4 text-center">
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 px-6 py-3 text-white transition-all duration-200 hover:bg-blue-600 focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:outline-none"
        >
          Add Project
        </button>
        <Link href="/admin/projects" className="text-stone-700">
          see projects
        </Link>
      </div>
    </form>
  );
};

export default CreateProjectForm;
