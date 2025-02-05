import React from 'react'
import { FaDiscord, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa6'

const Footer2 = () => {
  return (
    <div className="flex flex-wrap w-full justify-between px-6 lg:px-24 py-6 bg-[#161B22]">
        <div className="flex justify-center text-slate-200 gap-4 text-sm">
            <p>@2025 The Systems Academy. All rights reserved</p>
        </div>

        <div className="flex gap-4 text-slate-50 mt-8 lg:mt-0">
            <FaDiscord size={28}/>
            <FaTwitter  size={25}/>
            <FaInstagram  size={25}/>
            <FaTiktok  size={25}/>
        </div>

    </div>
  )
}

export default Footer2