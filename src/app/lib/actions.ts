"use server";
import { auth, signIn, signOut } from "@/app/lib/auth"; // adjust import path
import { redirect } from "next/navigation";
import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export const loginAction = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    throw new Error("Invalid form data");
  }

  try {
    const result = await signIn("credentials", {
      email,
      password,
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

export const editProject = async (id: number, formData: FormData) => {
  try {
    const session = await auth();
    if (!session) {
      // You can throw or return a structured error object
      throw new Error("User not authenticated");
    }

    // validate inputs if necessary here

    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        title: formData.get("title") as string,
        img: formData.get("img") as string,
        desc: formData.get("desc") as string,
        technologies: formData.get("technologies") as string,
        link: formData.get("link") as string,
        github: formData.get("github") as string,
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
