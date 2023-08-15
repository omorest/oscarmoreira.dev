import Icons from './Icons'

const Footer = () => {
  return (
    <div className='transition ease-in-out delay-100 flex flex-col items-center justify-around h-[200px] text-stone-700 m-10 dark:text-white'>
      <h2 className='text-3xl font-semibold'>Sígueme</h2>
      <Icons />
      <span>Hecho por Oscar Moreira</span>
    </div>
  )
}

export default Footer
