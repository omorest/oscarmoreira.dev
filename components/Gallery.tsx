import Link from 'next/link'
import { type FC, type ReactNode } from 'react'

interface GalleryProps {
  title: string
  children: ReactNode
  pathViewMore?: string
}

const Gallery: FC<GalleryProps> = ({
  title,
  children,
  pathViewMore
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-5">
        <h2 className="text-2xl">{title}</h2>
        {pathViewMore &&
          <span className="text-stone-400 hover:text-stone-600 hover:cursor-pointer">
            <Link href={pathViewMore}>
            ver más
            </Link>
          </span>
        }
      </div>
      <div className="flex gap-6 flex-wrap">
        {children}
      </div>
    </div>
  )
}

export default Gallery
