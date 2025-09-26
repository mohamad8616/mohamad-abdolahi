"use server";
import { signIn, signOut } from "@/app/lib/auth"; // adjust import path
import { redirect } from "next/navigation";

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
