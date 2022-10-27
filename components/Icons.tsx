import { FC } from 'react'
import Icon from './Icon'
import content from '../content/home.json'
import { Social } from '../types/socials.types'

interface IconsProps {

}

const Icons: FC<IconsProps> = () => {
  const socialsIcons = content?.socials?.map((social: any) => {
    const socialName = Object.keys(social)[0] as Social
    return <Icon social={socialName} link={social[socialName]} key={socialName}/>
  })

  return (
    <div className='flex gap-4'>
      {socialsIcons}
    </div>
  )
}

export default Icons
