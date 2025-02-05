import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import Navbar from '@/components/Navbar'
import Navbar2 from '@/components/Navbar2'
import Salespage from '@/components/Salespage'
import React from 'react'

const Course = () => {
  return (
    <div className="flex flex-col bg-[#00030F]">
        <Navbar2 />
        <Salespage />
        <Footer />
        <Footer2 />
    </div>
  )
}

export default Course