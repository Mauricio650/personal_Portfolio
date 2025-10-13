export function Header () {
  return (
    <section className='w-full text-shadow-md text-shadow-black press-start-2p-regular text-xs md:text-lg lg:text-xs xl:text-lg text-white flex justify-evenly items-start'>
      <div>
        <p>Mario</p>
        <p>005400</p>
      </div>
      <div className='flex'>
        <img className='w-[20px] onOff' src='/presentation/marioCoin.webp' alt='coin of mario bros 1' />
        <p>x 22</p>
      </div>
      <div className='flex flex-col items-center'>
        <p>World</p>
        <p>1-1</p>
      </div>
      <div>
        <p>Time</p>
      </div>
    </section>
  )
}
