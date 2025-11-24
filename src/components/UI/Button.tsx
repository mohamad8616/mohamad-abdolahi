"use client";
import React from "react";
import { Dispatch, ReactNode, SetStateAction } from "react";

type ButtonType = {
  children: ReactNode;
  onOpen?: Dispatch<SetStateAction<boolean>>;
  color?: string;
  type: "edit" | "delete";
};
export default function Button({
  children,
  color,
  onOpen,
  type = "edit",
}: ButtonType) {
  if (type === "edit") {
    return (
      <button
        onClick={() => onOpen(true)}
        className={`rounded bg-${color}-500 px-3 py-1 text-sm text-white hover:bg-${color}-600`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={`rounded bg-${color}-500 px-3 py-1 text-sm text-white hover:bg-${color}-600`}
    >
      {children}
    </button>
  );
}
