"use client"
import { Input } from './ui/input'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useToast } from './hooks/use-toast'
import emailjs from '@emailjs/browser';
import Image from 'next/image'

const Hero = () => {
  const  [error, setError] = useState("");

  const { toast } = useToast()

  const sendEmail = (e:any) => {
    e.preventDefault();

    try {
      if (e.target.email.value === "") {
          setError("Email is required")
      } else {

          emailjs.sendForm('service_luvg8op', 'template_oirz684' , e.target , '1MxDwCSvQF6Leln4f');
           e.target.reset()
           setError("")

          toast({
              title: "Email Sent",
              description: "We will get back to you shortly",
    })

      }
    } catch (err) {
      console.log(err)
      // top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%]
    }
  }
  return (
    <div className="flex flex-col items-center justify-start bg-[#0C1117] pt-48  -mt-[560px] md:-mt-[810px]">
         <div className="w-[90%] lg:w-[52%] h-[500px] lg:h-[820px] bg-gradient-to-r from-[#3f4964] to-[#1D4ED8] rounded-full relative z-10 blur-[90px] top-[970px] lg:top-[1150px]"></div>
         <div className="z-20 flex flex-col items-center w-full gap-4 px-4 relative">
         <div className="flex flex-col gap-2 items-center">
          <p className="text-3xl md:text-6xl xl:text-6xl font-bold text-center text-slate-50">Your Slam Dunk Guide</p>
          <p className="text-3xl md:text-6xl xl:text-6xl font-bold text-center text-slate-50">to NBA Profits</p>
         </div>
         <p className="text-lg text-slate-400 w-[90%] lg:w-[35%] text-center font-semibold">Stay ahead of the game with real-time live updates and expert picks for every NBA matchup. Gain the competitive edge you need to place smarter, more profitable bets.</p>
         <form className="flex justify-center w-full gap-4 mt-2" onSubmit={sendEmail}>
          <div className="flex flex-col items-start w-full lg:w-[270px]">
            <Input type="email" placeholder="Email" name="email" className="w-full lg:w-[270px] h-[52px] text-lg border-2 bg-white border-white text-black"/>
            <p className="ml-1 text-red-600">{error}</p>
          </div>
          <Button type="submit" className="w-full lg:w-[150px] h-[53px] text-base bg-transparent border-gray-600 border-[1px] hover:border-slate-300">Subscribe</Button>
        </form>

        <div className="flex justify-center items-center z-20  bg-[#38383825] rounded-2xl p-2 backdrop-blur-3xl border-[1px] border-slate-300 mt-12">
          <Image
            src="/assets/thumbnail1.png"
            width={520}
            height={520}
            alt="hero banner"
            className="rounded-2xl"
            priority
          />
        </div>
        </div>

    </div>
  )
}

export default Hero