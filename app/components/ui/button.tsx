"use client";

import { ComponentProps } from "react";

type Props = {
  name: string;
  variant?: "accent" | "default";
} & ComponentProps<"button">;

export const Button = ({ name, variant = "default", ...props }: Props) => {
  return (
    <button
      type="button"
      className={`py-2.5 px-5 w-48 ${variant === "default" ? "bg-transparent" : "bg-sky-500 border-sky-500 text-white"} border capitalize truncate`}
      {...props}
    >
      {name}
    </button>
  );
};
