export function Card () {
  return (
    <article className='bg-[#DC1616] shadow-2xl/20 flex items-center flex-col gap-2 p-2 rounded-xl

          '
    >
      <div className='bg-white relative p-3 rounded-lg shadow-lg shadow-black/50'>
        <div className='bg-[#DC1616] absolute p-1 h-1 w-1 rounded-full
              bottom-1 left-1 '
        />
        <div className='bg-[#DC1616] absolute p-1 h-1 w-1 rounded-full
              bottom-1 right-1 '
        />
        <div className='bg-[#DC1616] absolute p-1 h-1 w-1 rounded-full
              top-1 right-1 '
        />
        <div className='bg-[#DC1616] absolute p-1 h-1 w-1 rounded-full
              top-1 left-1 '
        />
        <p className='marioFont text-4xl absolute bottom-3 right-3'>X57</p>
        <img className='md:w-[150px] shadow-2xs lg:w-[150px] xl:w-[200px] w-[120px] rounded-lg' src='/aboutMe/myPhoto2.webp' alt='' />
      </div>
      <p className='marioFont'>Mauricio</p>
      <div className='flex gap-2'>
        <div className='bg-green-600 ring-1 ring-black p-1 h-1 w-1
              '
        />
        <div className='bg-black ring-1 ring-black p-1 h-1 w-1
               '
        />
        <div className='bg-black ring-1 ring-black p-1 h-1 w-1
               '
        />
        <div className='bg-black ring-1 ring-black p-1 h-1 w-1
               '
        />
      </div>
      <div className='flex gap-2 items-center'>
        <div className='bg-white ring-2 shadow-lg shadow-black/50 text-black  px-3 rounded-full
              '
        >
          A
        </div>
        <p className='font-mono text-2xl'>Confirm</p>
      </div>
    </article>
  )
}
