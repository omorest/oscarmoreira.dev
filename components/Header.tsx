import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-32">
      <Link href="/">
        <h2 className="font-extrabold text-3xl hover:cursor-pointer text-black">OM.</h2>
      </Link>
      <ul className="flex gap-6 text-gray text-lg font-normal list-none">
        <li className="hover:text-black"><Link href="/about">Sobre mí</Link></li>
        <li className="hover:text-black"><Link href="/blog"> Blog</Link></li>
        <li className="hover:text-black"><Link href="/projects"> Projectos</Link></li>
        {/* <li className="hover:text-black"><Link href="/resume">Resume</Link></li> */}
      </ul>
    </div>
  )
}

export default Header