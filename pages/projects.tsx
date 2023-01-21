import ProjectCard from '../components/Cards/ProjectCard'
import Gallery from '../components/Gallery'
import HeadInfo from '../components/HeadInfo/HeadInfo'
import { projects } from '../content/projects'
import { Project } from '../types/project.types'
import { sortProjects } from '../utils'

const Projects = () => {
  const latestsProjects: Project[] = sortProjects(projects, 'desc')
  const projectCards = latestsProjects.map((project, index) => <ProjectCard project={project} key={index}/>)
  return (
    <div>
      <HeadInfo namePage='Projectos' metaDescription='Projectos de Oscar Moreira'/>
      <Gallery title='Proyectos'>
        {projectCards}
      </Gallery>
    </div>
  )
}

export default Projects
