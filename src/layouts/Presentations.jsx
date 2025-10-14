import { Body } from '../components/presentation/Body'
import { BoxTitle } from '../components/presentation/BoxTitle'
import { Header } from '../components/presentation/Header'

export function Presentation () {
  return (
    <section className='m-auto flex lg:gap-10 xl:gap-15 gap-10 flex-col items-center justify-center w-[90%] h-[90%]'>
      <Header />
      <BoxTitle />
      <Body />

      {/* platform's texture */}
      <section className='w-full h-[100px] world bg-black rounded' />

    </section>
  )
}
