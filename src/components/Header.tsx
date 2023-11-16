import React from 'react'
import GithubIcon from './Icons/GithubIcon'
import LinkedinIcon from './Icons/LinkedinIcon'
import EmailIcon from './Icons/EmailIcon'
import MenuIcon from './Icons/MenuIcon'

function Header () {
  return (
    <header className="z-30 relative">
      <nav className="justify-start lg:justify-center hidden md:flex">
        <ul className="m-5 w-[30rem] h-[4.5rem] bg-zinc-900 fixed rounded-xl flex justify-evenly items-center hover:[&>li]:text-[var(--color-text-1)] hover:[&>li]:transition-all">
          <li>Inicio</li>
          <li>Sobre mi</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </nav>

      <nav className="justify-end hidden md:flex">
        <ul className="w-[13rem] h-[4.5rem] bg-zinc-900 fixed flex items-center justify-evenly rounded-xl mr-5 mt-5">
          <li><GithubIcon width={38} height={38}/></li>
          <li><LinkedinIcon width={53} height={53} /></li>
          <li><EmailIcon width={38} height={38} /></li>
        </ul>
      </nav>

      <div className="justify-end flex md:hidden">
        <button className='m-3 fixed'>
          <MenuIcon width={48} height={48} />
          </button>
      </div>

      <nav className="justify-center flex md:hidden">
        <ul className="w-full h-full bg-[#000000d5] fixed rounded-xl flex flex-col gap-10 items-center pt-20 [&>li]:text-xl hover:[&>li]:text-[var(--color-text-1)] hover:[&>li]:transition-all">
          <li>Inicio</li>
          <li>Sobre mi</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
