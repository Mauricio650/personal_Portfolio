export function AboutMe () {
  return (
    <section className='m-auto relative overflow-hidden py-2 justify-between  rounded flex gap-15 flex-col items-center w-[90%] h-[90%]'>
        <h2 class='marioFont text-3xl sm:text-6xl text-center xl:text-8xl'>
          <span className='text-[#029ED9] text-shadow-md text-shadow-black'>S</span>
          <span className='text-[#FFD200] text-shadow-md text-shadow-black'>o</span>
          <span className='text-[#E62B11] text-shadow-md text-shadow-black'>b</span>
          <span className='text-[#45AE36] text-shadow-md text-shadow-black'>r</span>
          <span className='text-[#FFD200] text-shadow-md text-shadow-black'>e</span>
          <span> </span>
          <span className='text-[#029ED9] text-shadow-md text-shadow-black'>m</span>
          <span className='text-[#E62B11] text-shadow-md text-shadow-black'>i</span>
        </h2>

        {/* platform's texture */}
      <section className='w-full h-[200px]  worldAboutMe rounded' />
      
        <img className="w-[200px] move absolute right-[-100px] bottom-15  md:w-[500px]" src="/public/aboutMe/bullet.webp" alt="Mario bros's bullet" />
  
    </section>
  )
}
