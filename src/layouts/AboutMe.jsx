export function AboutMe () {
  return (
    <section id='aboutMe' className='m-auto relative overflow-hidden py-2 justify-between  rounded flex  flex-col items-center w-[90%] h-[90%]'>
      <h2 className='marioFont text-4xl sm:text-6xl text-center lg:text-4xl 2xl:text-8xl'>
        <span className='text-[#029ED9] text-shadow-md text-shadow-black'>S</span>
        <span className='text-[#FFD200] text-shadow-md text-shadow-black'>o</span>
        <span className='text-[#E62B11] text-shadow-md text-shadow-black'>b</span>
        <span className='text-[#45AE36] text-shadow-md text-shadow-black'>r</span>
        <span className='text-[#FFD200] text-shadow-md text-shadow-black'>e</span>
        <span> </span>
        <span className='text-[#029ED9] text-shadow-md text-shadow-black'>m</span>
        <span className='text-[#E62B11] text-shadow-md text-shadow-black'>i</span>
      </h2>

      <section className='w-full flex justify-center items-center'>

        <article className='vt323-regular text-center bg-[#6D89FF]/70 p-2 w-full text-md md:w-1/2 md:text-2xl lg:text-sm xl:text-xl 2xl:text-2xl flex flex-col lg:flex-row items-center gap-5 text-white'>
          <img className='md:w-[200px] lg:w-[150px] xl:w-[200px] w-[140px] rounded-lg' src='/aboutMe/myPhoto2.webp' alt='' />
          <p>
            Soy una persona dedicada y apasionada por el desarrollo de software. Me gusta aprender, mejorar y crear cosas nuevas. Soy responsable y disciplinado con mi trabajo, siempre busco hacer las cosas bien y entender el “por qué” detrás de cada línea de código.
            Disfruto los retos y me motiva ver cómo las ideas se convierten en soluciones reales.
          </p>
        </article>
      </section>

      {/* platform's texture */}
      <section className='w-full h-[200px]  worldAboutMe rounded' />

      <img className='w-[200px] filter drop-shadow-2xl drop-shadow-black/50 move absolute right-[-100px] bottom-15 md:w-[300px]  2xl:w-[500px]' src='/public/aboutMe/bullet.webp' alt="Mario bros's bullet" />

    </section>
  )
}
