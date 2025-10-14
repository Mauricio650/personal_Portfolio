import { SuperMarioModel } from './SuperMarioModel'
export function Body () {
  return (
    <section className='flex gap-5 text-xs text-center md:text-xl lg:text-xs 2xl:text-xl flex-col w-full items-center'>
      <p className='press-start-2p-regular text-white  text-shadow-md text-shadow-black'>
        “Construyendo mundos digitales, un píxel a la vez.”
      </p>
      <SuperMarioModel />
      <a href='#aboutMe' className='cursor-pointer'>
        <p className='press-start-2p-regular  text-white onOff text-shadow-md text-shadow-black'>
          PRESS START
        </p>
      </a>
    </section>
  )
}
