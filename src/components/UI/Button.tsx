"use client";

import { Dispatch, SetStateAction } from "react";

type ButtonType = {
  children: React.ReactNode;
  onOpen?: Dispatch<SetStateAction<boolean>>;
  color?: string;
  id?: number;
  onDelete?: (id: number) => Promise<void>;
  type: "edit" | "delete";
};
export default function Button({
  children,
  color,
  onDelete,
  id,
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
      onClick={() => onDelete(id)}
      className={`rounded bg-${color}-500 px-3 py-1 text-sm text-white hover:bg-${color}-600`}
    >
      {children}
    </button>
  );
}
