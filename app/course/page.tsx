import Footer from '@/components/Footer'
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

    </div>
  )
}

export default Course