import Dashboard from '@/components/Dashboard'
import Navbar3 from '@/components/Navbar3'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col">
      <Navbar3 />
      <Dashboard />

    </div>
  )
}

export default page