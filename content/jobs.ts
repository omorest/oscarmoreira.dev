interface JobCardProps {
  company: string
  fromDate: string
  currentJob: boolean
  content: string
  position: string
  technologies: string[]
}

export const jobs: JobCardProps[] = [
  {
    company: 'Expero',
    fromDate: 'Febrero 2023',
    currentJob: true,
    content: 'sjdiasjdsa ds soihdo asld saihd asidh ais dhasiudh asduashd ashdasud asdhasdhasdiahs dshd usahdasuhd ashd asd ',
    technologies: ['TypeScript', 'React', 'Playwright', 'Vitest'],
    position: 'Software Developer'
  },
  {
    company: 'The Agile Monkeys',
    fromDate: 'Abril 2022',
    currentJob: false,
    content: 'sjdiasjdsa ds',
    technologies: ['TypeScript', 'React', 'TailwindCss', 'Java', 'Spring Boot'],
    position: 'Sofware Developer'
  },
  {
    company: 'Xal Digital',
    fromDate: 'Octubre 2021',
    currentJob: false,
    content: 'sjdiasjdsa ds',
    technologies: ['Vue', 'AWS', 'JavaScript'],
    position: 'Sofware Developer'
  }
]
