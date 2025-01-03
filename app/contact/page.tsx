import ContactHero from '@/components/ContactHero'
import Navbar from '@/components/Navbar'
import Navbar2 from '@/components/Navbar2'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import Image from 'next/image'
import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

const Contact = () => {
  return (
    <div className="flex flex-col bg-[#00030F]">
        <Navbar2 />
        <ContactHero />
        <Toaster />
    </div>
  )
}

export default Contact