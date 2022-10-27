import Image from 'next/image'
import { FC } from 'react'
import { Project } from '../../types/project.types'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <a href={project.urlGithub} target="_blank" rel="noreferrer">
      <div className="w-80 flex flex-col justify-between bg-white dark:bg-[#212529] rounded-lg border-0 shadow-lg border-gray-200 hover:cursor-pointer overflow-hidden ">
        <div className='h-[200px] w-[400px]'>
          <Image src={project.image} alt={project.image} width="400px" height="200px" className='rounded-t-lg object-cover' />
        </div>
        <div className='p-4 flex flex-col justify-between'>
          <h3 className='text-xl text-black dark:text-white'>{project.title}</h3>
          <span className='text-purple-hard italic'>{project.tags?.map(tag => tag).join(' - ')}</span>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
