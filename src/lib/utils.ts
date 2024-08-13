import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getGraduationYears = () => {
  const currentYear = new Date().getFullYear();
  // Month 0-11
  const currentMonth = new Date().getMonth();
  // June
  if (currentMonth <= 5)
    return Array.from({ length: 4 }, (_, i) => currentYear + i);
  else return Array.from({ length: 5 }, (_, i) => currentYear + i).slice(1);
};
