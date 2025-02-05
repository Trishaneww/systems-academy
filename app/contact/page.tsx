import ContactHero from '@/components/ContactHero'
import Navbar2 from '@/components/Navbar2'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col bg-[#0C1117]">
        <Navbar2 />
        <ContactHero />
        <Toaster />
    </div>
  )
}

export default Contact