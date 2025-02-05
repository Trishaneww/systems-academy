import { Quote } from 'lucide-react'
import React from 'react'

const Testimonials2 = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden pt-12 px-4 -mt-36">
        <div className="w-[75%] h-[400px] bg-gradient-to-r from-[#3f4964] to-[#1D4ED8] rounded-full relative z-10 blur-[90px] top-44"></div>
        <div className="w-[75%] h-[400px] bg-gradient-to-r from-[#3f4964] to-[#1D4ED8] rounded-full relative left-[50%] z-10 blur-[90px] top-36"></div>
        <div className="flex flex-col z-20  bg-[#38383825] rounded-lg py-12 backdrop-blur-3xl lg:w-[62%] gap-2 px-2 lg:px-24 relative -top-[490px] border-[1px] border-gray-700 text-[#a9c0ff]">
            <Quote size={50}/>
            <p className="text-lg md:text-2xl lg:text-4xl font-bold mt-8 text-slate-200">I had no idea where to start with basketball betting, but this course gave me step-by-step guidance. I’m now making smarter bets and actually seeing consistent wins!</p>
            <p className="mt-8 text-slate-50 font-bold">Ralf Gommers</p>
            <p className="text-slate-200 -mt-2">SciPy maintainer</p>
        </div>
    </div>
  )
}

export default Testimonials2