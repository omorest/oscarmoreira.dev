import { FC, ReactNode } from 'react'

interface TagProps {
  children: ReactNode
}

const Tag: FC<TagProps> = ({ children }) => {
  return (
    <div className='flex items-center justify-center px-3 py-1 text-sm font-medium bg-gradient-to-r  from-purple-hard via-purple-medium to-purple-soft text-white rounded-full'>
      {children}
    </div>
  )
}

export default Tag
