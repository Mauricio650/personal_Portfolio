export function BoxTitle () {
  return (
    <section className='relative flex bg-[#9D3F02] border-b-[3px] border-r-4 border-r-black border-b-black rounded border-l-4 border-t-2 border-l-[#F6BFA8]  border-t-[#F6BFA8] gap-3 px-8 py-2 flex-col'>
      <h1 className='mariobros1 text-left text-[#F6BDA9] text-5xl md:text-7xl  lg:text-3xl xl:text-5xl 2xl:text-8xl text-shadow-lg text-shadow-black'>
        Mauricio bermudez
      </h1>
      <span className='mariobros1 text-[#F6BDA9] text-5xl md:text-8xl lg:text-3xl xl:text-5xl 2xl:text-8xl text-shadow-lg text-shadow-black'>Frontend developer</span>
      <div className='absolute top-1 right-2 border-r-4 border-r-black border-b-4 border-b-black p-[2px]  md:p-1 rounded bg-[#F6BDA9]' />
      <div className='absolute top-1 left-2 border-r-4 border-r-black border-b-4 border-b-black p-[2px] md:p-1 rounded bg-[#F6BDA9]' />
      <div className='absolute bottom-1 right-2 border-r-4 border-r-black border-b-4 border-b-black p-[2px] md:p-1 rounded bg-[#F6BDA9]' />
      <div className='absolute bottom-1 left-2 border-r-4 border-r-black border-b-4 border-b-black p-[2px] md:p-1 rounded bg-[#F6BDA9]' />
    </section>
  )
}
