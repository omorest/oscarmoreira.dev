import { JobCard } from '../components/Cards/JobCard'
import { jobs } from '../content/jobs'

const resume = () => {
  return (
    <div className='flex flex-col items-center gap-6'>
      {
        jobs.map((job, index) => (
          <>
            <JobCard
              key={job.company}
              position={job.position}
              company={job.company}
              fromDate={job.fromDate}
              currentJob={job.currentJob}
              content={job.content}
              technologies={job.technologies}
            />

            {index < jobs.length - 1 && <div className='border-solid border-[1px] h-16 border-light-gray'></div>}
          </>
        ))
      }
    </div>
  )
}

export default resume
