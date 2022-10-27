import { FC } from 'react'
import { IconBrandLinkedin, IconBrandGithub, IconBrandTwitter } from '@tabler/icons'
import Link from 'next/link'
import { Social } from '../types/socials.types'

interface IconProps {
  social: Social
  link: string
}

const Icon: FC<IconProps> = ({ social, link }) => {
  const icon = {
    github: <IconBrandGithub className='text-gray'/>,
    linkedin: <IconBrandLinkedin className='text-gray'/>,
    twitter: <IconBrandTwitter className='text-gray'/>
  }

  return (
    <Link href={link} >
      <a target="_blank">
        <div className='border-2 w-max rounded-full p-4 border-gray hover:border-purple-hard hover:cursor-pointer'>
          {icon[social]}
        </div>
      </a>
    </Link>
  )
}

export default Icon
