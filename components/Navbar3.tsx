"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { FaArrowRightLong } from "react-icons/fa6";
import { cn } from '@/lib/utils'
import '../styles/global.scss';
import { LogOut } from 'lucide-react'

const Navbar3 = () => {
  return (
    <div className="flex w-full justify-between items-center h-[80px] p-6 lg:px-12 backdrop-blur-md navbar self-center scroll-smooth z-50 fixed mb-20 bg-[#00030F]">
      <Link href='/' className={cn(
            "relative dark:text-slate-50 items-center flex space-x-1 text-slate-50 dark:hover:text-slate-300 hover:text-slate-500"
          )}>
            <p className="font-bold text-xl">THE SYSTEMS ACADEMY</p>
      </Link>

      <div className="flex justify-center items-center gap-8">
      </div>

    <div className="hidden md:flex gap-2 justify-center items-center">
        <Link href="/login" className="text-slate-50">
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

      <Link href="/#faq">FAQ</Link> 
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/services">Services</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/pricing">Contact</Link>
      <Link href="/contact">
            <Button className="w-[320px] h-[55px] text-lg bg-[#1D4ED8] rounded-lg text-white  shadow mt-12">Get Access Now<FaArrowRightLong className="ml-2" size={20}/></Button>
        </Link>
      
    </div>
  </nav>
  </div>
  )}

export default Navbar3