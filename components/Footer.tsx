"use client"
import { servicesData2, companyData} from '@/data'
import Link from 'next/link'
import React, { useState } from 'react'
import '../styles/global.scss';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from './hooks/use-toast'
import emailjs from '@emailjs/browser';
import Image from 'next/image';


const Footer = () => {
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
    }
  }
  return (
    <div className="flex flex-col xl:justify-center xl:items-start gap-12 px-6 w-full bg-[#0C1117] footer py-20">
        <section className="flex flex-col gap-4 justify-start h-full">
             <p className="text-slate-50 font-bold text-4xl">The Systems Academy</p>
             <p className="text-slate-50 font-bold text-sm mt-2">Subscribe to our developer newsletter</p>
             <p className="text-slate-300 w-[60%] -mt-2 font-bold text-sm">Get tips, technical guides, and best practices. Twice a month. Right in your inbox.</p>
             <form className="flex justify-center lg:justify-start w-full gap-4 mt-2" onSubmit={sendEmail}>
              <div className="flex flex-col items-start w-full lg:w-[270px]">
                <Input type="email" placeholder="Email" name="email" className="w-full lg:w-[270px] h-[52px] text-lg border-2 bg-white border-white text-black"/>
                <p className="ml-1 text-red-600">{error}</p>
              </div>
              <Button type="submit" className="w-full lg:w-[150px] h-[53px] text-base bg-transparent border-gray-600 border-[1px] hover:border-slate-300">Subscribe</Button>
            </form>
        </section>

        <section className="flex gap-12 items-start flex-wrap">
            <div className="flex flex-col gap-2">
                <p className="text-slate-50 font-semibold text-lg">Course</p>
                {servicesData2.map((link, idx) => (
                    <Link href={link.link} className="text-slate-50" key={idx}>
                        <p className="text-lg">{link.title}</p>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-50 font-semibold text-lg">Company</p>
                {companyData.map((link, idx) => (
                    <Link href={link.link} className="text-slate-50" key={idx}>
                        <p className="text-lg">{link.name}</p>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-2 text-slate-50 ">
                <p className="text-slate-50 font-semibold text-lg">Contact</p>
                <a href="mailto:hydraguardconstruction@gmail.com" className="text-lg" target="_blank">systemsacademy@gmail.com</a>
                <a href="https://www.instagram.com/figmentstudioss" className="text-lg" target="_blank">@thesystemsacademy</a>
                {/* <p className="text-lg">647-898-1023</p> */}
            </div>

            {/* <section className="flex flex-col gap-2 lg:w-1/3 lg:mt-0 text-center lg:text-left text-slate-50">
          <p className="text-slate-50 font-semibold text-lg">Receive your free estimate today</p>
          <form className="flex flex-col justify-center lg:justify-start w-full gap-4 mt-6" onSubmit={sendEmail}>
          <div className="flex flex-col items-start w-full lg:w-[270px]">
              <Input type="email" placeholder="Email" name="email" className="w-full lg:w-[270px] h-[52px] text-lg border-2 bg-white border-white text-black"/>
              <p className="ml-1 text-red-600">{error}</p>
          </div>
          <Button type="submit" className="w-full lg:w-[200px] h-[53px] text-lg shadow bg-white">Get a free quote</Button>
        </form>
        </section> */}
        </section>
    </div>
  )
}

export default Footer