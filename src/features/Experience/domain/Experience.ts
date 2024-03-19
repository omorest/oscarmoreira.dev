type Languages = "Spanish" | "English" 

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  languaje: Languages[];
  content?: string;
}