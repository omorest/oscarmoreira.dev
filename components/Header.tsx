import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'

interface HeaderProps {
  onChangeTheme: () => void
}

const Header: FC<HeaderProps> = ({ onChangeTheme }) => {
  const {theme, toggleTheme} = useTheme()

  const iconChangeTheme = theme === 'dark' ? <div>🌚</div> : <div>🌝</div>

  return (
    <div className="flex justify-between items-center mb-32">
      <Link href="/">
        <h2 className="transition ease-in-out delay-100 font-extrabold text-3xl hover:cursor-pointer text-black dark:text-white">OM.</h2>
      </Link>
      <ul className="flex items-center gap-6 text-gray text-lg font-normal list-none">
        <li onClick={toggleTheme} className='cursor-pointer'>{iconChangeTheme}</li>
        <li className="hover:text-black dark:hover:text-white"><Link href="/about">Sobre mí</Link></li>
        <li className="hover:text-black dark:hover:text-white"><Link href="/blog"> Blog</Link></li>
        <li className="hover:text-black dark:hover:text-white"><Link href="/projects"> Proyectos</Link></li>
        {/* <li className="hover:text-black"><Link href="/resume">Resume</Link></li> */}
      </ul>
    </div>
  )
}

export default Header
