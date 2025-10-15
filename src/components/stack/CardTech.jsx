export function CardTech ({Icon,name}) {
    return (
         <article className='vt323-regular w-[70px] py-2 px-10 shadow-2xl/30 justify-center ring-1 ring-white  rounded-xl bg-[#2946BE] text-white text-shadow-2xs text-shadow-black
          flex flex-col items-center'
        >
          {Icon}
          <strong>{name}</strong>
        </article>
    )
}