"use server";
import { auth, signIn, signOut } from "@/app/lib/auth"; // adjust import path
import { redirect } from "next/navigation";
import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";
import z from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export const loginAction = async (formData: FormData) => {
  const validated = loginSchema.safeParse(Object.fromEntries(formData));

  if (!validated.success) {
    throw new Error("Invalid form data");
  }

  try {
    const result = await signIn("credentials", {
      ...validated.data,
      redirect: false,
    });
    console.log("signIn result:", result);
  } catch (err) {
    console.error("signIn threw:", err);
  }

  redirect("/admin");
};

export const logOut = async () => {
  await signOut({ redirectTo: "/" });
};

const ProjectSchema = z.object({
  title: z.string().min(2).max(100),
  img: z.string(),
  desc: z.string().min(10).max(1000),
  technologies: z.string().min(2).max(100),
  link: z.string(),
  github: z.string(),
});

export const editProject = async (id: number, formData: FormData) => {
  try {
    const session = await auth();
    if (!session) {
      throw new Error("User not authenticated");
    }

    // validate inputs if necessary here
    const validatedData = ProjectSchema.safeParse(Object.fromEntries(formData));
    if (!validatedData.success) {
      throw new Error("Invalid project data");
    }

    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        ...validatedData.data,
      },
    });

    revalidatePath("/admin/projects");

    console.log("Project updated successfully");
    return { success: true, project: updatedProject };
  } catch (error) {
    console.error("Failed to update project:", error);

    // Return something meaningful to the caller
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

export const createProject = async (formData: FormData) => {
  try {
    const session = await auth();
    if (!session) {
      // You can throw or return a structured error object
      throw new Error("User not authenticated");
    }

    const parsed = ProjectSchema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) {
      throw new Error("Invalid project data");
    }

    const createdAt = new Date().getTime();
    await prisma.project.create({
      data: { ...parsed.data, createdAt },
    });
  } catch (error) {
    console.error("Failed to create project:", error);

    // Return something meaningful to the caller
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
};
