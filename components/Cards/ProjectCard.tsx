import Image from 'next/image'
import { type FC } from 'react'
import { type Project } from '../../types/project.types'
import { Tag } from '../Tag/Tag'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <a href={project.urlGithub} target="_blank" rel="noreferrer">
      <div className="transition ease-in-out delay-100 w-80 h-72 flex flex-col bg-white dark:bg-dark-mate rounded-md shadow-md hover:shadow-lg hover:cursor-pointer overflow-hidden ">
        <div>
          <Image src={project.image} alt={project.image} width="400px" height="200px" objectFit={'cover'}/>
        </div>
        <div className='p-4 flex flex-col gap-2 h-[100%] justify-between'>
          <h3 className='transition ease-in-out delay-100 text-xl font-semibold dark:text-white'>{project.title}</h3>
          <div className='flex gap-2 flex-wrap'>{project.tags?.map(tag => <Tag text={tag} key={tag}/>)}</div>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
