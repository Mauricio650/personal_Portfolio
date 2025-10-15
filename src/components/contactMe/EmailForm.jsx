import { useId } from "react"

export function EmailForm () {
     const nameID = useId()
  const emailID = useId()
  const messageID = useId()
    return (
          <form
          action="https://formsubmit.co/mauricioibanez650@gmail.com"
          method="POST"
          className="bg-[#E01A0F] press-start-2p-regular text-white border-4 border-white p-6 w-full max-w-md rounded-lg shadow-[4px_4px_0px_#F4F2ED]/40"
        >
          <h2 className="text-2xl mb-4 press-start-2p-regular text-white text-center tracking-widest">
            Contáctame
          </h2>
  
          <label htmlFor={nameID} className="block mb-3 orbitron-1 text-sm">Nombre</label>
          <input
            id={nameID}
            type="text"
            name="name"
            required
            className="w-full p-2 mb-4 bg-[#2946BE] border-2 border-white text-white vt323-regular focus:outline-none focus:border-pink-500"
          />
  
          <label htmlFor={emailID} className="block mb-3 orbitron-1 text-sm">Email</label>
          <input
            id={emailID}
            type="email"
            name="email"
            required
            className="w-full p-2 mb-4 bg-[#2946BE] border-2 border-white text-white vt323-regular focus:outline-none focus:border-pink-500"
          />
  
          <label htmlFor={messageID} className="block mb-3 orbitron-1 text-sm">Mensaje</label>
          <textarea
            id={messageID}
            name="message"
            rows="4"
            required
            className="w-full p-2 mb-4 bg-[#2946BE] border-2 border-white text-white vt323-regular focus:outline-none focus:border-pink-500"
          ></textarea>
  
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black orbitron-1 font-bold py-2 border-4 border-white shadow-[3px_3px_0px_#FFFFFF]/40 hover:bg-white hover:text-black transition-all"
          >
            Enviar
          </button>
        </form>
    )
}