import Image from 'next/image'
import vscodeLogo from '@/assets/vscode-icon.png'
import Header from '@/components/Header'

export default function Home () {
  return (
    <>
      <Header />
      <main className=''>

        <section className="h-screen w-full relative">
          <div className='text-center h-full w-full grid place-content-center'>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#3EA9F0] font-bold my-5">Desarrollador front-end</h1>
            <p className='text-xl lg:text-3xl md:text-2xl text-[#B7B7B7] font-semibold mx-3 md:m-0'>Hola, soy <span className='text-white '>Viruz</span>, entusiasta del desarrollo web</p>
          </div>
          <div className='top-0 bottom-0 absolute grid place-content-center h-full w-full z-[-1] blur-3xl'>
            <Image
              className='object-cover w-[90%] h-[90%]'
              src={vscodeLogo}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </section>

        <section className="h-screen w-full grid place-content-center">
          <div className='text-start md:w-[43.8rem] w-auto mx-6'>
            <h1 className="text-center text-4xl  md:text-5xl font-bold my-14">Sobre mi</h1>
            <p className='text-2xl md:text-3xl text-[#B7B7B7] font-semibold'>Desarrollador frontend con experiencia en la creación de interfaces de usuario. Especializado en JavaScript, ReactJS, CSS y Node. Apasionado por construir páginas web.
              <br />
              <br />
            Más de 1 año y medio de estudio autodidacta en diseño, maquetación y desarrollo web. Continuamente buscando crecer profesionalmente en el ámbito del desarrollo Full-stack.</p>
          </div>
        </section>

      </main>
    </>
  )
}
