import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className="flex flex-col mt-60 items-center w-full mb-44 z-30">
        {/* <p className="font-bold text-3xl lg:text-5xl xl:text-6xl text-slate-50 text-center">Grow Your<span className="bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8]  bg-clip-text text-transparent">Portfolio</span></p>
        <p className="text-slate-50 mt-4 text-lg">Start benefiting from our system today</p> */}
        <section className="flex flex-col items-center text-slate-50 mt-28 w-full gap-12">
            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center lg:w-[90%] px-4 lg:px-10 justify-center">
                <div className="lg:w-[35%]">
                    <Image
                        src="/assets/hero.png"
                        width={600}
                        height={600}
                        alt="hero banner"
                        className=""
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <p className="bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8]  bg-clip-text text-transparent font-semibold text-base">SEEMLESS INTEGRATION</p>
                    <p className="mt-2 font-bold text-2xl md:text-3xl xl:text-5xl">Targeting Core Players</p>
                    <p>We provide daily updates on which core players to focus on for betting.</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center lg:w-[90%] px-4 lg:px-10 justify-center">
                <div className="lg:w-[35%]">
                    <Image
                        src="/assets/hero.png"
                        width={600}
                        height={600}
                        alt="hero banner"
                        className=""
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <p className="bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8]  bg-clip-text text-transparent font-semibold text-base">SEEMLESS INTEGRATION</p>
                    <p className="mt-2 font-bold text-2xl md:text-3xl xl:text-5xl">Targeting Core Players</p>
                    <p>We provide daily updates on which core players to focus on for betting.</p>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center lg:w-[90%] px-4 lg:px-10 justify-center">
                <div className="lg:w-[35%]">
                    <Image
                        src="/assets/hero.png"
                        width={600}
                        height={600}
                        alt="hero banner"
                        className=""
                    />
                </div>
                
                <div className="flex flex-col gap-2">
                    <p className="bg-gradient-to-r from-[#a9c0ff] to-[#1D4ED8]  bg-clip-text text-transparent font-semibold text-base">SEEMLESS INTEGRATION</p>
                    <p className="mt-2 font-bold text-2xl md:text-3xl xl:text-5xl">Targeting Core Players</p>
                    <p>We provide daily updates on which core players to focus on for betting.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Features