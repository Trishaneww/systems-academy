import { Quote } from 'lucide-react'
import React from 'react'

const Testimonials2 = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden pt-12">
        <div className="w-[75%] h-[400px] bg-gradient-to-r from-[#3f4964] to-[#1D4ED8] rounded-full relative z-10 blur-[90px] top-36"></div>
        <div className="w-[75%] h-[400px] bg-gradient-to-r from-[#3f4964] to-[#1D4ED8] rounded-full relative left-[50%] z-10 blur-[90px] top-36"></div>
        <div className="flex flex-col z-20 text-slate-200 bg-[#38383825] rounded-lg py-12 backdrop-blur-3xl w-[62%] gap-2 px-24 relative -top-[490px] border-[1px] border-gray-700">
            <Quote size={50}/>
            <p className="text-4xl font-bold mt-8">Actions is an exciting development and unlocks so much potential beyond CI/CD. It promises to streamline our workflows for a variety of tasks, from deploying our websites to querying the GitHub API for custom status reports to standard CI builds.</p>
            <p className="mt-8">Ralf Gommers</p>
            <p>SciPy maintainer</p>
        </div>
    </div>
  )
}

export default Testimonials2