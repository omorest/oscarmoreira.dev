import { Project } from '../types/project.types'

export const projects: Project[] = [
  {
    title: 'FixAdvisor',
    date: '15-7-2022',
    urlWeb: 'https://fixadvisor.vercel.app',
    urlGithub: 'https://github.com/omorest/FixAdvisor-FrontEnd',
    tags: ['react', 'typescript', 'tailwind', 'chakraui'],
    image: '/images/projects/pic-fixadvisor.webp'
  },
  {
    title: 'Movies',
    date: '6-4-2022',
    urlWeb: 'https://movies-app-tmdb.vercel.app/',
    urlGithub: 'https://github.com/omorest/Movies-frontend-project',
    tags: ['react', 'typescript', 'chakraui'],
    image: '/images/projects/pic-movies.webp'
  },
  {
    title: 'Weather Web',
    date: '13-2-2021',
    urlWeb: 'https://theweathernow.vercel.app/',
    urlGithub: 'https://github.com/omorest/WeatherWeb-Front',
    tags: ['javascript', 'webpack'],
    image: '/images/projects/pic-weather.webp'
  },
  {
    title: 'Sat to 3SAT',
    date: '19-1-2022',
    urlWeb: 'https://3-sat.vercel.app/',
    urlGithub: 'https://github.com/omorest/3SAT',
    tags: ['javascript', 'vite'],
    image: '/images/projects/pic-3-sat.webp'
  }
]
