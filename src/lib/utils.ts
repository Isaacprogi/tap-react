import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const mergeClass = (...classes: any[]) => {
  return twMerge(clsx(...classes));
};