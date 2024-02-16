import { type FC } from 'react'
import { IconBrandLinkedin, IconBrandGithub, IconBrandX } from '@tabler/icons-react'
import Link from 'next/link'
import { type Social } from '../types/socials.types'

interface IconProps {
  social: Social
  link: string
}

const Icon: FC<IconProps> = ({ social, link }) => {
  const icon = {
    github: <IconBrandGithub className='text-stone-600'/>,
    linkedin: <IconBrandLinkedin className='text-stone-600'/>,
    twitter: <IconBrandX className='text-stone-600'/>
  }

  return (
    <Link href={link} >
      <a target="_blank">
        <div className='border-2 w-max rounded-full p-4 border-gray bg-stone-200 hover:bg-stone-300 hover:cursor-pointer'>
          {icon[social]}
        </div>
      </a>
    </Link>
  )
}

export default Icon
