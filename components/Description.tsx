import { type FC } from 'react'

interface DescriptionProps {
  title: string
  titleColored: string
  description: string
}

const Description: FC<DescriptionProps> = ({ title, titleColored, description }) => {
  return (
    <div className="mt-32">
      <span className="transition ease-in-out delay-100 text-6xl font-semibold dark:text-white">{title}&nbsp;
        <h1 className="inline text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
          {titleColored}&nbsp;
        </h1>
        🌴
      </span>
      <p className="mt-8 max-w-[100ch] text-stone-600 text-xl font-normal dark:text-light-gray">
        {description}
      </p>
    </div>
  )
}

export default Description
