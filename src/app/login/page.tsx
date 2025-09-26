"use client";

import LoginForm from "@/components/Login-form";

export default function Login() {
  return (
    <div className="flex h-[600px] max-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="-mt-32">
        <h1 className="mb-20 text-3xl font-bold text-slate-800 dark:text-slate-100">
          Insert your credentials
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
