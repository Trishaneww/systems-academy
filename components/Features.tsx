import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className="flex flex-col mt-60 items-center w-full mb-44 z-30 px-4">
        {/* <p className="font-bold text-3xl lg:text-5xl xl:text-6xl text-slate-50 text-center">Grow Your<span className="bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8]  bg-clip-text text-transparent">Portfolio</span></p>
        <p className="text-slate-50 mt-4 text-lg">Start benefiting from our system today</p> */}
        <section className="flex flex-col items-center text-slate-50 mt-28 w-full gap-12">
            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center lg:w-[68%] justify-between">
                <div className="flex flex-col items-center pt-20 bg-gradient-to-r from-[#7f99df] to-[#1D4ED8] rounded-xl lg:w-[68%] gap-4">
                    <Image
                        width={800}
                        height={800}
                        src="/assets/s1.png"
                        alt="stock image"
                        className="rounded-lg mt-12 w-[90%]"
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <p className="bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8]  bg-clip-text text-transparent font-semibold text-base">SEEMLESS INTEGRATION</p>
                    <p className="mt-2 font-bold text-2xl md:text-3xl xl:text-4xl">Targeting Core Players</p>
                    <p>We provide daily updates on which core players to focus on for betting.</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center lg:w-[68%] justify-between">
                <div className="flex flex-col items-center pt-20 bg-gradient-to-r from-[#7f99df] to-[#1D4ED8] rounded-xl lg:w-[68%] gap-4">
                    <Image
                        width={800}
                        height={800}
                        src="/assets/s1.png"
                        alt="stock image"
                        className="rounded-lg mt-12 w-[90%]"
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <p className="bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8]  bg-clip-text text-transparent font-semibold text-base">SEEMLESS INTEGRATION</p>
                    <p className="mt-2 font-bold text-2xl md:text-3xl xl:text-4xl">Targeting Core Players</p>
                    <p>We provide daily updates on which core players to focus on for betting.</p>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center lg:w-[68%] justify-between">
                <div className="flex flex-col items-center pt-20 bg-gradient-to-r from-[#7f99df] to-[#1D4ED8] rounded-xl lg:w-[68%] gap-4">
                    <Image
                        width={800}
                        height={800}
                        src="/assets/s1.png"
                        alt="stock image"
                        className="rounded-lg mt-12 w-[90%]"
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <p className="bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8]  bg-clip-text text-transparent font-semibold text-base">SEEMLESS INTEGRATION</p>
                    <p className="mt-2 font-bold text-2xl md:text-3xl xl:text-4xl">Targeting Core Players</p>
                    <p>We provide daily updates on which core players to focus on for betting.</p>
                </div>
            </div>
        </section>

        <div className="flex flex-col items-center pt-20 bg-gradient-to-b from-[#a9c0ff] to-[#1D4ED8] rounded-xl lg:w-[68%] gap-4 mt-36 px-4">
            <p className="text-2xl md:text-4xl lg:text-5xl text-slate-50 font-bold lg:w-[45%] text-center">Ask for assistance right in your terminal</p>
            <div className="flex justify-center items-center text-slate-50 font-bold"><p className="text-lg lg:text-xl">Try Copilot in the CLI </p> <ChevronRight /></div>
            <Image
                width={800}
                height={800}
                src="/assets/s1.png"
                alt="stock image"
                className="rounded-lg mt-12"
            />
        </div>
    </div>
  )
}

export default Features