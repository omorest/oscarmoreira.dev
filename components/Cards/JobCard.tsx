import { type FC } from 'react'

interface JobCardProps {
  company: string
  fromDate: string
  currentJob: boolean
  content: string
  position: string
  technologies: string[]
}

export const JobCard: FC<JobCardProps> = ({ company, position, fromDate, currentJob, content, technologies }) => {
  console.log(position)
  return (
    <div className="flex flex-col items-center gap-4">
      <div className='flex flex-col items-center gap-2'>
        <h2 className="text-3xl font-bold">{company}</h2>
        <h3 className="text-lg font-bold">{position}</h3>
        <span>{fromDate} {currentJob && '- Actualidad'}</span>
      </div>
      <p className='w-[80ch] text-center'>
        {content}
      </p>
      <div className='text-center'>
        <span className='font-semibold'>Tecnologías</span>
        <div className='mt-2'>
          {technologies.join('  -  ')}
        </div>
      </div>

    </div>
  )
}
