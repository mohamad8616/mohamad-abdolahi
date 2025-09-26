"use client";

import { loginAction } from "@/app/lib/actions";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    await loginAction(formData);
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4 p-4">
        <label className="text-slate-800 dark:text-slate-100" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="w-80 rounded-md border-2 border-gray-300 bg-white p-2 text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col space-y-4 p-4">
        <label
          className="text-slate-800 dark:text-slate-100"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="w-80 rounded-md border-2 border-gray-300 bg-white p-2 text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="cursor-pointer rounded-md bg-blue-500 p-2 text-slate-100"
      >
        Login
      </button>
    </form>
  );
}
