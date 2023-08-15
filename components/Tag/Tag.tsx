import { type FC } from 'react'

interface TagProps {
  text: string
}
export const Tag: FC<TagProps> = ({ text }) => {
  return (
    <div
      className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
    >
      {text}
    </div>
  )
}
