import { BookOpen, ChevronRight, Users } from 'lucide-react'
import React from 'react'
import { FaDiscord } from 'react-icons/fa6'

const Community = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 text-white py-12 lg:py-20 px-4 mt-28">
         <p className="text-3xl md:text-3xl lg:text-5xl font-bold">Kick off workflows on any GitHub event to automate tasks</p>
         <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12">
            
            <div className="flex flex-col items-start justify-start w-full lg:w-[380px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 px-4 rounded-xl h-[360px] hover:delay-300 hover:bg-[#1A1931] hover:cursor-pointer transition-all duration-200 ease-in-out pt-8 gap-2">
                <FaDiscord size={40}/>
                <p className="text-slate-50 text-xl lg:text-2xl font-bold mt-2">Join our prestine community of bettors</p>
                <p className="text-slate-300">Our primary offering is a comprehensive educational program that teaches clients our proprietary betting system, focusing on NBA basketball betting</p>
                <div className="flex justify-center items-center text-[#a9c0ff] font-bold mt-8"><p className="text-lg lg:text-base">Join Now</p> <ChevronRight size={20}/></div> 
            </div>

            <div className="flex flex-col items-start justify-start w-full lg:w-[380px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 px-4 rounded-xl h-[360px] hover:delay-300 hover:bg-[#1A1931] hover:cursor-pointer transition-all duration-200 ease-in-out pt-8 gap-2">
                <Users size={40}/>
                <p className="text-slate-50 text-xl lg:text-2xl font-bold mt-2">Join our prestine community of bettors</p>
                <p className="text-slate-300">Our primary offering is a comprehensive educational program that teaches clients our proprietary betting system, focusing on NBA basketball betting</p>
                <div className="flex justify-center items-center text-[#a9c0ff] font-bold mt-8"><p className="text-lg lg:text-base">Join Now</p> <ChevronRight size={20}/></div> 
            </div>

            <div className="flex flex-col items-start justify-start w-full lg:w-[380px] text-[#a9c0ff] bg-[#161B22] border-[1px] border-gray-800 px-4 rounded-xl h-[360px] hover:delay-300 hover:bg-[#1A1931] hover:cursor-pointer transition-all duration-200 ease-in-out pt-8 gap-2">
                <BookOpen size={40}/>
                <p className="text-slate-50 text-xl lg:text-2xl font-bold mt-2">Join our prestine community of bettors</p>
                <p className="text-slate-300">Our primary offering is a comprehensive educational program that teaches clients our proprietary betting system, focusing on NBA basketball betting</p>
                <div className="flex justify-center items-center text-[#a9c0ff] font-bold mt-8"><p className="text-lg lg:text-base">Join Now</p> <ChevronRight size={20}/></div> 
            </div>
        </section>
    </div>
  )
}

export default Community