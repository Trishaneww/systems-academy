"use client"
import { Input } from './ui/input'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useToast } from './hooks/use-toast'
import emailjs from '@emailjs/browser';
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { FaDiscord, FaTiktok } from 'react-icons/fa6'

const Newsletter = () => {
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
    <div className="flex justify-center items-center mt-20">
        <div className="flex justify-center px-12 py-20 w-full text-slate-50 bg-[#161B22] border-[1px] border-gray-800  rounded-xl  gap-64 z-10">
            <section className="flex flex-col gap-2">
                <p className="font-semibold text-3xl">Stay in touch</p>
                <p>Announcements can be found in our blog</p>
                <div className="flex gap-2 mt-6">
                    <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-slate-950 hover:delay-300 hover:bg-[#1A1931] hover:cursor-pointer transition-all duration-200 ease-in-out">
                        <Instagram size={26}/>
                    </div>
                    <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-slate-950 hover:delay-300 hover:bg-[#1A1931] hover:cursor-pointer transition-all duration-200 ease-in-out">
                        <FaDiscord size={26}/>
                    </div>
                    <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-slate-950 hover:delay-300 hover:bg-[#1A1931] hover:cursor-pointer transition-all duration-200 ease-in-out">
                        <Facebook size={26}/>
                    </div>
                    <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-slate-950 hover:delay-300 hover:bg-[#1A1931] hover:cursor-pointer transition-all duration-200 ease-in-out">
                        <FaTiktok size={26}/>
                    </div>
                    <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-slate-950 hover:delay-300 hover:bg-[#1A1931] hover:cursor-pointer transition-all duration-200 ease-in-out">
                        <Youtube size={26}/>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-2">
                <p className="font-semibold text-3xl">Subscribe to our newsletter</p>
                <p>New coins supported, blog updates and exclusive offers directly in your inbox</p>
                 <form className="flex justify-center lg:justify-start w-full gap-4 mt-2" onSubmit={sendEmail}>
                    <div className="flex flex-col items-start w-full lg:w-[270px]">
                        <Input type="email" placeholder="Email" name="email" className="w-full lg:w-[270px] h-[52px] text-lg border-2 bg-white border-white text-black"/>
                        <p className="ml-1 text-red-600">{error}</p>
                    </div>
                    <Button type="submit" className="w-full lg:w-[150px] h-[53px] text-base bg-transparent border-gray-600 border-[1px] hover:border-slate-300">Subscribe</Button>
                </form>
            </section>

        </div>
    </div>
  )
}

export default Newsletter