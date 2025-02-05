import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Results = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 text-white py-12 lg:py-20 px-4 -mt-44">
    <p className="text-3xl md:text-3xl lg:text-5xl font-bold">Kick off workflows on any GitHub event to automate tasks</p>
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12">
        <div className="flex flex-col items-center group">
        <Image
            width={300}
            height={300}
            src="/assets/phone1.png"
            alt="phone screen of person winning a parlay bet"
            className="relative top-4 z-0 group-hover:top-0 duration-200 ease-iniout transition-all"
        />
         <div className="flex flex-col items-start justify-start w-full lg:w-[380px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 px-4 rounded-xl h-[260px] hover:delay-300 pt-8 gap-2 z-10">
           <p className="text-slate-50 text-xl lg:text-2xl font-bold mt-2">Join our prestine community of bettors</p>
           <p className="text-slate-300">Our primary offering is a comprehensive educational program that teaches clients</p>
           <div className="flex justify-center items-center text-[#a9c0ff] font-bold mt-8"><p className="text-lg lg:text-base">Learn more</p> <ChevronRight size={20}/></div> 
        </div>
       </div>

       <div className="flex flex-col items-center group">
        <Image
            width={300}
            height={300}
            src="/assets/phone2.png"
            alt="phone screen of person winning a parlay bet"
            className="relative top-4 z-0 group-hover:top-0 duration-200 ease-iniout transition-all"
        />
         <div className="flex flex-col items-start justify-start w-full lg:w-[380px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 px-4 rounded-xl h-[260px] hover:delay-300  pt-8 gap-2 z-10">
           <p className="text-slate-50 text-xl lg:text-2xl font-bold mt-2">Join our prestine community of bettors</p>
           <p className="text-slate-300">Our primary offering is a comprehensive educational program that teaches clients</p>
           <div className="flex justify-center items-center text-[#a9c0ff] font-bold mt-8"><p className="text-lg lg:text-base">Learn more</p> <ChevronRight size={20}/></div> 
        </div>
       </div>


       <div className="flex flex-col items-center group">
        <Image
            width={300}
            height={300}
            src="/assets/phone3.png"
            alt="phone screen of person winning a parlay bet"
            className="relative top-4 z-0 group-hover:top-0 duration-200 ease-iniout transition-all"
        />
         <div className="flex flex-col items-start justify-start w-full lg:w-[380px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 px-4 rounded-xl h-[260px] hover:delay-300 pt-8 gap-2 z-10">
           <p className="text-slate-50 text-xl lg:text-2xl font-bold mt-2">Join our prestine community of bettors</p>
           <p className="text-slate-300">Our primary offering is a comprehensive educational program that teaches clients</p>
           <div className="flex justify-center items-center text-[#a9c0ff] font-bold mt-8"><p className="text-lg lg:text-base">Learn more</p> <ChevronRight size={20}/></div> 
        </div>
       </div>
   </section>
</div>
  )
}

export default Results