import { FC } from 'react'
import Icons from './Icons'

interface FooterProps {

}

const Footer: FC<FooterProps> = () => {
  return (
    <div className='flex flex-col items-center justify-around h-[200px] m-10 text-black'>
      <h2 className='text-3xl font-semibold'>Follow me</h2>
      <Icons />
      <span>Made by Oscar Moreira</span>
    </div>
  )
}

export default Footer
