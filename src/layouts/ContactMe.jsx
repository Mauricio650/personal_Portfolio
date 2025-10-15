import { EmailForm } from "../components/contactMe/EmailForm"

export function ContactMe () {
   
    return (
        <section className='m-auto relative overflow-hidden py-2 p-3 gap-5  rounded-sm flex  flex-col md:flex-row items-center justify-center w-[90%] h-[90%]'>
       
        <EmailForm></EmailForm>
        
        </section>
    )
}