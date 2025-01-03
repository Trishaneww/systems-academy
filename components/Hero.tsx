// import Image from "next/image";
// import Link from "next/link";
// import { navItems } from "@/data";
// import '../styles/global.scss';
// import { Button } from "@/components/ui/button";

// const Hero = () => {
//   // const isAdmin = searchParams?.admin === "true";
//   return (
//     <div className="flex flex-col">
//       <section className="flex flex-col hero">

//         <div className="absolute w-full flex flex-col gap-2 mt-40 lg:mt-52 items-center justify-center text-center">
//           <h1 className="text-5xl lg:text-9xl font-bold mb-4 lg:mb-12 text-slate-50 lg:w-3/4">The Ultimate Sports <span className="text-[#9DC5E5]">Betting Course</span></h1>
//           <div className="flex flex-col justify-center items-center lg:w-2/4 gap-2 p-2">
//             <p className=" text-slate-50 text-md lg:text-2xl">This is as close as you’ll ever be to having a license to print money (LTP!) -Get started by learning from professional gamblers and joining our growing community of basketball enthusiasts! </p>
//           </div>

//           <Link href="https://ocean.cognisantmd.com/online-booking/cddcbae7-4cba-4ebd-9e93-7b5aceb285e5">
//             <Button className="w-[280px] lg:w-[330px] h-[65px] mt-12 lg:mt-6 text-base lg:text-lg bg-slate-50 text-slate-950 font-bold">Recieve Your Free Content Today</Button>
//           </Link>

//         </div>
//       </section>

//       <section className="flex flex-col md:w-4/5 lg:w-3/5 self-center text-center gap-4 my-14  p-4 text-base lg:text-lg text-slate-50">
//         <p className="text-xl">WE PROVIDE YOU WITH EXPERT ADVISE TO HELP YOU BEAT THE BOOKIES</p>
//         <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-6">Our Mission </h1>
//         <p className="text-base lg:text-xl">At The System Academy, we're passionate about combining our love for basketball with data-driven insights to give you an edge in sports betting. Our team of seasoned analysts and professional gamblers work tirelessly to provide you with expert advice, detailed game breakdowns, and insider tips for NBA betting.</p>

//         <p className="text-base lg:text-xl">We're not just about predictions; we're about education, community, and responsible gambling. Join our growing network of basketball enthusiasts and take your betting game to the next level with strategies backed by years of experience and cutting-edge analytics.</p>
//       </section>
//     </div>
//   );
// };

// export default Hero;
"use client"
import { Input } from './ui/input'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useToast } from './hooks/use-toast'
import emailjs from '@emailjs/browser';
import Navbar from './Navbar'
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
    <div className="flex flex-col items-center justify-start bg-[#00030F] pt-48 overflow-hidden -mt-[550px]">
         <div className="w-[75%] h-[600px] bg-gradient-to-r from-[#3f4964] to-[#1D4ED8] rounded-full relative z-10 blur-[90px] top-[900px]"></div>
         <div className="z-20 flex flex-col items-center w-full gap-4 px-4 relative">
         <p className="text-4xl md:text-6xl xl:text-7xl font-bold lg:w-[65%] text-center text-slate-50">The Ultimate Sports <span className="">Betting Course</span></p>
         {/* <p className="text-slate-50 mt-2 lg:w-[40%] text-center">This is as close as you’ll ever be to having a license to print money (LTP!) -Get started by learning from professional gamblers and joining our growing community of basketball enthusiasts! </p> */}

         {/* <div className="flex justify-center items-center gap-2 mt-6">
          <Button className="w-[200px] h-[48px] bg-slate-50 text-slate-950">Start free trial</Button>
          <Button className="w-[200px] h-[48px]">Enroll Now</Button>
         </div> */}
        <form className="flex flex-wrap justify-center w-full gap-4 mt-6" onSubmit={sendEmail}>
          <div className="flex flex-col items-start w-full max-w-[260px]">
              <Input type="email" placeholder="Email" name="email" className="w-full lg:w-[260px] h-[54px] font-bold text-lg border-[1px] bg-transparent border-slate-200 text-slate-50 placeholder:text-slate-50"/>
              <p className="ml-1 text-red-600">{error}</p>
          </div>
          <Button type="submit" className="w-full max-w-[210px] h-[53px] text-base font-bold bg-white text-slate-950">Get a free quote</Button>
        </form>

        <Image
          src="/assets/hero.png"
          width={1200}
          height={1200}
          alt="hero banner"
          className="rounded-lg mt-12"
        />
        </div>

    </div>
  )
}

export default Hero