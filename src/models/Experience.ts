import type { Technologies } from "./Technologies";

type Languages = "Spanish" | "English" 

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  technologies: Technologies[];
  languaje: Languages[];
  content?: string;
}