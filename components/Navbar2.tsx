"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { FaArrowRightLong } from "react-icons/fa6";
import { cn } from '@/lib/utils'
import '../styles/global.scss';
import Image from 'next/image'
import logo from '../public/assets/logo.png'
import { Menu, X } from 'lucide-react'

const Navbar2 = () => {
  return (
    <div className="flex w-full justify-between items-center h-[80px] p-6 lg:px-12 backdrop-blur-md navbar self-center scroll-smooth z-50 fixed mb-20 bg-[#00030F]">
      <Link href='/' className={cn(
            "relative dark:text-slate-50 items-center flex space-x-1 text-slate-50 dark:hover:text-slate-300 hover:text-slate-500 w-[150px]"
          )}>
            <div className="w-[60%]">
            <Image 
              alt="figment studios logo"
              src={logo}
              width={1000}
              height={1000}
              priority
            />
            </div>
      </Link>

      <div className="flex justify-center items-center gap-8">
      </div>

    <div className="hidden lg:flex gap-2 justify-center items-center">
        <Link href="/login">
          <Button className="w-[100px] h-[40px] hover:bg-white hover:text-slate-950 text-slate-50 p-2 text-base">Login</Button>
        </Link>

        <Link href="/signup">
          <Button className="w-[120px] h-[40px] bg-white rounded-lg text-base text-slate-950">Sign Up<FaArrowRightLong className="ml-2"/></Button>
        </Link>
    </div>



    <nav className="lg:hidden bg-[#00030F]">
    <input type="checkbox" id="sidebar-active" />
    <label htmlFor="sidebar-active" className="open-sidebar-button text-slate-50 mt-2">
      <Menu  size={30}/>
    </label>
    <label id="overlay" htmlFor="sidebar-active"></label>
    <div className="links-container bg-[#00030F] text-slate-50">
      <label htmlFor="sidebar-active" className="close-sidebar-button relative left-56 text-slate-50">
        <X size={30}/>
       
      </label>
      <Link href="/#faq">FAQ</Link> 
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/services">Services</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/pricing">Contact</Link>
      <Link href="/contact">
            <Button className="w-[320px] h-[55px] text-lg bg-[#1D4ED8] rounded-lg text-white mt-12">Get Access Now</Button>
        </Link>
    </div>
  </nav>
  </div>
  )}

export default Navbar2