import { JsIcon,TypeSIcon,PyIcon,ExpressIcon,ReactIcon,CssIcon,HtmlIcon,JestIcon
    ,MysqlIcon,NodeIcon,TailwindCss,GitIcon,GitHIcon,MongoDbIcon
 } from "../components/Icons";
import { CardTech } from "../components/stack/CardTech";

export function TechStack () {
  return (
    <section className='m-auto bg-[#E01A0F] border-b-[3px] border-r-4 border-r-black border-b-black  border-l-4 border-t-2 border-l-red-300  border-t-red-300  relative overflow-hidden py-2 gap-5 shadow-2xl/20  rounded-sm flex  flex-col items-center w-[90%] h-[90%]'>
      <h2 className='press-start-2p-regular text-white text-shadow-2xs text-shadow-black text-2xl sm:text-3xl text-center lg:text-2xl 2xl:text-4xl'>
        Tecnologías
      </h2>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2 justify-center items-center justify-items-center w-full">
       <CardTech Icon={<JsIcon></JsIcon>} name={'Javascript'}></CardTech>
       <CardTech Icon={<TypeSIcon></TypeSIcon>} name={'Typescript'}></CardTech>
       <CardTech Icon={<PyIcon></PyIcon>} name={'Python'}></CardTech>
       <CardTech Icon={<ReactIcon></ReactIcon>} name={'React'}></CardTech>
       <CardTech Icon={<ExpressIcon></ExpressIcon>} name={'ExpressJS'}></CardTech>
       <CardTech Icon={<JestIcon></JestIcon>} name={'Jest'}></CardTech>
       <CardTech Icon={<HtmlIcon></HtmlIcon>} name={'HTML'}></CardTech>
       <CardTech Icon={<CssIcon></CssIcon>} name={'CSS'}></CardTech>
       <CardTech Icon={<TailwindCss></TailwindCss>} name={'TailwindCss'}></CardTech>
       <CardTech Icon={<NodeIcon></NodeIcon>} name={'NodeJS'}></CardTech>
       <CardTech Icon={<MysqlIcon></MysqlIcon>} name={'Mysql'}></CardTech>
       <CardTech Icon={<MongoDbIcon></MongoDbIcon>} name={'MongoDB'}></CardTech>
       <CardTech Icon={<GitHIcon></GitHIcon>} name={'GitHub'}></CardTech>
       <CardTech Icon={<GitIcon></GitIcon>} name={'Git'}></CardTech>
      </section>

      
    </section>
  )
}
