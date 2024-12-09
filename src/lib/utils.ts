import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Country } from "@/data/road-signs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeCountry(country: Country) {
  return country.split(" ").map(capitalize).join();
}
