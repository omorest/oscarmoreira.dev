import ProjectCard from '../components/Cards/ProjectCard'
import Gallery from '../components/Gallery'
import { projects } from '../content/projects'
import { Project } from '../types/project.types'
import { sortProjects } from '../utils'

const Projects = () => {
  const latestsProjects: Project[] = sortProjects(projects, 'desc')
  const projectCards = latestsProjects.map((project, index) => <ProjectCard project={project} key={index}/>)
  return (
    <div>
      <Gallery title='Proyectos'>
        {projectCards}
      </Gallery>
    </div>
  )
}

export default Projects
