type Languages = "Spanish" | "English" 

export interface Experience {
  company: string;
  position: string;
  startDate: string; // TODO: change to date and create a formater to put the date in the correct format like may 2020 - june 2021
  endDate: string; // TODO: change to date and create a formater to put the date in the correct format like may 2020 - june 2021
  technologies: string[];
  languaje: Languages[];
  content?: string;
}