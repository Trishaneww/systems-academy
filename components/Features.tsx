import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className="flex flex-col mt-60 items-center w-full mb-44 z-30 px-4">
        {/* <p className="font-bold text-3xl lg:text-5xl xl:text-6xl text-slate-50 text-center">Grow Your<span className="bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8]  bg-clip-text text-transparent">Portfolio</span></p>
        <p className="text-slate-50 mt-4 text-lg">Start benefiting from our system today</p> */}
        <section className="flex flex-col items-center text-slate-50 mt-28 w-full gap-12 xl:gap-28">
            <div className="flex flex-col lg:flex-row-reverse gap-10 xl:gap-20 items-center lg:w-[90%] xl:w-[72%] xl:min-w-[1200px] justify-between">
                <div className="flex flex-col items-center bg-gradient-to-r from-[#7f99df] to-[#1D4ED8] rounded-2xl xl:w-[72%] lg:min-w-[480px] xl:min-w-[680px] gap-4 max-h-[600px] xl:min-h-[450px]">
                    <Image
                        width={800}
                        height={800}
                        src="/assets/thumbnail.png"
                        alt="stock image"
                        className="rounded-lg mt-12 w-[90%] max-w-[600px]"
                    />
                </div>
                
                <div className="flex flex-col gap-4">
                    {/* <p className="bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8]  bg-clip-text text-transparent font-semibold text-base">SEEMLESS INTEGRATION</p> */}
                    <p className="mt-2 font-bold text-2xl md:text-3xl xl:text-4xl">Targeting Core Players</p>
                    <p className="text-slate-400 font-semibold w-[82%]">GitHub Copilot suggests code completions as you type and turns natural language prompts into coding suggestions based on your project&apos;s conventions.</p>
                    <div className="flex justify-start items-center font-bold text-[#a9c0ff] hover:cursor-pointer"><p className="font-bold text-base">Discover more</p> <ChevronRight /></div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-10 xl:gap-20 items-center lg:w-[90%] xl:w-[72%] xl:min-w-[1200px] justify-between">
                <div className="flex flex-col items-center bg-gradient-to-r from-[#7f99df] to-[#1D4ED8] rounded-2xl xl:w-[72%] lg:min-w-[480px] xl:min-w-[680px] gap-4 max-h-[600px] xl:min-h-[450px]">
                    <Image
                        width={800}
                        height={800}
                        src="/assets/thumbnail.png"
                        alt="stock image"
                        className="rounded-lg mt-12 w-[90%] max-w-[600px]"
                    />
                </div>
                
                <div className="flex flex-col gap-4">
                    {/* <p className="bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8]  bg-clip-text text-transparent font-semibold text-base">SEEMLESS INTEGRATION</p> */}
                    <p className="mt-2 font-bold text-2xl md:text-3xl xl:text-4xl">Targeting Core Players</p>
                    <p className="text-slate-400 font-semibold w-[82%]">GitHub Copilot suggests code completions as you type and turns natural language prompts into coding suggestions based on your project&apos;s conventions.</p>
                    <div className="flex justify-start items-center font-bold text-[#a9c0ff] hover:cursor-pointer"><p className="font-bold text-base">Discover more</p> <ChevronRight /></div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-10 xl:gap-20 items-center lg:w-[90%] xl:w-[72%] xl:min-w-[1200px] justify-between">
                <div className="flex flex-col items-center bg-gradient-to-r from-[#7f99df] to-[#1D4ED8] rounded-2xl xl:w-[72%] lg:min-w-[480px] xl:min-w-[680px] gap-4 max-h-[600px] xl:min-h-[450px]">
                    <Image
                        width={800}
                        height={800}
                        src="/assets/thumbnail.png"
                        alt="stock image"
                        className="rounded-lg mt-12 w-[90%] max-w-[600px]"
                    />
                </div>
                
                <div className="flex flex-col gap-4">
                    {/* <p className="bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8]  bg-clip-text text-transparent font-semibold text-base">SEEMLESS INTEGRATION</p> */}
                    <p className="mt-2 font-bold text-2xl md:text-3xl xl:text-4xl">Targeting Core Players</p>
                    <p className="text-slate-400 font-semibold w-[82%]">GitHub Copilot suggests code completions as you type and turns natural language prompts into coding suggestions based on your project&apos;s conventions.</p>
                    <div className="flex justify-start items-center font-bold text-[#a9c0ff] hover:cursor-pointer"><p className="font-bold text-base">Discover more</p> <ChevronRight /></div>
                </div>
            </div>
        </section>

        <div className="flex flex-col items-center pt-20 bg-gradient-to-b from-[#a9c0ff] to-[#1D4ED8] rounded-xl lg:w-[72%] gap-4 mt-36 px-4">
            <p className="text-2xl md:text-4xl lg:text-5xl text-slate-50 font-bold lg:w-[45%] text-center">Ask for assistance right in your terminal</p>
            <div className="flex justify-center items-center text-slate-50 font-bold"><p className="text-lg lg:text-xl hover:delay-300 hover:cursor-pointer transition-all duration-200 ease-in-out">Try Copilot in the CLI </p> <ChevronRight /></div>
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