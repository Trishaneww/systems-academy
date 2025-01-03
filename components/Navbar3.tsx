"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { navItems } from '@/data'
import { FaArrowRightLong } from "react-icons/fa6";
import { cn } from '@/lib/utils'
import '../styles/global.scss';
import Image from 'next/image'
import logo from '../public/assets/logo.png'
import { LogOut } from 'lucide-react'

const Navbar3 = () => {
  const [showMenu, setShowMenu] = useState(false);

  const switch_menu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="flex w-full justify-between items-center h-[80px] p-6 lg:px-12 backdrop-blur-md navbar self-center scroll-smooth z-50 fixed mb-20 bg-[#00030F]">
      <Link href='/' className={cn(
            "relative dark:text-slate-50 items-center flex space-x-1 text-slate-50 dark:hover:text-slate-300 hover:text-slate-500"
          )}>
            {/* <div className="w-[60%]">
            <Image 
              alt="figment studios logo"
              src={logo}
              width={1000}
              height={1000}
              priority
            />
            </div> */}
            <p className="font-bold text-xl">THE SYSTEMS ACADEMY</p>
      </Link>

      <div className="flex justify-center items-center gap-8">
      {/* {navItems.map((navItem: any, idx: number) => (
        <Link 
          key={idx} 
          href={navItem.link}
          className={cn(
            "relative dark:text-slate-50 items-center hidden md:flex space-x-1 text-slate-50 dark:hover:text-slate-300 hover:text-slate-500"
          )}
        >
          <span className="!cursor-pointer text-base font-bold">{navItem.name}</span>
        </Link>
      ))} */}
      </div>

    <div className="hidden md:flex gap-2 justify-center items-center">
        {/* <Link href="/login">
          <Button className="w-[100px] h-[40px] hover:bg-white hover:text-slate-950 text-slate-50 p-2 text-base">Login</Button>
        </Link> */}

        <Link href="/signup" className="text-slate-50">
          {/* <Button className="w-[120px] h-[40px] bg-white rounded-lg text-base text-slate-950">Sign Up<FaArrowRightLong className="ml-2"/></Button> */}
          <LogOut />
        </Link>

    </div>



    <nav className="md:hidden text-slate-50">
    <input type="checkbox" id="sidebar-active" />
    <label htmlFor="sidebar-active" className="open-sidebar-button">
      <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </label>
    <label id="overlay" htmlFor="sidebar-active"></label>
    <div className="links-container">
      <label htmlFor="sidebar-active" className="close-sidebar-button relative left-56">
        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </label>

      <a href="/#faq">FAQ</a> 
      <a href="/portfolio">Portfolio</a>
      <a href="/services">Services</a>
      <a href="/pricing">Pricing</a>
      <Link href="/contact">
            <Button className="w-[320px] h-[55px] text-lg bg-[#1D4ED8] rounded-lg text-white  shadow mt-12">Get Access Now<FaArrowRightLong className="ml-2" size={20}/></Button>
        </Link>
      
    </div>
  </nav>
  </div>
  )}

export default Navbar3