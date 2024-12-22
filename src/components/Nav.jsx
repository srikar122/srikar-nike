import React from 'react'
import {headerLogo} from '../assets/images/'
import {hamburger} from '../assets/icons/'
import { navLinks } from '../constants'
const Nav = () => {
  return (
    <header className='sm:px-16 px-8 py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-w-[1440px] mx-auto my-0'>
            <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} /></a>
        <ul className='flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray'
                    > {item.label}</a>
                </li>
            ))}
        </ul>
        <div className="">
            <img src={hamburger} alt="hamburger" className="lg:hidden" width={25}/>
        </div>
        </nav>
    </header>
  )
}

export default Nav