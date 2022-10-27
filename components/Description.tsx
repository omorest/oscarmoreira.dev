import { FC } from 'react'

interface DescriptionProps {
  title: string
  titleColored: string
  description: string
}

const Description:FC<DescriptionProps> = ({ title, titleColored, description }) => {
  return (
    <div className="mt-32">
      <h2 className="text-6xl font-semibold text-black dark:text-white">{title}&nbsp;
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-hard via-purple-medium to-purple-soft">
          {titleColored}
        </span>
      </h2>
      <p className="mt-8 text-gray text-xl font-light dark:text-white">
        {description}
      </p>
    </div>
  )
}

export default Description
